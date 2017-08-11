var headerTpl = require('./index.hbs');
var data = {title:'hello HBS!',body:'基于webpack 的hbs运用，道心版权。'}; //data可以用参数传入
var header = headerTpl(data);
module.exports = header;