
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var index = require('./routes/index');
var mgmnt = require('./routes/mgmnt')
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var ejs = require('ejs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', index.index);
app.get('/users', user.list);
app.get('/mgmnt', mgmnt.mgmnt_login);
app.get('/mgmnt_home', mgmnt.mgmnt_home);
app.delete('/user/:id', user.delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//console.log(app.routes);