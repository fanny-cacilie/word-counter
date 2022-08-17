from flask import Flask, jsonify
from flask_restful import Resource, Api
from resources.text_resources import Text, TextSubmission, TextRemoval

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
api = Api(app)


@app.before_first_request
def create_database():
    database.create_all()


api.add_resource(Text, "/texts/<int:text_id>")
api.add_resource(TextRemoval, "/remove/<int:text_id>")
api.add_resource(TextSubmission, "/submit")


if __name__ == "__main__":

    from sql_alchemy import database

    database.init_app(app)
    app.run()
