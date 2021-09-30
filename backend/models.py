from app import db

class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer, primary_key=True)
    crn = db.Column(db.Integer, unique=True)
    # add attributes for syllabus, tags, and comments

    def __init__(self, crn):
        self.crn = crn

    def __repr__(self):
        return f"CRN: {self.crn}"

    def serialize(self):
        return {
            'crn': self.crn
        }

        