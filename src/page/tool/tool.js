var headerTpl = require('./tool.hbs');

// 函数
var dao={
	yy:function(){
		
	}
}


var data = {font:{eot:require('./font/iconfont.eot'),woff:require('./font/iconfont.woff'),ttf:require('./font/iconfont.ttf'),svg:require('./font/iconfont.svg')},
		logo:require('./logo.png'),title: 'hello HBS!', body: '基于webpack 的hbs运用，道心版权。',
		dao:dao}; //data可以用参数传入
var header = headerTpl(data);
module.exports = header;
