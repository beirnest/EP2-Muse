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
    username = db.Column(db.Text,
                     nullable=False)
    first_name = db.Column(db.Text,
                     nullable=False)
    last_name = db.Column(db.Text,
                    nullable=False)                 
    password = db.Column(db.Text, nullable=False)
    email = db.Column(db.Text, nullable=False)
    characters = db.relationship('Character')

    @classmethod
    def signup(cls, username, first_name, last_name, password, email):
        """Sign up user.

        Hashes password and adds user to system.
        """

        hashed_pwd = bcrypt.generate_password_hash(password).decode('UTF-8')

        user = User(
            username=username,
            first_name=first_name,
            last_name=last_name,
            password=hashed_pwd,
            email=email
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
    
class Character(db.Model):
    """Character."""

    __tablename__ = "characters"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    user_id = db.Column(db.Integer, 
                     db.ForeignKey('users.id'),
                     nullable=False)
    name = db.Column(db.Text,
                     nullable=False)
    background = db.Column(db.Integer,
                    nullable=False)      
    career = db.Column(db.Integer,
                    nullable=False)
    faction = db.Column(db.Integer,
                    nullable=False)     
    aptitude = db.Column(db.Integer,
                    nullable=False)    
    languages = db.Column(db.Text,
                     nullable=False)  
    interests = db.Column(db.Integer,
                     nullable=False)
    morph = db.Column(db.Integer,
                     nullable=False) 
    
class Char_Armor(db.Model):
    """Character Armor"""

    __tablename__ = "char_armor"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                     nullable=False) 
    armor = db.Column(db.Integer,
                     nullable=False) 
    
class Char_Bot(db.Model):
    """Character Bots"""

    __tablename__ = "char_bots"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                     nullable=False) 
    bot = db.Column(db.Integer,
                     nullable=False) 
    
class Char_Creature(db.Model):
    """Character Creatures"""

    __tablename__ = "char_creatures"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    user = db.Column(db.Integer, db.ForeignKey('users.id'),
                     nullable=False) 
    creature = db.Column(db.Integer,
                     nullable=False) 
    
class Char_Drug(db.Model):
    """Character Drug"""

    __tablename__ = "char_drugs"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                     nullable=False) 
    drug = db.Column(db.Integer,
                     nullable=False) 

class Char_Gear(db.Model):
    """Character Gear"""

    __tablename__ = "char_gear"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                     nullable=False) 
    item = db.Column(db.Integer,
                     nullable=False) 
    
class Char_Pool(db.Model):
    """Character Pool"""

    __tablename__ = "char_pools"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                     nullable=False) 
    pool = db.Column(db.Integer,
                     nullable=False) 
    amt = db.Column(db.Integer,
                     nullable=False)

class Char_Reputation(db.Model):
    """Character Reputation"""

    __tablename__ = "char_reputations"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    user = db.Column(db.Integer, db.ForeignKey('users.id'),
                     nullable=False) 
    reputation = db.Column(db.Integer,
                     nullable=False)  
    
class Char_Skill(db.Model):
    """Character Skill"""

    __tablename__ = "char_skills"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                     nullable=False) 
    skill = db.Column(db.Integer,
                     nullable=False) 
    skill = db.Column(db.Integer,
                     nullable=False) 
    
class Char_Sleight(db.Model):
    """Character Sleight"""

    __tablename__ = "char_sleights"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    user = db.Column(db.Integer, db.ForeignKey('users.id'),
                     nullable=False) 
    sleight = db.Column(db.Integer,
                     nullable=False) 
    
class Char_Trait(db.Model):
    """Character Trait"""

    __tablename__ = "char_traits"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                     nullable=False) 
    trait = db.Column(db.Integer,
                     nullable=False) 
    
class Char_Vehicle(db.Model):
    """Character Vehicle"""

    __tablename__ = "char_vehicles"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                     nullable=False) 
    vehicle = db.Column(db.Integer,
                     nullable=False)
