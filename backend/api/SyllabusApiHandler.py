from flask_restful import Api, Resource, reqparse, inputs
from flask import send_file
from app import db
from db.models import Syllabus, Course
from sqlalchemy import exc, func
import werkzeug
import io

class SyllabusApiHandler(Resource):
    #returns the syllabus belonging to the course specified by prefix and number
    def get(self, prefix, number):
        course = Course.query.filter_by(prefix=prefix, number=number).first()
        if course is None:
            raise Exception("No course exists with that name")

       
        syllabus = Syllabus.query.filter_by(course_id=course.id).first()
        return send_file(
            io.BytesIO(syllabus.pdf),
            mimetype='application/pdf',
            as_attachment = True,  
            attachment_filename= "syllabus.pdf"
        )
    
    #uploads a syllabus to the database associated with the course specified by the given prefix and number 
    def post(self):
        print(self)
        parser = reqparse.RequestParser()
        parser.add_argument('pdf', type=werkzeug.datastructures.FileStorage, location='files')
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
            
        course_id = course.id

        syllabus = Syllabus(pdf=pdf.read(), course_id=course_id)
        try:
            db.session.add(syllabus)
            db.session.commit()
        except exc.SQLAlchemyError as e:
            print(e)
            db.session.rollback()


        return {
            "resultStatus": "SUCCESS"
        }
        