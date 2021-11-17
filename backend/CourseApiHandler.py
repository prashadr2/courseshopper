from flask_restful import Api, Resource, reqparse
from app import db
from models import Syllabus, Course, Review
from sqlalchemy import exc

class CourseApiHandler(Resource):
    #returns the course description belonging the course specified by prefix and number 
    def get(self, prefix, number):
        course = Course.query.filter_by(prefix=prefix, number=number).first()
        if course is None:
                return {
                    "description": "no description found"
                }

        return {
            "description": course.description
        }