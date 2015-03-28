import os
import unittest
import tempfile
import pymongo
import database
from pymongo import MongoClient

class ShotTestCase(unittest.TestCase):

    dbase = database.db()

    def setUp(self):
        self.dbase.db = self.dbase.client.test_db
        self.videos = self.dbase.videos = self.dbase.db.test_videos
        self.users = self.dbase.users = self.dbase.db.test_users

    def tearDown(self):
        self.dbase.client.drop_database('test_db')

    def test_add_video(self):
        self.dbase.add_video("cats", "someuser", "vid.mp4", "")
        assert self.videos.find().count() == 1

    def test_add_video_parent(self):
        a = self.dbase.add_video("cats", "someuser", "vid.mp4", "")
        self.dbase.add_video("cats", "someuser", "vid.mp4", a)
        self.dbase.add_video("dogs", "someuser2", "vid.mp4", a)
        assert self.videos.find({"parentvideo":a}).count() == 2

    def test_add_verification_count(self):
        a = self.dbase.add_video("cats", "someuser", "vid.mp4", "")
        self.dbase.add_verification_count(a)
        video = self.dbase.add_verification_count(a)
        assert video['ver_count'] == 2

    def test_add_user(self):
        a = self.dbase.add_user("kitty", "email", "password", "imageurl")
        assert self.users.find({"username":"kitty"}).count() == 1

if __name__ == '__main__':
    unittest.main()
        
