(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.tt = factory();
	}
}(this, function (b) {

	function tt () {
		console.log('ttttttttt');
		console.log(document.getElementById('rootApp'))
		console.log(document.getElementById('rootApp').getElementsByTagName('h1'))

		$('h1').on('click',function(){
			console.log(this);
		})
	}
	return tt;
}));