// JavaScript Document
function load_images(path, length) {
    var seq = ["3.7505", "3.0004", "2.2503", "1.5002", "0.7501", "0.0000"];
    for(var i = 1; i <= length; i++) {
        var a = (i < 10) ? "0" : "";
        document.getElementById("content").innerHTML += createElement(path, a + i,  seq[(i - 1) % 6]);
    }
}
function createElement(path, file, rellax) {
	return '<img class="rellax floating-box" src="' + path + file + '_thumb.jpg" alt="" data-rellax-speed="' + rellax + '">';
}