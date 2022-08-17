from sql_alchemy import database


class TextModel(database.Model):
    __tablename__ = "texts"

    text_id = database.Column(database.Integer, primary_key=True)
    text = database.Column(database.String)
    word_count = database.Column(database.Integer)

    def __init__(self, text, word_count):
        self.text = text
        self.word_count = word_count

    def json(self):
        return {
            "text_id": self.text_id,
            "text": self.text,
            "word_count": self.word_count
        }

    @classmethod
    def find_text(cls, text_id):
        text = cls.query.filter_by(text_id=text_id).first()
        if text:
            return text
        return None

    def save_text(self):
        database.session.add(self)
        database.session.commit()

    def delete_text(self):
        database.session.delete(self)
        database.session.commit()
