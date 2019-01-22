## reactpymongo

this is a example of using react-redux with some cool animation 
with mongodb and flask.

#### Getting Started

i used [pipenv](https://pipenv.readthedocs.io/en/latest/) to 
install our python server dependencies.

we are also using NoSQL [mongodb](https://www.mongodb.com/) as our primary database.
make sure mongodb is installed and is running on your system.


for our server you need to install needed packages that are described on Pipfile.
after installing pipenv first you need activate pipenv-shell by run:
```
pipenv shell
```
then
```
pipenv install
```


and run flask development server by executing app.py file:
```
python app.py
```

you can visit below link to see final result:
[http://localhost:5000/](http://localhost:5000/)


you can also enter react development server by executing:
```
yarn start  OR  npm start
```
and development server may start at:
[http://localhost:8000/](http://localhost:8000/)

you can generate new bundle js file by executing:

```
yarn run build  OR  npm run build
```

good luck.