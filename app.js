const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const data = require('./data')


app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/index/', function (req, res) {
  res.render('robots', data);

})


app.listen(3000, function(){
  console.log("app is running!")
});
