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
function innerStr(id){
 var tlEl=$(id).getElementsByTagName('a');
 for (var i = 0; i < tlEl.length; i++) {
     tlEl[i].onclick=function(){
         var dd=(this.href.split('#')[1]||'c291c3Vv');
         document.getElementById('rootApp').innerHTML=require('./app/'+dd+'.js');
         // if(document.getElementById(dd))
            require('./app/'+dd+'Data.js');
     }
 }
}


$('tool').onclick=function(){
    toggle('tool-layer');
    toggle('bg');
}
$('menu').onclick=function(){
    toggle('menu-layer');
    toggle('bg1');
}

innerStr('tool-layer');
innerStr('menu-layer');


// 转base64
$('toBe').onclick=function(){
    $('str').value=require('../lib/base64.js').encode($('str').value)
}


window.onload=function(){
   var lh=window.location.href.split('#')[1]||'c291c3Vv';
        document.getElementById('rootApp').innerHTML=require('./app/'+lh+'.js');
        require('./app/'+lh+'Data.js');
   // if(lh){
   //     document.getElementById('rootApp').innerHTML=require('./app/'+lh+'.js');
   //     require('./app/'+lh+'Data.js');
   // }else{
   //      document.getElementById('rootApp').innerHTML=require('./app/c291c3Vv.js');
   //      require('./app/c291c3VvData.js');
   // }
}