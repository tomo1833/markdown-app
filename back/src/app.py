import os

from flask import Flask, request
from flask_cors import CORS

import pymysql.cursors
import json

app = Flask(__name__)
CORS(app)

RESULT_CODE_SUCESS = "sucess"

def db_connection():
    conn = pymysql.connect(
        host='database',
        port=3306,
        user=os.environ.get('MYSQL_USER'),
        password=os.environ.get('MYSQL_PASSWORD'),
        db=os.environ.get('MYSQL_DATABASE'),
        cursorclass=pymysql.cursors.DictCursor
    )

    return conn

@app.route('/markdown', methods=["GET"])
def get_markdown():
    conn = db_connection()
    with conn.cursor() as cur:
        cur.execute(f"SELECT url, title, body FROM markdown ORDER BY update_datetime DESC")
        results = cur.fetchall()

    return json.dumps(results, indent=2)


@app.route('/markdown/<path:path>', methods=["GET"])
def get_markdown_url(path):
    conn = db_connection()
    with conn.cursor() as cur:
        cur.execute(f"SELECT id, url, title, body FROM markdown WHERE url = '{path}'")
        results = cur.fetchall()

    if not results:
        return json.dumps({}, indent=2)
    return json.dumps(results[0], indent=2)

@app.route('/markdown', methods=["POST"])
def post_markdown():
    url = request.json["url"]
    title = request.json["title"]
    body = request.json["body"]

    conn = db_connection()
    with conn.cursor() as cur:
        cur.execute(
            f"INSERT INTO markdown (url, title, body) values('{url}','{title}','{body}')")
        conn.commit()

    return RESULT_CODE_SUCESS


@app.route('/markdown<path:path>', methods=["PUT"])
def put_markdown(path):
    title = request.json["title"]
    body = request.json["body"]

    conn = db_connection()
    with conn.cursor() as cur:
        cur.execute(
            f"UPDATE markdown SET title = '{title}', body = '{body}' WHERE url = '{path}' ")
        conn.commit()

    return RESULT_CODE_SUCESS


@app.route('/tag/<id>', methods=["GET"])
def get_tag(id):
    conn = db_connection()
    with conn.cursor() as cur:
        cur.execute(f"SELECT mt.id, tm.name, tm.id AS tag_id FROM tag_master tm INNER JOIN markdown_tag mt ON tm.id = mt.tag_id WHERE mt.id = {id}")
        results = cur.fetchall()

    if not results:
        return json.dumps({}, indent=2)
    return json.dumps(results, indent=2)


@app.route('/tag/<id>', methods=["POST"])
def post_tag(id):
    req = request.json
    conn = db_connection()
    with conn.cursor() as cur:
        cur.execute(f"DELETE FROM markdown_tag WHERE id = {id} ")
        conn.commit()
        for data in req:
            cur.execute(f"SELECT id, name FROM tag_master WHERE name = '{data['name']}'")
            if not cur.fetchall():
                cur.execute(f"INSERT INTO tag_master (name) values('{data['name']}')")
                conn.commit()

            cur.execute(f"INSERT INTO markdown_tag (id, tag_id) SELECT {id} AS id, tm.id AS tag_id FROM tag_master tm WHERE tm.name = '{data['name']}'")
            conn.commit()    
    
    return RESULT_CODE_SUCESS