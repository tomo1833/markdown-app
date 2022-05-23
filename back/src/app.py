import os

from flask import Flask, request
from flask_cors import CORS

import pymysql.cursors
import json


app = Flask(__name__)
CORS(app)


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
        cur.execute(f"SELECT * FROM markdown")
        results = cur.fetchall()

    return json.dumps(results, indent=2)