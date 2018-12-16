var fs = require('fs');
var p = require('./exportsDemo.js');
var express = require('express');
var path = require('path');




var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

require('./app_server/router/routerManager.js')(app);

app.listen(8080);
