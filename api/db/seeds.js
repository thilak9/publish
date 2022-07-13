const db = connect("mongodb://localhost:27017/publish")


db.posts.drop()

db.posts.insertMany([{title: "Sample Post 1",
                            pseudonym: "User1",
                            body: "Welcome to the blog"},
                          {title:"Sample Post 2",
                            pseudonym: "User2",
                            body: "This is the second post"}])  
