// JavaScript Document

const frame = document.getElementById("open-image");
var image = document.getElementById("image");

function openImage(element, file) {
	setImage(file);
    while(image.complete != true){setTimeout(0.1)}
    frame.classList.add("active");
}


function setImage(file) {
    //image.src = "";
	//image.src = "../full/" + file;
    frame.innerHTML = "";
    frame.innerHTML = '<img id="image" onLoad="this.parentElement.classList.add(\'active\')" onClick="this.parentElement.classList.remove(\'active\')" src="../full/' + file + '">'
}