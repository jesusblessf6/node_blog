exports.home = function(req, res){
	if(checkMgmntLogin()){
		res.render('mgmnt/home', {title: '管理首页'});
	}
	else{
		res.redirect('/mgmnt/login');
	}
};

exports.login = function(req, res){
	res.render('mgmnt/login', {title: '管理页登录'});
}

function checkMgmntLogin(){
	return false;
}
