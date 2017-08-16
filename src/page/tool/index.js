function toggle(obj) {
    var el = document.getElementById(obj);
    if (el.style.display != 'none') {
        el.style.display = 'none';
    } else {
        el.style.display = '';
    }
}
document.getElementById('tool').onclick=function(){
	toggle('tool-layer');
	toggle('bg');
}
document.getElementById('menu').onclick=function(){
	toggle('menu-layer');
	toggle('bg1');
}