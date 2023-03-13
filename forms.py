from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField, SelectField, SelectMultipleField
from wtforms.validators import DataRequired, Email, Length

class NonValidatingSelectField(SelectField):
    def pre_validate(self, form):
        pass

class UserAddForm(FlaskForm):
    """Form for adding users."""

    username = StringField('Username', validators=[DataRequired()])
    email = StringField('E-mail', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[Length(min=6)])
    first_name = StringField('First Name', validators=[DataRequired()])
    last_name = StringField('Last Name', validators=[DataRequired()])


class LoginForm(FlaskForm):
    """Login form."""

    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[Length(min=6)])

class EditUserForm(FlaskForm):
    """Form for editing users."""

    username = StringField('Username', validators=[DataRequired()])
    email = StringField('E-mail', validators=[DataRequired(), Email()])
    first_name = StringField('First Name', validators=[DataRequired()])
    last_name = StringField('Last Name', validators=[DataRequired()])
    password = PasswordField('Password', validators=[Length(min=6)])

class AddCharacterForm(FlaskForm):
    """Form to add a chatacter sheet"""
    name = StringField('Name:', validators=[DataRequired()])
    background = NonValidatingSelectField('Background:', choices=())
    career = NonValidatingSelectField('Career:', choices=())
    interests = NonValidatingSelectField('Interests:', choices=())
    faction = NonValidatingSelectField('Faction:', choices=())
    aptitude_template = NonValidatingSelectField('Aptitude Template:', choices=())
    languages = StringField('Languages:')
    morph = NonValidatingSelectField('Morph:', choices=())
    


    