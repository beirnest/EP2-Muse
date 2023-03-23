from models import db, connect_db, User
from app import app

app = app

with app.app_context():
    db.drop_all()
    db.create_all()
    db.session.commit()

tim = User(username="tim", first_name="Timothy", last_name= "Beirne",password="$2b$12$vvaWKvEUvdYRTeGJBUlYWuXcfRUv9UN67vEhtyoxBzm6vtl/x2v5a", email="tsbeirne@gmail.com")
mitch1 = User(username="Cheaptrick", first_name="Mitch", last_name="Kayanan", password="$2b$12$L/H3qfovR9CbYR3lyAGhuuZtq5EscJ9L0cisPGZbOCZ7MxyKJ0cYe", email="mitch.kayanan08@gmail.com")
mitch2= User(username="Zxc08", first_name="Mitch", last_name="Kayanan", password="$2b$12$GkLTVnCWqCyvcmxRa6DNNuD.H.CW3kvNyVFEAhD8YrbNEwQCPmdXi", email="mitch.kayanan08@gmail.com")
eric= User(username="ebausewein", first_name="Eric", last_name="Bausewein", password="$2b$12$TxnpOjhaDgQpu.zbCmcq9ugaPV8HmIURgMdh7tyjEzLrofkR73QC2", email="eric.bausewein@gmail.com")

db.session.add(tim)
db.session.add(mitch1)
db.session.add(mitch2)
db.session.add(eric)

db.session.commit()