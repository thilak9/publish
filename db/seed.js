db = connect("mongodb://localhost:27017/doggos")

db.dogs.drop()

db.dogs.insertMany([
    { title: "something", pseudonym: "someone", post: "hey" },
    { title: "some other thing", pseudonym: "someone else", post: "hey, how are you?" }
])