from flask import Flask, send_from_directory
import os
import random

app = Flask(__name__)

@app.route('/', methods=['GET'])
def get_image():        
    files = os.listdir('images')
    random_folder = random.choice(files)
    random_file = random.choice(os.listdir('images/' + random_folder))
    # return send_file('images/' + random_folder + '/' + random_file)
    return send_from_directory('images/' + random_folder + '/', filename=random_file, as_attachment=True)

if __name__ == "__main__":
    app.run(port=5001)