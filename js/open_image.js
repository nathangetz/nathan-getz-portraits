// JavaScript Document

const frame = document.getElementById("open-image");
const image = document.getElementById("image");

function openImage(clicked, file) {
	setImage(file);
	frame.classList.add("active");
}


function setImage(clicked) {
	image.src = "../full/" + clicked;
}