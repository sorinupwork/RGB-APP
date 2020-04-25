const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('home');
});

app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT || 3000);