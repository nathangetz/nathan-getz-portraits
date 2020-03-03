// JavaScript Document

var seq = ["3.7505", "3.0004", "2.2503", "1.5002", "0.7501", "0.0000"];

for(var i = 1; i <= 32; i++) {
    var p = (i < 10) ? "0" : "";
	document.getElementById("content").innerHTML += createElement(p + i,  seq[(i - 1) % 6]);
}

function createElement(i, n) {
	return '<img class="rellax floating-box" src="/portfolio/all/' + i + '_thumb.jpg" alt="" data-rellax-speed="' + n + '">';
}