import os
from flask import Flask, request
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api, Resource, reqparse
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

load_dotenv()


app = Flask(__name__)
CORS(app)
api = Api(app)

#app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://rothgj@localhost:5433/courseshopper_db"
app.config.from_object(os.environ["APP_SETTINGS"])

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

migrate = Migrate(app, db)

from seed_db import seed

app.cli.add_command(seed)


from SyllabusApiHandler import SyllabusApiHandler
from ReviewApiHandler import ReviewApiHandler
from CourseApiHandler import CourseApiHandler
from RatingAvgApiHandler import RatingAvgApiHandler

api.add_resource(SyllabusApiHandler, '/syllabus', "/syllabus/<string:prefix>/<string:number>")
api.add_resource(ReviewApiHandler, '/review/<string:prefix>/<string:number>', '/review')
api.add_resource(CourseApiHandler, '/course/<string:prefix>/<string:number>')
api.add_resource(RatingAvgApiHandler, '/ravg/<string:prefix>/<string:number>')



