from flask import render_template, request
from app import app
from app import mongo_handler
from keras.models import load_model
import json
import tensorflow as tf
model_path = '/home/omiros/devel/Codein/app/model_driving3.hdf5'
ml_model = load_model(model_path)
ml_model._make_predict_function()
graph = tf.get_default_graph()

import numpy as np



@app.route('/create-user', methods=['POST'])
def create_user():
    return mongo_handler.insert_document("users",request.get_json())

@app.route('/add-referral', methods=['POST'])
def add_referral():
    print (request.get_json()["email"])
    print (request.get_json()["referral"])
    return mongo_handler.append_document("users", "email", request.get_json()["email"], request.get_json()["referral"], "referrals")

@app.route('/receive-referral-points', methods=['PUT'])
def receive_referral_points():
    user_email = request.get_json()["email"]
    referral_id =  request.get_json()["referral_id"]
    user = mongo_handler.find_document_with_email("users", user_email)
    print(user["referrals"])
    counter = 0
    for referral in user["referrals"]:
        if referral["id"] == referral_id:
            user["referrals"][counter]["received"] = "true"
        counter += 1

    mongo_handler.delete_document_with_email("users", user_email)
    return mongo_handler.insert_document("users", user)


@app.route('/echo', methods=['POST'])
def echo():
    response_string = json.dumps(request.get_json())
    print (response_string)
    return response_string



@app.route('/get-score', methods=['POST'])
def get_score():
    print(str(request.get_json()))
    # get data from request body
    descriptors = ['magnitometer','gyroscope', 'accelerometer']
    axes = ['x', 'y', 'z']
    input_row =  []
    for desc in descriptors:
        for axis in axes:
            input_row.append(request.get_json()[desc][axis])

    # prepare model to a format that the model understands
    input = np.zeros((32,9))
    input[0] = np.asarray(input_row)
    
    with graph.as_default():
        predictions = ml_model.predict(input)
        score = predictions[0,1]
        print(str(score))
        print("-------------%d" %(score*100))
        return str(score)
