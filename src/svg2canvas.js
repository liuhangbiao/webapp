function svg2canvas() {

var svgTags = document.getElementsByTagName("svg");

for (let i=0; i<svgTags.length; i++) {

let svgTag = svgTags[i]

let svgw = svgTag.scrollWidth

let svgh = svgTag.scrollHeight

let parentNode = svgTag.parentNode;

let svgHTML = new XMLSerializer().serializeToString(svgTag);

let svg = new Blob([svgHTML], { type: "image/svg+xml;charset=utf-8," });

let DOMURL = self.URL || self.webkitURL || self;

let url = DOMURL.createObjectURL(svg);

let img = new Image();

img.src = url;

img.onload = function (){

let canvas = document.createElement('canvas')

canvas.setAttribute("width",svgw)

canvas.setAttribute("height",svgh)

let ctx = canvas.getContext("2d");

ctx.drawImage(img, 0, 0, svgw, svgh);

parentNode.removeChild(svgTag);

parentNode.appendChild(canvas);

}

}
