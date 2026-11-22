import json
import os
from flask import Flask, jsonify

app = Flask(__name__)

DICT_PATH = os.path.join(os.path.dirname(__file__), "dictionary.json")


def load_dictionary():
    with open(DICT_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


@app.route("/translate/<word>")
def translate(word):
    dictionary = load_dictionary()
    key = word.lower()
    if key in dictionary:
        return jsonify({"English": key, "Finnish": dictionary[key]})
    return jsonify({"error": "Word not found"}), 404


# optional
@app.route("/words")
def words():
    return jsonify(list(load_dictionary().keys()))


if __name__ == "__main__":
    app.run(port=3000, debug=True)