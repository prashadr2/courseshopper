from app import db

class Syllabus(db.Model):
    __tablename__ = "syllabus"

    id = db.Column(db.Integer, primary_key=True)
    pdf = db.Column(db.String(), unique=True, nullable=False)
    professor = db.Column(db.String(), nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)

class Review(db.Model):
    __tablename__ = "review"

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    professor = db.Column(db.String(), nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)
    
class Course(db.Model):
    __tablename__ = "course"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=True, nullable=False)
    syllabi = db.relationship('Syllabus', backref='course', lazy=True)
    reviews = db.relationship('Review', backref='course', lazy=True)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name
        }





# class Course(db.Model):
#     __tablename__ = 'courses'

#     id = db.Column(db.Integer, primary_key=True)
#     crn = db.Column(db.Integer, unique=True)
#     subject_code = db.Column(db.String())
#     syllabus = db.Column(db.String())
    
#     # add attributes for syllabus, tags, and comments

#     def __init__(self, crn, subject_code, syllabus=None):
#         self.crn = crn
#         self.subject_code = subject_code
#         self.syllabus = syllabus

#     def __repr__(self):
#         return f"CRN: {self.crn}"

#     def serialize(self):
#         return {
#             'crn': self.crn
#         }

        