var redis = require('redis');
var client = redis.createClient(); //creates a new client - port(6379), host
const express = require("express");
const app = express();
const port = 5000;

client.on('connect', function() {
  console.log('Client connected to database.');
});

// Body parser
app.use(express.urlencoded({ extended: false }));

// Home route
app.get("/", (req, res) => {
  client.hmset('frameworks', {
    'javascript': 'AngularJS',
    'css': 'Bootstrap',
    'node': 'Express'
  });
  client.set('framework', 'AngularJS', function(err, reply) {
    console.log(reply);
  });
  res.send("frameworks added in Redis");
});

app.get("/user", (req, res) => {
  client.del('framework', function(err, reply) {
    console.log(reply);
  });
  client.del('frameworks', function(err, reply) {
    console.log(reply);
  });
  res.send("frameworks deleted from Redis");
});

// Mock API
app.get("/users", (req, res) => {
  client.get('framework', function(err, reply) {
    console.log(reply);
  });
  client.hgetall('frameworks', function(err, object) {
    res.json(object);
  });  
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});


