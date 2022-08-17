def count_words(text: str):
    if not text:
        return None
    return len(text.split())