
/*
 * Routers center
 */

 var mgmnt = require("./mgmnt");
 var user = require("./user");

module.exports = function(app){

	app.get('/', function(req, res){
		res.render('index', { title: '卡优' });
	});

	app.get('/users', user.list);
	app.get('/mgmnt', mgmnt.home);
	app.get('/mgmnt/login', mgmnt.login);
	app.delete('/user/:id', user.delete);
}