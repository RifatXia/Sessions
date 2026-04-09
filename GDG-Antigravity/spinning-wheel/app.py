from flask import Flask, render_template, jsonify
import os

app = Flask(__name__)

NAMES_FILE = 'names.txt'

def read_names():
    if not os.path.exists(NAMES_FILE):
        return []
    with open(NAMES_FILE, 'r') as f:
        names = [line.strip() for line in f if line.strip()]
    return names

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/names', methods=['GET'])
def get_names():
    names = read_names()
    return jsonify({"names": names})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
