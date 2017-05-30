// create variable 
var nr = "";
var r1 = "";
var r2 = "";
var r3 = "";
var r4 = "";
var wins = 0;
var losses = 0;


// generate random number between 19 - 120 and changes it on html
function nRandom () {
	nR = Math.floor((Math.random()* 101) + 19);
	$("#random").html(nR);
		// console.log(nR);
}

// updates the wins and looses on the html
function update () {
	var data = "<p>Wins:" + wins +"</p>" +
     		"<p>losses:" + losses + "</P>";
	$("#wl").html(data);
}

// generate random number for crystals between 1 - 12
function cRandom () {
	r1 = Math.floor((Math.random()*11) +1);
	r2 = Math.floor((Math.random()*11) +1);
	r3 = Math.floor((Math.random()*11) +1);
	r4 = Math.floor((Math.random()*11) +1);
	// console.log(r1);
	// console.log(r2);
	// console.log(r3);
	// console.log(r4);
}

$(document).ready(function() { 
// sets user total to begin at 0
	var total = 0;
// calls the functions to generate numbers for the crystals	
	update();
 	nRandom();
	cRandom();
	console.log(nr);
	
	

// on.click functions for the crystals increases the number and calls on function check
	$("#c").on("click", function(){
		// alert("c1 works");
		total += r1;
		check ();		
	})

	$("#c2").on("click", function(){
		// alert("c2 works");
		total += r2;
		check ();
		;
	})

	$("#c3").on("click", function(){
		// alert("c3 works");
		total += r3;
		check ();		
	})

	$("#c4").on("click", function(){
		// alert("c4 works");
		total += r4;
		console.log(nR);
		check ();
	})

	

// updates the users total number on the html
 // cheks to see if it went over or if it got the random number
 	function check () {	
 		$("#score").html(total);

 		if (nR === total) {
 			alert("you win");
 			wins++;
 			total = 0;
 			$("#score").html(total);
 			nRandom();
 			update();
 			console.log(wins);

 		}

 		if (total > nR) {
 			alert("you loose");
 			losses++;
 			total = 0;
 			$("#score").html(total);
 			nRandom();
			update();
			// console.log(losses);
 		}
 	}

	console.log(r1);
	console.log(r2);
	console.log(r3);
	console.log(r4);
});

	
	



