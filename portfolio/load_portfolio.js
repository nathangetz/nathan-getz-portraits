// JavaScript Document

var dir = [];

var ns = ["3.7505", "3.0004", "2.2503", "1.5002", "0.7501", "0.0000"];


for(var i = 1; i <= 32; i++) {
	dir[i-1] = createElement(i.toString(),  ns[(i - 1) % 6]);
	if(i < 10) {
		dir[i-1] = createElement( 0 + i.toString(), ns[(i - 1) % 6]);
	}
}

function createElement(i, n) {
	return '<img class="rellax floating-box" src="' + i + '_thumb.jpg" alt="" data-rellax-speed="' + n + '">';
}

document.getElementById("dev").innerHTML = dir;