$(function() {
	$("button").click(function(){

		var firstname=$("#firstname").val();
		var lastname=$("#lastname").val();
		var email=$("#email").val();
		var areacode=$("#areacode").val();
		var phoneno=$("#phoneno").val();
		var amount=$("#amount").val();
		var message=$("#message").val();
		

		var result = {
			"firstname" : firstname,
			"lastname": lastname,
			"email" : email,
			"areacode" : areacode,
			"phoneno" : phoneno,
			"amount" : amount,
			"message" :message
			
		}
		console.log(result);

		debugger;
		if (firstname =="" ||lastname==""||email==""||areacode==""||phoneno==""||amount=="" ||message=="") {
			alert("all fields are required");
        	return;
		}
		alert("form submitted");

	});

});