exports.home = function(req, res){
	res.render('mgmnt/home', {title: '管理首页'});
};

exports.mgmnt_login = function(req, res){
	res.render('mgmnt/mgmnt_login', {title: '管理页登录'});
}