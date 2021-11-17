from flask_restful import Api, Resource, reqparse
from app import db
from models import Syllabus, Course, Review
from sqlalchemy import exc

class RatingAvgApiHandler(Resource):
    #returns the calculated average rating for all attributes belonging the course specified by prefix and number 
    def get(self, prefix, number):
        course = Course.query.filter_by(prefix=prefix, number=number).first()
        if course is None:
            raise Exception("No course exists with that name")

        reviews = Review.query.filter_by(course_id=course.id).all()

        teaching = []
        workload = []
        difficulty = []
        practicability = []
        for review in reviews:
            teaching.append(review.teacher_rating)
            workload.append(review.workload_rating)
            difficulty.append(review.difficulty_rating)
            practicability.append(review.practicability_rating)

        qrating = sum(teaching)/len(teaching)
        wrating = sum(workload)/len(workload)
        drating = sum(difficulty)/len(difficulty)
        prating = sum(practicability)/len(practicability)

        return {
            'qrating': round(qrating,2),
            'wrating': round(wrating,2),
            'drating': round(drating,2),
            'prating': round(prating,2),
            'overall': round((qrating+wrating+drating+prating)/4, 2)
        }
