from flask_restful import Api, Resource, reqparse
from app import db
from models import Syllabus, Course, Review
from sqlalchemy import exc

class ReviewApiHandler(Resource):
    #returns a list of user reviews belonging to the course specified by prefix and number 
    def get(self, prefix, number):
        course = Course.query.filter_by(prefix=prefix, number=number).first()
        if course is None:
            raise Exception("No course exists with that name")

        reviews = Review.query.filter_by(course_id=course.id).all()

        return {
            "resultStatus": "SUCCESS",
            "reviews": [review.serialize() for review in reviews]
        }
    
    #uploads a review to the course specified by prefix and number along with several numerical ratings
    def post(self):
        print(self)
        parser = reqparse.RequestParser()
        parser.add_argument('text', type=str)
        parser.add_argument('qrating', type=int)
        parser.add_argument('wrating', type=int)
        parser.add_argument('drating', type=int)
        parser.add_argument('prating', type=int)
        parser.add_argument('prefix', type=str)
        parser.add_argument('number', type=str)

        args = parser.parse_args()
        print(args)
        
        text = args['text']
        teacher_rating = args['qrating']
        workload_rating = args['wrating']
        difficulty_rating = args['drating']
        practicability_rating = args['prating']

        course = Course.query.filter_by(prefix=args['prefix'], number=args['number']).first()
        if course is None:
            course = Course(prefix=args['prefix'], number=args['number'])
            db.session.add(course)
            db.session.commit()
            
        course_id = course.id

        review = Review(text=text, 
                        teacher_rating=teacher_rating, 
                        workload_rating=workload_rating, 
                        difficulty_rating=difficulty_rating, 
                        practicability_rating=practicability_rating, 
                        course_id=course_id)
        try:
            db.session.add(review)
            db.session.commit()
        except exc.SQLAlchemyError as e:
            print(e)
            db.session.rollback()


        return {
            "resultStatus": "SUCCESS"
        }