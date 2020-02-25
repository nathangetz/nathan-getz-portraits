let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let yearDisplay = document.getElementById("year-display");
let monthDisplay = document.getElementById("month-display");
let dateDisplay = document.getElementById("date-display");
let statusDisplay = document.getElementById("status-display");
let selectionDisplay = document.getElementById("selection-display");
let hoverStatus = document.getElementById("hover-status");
let selectStatus = document.getElementById("select-status");

let dateSelection;

const green = "#40C070";
const red = "#EF5050";
const gray = "#888"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let unavailable = ["May 16 2020", "May 17 2020"];

var getDaysInMonth = function(month,year) {
	return new Date(year, month, 0).getDate();
}
if (today.getDate() < getDaysInMonth(today.getMonth(), today.getFullYear())){
	showCalendar(currentMonth, currentYear);
}
else {
	currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
	currentMonth = (currentMonth + 1) % 12;
	showCalendar(currentMonth, currentYear);
}

function next() {
	if (!(currentMonth === 11 && currentYear === 2021)){
		currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
		currentMonth = (currentMonth + 1) % 12;
		showCalendar(currentMonth, currentYear);
	}
}

function previous() {
	if (!(currentMonth <= today.getMonth() && currentYear <= today.getFullYear())){
		currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
		currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
		showCalendar(currentMonth, currentYear);
	}
}

function jump() {
    currentYear = parseInt(yearDisplay.value);
    currentMonth = parseInt(monthDisplay.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";
	
	yearDisplay.innerHTML = year;
	monthDisplay.innerHTML = months[month];
    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay || date > daysInMonth) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
				cell.classList.add("blank");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            
            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
				cell.onmouseover = function() {mouseOverCell(this)};
				cell.onmouseout = function() {mouseOutCell()};
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
					cell.classList.add("today");
                } // color today's date
				if (isUnavailable(year, month, date) || (j === 1 && month > 0 && month < 4 && year === today.getFullYear()) || j === 2 || j === 4) {
					cell.classList.add("unavailable");
					cell.title = "not available";
                } // color unavailable dates
				else {
					cell.onclick = function(){select(this);}
				}
				if ((months[month] + " " + date + ", " + year) === dateSelection){
					cell.id = "selected-date";
				}
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }
        tbl.appendChild(row); // appending each row into calendar body.
		if (date > daysInMonth) {break;}
    }

}

function isUnavailable(year, month, date){
	var status = false;
	if (((month < today.getMonth() || (date <= today.getDate() && month <= today.getMonth())) && year <= today.getFullYear())) {
		return true;
	}
	for(let i=0; i<unavailable.length; i++){
		let item = unavailable[i];
		
		if(new Date(item).toString() === new Date(year, month, date).toString()){
			return true;
		}
	}
	return status;
}

var noneSelected = true;
function select(ele) {
	let selectedDate = document.getElementById("selected-date");
	if(selectedDate != null && ele.id != "selected-date"){selectedDate.removeAttribute("id");}
	if(ele.id === "selected-date") {ele.removeAttribute("id"); noneSelected = true;}
	else {ele.id = "selected-date"; noneSelected = false;}
	dateSelection = months[currentMonth] + " " + ele.innerHTML + ", " + currentYear;
	selectStatus.innerHTML = (ele.id === "selected-date") ? dateSelection : "&mdash;";
	selectionDisplay.style.backgroundColor = document.getElementById("done").style.backgroundColor = (noneSelected) ? gray : green;
}

function mouseOverCell(ele) {
	let color;
	hoverStatus.innerHTML = (ele.title === "not available") ? "Not available" : (ele.title != "blank" && ele.id != "active") ? "Available" : hoverStatus.innerHTML;
	color = (ele.title === "not available") ? red : (ele.title != "blank" && ele.id != "active") ? green : color;
	dateDisplay.innerHTML = ele.innerHTML;
	statusDisplay.style.backgroundColor = color;
	
}
function mouseOutCell() {
	statusDisplay.style.backgroundColor = gray;
	dateDisplay.innerHTML = hoverStatus.innerHTML = "&mdash;";
}

let hidden;
function showHide() {
	if (hidden === false && !noneSelected){
		document.getElementById("calendar").style.height = "50px";
		document.getElementById("dropframe").style.transform = "translateY(-100%)";
		hidden = true;
	}
	else {
		document.getElementById("calendar").style.height = "600px";
		document.getElementById("dropframe").style.transform = "translateY(0)";
		hidden = false;
	}
}