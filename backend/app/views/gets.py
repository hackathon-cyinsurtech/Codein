from flask import render_template, request
from app import app
from app import mongo_handler
from flask import jsonify

@app.route('/get-referrals', methods=['GET'])
def get_referrals():
    user_email = request.headers.get('email')
    user = mongo_handler.find_document_with_email("users", "omirospol@gmail.com")

    if user:
        print(str(user["referrals"]))
        return jsonify(user["referrals"])
    else:
        return "User not found"

@app.route('/get-user', methods=['GET'])
def get_user():
    user_email = request.headers.get('email')
    user = mongo_handler.find_document_with_email("users", "omirospol@gmail.com")
    if user:
        user.pop('_id')
        print(str(user["referrals"]))
        return jsonify(user)
    else:
        return "User not found"






