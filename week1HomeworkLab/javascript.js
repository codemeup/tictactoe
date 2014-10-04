
// var movesPlayed = 0;
var xOrO = "X";
var header = document.querySelector("#playername");

var styleCells = function(){
	console.log("stylecells");
	var cellItems = document.querySelectorAll("div.col-md-4");
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
		} else {
			xOrO = "X";
			header.innerText = "Player One, it's your turn...";
		}
	} else {
		header.innerText = "Unlucky, this spot's already taken...pick another...";
	}
};

// list_items[i].style.backgroundColor = "yellow";

// var switchUser = function ( event ) {
// 	// var header = document.querySelector("#playername");
// 	if(xOrO === "X"){
// 		xOrO = "O";
// 		header.innerText = "Player Two, it's your turn...";
// 		// this.classList.add("selected1");
// 	} else {
// 		xOrO = "X";
// 		header.innerText = "Player One, it's your turn...";
// 		// this.classList.add("selected1");
// 	}
// };

// var styleGridElements = function(){
// 	var grid_items = document.querySelectorAll("div.col-md-4");
// 	for (var i = grid_items.length - 1; i >= 0; i--) {
// 		grid_items[i].addEventListener("click", play);
// 	}
// };

// var play = function( event ){
// 	console.log(this);
// 	if(this.innerText === ""){
// 	this.innerText = xOrO;
// 	switchUser();
// 	this.classList.add("selected1");
// 	} else {
// 		header.innerText = "Unlucky, this spot's already taken...pick another...";
// 	}
// };

// var selectItem = function( event ){
// console.log("Clicked item:" + this.innerHTML + ". Event:" + event);
// this.classList.add("selected");
// document.querySelector("img").setAttribute("src","./images/" + this.innerHTML + ".jpeg");
// };

// var allCells = document.querySelector("#");

var resetButtonAction = function() {
	console.log(document.querySelectorAll("div.col-md-4"));
	var cellsTotal = document.querySelectorAll("div.col-md-4");
	for (var i = 0; i < cellsTotal.length; i++) {
		cellsTotal[i].innerText = "";
	}
};

document.querySelector("#button").addEventListener("click",resetButtonAction);


// var changeHint = function(){
// var hint_div = document.getElementById("hint");
// hint_div.innerHTML = "Here's your hint!";
// };


// console.log(xOrO); 


// var player1 = {
// 	name: "Player 1";
// 	marker: "X";
// 	clicked: [];
// }

// var player2 = {
// 	name: "Player 2";
// 	marker: "Y";
// 	clicked: [];
// // }

styleCells();

