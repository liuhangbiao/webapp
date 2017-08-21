var headerTpl = require('./tool.hbs');
var data = {
		font:{eot:require('./font/iconfont.eot'),woff:require('./font/iconfont.woff'),ttf:require('./font/iconfont.ttf'),svg:require('./font/iconfont.svg')},
		logo:require('./logo.png'),
		rootApp:location.href,
		tooldata:[
			{id:'sousuo',code:'#c291c3Vv',icon:'icon-tool1',text:'聚合搜索'},
			{id:'jshunxiao',code:'#jshunxiao',icon:'icon-tool1',text:'js正则验证'},
			{id:'',code:'#',icon:'icon-tool1',text:'js混淆test'}
		],
		menudata:[
			{id:'sousuo',code:'#c291c3Vv',icon:'icon-tool1',text:'综合搜索'},
			{id:'jshunxiao',code:'#jshunxiao',icon:'icon-tool1',text:'js混淆'},
			{id:'',code:'#',icon:'icon-tool1',text:'js混淆test'}
		]
	};
var header = headerTpl(data);
document.getElementById('app').innerHTML =header;
var sc=require('./index.js')
