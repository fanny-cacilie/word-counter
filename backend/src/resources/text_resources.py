from flask_restful import Resource, reqparse
from models.text_models import TextModel
from services.cout_words_in_text import count_words

args = reqparse.RequestParser()
args.add_argument(
    "text",
    type=str,
    required=True,
    help="The field 'login' can not be left blank.",
)
args.add_argument(
    "word_count",
    type=int,
)

class Text(Resource):
    def get(self, text_id):
        try: 
            text = TextModel.find_text(text_id)
            if not text:
                return {"message": "Text not found."}, 404
        except Exception as exc:
            return exc
        return text.json()


class TextSubmission(Resource):
    def post(self):
        try:
            kwargs = args.parse_args()
            kwargs['word_count'] = count_words(kwargs['text'])
            text = TextModel(**kwargs)
            text.save_text()
        except Exception as exc:
            return exc, 500
        return {"message": "Text form submitted successfully"}, 201


class TextRemoval(Resource):
    def delete(self, text_id):
        text = TextModel.find_text(text_id)
        if not text:
            return {"message": "Text id '{}' not found.".format(text_id)}, 404
        try:
            text.delete_text()
        except Exception as exc:
            return exc
        return {"message": "Text deleted successfully."}