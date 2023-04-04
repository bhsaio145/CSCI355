/*
JS code for node.js express HTTP local hosting
run using "node server.js" on terminal
*/
const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

//allowing node to also use css and js files in the same directory
app.use(express.static(path.join(__dirname, '.')))

//default localhost:3000 request on browser to sent "Landing.html"
app.get('/', (request, response) =>{
    response.sendFile(path.join(__dirname, 'Landing.html'));
});
app.get('/home', (request, response) =>{
  response.sendFile(path.join(__dirname, 'Home.html'));
});

app.listen(port, () => {
    console.log('express server listening on port ' + port);
});

/* JS node.js code for reading from a form post to output results to a text document */
const fs = require('fs');

//turns the req json from the form into usuable body format for req.body.email
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/email', function(req, res){
  //getting email from the request
  const content = req.body.email;
  //appending the gotten email from request to text file
  fs.appendFile('text.txt', content + '\n', err => {
    if (err) {
      console.error(err);
    }
  });
});