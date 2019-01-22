import datetime
import uuid
from database.db import Database

Database.initialize()


class Todo:
    """Class: todo
       Note: our collection name in mongo is "Tasks"
    """
    c_date = datetime.datetime.now().strftime("%-m/%d/%Y, %H:%M:%S %p")

    def __init__(self, task, author, date=None, id=None, done=0):
        """this may generate a random hex for us.
          we can also use id = db.tasks.find().count()+1 to generate semi auto-increment id
         -but i prefer use hex id this time.
        """
        self.id = uuid.uuid4().hex if id is None else id
        self.task = task
        self.author = author
        self.date = Todo.c_date if date is None else date
        self.done = done

    def json(self):
        return {
            'id': self.id,
            'task': self.task,
            'author': self.author,
            'date': self.date,
            'done': self.done

        }

    def save_to_db(self):
        Database.insert(collection="tasks", data=self.json())

    @classmethod
    def get_one(cls, id):
        todo_data = Database.find_one(collection="tasks", query={'id': id})
        return cls(id=todo_data.get('id'),
                   author=todo_data.get('author'),
                   task=todo_data.get('task'),
                   date=todo_data.get('date'),
                   done=todo_data.get('done')
                   )

    @staticmethod
    def get_all():
        todo_all_data = Database.find_all(collection="tasks")
        list_ = [todo for todo in todo_all_data]
        return list_

    @staticmethod
    def delete_one(id):
        return Database.delete_one(collection="tasks", query={"id": id})


    @staticmethod
    def update_one(id,data):
        return Database.update_one(collection="tasks", query={"id":id}, update={"$set": {"done": data}})
