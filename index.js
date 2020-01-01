var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');

const port = (process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/', function(req, res) {
    res.render('home');
});
app.get('/about', function(req, res) {
    res.render('about');
});
app.get('/contact', function(req, res) {
    res.render('contact');
});
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});

module.exports = app