$(function() {
	$("button").click(function(){

		var firstname=$("#fname").val();
		var lastname=$("#lname").val();
	
		var email=$("#email").val();
		var room=$("#room").val();
		var guests=$("#guests").val();
		var hour=$("#hour").val();
		var min=$("#min").val();
		var time=$("#time").val();
		var month=$("#month").val();
		var day=$("#day").val();
		var year=$("#year").val();
        var pickup=$(".pickup:checked").val();
		var flight=$("#flight").val();
		var requests=$("#requests").val();
		
		var result = {
			"firstname" : firstname,
			"lastname": lastname,
			
			"email" : email,
			"room" : room,
			"guests" : guests,
			"hour" :hour,
			"min" : min,
			"time" :time,
			"month" :month,
			"day" : day,
			"year" :year,
			"pickup" :pickup,
			"flight" : flight,
			"requests" :requests,
			"month" :month
		}
		console.log(result);

		debugger;
		if (firstname =="" ||lastname==""||email==""||room==""||pickup==""||flight=="") {
			alert("all fields are required");
        	return;
		}
		alert("form submitted");

	});

});