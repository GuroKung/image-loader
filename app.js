'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var request = require('request');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', (process.env.PORT || 5000));

// provides fake path for get picture
app.get('/get_pic/:shop_img/:size', function(req, res) {
	let url = new Buffer(req.params.shop_img, 'base64').toString();
	console.log('SHOP_IMG: ' + url);
	request.get(url).pipe(res);
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
