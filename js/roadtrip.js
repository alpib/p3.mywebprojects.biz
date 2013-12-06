

//Listeners for input fields and buttons

//Listen for user input. when user pressses any key, call numbersonly function
$('input').keypress(numbersonly);

//listen to when user clicks on "Calculate Total" button. when clicked call calculatetotalcost function
$('#total-cost-btn').click(function() {

   calculatetotalcost();

});

//listen to reset button click.  when clicked, reload window to clear all 
$('#reset').click(function() {

	window.location.reload();

});
//end of listeners

//Numbersonly function
/*I got the numbersonly function code from an online tutorial.  
I modified it to also allow decimal points or periods
It works great to validate my  inputs by disallowing anything other than numbers
http://www.javascriptkit.com/javatutors/javascriptkey3.shtml
*/

//Function that only allows numbers, backspace and periods to be typed
function numbersonly(e){
    var unicode=e.charCode? e.charCode : e.keyCode
    //if the key isn't the backspace key and period for decimal point(which we should allow)
    if ((unicode!=8) & (unicode !=46)) { 
    if (unicode<48||unicode>57) //if not a number
    return false //disable key press
    }
}

//calculation function
function calculatetotalcost() { 


	var miles = $('#miles').val();
	//if empty alert user to enter a value
	if (miles == '') {
       alert("You must enter the number of miles.");
       $("#miles").focus();
       return false;
    }

	var milespergallon = $('#milespergallon').val();
	//if empty alert user to enter a value
	if (milespergallon == '') {
       alert("You must enter your miles per gallon.");
       $("#milespergallon").focus();
       return false;
    }

	var costofgaspergallon = $('#costofgaspergallon').val();
	//if empty alert user to enter a value
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
    
    //calculate total cost of gas based on miles and gas price
	var costofgas = Math.round((miles/milespergallon) * costofgaspergallon);

	totalcost = parseFloat(costofgas) + parseFloat(food) + parseFloat(lodging) + parseFloat(attractions) + parseFloat(misc); 
	//round to 2 decimal points before displaying
	totalcost = totalcost.toFixed(2);

    //display total cost 
	$('#showtotalcost').html(totalcost);

}

//Functions in listeners for convertion tools

//Convert km to miles
$('#km').keyup(function() {

	//find what the user typed in
	var km = $(this).val();

	//convert to miles
	var kmtomiles = parseFloat(km/1.6);
	kmtomiles = kmtomiles.toFixed(2);

	//display the miles in the milesconvert field
	$('#milesconvert').html(kmtomiles);

});

//convert miles to km
$('#miles2').keyup(function() {

	//find what the user typed in
	var miles2 = $(this).val();

	//convert to km
	var milestokm = parseFloat(miles2 * 1.6);
	milestokm = milestokm.toFixed(2);

	//display the km in the kmconvert field
	$('#kmconvert').html(milestokm);

});

//comvert km per liters to miles per gallon
$('#kmperliter').keyup(function() {

	//find what the user typed in
	var kmperliter = $(this).val();

	//convert to miles per gallon
	var milespergallon = parseFloat((kmperliter * 3.78)/1.6);
	milespergallon = milespergallon.toFixed(2);

	//display the km in the milespergallonconvert field
	$('#milespergallonconvert').html(milespergallon);

});

//comvert miles per gallon to km per liter
$('#milespergal').keyup(function() {

	//find what the user typed in
	var milespergal = $(this).val();

	//convert to km per liter
	var kmperliter = parseFloat((milespergal * 1.6)/3.78);
	kmperliter = kmperliter.toFixed(2);

	//display the km in the kmperliterconvert field
	$('#kmperliterconvert').html(kmperliter);

});



