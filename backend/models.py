from app import db

class Syllabus(db.Model):
    __tablename__ = "syllabus"

    id = db.Column(db.Integer, primary_key=True)
    pdf = db.Column(db.LargeBinary, unique=True, nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)

class Review(db.Model):
    __tablename__ = "review"

    id = db.Column(db.Integer, primary_key=True)
    reviewer = db.Column(db.String())
    text = db.Column(db.String(), nullable=False)
    rating = db.Column(db.Float, nullable=False)
    professor = db.Column(db.String())
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)

    def serialize(self):
        return {
            'reviewer': self.reviewer if self.reviewer else "Anonymous",
            'text': self.text,
            'rating': self.rating,
            'professor': self.professor
        }
    
class Course(db.Model):
    __tablename__ = "course"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=True)
    prefix = db.Column(db.String(), nullable=False)
    number = db.Column(db.String(), nullable=False)
    syllabi = db.relationship('Syllabus', backref='course', lazy=True)
    reviews = db.relationship('Review', backref='course', lazy=True)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name
        }

        