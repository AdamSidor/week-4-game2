

//randomly generate a computer number 
function getRandomNumber() {
	var min=19
	var max=120
  	computerNumber= Math.round(Math.random() * (max - min)+ min);
	console.log(computerNumber)

};

getRandomNumber();

  var showPoints=$('<div>');
$("screenPoints").click(function(){
	$(".pointDisplay").append("<div id=pointDisplay> function(getRandomNumber)</div>" );
});








	    //red gem random number 
function redGemNumber() {
	var min=1
	var max=19
  	rgNumber= Math.round(Math.random() * (max - min)+ min);
	console.log(rgNumber)

};

var redPushNumber= redGemNumber();

redGemNumber();

$('#redGem').click(function(){
	userPoints.push('redPushNumber');

});




//blue gem random number
function blueGemNumber() {
	var min=1
	var max=19
  	bgNumber= Math.round(Math.random() * (max - min)+ min);
	console.log(bgNumber)

};

var bluePushNumber= blueGemNumber();

blueGemNumber();

$('#blueGem').click(function(){
	userPoints.push('bluePushNumber');

});



//yellow gem random number
function yellowGemNumber() {
	var min=1
	var max=19
  	ygNumber= Math.round(Math.random() * (max - min)+ min);
	console.log(ygNumber)

};

var yellowPushNumber= yellowGemNumber();

yellowGemNumber();

$('#yellowGem').click(function(){
	userPoints.push('yellowPushNumber');

});


//green gem random number
function greenGemNumber() {
	var min=1
	var max=19
  	ggNumber= Math.round(Math.random() * (max - min)+ min);
	console.log(ggNumber)

};

var greenPushNumber= greenGemNumber();

greenGemNumber();

$('#yellowGem').click(function(){
	userPoints.push('yellowPushNumber');

});

//logic to check if gem number= computer number


//add and display the addition of the gem number
var userPoints = [];
console.log(userPoints);



//change the html