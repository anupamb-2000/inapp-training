# importing Flask class from flask library
# from os import abort
from flask import Flask, redirect, url_for, request, abort, jsonify # convert list/dict to json
import requests

# creating an application instance
# the argument for the constructor is the main module name
# main module will be  there in the dunder __name__
app = Flask(__name__)

# defining a route in flask using the app.route
# app is out flask application obj
# / is the root of the website, like the default index.html
# greet() functiion will be executed when accessing defalt reoute
@app.route("/")
def greet():
    return "Good Day!"

@app.route("/hello")
def hello():
    return '<h1> Hi Hello World!!</h1>'

# demonstrate dynamic url building in flask
@app.route("/admin")
def welcome_admin():
    return "<h1>Welcome admin</h1>"

@app.route("/guest/<guest>")
def hello_guest(guest):
    return f'<h1>Hello {guest}! You are our guest</h1>'

# dynamically redirect to the route based on the user name 
@app.route("/user/<name>")
def hello_user(name):
    if name == 'admin':
        return redirect(url_for('welcome_admin'))
    else:
        return redirect(url_for('hello_guest', guest= name))

@app.route("/mylogin", methods=['GET'])
def mylogin():
    username = request.args.get("username")
    password = request.args.get("password")  
    if username == 'tom' and password == 'tompass':
        return f"Welcome {username}"
    else:
        return "Username or Password is not valid"

# List of dictionaries for REST API Methods
# id field should be id itself because there is a built-in function which processes it 
books =[{
        'id': 1,
        'title': 'Harry Potter',
        'author': 'JK Rowling'
    },
    {
        'id': 2,
        'title': 'Jungle Book',
        'author': 'Rudyard Kipling'
    },
    {
        'id': 3,
        'title': 'Alice in Wonderland',
        'author': 'Lewis Carroll'
    }
]

# GET request to get the data in json format
@app.route("/books", methods=['GET'])
def get_books():
    # jsonify will convert list/dict to json format
    return jsonify({'books': books})

@app.route("/books/<int:book_id>", methods=['GET'])
def get_book(book_id):
    # List comprehension
    book = [book for book in books if book['id']==book_id]
    if len(book) == 0:
        abort(404)
    else:
        # jsonify will convert list/dict to json format
        return jsonify({'book': book[0]})

# POST request to create data
@app.route("/books", methods=['POST'])
def create_book():
    # checking if the received string is a valid json
    if not request.json:
        abort(400) # 400 means a bad request
    # create a new book as a dictionary item which can be inserted into the list
    # the id will be the next id number, use negative index for last item
    book = {
        'id': books[-1]['id'] + 1,
        'title': request.json['title'],
        'author': request.json['author']
    }
    books.append(book)
    # jsonify will convert list/dict to json format
    return jsonify({'book': book}),201

# PUT request to edit the data in json format
@app.route("/books/<int:book_id>", methods=['PUT'])
def update_book(book_id):
    # List comprehension
    book = [book for book in books if book['id']==book_id]
    if len(book) == 0:
        abort(404)
    # checking if the json from the client has valid title, author keys
    if 'title' in request.json and type(request.json['title'])!=str:
        abort(400)
    if 'author' in request.json and type(request.json['author'])!=str:
        abort(400)

    book[0]['title'] = request.json['title']
    book[0]['author'] = request.json['author']

    # jsonify will convert list/dict to json format
    return jsonify({'book': book[0]})

# DELETE request to remove the data
@app.route("/books/<int:book_id>", methods=['DELETE'])
def delete_book(book_id):
    # List comprehension
    book = [book for book in books if book['id']==book_id]
    if len(book) == 0:
        abort(404)
    # remove the item from the books list
    books.remove(book[0])
    # jsonify will convert list/dict to json format
    return jsonify({'status': 'deleted'})

# install a module called requests to send the API request
# using the command pip install requests
# defining the API url
API_URL = ("https://api.genderize.io/?name={}")

# create a new function for sending the api request to the url
def send_api(name):
    # trying to send the api request using requests.get() method
    try:
        data = requests.get(API_URL.format(name)).json()
    except Exception as e:
        print(e)
        data = None
    return data

# if we are using browser, the default http method will be GET
@app.route('/gender/<name>')
def gender(name):
    # call the send_api method and pass the name and receive the response
    response = send_api(name)
    return_text = "your name "+response["name"]+" is "+ response["gender"]
    return return_text

# check if it's the main module, then run the app
if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True) 