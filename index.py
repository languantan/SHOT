from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/profile/<int:userid>")
def profile(userid):
    return render_template('profile.html', userid=userid)

if __name__ == "__main__":
	app.run(debug=True)
