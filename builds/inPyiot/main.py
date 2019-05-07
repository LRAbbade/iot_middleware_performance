from flask import Flask, request, jsonify
import json
import pymongo
from pymongo import MongoClient
from datetime import datetime
from pprint import pprint
import jwt

PORT = 10666

client = MongoClient()
db = client.iot

app = Flask(__name__)


@app.route('/')
def index():
    return 'Welcome to InPyiot'


@app.route('/device-api/api/v1/message', methods=['POST'])
def insert():
    payload = request.get_json()
    auth = request.headers['Authorization']

    decoded_auth = jwt.decode(auth, verify=False)
    user = decoded_auth['sub'];
    application = decoded_auth['iss'];

    document = {
        'timestamp': datetime.now(),
        'user': user,
        'object': payload
    }

    r = db.devices.insert_one(document)

    # # For debugging
    # return jsonify({
    #     'mongo_ack': r.acknowledged,
    #     'inserted_id': str(r.inserted_id),
    #     'jwt_data': {
    #         'user': user,
    #         'application': application
    #     },
    #     'document': str(document)
    # })
    
    return ''


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=PORT)
