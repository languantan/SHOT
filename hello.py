import os
from flask import Flask, render_template, request, url_for, redirect, send_from_directory
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads/'

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/home")
def home():
    return render_template('mainfeed.html')

@app.route("/profile/<int:userid>")
def profile(userid):
    return render_template('profile.html', userid=userid)

@app.route("/upload/", methods=['POST'])
def upload():
    # Get the name of the uploaded file
    file = request.files['fileToUpload']
    # Check if the file is one of the allowed types/extensions
    if file:
        # Make the filename safe, remove unsupported chars
        filename = file.filename
        userid = `1`
        # Move the file form the temporal folder to
        # the upload folder we setup
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        # Redirect the user to the uploaded_file route, which
        # will basicaly show on the browser the uploaded file
        return redirect(url_for("profile", userid=userid))
    else:
        return "no file"

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'],
                               filename)
                    
if __name__ == "__main__":
    app.run(debug=True)
