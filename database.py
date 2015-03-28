import pymongo
from pymongo import MongoClient
client = MongoClient()

db = client.test_database
users = db.test_users

def add_user(username, email, password):
    user = { "username" : username,
	         "email" : email,
             "password" : password }
    users.insert(user)

def get_users():
    return users.find_one()
    
