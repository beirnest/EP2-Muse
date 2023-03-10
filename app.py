from flask import Flask, render_template, flash, redirect, session, g
from forms import UserAddForm, LoginForm, AddCharacterForm, EditUserForm
from flask_cors import CORS
from models import db, connect_db, User, Character
import requests
import os


CURR_USER_KEY = "curr_user"

app = Flask(__name__)
CORS(app)

if __name__ == '__app__':
    app.run()

app.config['SQLALCHEMY_DATABASE_URI'] = 'DATABASE'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['SECRET_KEY'] = "leggolegoo"

connect_db(app)

@app.before_request
def add_user_to_g():
    """If we're logged in, add curr user to Flask global."""

    if CURR_USER_KEY in session:
        g.user = User.query.get(session[CURR_USER_KEY])

    else:
        g.user = None


def do_login(user):
    """Log in user."""

    session[CURR_USER_KEY] = user.id


def do_logout():
    """Logout user."""

    if CURR_USER_KEY in session:
        del session[CURR_USER_KEY]

@app.route('/signup', methods=["GET", "POST"])
def signup():
    """Handle user signup.

    Create new user and add to DB. Redirect to home page.

    If form not valid, present form.

    If the there already is a user with that username: flash message
    and re-present form.
    """

    form = UserAddForm()

    if form.validate():
        try:
            user = User.signup(
                username=form.username.data,
                password=form.password.data,
                email=form.email.data,
                first_name=form.first_name.data,
                last_name=form.last_name.data,
            )
            db.session.commit()

        except IntegrityError:
            flash("Username already taken", 'danger')
            return render_template('users/signup.html', form=form, user = g.user)

        do_login(user)

        return redirect("/")

    else:
        return render_template('users/signup.html', form=form, user = g.user)


@app.route('/login', methods=["GET", "POST"])
def login():
    """Handle user login."""

    form = LoginForm()

    if form.validate():
        user = User.authenticate(form.username.data,
                                 form.password.data)

        if user:
            do_login(user)
            flash(f"Hello, {user.username}!", "success")
            return redirect("/")
        else:
            flash("Invalid credentials.", 'danger')

    return render_template('users/login.html', form=form, user = g.user)


@app.route('/logout')
def logout():
    """Handle logout of user."""

    do_logout()
    flash("Logged out!", "success")
    return redirect("/")

@app.route('/')
def load_home():
    """Load home page"""

    return render_template('base.html', user = g.user)

@app.route('/users/<int:user_id>')
def users_show(user_id):
    """Show user profile."""

    user = User.query.get_or_404(user_id)
    print(user_id)
    characters = (Character
                    .query
                    .filter(Character.user == 3)
                    .limit(100)
                    .all())
    
    return render_template('users/profile.html', user=user, characters=characters)

@app.route('/users/<int:user_id>/edit', methods=["GET", "POST"])
def users_edit(user_id):
    """Edit user profile."""

    form = EditUserForm()


    if user_id != g.user.id:
        flash("Access unauthorized.", "danger")
        return redirect("/")
    else:
        user = User.query.get_or_404(g.user.id)
        if form.validate():
            pwd_check = User.authenticate(form.username.data,
                                 form.password.data)
            if pwd_check:
                user.username = form.username.data
                user.email = form.email.data
                user.image_url = form.image_url.data
                user.header_image_url = form.header_image_url.data
                user.bio = form.bio.data
                db.session.commit()
                return redirect(f"/users/{user.id}")

            else:
                flash("Invalid credentials.", 'danger')
                return render_template('users/edit.html', user=user, form=form)
        else: 
            return render_template('users/edit.html', user=user, form=form)

@app.route('/gear/categories')
def show_gear_categories():
    """Show list of gear categories"""
    
    return render_template('categories.html', user=g.user)

@app.route('/gear/categories/<category>')
def show_gear_from_category(category):
    """Show a list of gear in a specific category"""
    
    return render_template('gear.html', user=g.user, category=category)

@app.route('/<category>')
def show_character_stat_category(category):
    """Show list of data from a specific category"""

    return render_template(f'/stats/{category}.html', user=g.user, category=category)

@app.route('/morphs/types')
def show_morph_types():
    """Show list of types of morph"""

    return render_template('morphs.html', user=g.user, category="morphs")

@app.route('/characters/add', methods=["GET", "POST"])
def show_add_character():
    """Show character sheet creation page form and add character to database if form validates."""

    form = AddCharacterForm()

    if not g.user:
        flash("You must be logged in to add a character.", "danger")
        return redirect("/")
    if form.validate_on_submit():
        user = g.user.id
        name = form.name.data
        backgrounds = form.background.data
        background = get_item_index("backgrounds", backgrounds)
        careers = form.career.data
        career = get_item_index("careers", careers)
        factions = form.faction.data
        faction = get_item_index("factions", factions)
        aptitudes = form.aptitude_template.data
        aptitude = get_item_index("aptitudes/templates", aptitudes)
        languages = form.languages.data
        interests = form.interests.data
        interest = get_item_index("interests", interests)
        morphs = form.morph.data
        morph = get_item_index("morphs", morphs)
        character = Character(user_id=user, name=name, background=background, career=career, faction=faction, aptitude=aptitude, languages=languages, interests=interest, morph=morph)
        db.session.add(character)
        db.session.commit()
        flash("Your character has been sucessfully created.")
        return redirect("/")
    else:
        return render_template('/add_character.html', form=form, user=g.user)

    
def get_item_index(stat, data):
    r = requests.get(f'https://ep2-data-api.herokuapp.com/{stat}') 
    stats = r.json()
    count = 0
    for item in stats:
        if item['name'] == data:
            return count
        else:
            count += 1
    return count
