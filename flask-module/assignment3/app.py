import json
import os
from flask import Flask, jsonify, request

app = Flask(__name__)

DICT_PATH = os.path.join(os.path.dirname(__file__), "dictionary.json")


def load_dictionary():
    with open(DICT_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def save_dictionary(data):
    with open(DICT_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


@app.route("/translate/<word>")
def translate(word):
    dictionary = load_dictionary()
    key = word.lower()
    if key in dictionary:
        return jsonify({"English": key, "Finnish": dictionary[key]})
    return jsonify({"error": "Word not found"}), 404


@app.route("/add")
def add():
    en = request.args.get("en")
    fi = request.args.get("fi")
    if not en or not fi:
        return jsonify({"error": "Both en and fi are required"}), 400

    dictionary = load_dictionary()
    dictionary[en.lower()] = fi
    save_dictionary(dictionary)
    return jsonify({"added": {"English": en.lower(), "Finnish": fi}})


if __name__ == "__main__":
    app.run(port=3000, debug=True)