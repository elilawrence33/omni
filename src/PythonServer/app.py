# app.py

from flask import Flask, jsonify, request
from flask_cors import CORS
import random
import os 
print(os.getcwd())
# Must change the directory because the 'npm start' script starts from /omni directory
os.chdir('src/PythonServer')

from chatbot import *

app = Flask(__name__)
CORS(app)

@app.route('/chatbot', methods=['POST'])
def chatbot():
    question = str(request.json['question'])
    result = startChat(question)
    print("Here is the answer", result)
    return jsonify({'answer': result, "id": random.randint(0, 10000000)}) # id is a random number between 0 and 10,000,000 to prevent collisions

if __name__ == '__main__':
    app.run()
