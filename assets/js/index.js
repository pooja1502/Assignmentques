$(function() {
	$("button").click(function(){

		var firstname=$("#firstname").val();
		var lastname=$("#lastname").val();
		var phoneno=$("#phoneno").val();
		var email=$("#email").val();
		var address=$("#address").val();
		var city=$("#city").val();
		var state=$("#state").val();
		var pincode=$("#pincode").val();
		var country=$("#country").val();
		var gender=$(".gender").val();

		var result = {
			"firstname" : firstname,
			"lastname": lastname,
			"phoneno" : phoneno,
			"email" : email,
			"address" : address,
			"city" : city,
			"state" :state,
			"pincode" : pincode,
			"country" :country,
			"gender" :gender
		}
		console.log(result);

		debugger;
		if (firstname =="" ||phoneno==""||address==""||city==""||state==""||gender=="") {
			alert("all fields are required");
        	return;
		}
		alert("form submitted");

	});

});