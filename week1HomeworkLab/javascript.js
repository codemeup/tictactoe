

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
		// this.classList.add("Selected" + xOrO);
		if(xOrO === "X"){
			xOrO = "O";
			header.innerText = "Player Two, it's your turn...";
			this.style.backgroundColor = "#FFFFCC";
			winner();
		} else {
			xOrO = "X";
			header.innerText = "Player One, it's your turn...";
			this.style.backgroundColor = "#CCFFCC";
			winner();
		}
	} else {
		header.innerText = "Unlucky, this spot's already taken...pick another...";
	}
};

var resetButtonAction = function() {
	header.innerText = "Let's play!";
	// console.log(document.querySelectorAll("div.col-xs-4"));
	var cellsTotal = document.querySelectorAll("div.col-xs-4");
	for (var i = 0; i < cellsTotal.length; i++) {
		cellsTotal[i].innerText = "";
		cellsTotal[i].style.background = "transparent";
	}
};

document.querySelector("#button").addEventListener("click",resetButtonAction);

styleCells();

//attempts at selecting the winner
// var winner = function() {
// 	console.log("winner operating");
// 	for (int i = 0; i < 3; i++) { //this is the line causing the issues
// 	console.log("winner specifier operating");
// // 	// console.log(allTheCells[i].innerText === O);
//   		if(allTheCells.innerText[i] === "X") { //maybe you can't do it by checking the innertext and you have to set up arrays. 
//   		console.log("logging an X");
// //   	} else{
//   }
// }
// };

// // attempts at computer picking a random square after player 
// var selectItem = function( event ) {
// 	console.log("selectItem");
// 	if(this.innerText === "") {
// 		// console.log(computer choice);
// 		this.innerText = xOrO; 
// 		// this.classList.add("Selected" + xOrO);
// 		if(xOrO === "X"){
// 			xOrO = "O";
// 			header.innerText = "Player Two, it's your turn...";
// 			this.style.backgroundColor = "#FFFFCC";
// 			winner();
// 		} else {
// 			xOrO = "X";
// 			header.innerText = "Player One, it's your turn...";
// 			this.style.backgroundColor = "#CCFFCC";
// 			winner();
// 		}
// 	} else {
// 		header.innerText = "Unlucky, this spot's already taken...pick another...";
// 	}
// };

//yet to be tested code:
 // var winner = function() {
//  	for (var i = 0; i < 3; i++) {
//  		console.log("winner");
//  		if(allTheCells[i].innertext === "X" && allTheCells[i] ==="X" && allTheCells[i] ==="X") {
//  			console.log("winner");
//  			console.log("Player One Wins");
//  			header.innerText = "WINNER! Well done Player One!";
//  		// } else if(allTheCells[i].innertext = "X"); {
//  		// 	header.innerText = "WINNER! Well done Player Two!";
//  		} else {
//  			console.log("still no winner");
//  		}
//  	}
// };



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


