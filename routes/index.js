
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
	app.get('/mgmnt_login', mgmnt.login);
	app.get('/mgmnt_reg', mgmnt.register_new);
	app.post('/mgmnt_reg', mgmnt.register_create);
	app.delete('/user/:id', user.delete);
}