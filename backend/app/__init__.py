from flask import Flask
from app.models.DBHandler import *
from keras.models import load_model

# App Configuration
app = Flask(__name__)
mongo_handler = DBHandler("localhost", "27017")
#ml_model = load_model("/home/omiros/devel/Codein/app/model_driving3.hdf5")

# Load views
from app.views import gets
from app.views import posts

