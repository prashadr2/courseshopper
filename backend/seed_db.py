import click
import json
from flask.cli import with_appcontext
from sqlalchemy import exc
from app import db
from models import Syllabus, Review, Tag, Course, tags


#seeds database with course information from courses.json
@click.command()
@with_appcontext
def seed():
    f = open('data/courses.json')
    data = json.load(f)

    for name, attributes in data.items():
        course = Course(name=attributes['name'], 
                        prefix=attributes['subj'], 
                        number=attributes["crse"], 
                        description=attributes["description"])
        try: 
            db.session.add(course)
            db.session.commit()
        except exc.SQLAlchemyError as e:
            print(e)
            db.session.rollback()