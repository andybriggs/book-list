var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var staticPath = path.join(__dirname, '/public');
var port = process.env.PORT || 8080;

app.use(express.static(staticPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);


app.listen(port);

console.log('App listening on port ' + port);
