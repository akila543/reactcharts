var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text({type:'text/html'}));
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.use(express.static('./../'));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});

app.get('/', function(req, res) {
    res.send(" react chart server working");
});
app.get('/getbikedata',function(req,res) {
  MongoClient.connect(url, function(err,client) {
    if (err) throw err;

    const db = client.db('bikedata')
    db.collection('bike').find().toArray(function(err,result) {
      client.close();
      res.json(result);
    })
  })
})

app.listen((process.env.PORT || 8585), function() {
  console.log("server listening to 8585");
})
