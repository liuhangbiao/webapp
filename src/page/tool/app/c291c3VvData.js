function toggle(obj) {
    var el = document.getElementById(obj);
    if (el.style.display != 'none') {
        el.style.display = 'none';
    } else {
        el.style.display = '';
    }
}

function $(id){
    return document.getElementById(id);
}

function isEach(n,tlEl,fn){
	 for (var i = n; i < tlEl.length; i++) {
	 	return fn(tlEl[i])
	 }
}

function soSelect(id){
 var tlEl=$(id).getElementsByTagName('a');
 for (var i = 0; i < tlEl.length; i++) {
     tlEl[i].onclick=function(){
     	var domid=this.id+'-radio';
     	// isEach(1,tlEl,function(e){
     	// 	e.className='';
     	// })
     	for (var i = 1; i < tlEl.length; i++) {
     		tlEl[i].className='';
     	}
     	this.className='on';
     	var pp=document.getElementById('m-radio').getElementsByTagName('p');
     	for (var i = 0; i < pp.length; i++) {
     		pp[i].style.display='none';
     	}
        document.getElementById(domid).style.display='';
        document.getElementById(domid).getElementsByTagName('input')[0].checked=true
     }
 }
}


soSelect('mtab')

$('toSo').onclick=function(){
	var ipt=$('m-radio').getElementsByTagName('input');
	for (var i = 0; i < ipt.length; i++) {
		if(ipt[i].checked===true){
			window.open(ipt[i].value+$('mstr').value);
		}
	}
}

var q='aaaa';
var xxxxx=124234;