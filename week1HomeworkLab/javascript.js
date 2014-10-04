

var xOrO = "X";
var header = document.querySelector("#playername");
var allTheCells = document.querySelectorAll("div.col-xs-4");

var styleCells = function(){
	console.log("stylecells");
	var cellItems = document.querySelectorAll("div.col-xs-4");
	for (var i = cellItems.length - 1; i >= 0; i--) {
		console.log("Hello");
		cellItems[i].addEventListener("click", selectItem);
	}
};

var selectItem = function( event ) {
	console.log("selectItem");
	if(this.innerText === "") {
		console.log(this);
		this.innerText = xOrO; 
		this.classList.add("Selected" + xOrO);
		if(xOrO === "X"){
			xOrO = "O";
			header.innerText = "Player Two, it's your turn...";
			this.style.backgroundColor = "#FFFFCC";
		} else {
			xOrO = "X";
			header.innerText = "Player One, it's your turn...";
			this.style.backgroundColor = "#CCFFCC";
		}
	} else {
		header.innerText = "Unlucky, this spot's already taken...pick another...";
	}
};

var resetButtonAction = function() {
	header.innerText = "Let's play!";
	console.log(document.querySelectorAll("div.col-xs-4"));
	var cellsTotal = document.querySelectorAll("div.col-xs-4");
	for (var i = 0; i < cellsTotal.length; i++) {
		cellsTotal[i].innerText = "";
		cellsTotal[i].style.background = "transparent";
	}
};

var clicked = [];

document.querySelector("#button").addEventListener("click",resetButtonAction);

styleCells();

// var winner = function() {
// 	for (var i = 0; i < 3; i++) {
// 		allTheCells[]



// var p1 = {
// 	name: "Player One"
// 	marker: "X"
// 	clicked: []
// };

// var p1 = {
// 	name: "Player One"
// 	marker: "X"
// 	clicked: []
// };










//previous version of code
// var xOrO = "X";
// var header = document.querySelector("#playername");

// var styleCells = function(){
// 	console.log("stylecells");
// 	var cellItems = document.querySelectorAll("div.col-xs-4");
// 	for (var i = cellItems.length - 1; i >= 0; i--) {
// 		console.log("Hello");
// 		cellItems[i].addEventListener("click", selectItem);
// 	}
// };

// var selectItem = function( event ) {
// 	console.log("selectItem");
// 	if(this.innerText === "") {
// 		console.log(this);
// 		this.innerText = xOrO; 
// 		this.classList.add("Selected" + xOrO);
// 		if(xOrO === "X"){
// 			xOrO = "O";
// 			header.innerText = "Player Two, it's your turn...";
// 			this.style.backgroundColor = "#FFFFCC";
// 		} else {
// 			xOrO = "X";
// 			header.innerText = "Player One, it's your turn...";
// 			this.style.backgroundColor = "#CCCCFF";
// 		}
// 	} else {
// 		header.innerText = "Unlucky, this spot's already taken...pick another...";
// 	}
// };

// var resetButtonAction = function() {
// 	header.innerText = "Let's play!";
// 	console.log(document.querySelectorAll("div.col-xs-4"));
// 	var cellsTotal = document.querySelectorAll("div.col-xs-4");
// 	for (var i = 0; i < cellsTotal.length; i++) {
// 		cellsTotal[i].innerText = "";
// 		cellsTotal[i].style.background = "transparent";
// 	}
// };



// document.querySelector("#button").addEventListener("click",resetButtonAction);

// styleCells();


