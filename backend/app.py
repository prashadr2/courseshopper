import os
from flask import Flask, request
from flask_migrate import Migrate
from flask_restful import Api, Resource, reqparse
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)
api = Api(app)

#app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://rothgj@localhost:5433/courseshopper_db"
app.config.from_object(os.environ["APP_SETTINGS"])

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

migrate = Migrate(app, db)

from CourseApiHandler import SyllabusApiHandler
from ReviewApiHandler import ReviewApiHandler

api.add_resource(SyllabusApiHandler, '/syllabus')
api.add_resource(ReviewApiHandler, '/review')


