from database import db
from model.todo import Todo

db.Database.initialize()

# let try insert new record to db

new_todo = Todo.get_all()
print(new_todo)

