var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser =    require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(__dirname));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'vishal',
  port      : 3306,
  password : 'vishal',
  database : 'LoginForm'
});

connection.connect();

app.post('/server', function(req, res, next){
    var a=req.body.Username;
    var b=req.body.Password;
    //var data = req.body.params;
    //var q = "insert into Users (Username, Password) values (\'"+a+"\','"+b+"\')";
    var q = "select * from Users where Username=\""+a+"\"";
    var query = connection.query(q,function(err, result) {
     if (err) {
       console.error(err);
       res.send(err);
     } else {
       console.log(result);
       res.send(result);
     }
    });
});
app.listen(3000);
