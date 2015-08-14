var express = require('express');
var config = require('cloud-env');
var api = require('./api/main');

var app = express();

app.use('/api', api);
app.use('/dist', express.static('dist'));
app.use('/', express.static('public'));

var server = app.listen(config.PORT, config.IP, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});
