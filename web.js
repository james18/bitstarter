var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  //response.send('Hello World2!');
  indexBuffer = fs.readFileSync('index.html');
  response.send(indexBuffer.toString());
  //response.send('h');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
