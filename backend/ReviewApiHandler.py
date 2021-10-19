from flask_restful import Api, Resource, reqparse
from app import db
from models import Syllabus, Course, Review

class ReviewApiHandler(Resource):
    def get(self, prefix, number):
        
        course = Course.query.filter_by(prefix=prefix, number=number).first()
        if course is None:
            raise Exception("No course exists with that name")

        reviews = Review.query.filter_by(course_id=course.id).all()

        return {
            "resultStatus": "SUCCESS",
            "reviews": [review.serialize() for review in reviews]
        }
    
    def post(self):
        print(self)
        parser = reqparse.RequestParser()
        parser.add_argument('text', type=str)
        parser.add_argument('rating', type=int)
        parser.add_argument('prefix', type=str)
        parser.add_argument('number', type=str)

        args = parser.parse_args()
        print(args)
        
        text = args['text']
        rating = args['rating']
        course = Course.query.filter_by(prefix=args['prefix'], number=args['number']).first()
        if course is None:
            course = Course(prefix=args['prefix'], number=args['number'])
            db.session.add(course)
            db.session.commit()
            
        course_id = course.id

        review = Review(text=text, rating=rating, course_id=course_id)
        try:
            db.session.add(review)
            db.session.commit()
        except:
            db.session.rollback()


        return {
            "resultStatus": "SUCCESS"
        }