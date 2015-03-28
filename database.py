import pymongo
from pymongo import MongoClient

class db(object):

    client = MongoClient()
    db = client.database
    users = db.users
    videos = db.videos

    def add_user(self, username, email, password, imageurl):
        user = { "username" : username,
            "email" : email,
            "password" : password,
            "imageurl" : imageurl }
        self.users.insert(user)

    def login_user(self, email, password):
        return self.users.find({"email":email, "password":password}).count() == 1

    def get_users(self):
        return self.users.find_one()

    def add_video(self, title, postedby, url, parentvideo):
        video = { "title" : title,
            "postedby" : postedby,
            "url" : url,
            "parentvideo" : parentvideo,
            "ver_count" : 0
        }
        return self.videos.insert(video)

    def add_verification_count(self, videoid):
       return self.videos.find_and_modify({"_id":videoid},{"$inc":{"ver_count":1}}, new=True)

