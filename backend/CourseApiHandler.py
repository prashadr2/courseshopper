from flask_restful import Api, Resource, reqparse, inputs
from app import db
from models import Syllabus, Course

class SyllabusApiHandler(Resource):
    def get(self, prefix, number):
        course = Course.query.filter_by(prefix=prefix, number=number).first()
        if course is None:
            raise Exception("No course exists with that name")

        syllabus = Syllabus.query.filter_by(course=course.id).first

        if syllabus:
            return {
                "resultStatus": "Syllabus Found"
            }
        else: 
            return {
                "resultStatus": "Syllabus not found"
            }
    
    def post(self):
        print(self)
        parser = reqparse.RequestParser()
        parser.add_argument('pdf')
        parser.add_argument('prefix', type=str)
        parser.add_argument('number', type=str)

        args = parser.parse_args()
        print(args)
        pdf = args['pdf']
        course = Course.query.filter_by(prefix=args['prefix'], number=args['number']).first()
        if course is None:
            course = Course(prefix=args['prefix'], number=args['number'])
            db.session.add(course)
            db.session.commit()
            
            # raise Exception("No professor exists with that name")
        course_id = course.id

        syllabus = Syllabus(pdf=pdf, course_id=course_id)
        try:
            db.session.add(syllabus)
            db.session.commit()
        except:
            db.session.rollback()


        return {
            "resultStatus": "SUCCESS"
        }
        