from flask_restful import Api, Resource, reqparse
from app import db
from models import Syllabus, Course

class SyllabusApiHandler(Resource):
    def get(self):
        return {
            "resultStatus": "SUCCESS"
        }
    
    def post(self):
        print(self)
        parser = reqparse.RequestParser()
        parser.add_argument('pdf', type=str)
        parser.add_argument('course', type=str)
        parser.add_argument('professor', type=str)

        args = parser.parse_args()
        print(args)
        pdf = args['pdf']
        professor = args['professor']
        course = Course.query.filter_by(name=args['course']).first()
        if professor is None:
            course = Course(name=args['course'])
            db.session.add(course)
            db.session.commit()
            
            # raise Exception("No professor exists with that name")
        course_id = course.id

        syllabus = Syllabus(pdf=pdf, course_id=course_id, professor=professor)
        try:
            db.session.add(syllabus)
            db.session.commit()
        except:
            db.session.rollback()


        return {
            "resultStatus": "SUCCESS"
        }
        