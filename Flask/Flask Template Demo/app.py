# importing Flask class from flask library
# from os import abort
from flask import Flask, render_template
# import the class
from flask_material import Material

# creating an application instance
# the argument for the constructor is the main module name
# main module will be  there in the dunder __name__
app = Flask(__name__)
# pass our app into the class
Material(app)

# defining a route in flask using the app.route
# app is out flask application obj
# / is the root of the website, like the default index.html
# greet() functiion will be executed when accessing defalt reoute
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
    },
    {
        'id': 4,
        'title': 'Sherlock Holmes',
        'author': 'Sir Arthur Conan Doyle'
    }
]


@app.route("/")
def greet():
    for book in books:
        return render_template('temp.html', books = books)

@app.route("/user/<name>")
def user(name):
    return render_template('user.html', username = name, n = 10)

@app.route('/material/<name>')
def material(name):
    return render_template('material.html', username = name, n = 10)

# check if it's the main module, then run the app
if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)