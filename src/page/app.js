/**
 * 动态添加css代码
 * @param {css代码} cssText 
 */
function addCSS(cssText) {
    var style = document.createElement('style'),
        head = document.head || document.getElementsByTagName('head')[0];
    style.type = 'text/css';
    if (style.styleSheet) { var func = function() { try { style.styleSheet.cssText = cssText; } catch (e) {} }; if (style.styleSheet.disabled) { setTimeout(func, 10); } else { func(); } } else {
        var textNode = document.createTextNode(cssText);
        style.appendChild(textNode);
    }
    head.appendChild(style);
}


var hd = require('./index.js');
document.getElementById('app').innerHTML = hd;