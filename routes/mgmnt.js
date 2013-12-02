/*
 * mgmnt router
 */

exports.home = function(req, res){
	if(checkMgmntLogin()){
		res.render('mgmnt/home', {title: '管理首页'});
	}
	else{
		res.redirect('/mgmnt_login');
	}
};

exports.login = function(req, res){
	res.render('mgmnt/login', {title: '管理页登录'});
};

exports.login_act = function(req, res){
	//login anthentication
	
};

exports.register_new = function(req, res){
	res.render('mgmnt/register', {title: '管理员注册'});
};

exports.register_create = function(req,res){
	res.send("hello");
};

function checkMgmntLogin(){
	return false;
}
