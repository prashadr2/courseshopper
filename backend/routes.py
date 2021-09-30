from app import app, db
from models import Course
from flask import Flask, request, jsonify


@app.route("/getall")
def get_all():
    try: 
        courses = Course.query.all()
        return jsonify([c.serialize() for c in courses])
    except Exception as e:
        return (str(e))
