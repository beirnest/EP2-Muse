from models import db, connect_db
from app import app

app = app

with app.app_context():
    db.drop_all()
    db.create_all()
    db.session.commit()