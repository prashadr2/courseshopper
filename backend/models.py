from app import db

class Syllabus(db.Model):
    __tablename__ = "syllabus"

    id = db.Column(db.Integer, primary_key=True)
    pdf = db.Column(db.LargeBinary)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)

class Review(db.Model):
    __tablename__ = "review"

    id = db.Column(db.Integer, primary_key=True)
    reviewer = db.Column(db.String())
    text = db.Column(db.String(), nullable=False)
    teacher_rating = db.Column(db.Integer, nullable=False)
    workload_rating = db.Column(db.Integer, nullable=False)
    difficulty_rating = db.Column(db.Integer, nullable=False)
    practicability_rating = db.Column(db.Integer, nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)

    def serialize(self):
        return {
            'reviewer': self.reviewer if self.reviewer else "Anonymous",
            'text': self.text,
            'rating': round((self.teacher_rating + self.workload_rating + self.difficulty_rating + self.practicability_rating)/4, 2)
        }

tags = db.Table('tags',
    db.Column('tag_id', db.Integer, db.ForeignKey('tag.id'), primary_key=True),
    db.Column('course_id', db.Integer, db.ForeignKey('course.id'), primary_key=True)
)

class Tag(db.Model):
    __tablename__ = "tag"

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(), nullable=False)

class Course(db.Model):
    __tablename__ = "course"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    prefix = db.Column(db.String(), nullable=False)
    number = db.Column(db.String(), nullable=False)
    description = db.Column(db.String())
    syllabi = db.relationship('Syllabus', backref='course', lazy=True)
    reviews = db.relationship('Review', backref='course', lazy=True)
    tags = db.relationship('Tag', secondary=tags, lazy='subquery', backref=db.backref('courses', lazy=True))

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name
        }


        