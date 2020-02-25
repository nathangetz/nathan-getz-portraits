// JavaScript Document
var time, type, errorDisplay, results;
time = document.getElementById("input-time");
type = document.getElementById("type");
errorDisplay = document.getElementById("value-error");
results = document.getElementById("results");

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function format(value){return ("$" + value.toFixed(2).toString()).replace('$-', '-$');}

function calculatePrice(){
		var typeName, typeCost, relTime, sign, timeCost, total, rate;
		typeName = type.options[type.selectedIndex].text;
		typeCost = type.value * 50;
		relTime = time.value - 60;
		sign = (relTime >= 0);
		timeCost = typeCost * (sign ? 0.010 : 0.015) * relTime;
		total = typeCost + timeCost;
		rate = format(total / (time.value));
		document.getElementById("portrait-type").innerHTML = typeName;
		document.getElementById("type-cost").innerHTML = format(typeCost);
		document.getElementById("time").innerHTML = (sign ? "+" : "") + relTime;
		document.getElementById("time-cost").innerHTML = format(timeCost);
		document.getElementById("total-cost").innerHTML = format(total) + " (" + rate + " per minute)";
}

function checkValue(){
	var errorValue = (time.value <= 0 && type.value === "") ? "*Fill in the fields!" : (time.value <= 0) ? "*Enter a number!" : (type.value === "") ? "*Pick a type!" : "";
	errorDisplay.innerHTML = errorValue;
	errorDisplay.style.display = (errorValue === "") ? "none" : "inline";
	if(errorValue === ""){calculatePrice();}
	results.style.display = (errorValue === "") ? "table-row-group" : "none";
}

// Listen for 13 ("Enter" key) keyup event when typing in and checkValue() on event
time.addEventListener("keyup", function(event){if(event.keyCode === 13){event.preventDefault();checkValue();}});
  