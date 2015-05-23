var express = require('express');
var app = express();

const IS_PROD = process.env.NODE_ENV == 'production';

var config = IS_PROD ? {
  host: process.env.OPENSHIFT_NODEJS_IP,
  port: parseInt(process.env.OPENSHIFT_NODEJS_PORT)
} : {
  host: 'localhost',
  port: 8080
};

app.use('/dist/', express.static('dist'));
app.use('/', express.static('public'));

var server = app.listen(config.port, config.host, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});
