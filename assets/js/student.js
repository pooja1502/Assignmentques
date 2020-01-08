$(function() {
	$("button").click(function(){

		var fname=$("#fname").val();
		var mname=$("#mname").val();
		var lname=$("#lname").val();
		var month=$("#month").val();
		var date=$("#date").val();
		var year=$("#year").val();
		var gender=$("#gender").val();
		var address1=$("#address1").val();
		var address2=$("#address2").val();
		var city=$("#city").val();
		var state=$("#state").val();
		var postal=$("#postal").val();
		var country=$("#country").val();
		var email=$("#email").val();
		var mareacode=$("#mareacode").val();
		var mphoneno=$("#mphoneno").val();
		var pareacode=$("#pareacode").val();
		var pphoneno=$("#pphoneno").val();
		var wareacode=$("#wareacode").val();
		var wphoneno=$("#wphoneno").val();
		var company=$("#company").val();
		var courses=$("#courses").val();
		var comments=$("#comments").val();

		var result = {
			"firstname" : fname,
			"middlename" : mname,
			"lastname": lname,
			"month" : month,
			"date": date,
			"year" : year,
			"gender" : gender,
			"address1" : address1,
			"address2" : address2,
			"city" : city,
			"state" :state,
			"postal" : postal,
			"country" :country,
			"email" : email,
			"mareacode" : mareacode,
			"mphoneno" :mphoneno,
			"pareacode" : pareacode,
			"pphoneno" : pphoneno,
			"wareacode" : wareacode,
			"wphoneno" : wphoneno,
			"company" : company,
			"courses" : courses,
			"comments" : comments
		}
		console.log(result);

		debugger;
		if (fname =="" ||city==""||email==""||company==""||courses==""||comments=="") {
			alert("all fields are required");
        	return;
		}
		alert("form submitted");

	});

});