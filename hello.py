from flask import Flask
from flask import jsonify
import database

app = Flask(__name__)

@app.route("/")
def hello():
    database.add_user("name", "a@a.com", "pweafw")
    user = database.users.find({"username" : "name"})[0]
    return user['username'] + " " + user['email'] + " " + user['password']

if __name__ == "__main__":
	app.run(debug=True)
