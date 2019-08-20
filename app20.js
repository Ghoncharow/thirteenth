var redis = require('redis');
var client = redis.createClient(); //creates a new client - port(6379), host
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

client.on('connect', function() {
  console.log('Client connected to database.');
});

client.get('users', function(err, reply) {
  if (!reply) client.set('users', '[]', function(err, reply) {
    console.log(reply);
  }); 
}); 

// создаем парсер для данных в формате json
const jsonParser = express.json();
app.use(cors());

app.post("/user", jsonParser, cors(), (req, res) => {  

  if(!req.body) return res.sendStatus(400);
  
  var users = [];
  client.get('users', function(err, reply) {
      users = JSON.parse(reply);
  }); 
  
  setTimeout(()=>{
    users.push(req.body);
    client.set('users', JSON.stringify(users), function(err, reply) {
        console.log(reply);
    });    
  }, 100);
});

// Mock API
app.get("/users", cors(), (req, res) => {
  client.get('users', function(err, reply) {
    res.send(reply);
  });  
});

app.get("/delete", (req, res) => {

  client.set('users', '[]', function(err, reply) {
    console.log(reply);
  });
  client.get('users', function(err, reply) {
    res.send('users: ' + cxreply);
  }); 

});

// Home route
app.get("/", (req, res) => {
  res.send('Client connected to database.');
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});

