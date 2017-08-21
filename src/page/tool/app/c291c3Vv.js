var headerTpl = require('../hbs/sousuo.hbs');

var data = {
		title:'hello sousuo',
		sologo:require('../sologo.png'),
		soData:[
			{text:'网页',key:'web',val:[
					{url:'https://www.baidu.com/s?wd=',title:'百度',isChecked:"checked"},
					{url:'https://www.so.com/s?q=',title:'360'},
					{url:'http://cn.bing.com/search?q=',title:'必应'},
					{url:'http://www.sogou.com/sogou?query=',title:'搜狗'},
					{url:'https://search.yahoo.com/search?p=',title:'雅虎'},
					{url:'http://www.chinaso.com/search/pagesearch.htm?q=',title:'中国搜索'},
					{url:'https://yandex.ru/search/?text=',title:'yandex'},
					{url:'http://www.webcrawler.com/serp?q=',title:'webcrawler'},
					{url:'https://so.m.sm.cn/s?q=',title:'神马'},
					{url:'https://www.google.com.hk/search?q=',title:'谷歌'},
			]},
			{text:'视频',key:'video',val:[{url:'http://www.baidu.com',title:'百度'},{url:'http://www.baidu.com',title:'百度'}]},
			{text:'图片',key:'image',val:[{url:'http://www.baidu.com',title:'图片'},{url:'http://www.baidu.com',title:'百度'}]},
			{text:'知识',key:'image',val:[{url:'http://www.baidu.com',title:'图片'},{url:'http://www.baidu.com',title:'百度'}]},
			{text:'BT',key:'bt',val:[{url:'http://www.aiosearch.com/search/4/Torrents/',title:'aiosearch'}]},
		]
	}
var header = headerTpl(data);

// require("html-loader!./tt.html");
module.exports = header;