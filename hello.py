from flask import Flask, render_template
app = Flask(__name__)

@app.route("/<int:userid>")
def index(userid):
    return render_template('index.html', userid=userid)

@app.route("/profile/<int:userid>")
def profile(userid):
    return render_template('profile.html', userid=userid)

if __name__ == "__main__":
	app.run()
