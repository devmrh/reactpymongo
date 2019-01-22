import os

import json
from flask import Flask, render_template
from flask import Response
from flask_cors import CORS
from model.todo import Todo
from flask import request

app = Flask(__name__)
#app = Flask(__name__, template_folder="static/dist", static_folder="static/dist", static_url_path="")
CORS(app)


@app.route('/')
def hello_method():
    return render_template('content.html')


@app.route('/api/getlist')
def getall_method():
    res = Todo.get_all()
    for r in res:
        if "_id" in r: del r["_id"]
    return Response(json.dumps(res), mimetype='application/json')


@app.route('/api/deletelist/<string:id>', methods=['DELETE'])
def delete_method(id):
    Todo.delete_one(id)
    return Response(json.dumps({"result": "ok"}), mimetype='application/json')


@app.route('/api/addlist', methods=['POST'])
def post_method():
    data = request.get_json(silent=True)
    obj = Todo(data.get("task"), data.get("author"))
    obj.save_to_db()
    return Response(json.dumps({"result": "ok"}), mimetype='application/json')


@app.route('/api/updatelist', methods=['PUT'])
def update_method():
    data = request.get_json(silent=True)
    Todo.update_one(data.get("id"),data.get("done"))
    return Response(json.dumps({"result": "ok"}), mimetype='application/json')


if __name__ == '__main__':
    app.run(host= '0.0.0.0',port=os.getenv('PORT'))
