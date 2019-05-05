TO insert data:
start mongodb; go inside mongodb installation path and run mongo.exe and mongod.exe

in mongo command prompt -->  where u can execute db queries
run show dbs; command to list the databases
use databasename; --> to get into particular database
here use bikedata;
to get the collections
show collections;
db.collectionname.find().pretty() -----> displays the contents inside the collection


here the command will be db.bike.find().pretty() ===> nameof the collection is bike and database name is bikedata


to run the application:

run  "npm install" and "npm run build" command in the root folder where package.json is present
 and go inside server folder
 run "node server.js"
