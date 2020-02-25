var contactMethod = document.getElementById("contact-method");
var contactLabel = document.getElementById("contact-label");
var contact = document.getElementById("contact");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var timeDisplay = document.getElementById("time-display");


function setContact() {
	contact.style.display = "block";
	contactLabel.innerHTML = contactMethod.value;
	email.style.display = (contactMethod.value === "Email Address") ? "block" : "none";
	phone.style.display = (contactMethod.value === "Phone Number") ? "block" : "none";
}

function selectType(ele) {
	let selectedType = document.getElementById("selected-type");
	if(selectedType != null && ele.id != "selected-type") {selectedType.innerHTML = "Select"; selectedType.removeAttribute("id");}
	if(ele.id === "selected-type") {ele.removeAttribute("id");}
	else {ele.id = "selected-type";}
	ele.innerHTML = (ele.id === "selected-type") ? "Selected" : "Select";
	// let noTypeSelected = (ele.id === "selected-type") ? true : false;
}

/*function updateTime(ele) {
	var x;
	x = 25 * ele.value + 900;
	x -= x % 100 * 0.4;
	// x = (x - x % 100) + (x % 100 * 0.6);
	x = ((x < 1300) ? x : x - 1200).toString() + ((x < 1200) ? " AM" : " PM");
	x = x.slice(0, -5) + ":" + x.slice(-5);
	document.getElementById("time-display").innerHTML = x;
}*/
var following;
function isFollowing(i) {following = i}

function updateTime(x, s) {
	if(following) {
		timeDisplay.innerHTML = setTime(x);
		timeDisplay.style.left = setPos(s);
	}
}
function setTime(x) {
	//var h = (x - x % 4) / 4 + 9;
	//var m = x % 4 * 15;
	var t = new Date(0);
	t.setHours((x - x % 4) / 4 + 9);
	t.setMinutes(x % 4 * 15);
	return t.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
}
function setPos(s) {
	//var h = (x - x % 4) / 4 + 9;
	//var m = x % 4 * 15;
	return (s.clientWidth - timeDisplay.clientWidth) * s.value / s.max + "px";
}