app.use(express.logger());

app.get('/', function(request, response) {
  response.send('h');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
