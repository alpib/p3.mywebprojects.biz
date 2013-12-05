
/*I got this code snippet from an online tutorial.  It works great to validate my inputs
http://www.javascriptkit.com/javatutors/javascriptkey3.shtml
*/

//Function that only allows numbers to be typed
function numbersonly(e){
var unicode=e.charCode? e.charCode : e.keyCode
if (unicode!=8){ //if the key isn't the backspace key (which we should allow)
if (unicode<48||unicode>57) //if not a number
return false //disable key press
}
}


$('#total-cost-btn').click(function() {

   calculatetotalcost();


});

function calculatetotalcost() { 


	var miles = $('#miles').val();
	if (miles == '') {
       alert("You must enter the number of miles.");
       $("#miles").focus();
       return false;
    }

	var milespergallon = $('#milespergallon').val();
	if (milespergallon == '') {
       alert("You must enter your miles per gallon.");
       $("#milespergallon").focus();
       return false;
    }

	var costofgaspergallon = $('#costofgaspergallon').val();
	if (costofgaspergallon == '') {
        alert("You must enter the cost of gas.");
        $("#costofgaspergallon").focus();
        return false;
    }

	var food = $('#food').val();
	if(food == '') { food = 0; }

	var lodging = $('#lodging').val();
	if(lodging == '') { lodging = 0; }

	var attractions = $('#attractions').val();
	if(attractions == '') { attractions = 0; }

	var misc = $('#misc').val();
	if(misc == '') { misc = 0; }

	var totalcost = 0;

	var costofgas = (miles/milespergallon) * costofgaspergallon;

	totalcost = parseInt(costofgas) + parseInt(food) + parseInt(lodging) + parseInt(attractions) + parseInt(misc); 

	$('#showtotalcost').html(totalcost);

}


$('#km').keyup(function() {

	//find what the user typed in
	var km = $(this).val();

	//convert to miles
	var kmtomiles = parseInt(km/1.6);

	//display the miles in the milesconvert field
	$('#milesconvert').html(kmtomiles);


});

$('#miles2').keyup(function() {

	//find what the user typed in
	var miles2 = $(this).val();

	//convert to miles
	var milestokm = parseInt(miles2 * 1.6);

	//display the km in the kmconvert field
	$('#kmconvert').html(milestokm);


});



