from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()
db = SQLAlchemy()

def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)

class User(db.Model):
    """User."""

    __tablename__ = "users"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    first_name = db.Column(db.Text,
                     nullable=False)
    last_name = db.Column(db.Text,
                    nullable=False)                 
    password = db.Column(db.Text, nullable=False)
    email = db.Column(db.Text, nullable=False)

    @classmethod
    def signup(cls, username, email, password, image_url):
        """Sign up user.

        Hashes password and adds user to system.
        """

        hashed_pwd = bcrypt.generate_password_hash(password).decode('UTF-8')

        user = User(
            username=username,
            email=email,
            password=hashed_pwd,
            image_url=image_url,
        )

        db.session.add(user)
        return user

    @classmethod
    def authenticate(cls, username, password):
        """Find user with `username` and `password`.

        This is a class method (call it on the class, not an individual user.)
        It searches for a user whose password hash matches this password
        and, if it finds such a user, returns that user object.

        If can't find matching user (or if password is wrong), returns False.
        """

        user = cls.query.filter_by(username=username).first()

        if user:
            is_auth = bcrypt.check_password_hash(user.password, password)
            if is_auth:
                return user

        return False
    

class Gear_Type(db.Model):
    """Gear Type"""

    __tablename__ = "gear_types"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text,
                     nullable=False)
    
class Aptitude(db.Model):
    """Aptitude"""

    __tablename__ = "aptitudes"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text,
                     nullable=False)
    description = db.Column(db.Text,
                     nullable=False, default="No Description")
    short_name = db.Column(db.Text,
                     nullable=False)
    skills = db.Column(db.Text,
                     nullable=False)
    
class Background(db.Model):
    """Background"""

    __tablename__ = "backgrounds"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text,
                     nullable=False)
    description = db.Column(db.Text,
                     nullable=False, default="No Description")
    skills = db.Column(db.Text,
                     nullable=False)
    
class Career(db.Model):
    """Career"""

    __tablename__ = "careers"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text,
                     nullable=False)
    description = db.Column(db.Text,
                     nullable=False, default="No Description")
    skills = db.Column(db.Text,
                     nullable=False)
    
class Interest(db.Model):
    """Interest"""

    __tablename__ = "interests"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text,
                     nullable=False)
    description = db.Column(db.Text,
                     nullable=False, default="No Description")
    skills = db.Column(db.Text,
                     nullable=False)

class Faction(db.Model):
    """Faction"""

    __tablename__ = "factions"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text,
                     nullable=False)
    description = db.Column(db.Text,
                     nullable=False, default="No Description")
    skills = db.Column(db.Text,
                     nullable=False)
    
class Morph_Type(db.Model):
    """Morph Type"""

    __tablename__ = "morph_types"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text,
                     nullable=False)
    description = db.Column(db.Text,
                     nullable=False, default="No Description")
    biological = db.Column(db.Boolean,
                     nullable=False)
    
class Morph(db.Model):
    """Morph"""

    __tablename__ = "morphs"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text,
                     nullable=False)
    morph_type = db.Column(db.Int,
                     nullable=False)
    cost = db.Column(db.Int,
                     nullable=False)
    availability = db.Column(db.Int,
                     nullable=False)
    wound_threshold = db.Column(db.Int,
                     nullable=False)
    durability = db.Column(db.Int,
                     nullable=False)
    death_rating = db.Column(db.Int,
                     nullable=False)
    pools = db.Column(db.Text,
                     nullable=False)
    movement_rate = db.Column(db.Text,
                     nullable=False)
    ware = db.Column(db.Text,
                     nullable=True)
    morph_traits = db.Column(db.Text,
                     nullable=False)
    common_extras = db.Column(db.Text,
                     nullable=True)
    notes = db.Column(db.Text,
                     nullable=True)
    common_shape_adjustments = db.Column(db.Text,
                     nullable=True)
    image = db.Column(db.Text,
                     nullable=False)
    description = db.Column(db.Text,
                     nullable=False, default="No Description")
    
class Pool(db.Model):
    """Pool"""

    __tablename__ = "pools"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text,
                     nullable=False)
    effects = db.Column(db.Text,
                     nullable=False, default="No Description")
    checks = db.Column(db.Text,
                     nullable=False)
    
class Reputation(db.Model):
    """Reputation"""

    __tablename__ = "reputations"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text,
                     nullable=False)
    description = db.Column(db.Text,
                     nullable=False, default="No Description")

