// $(function(){
// 	function readURL(input){
// 		if (input.files && input.files[0]) {
// 			var reader = new FileReader();
// 			reader.onload = function(e){
// 				$('#previewImage').attr('src',e.target.result);
// 			}

// 			reader.readAsDataURL(input.file[0]);
// 		}
// 	}


// $("#uploadImage").change(function(){
// 	readURL(this);

// });

// $("button").click(function(event){
// $("#donationForm").validate();

// });
// });

$(function() {
 	$("button").click(function(){
	event.preventDefault();

 		var studentid=$("#studentid").val();
 		var studentemail=$("#studentemail").val();
 		var course=$("#course").val();
 		var instname=$("#instname").val();
 		var one=$(".one:checked").val();
 		var two=$(".two:checked").val();
 		var three=$(".three:checked").val();
 		var four=$(".four:checked").val();
 		var five=$(".five:checked").val();
 		var six=$(".six:checked").val();
 		var seven=$(".seven:checked").val();
 		var eight=$(".eight:checked").val();
 		var nine=$(".nine:checked").val();
 		var ten=$(".ten:checked").val();
 		var eleven=$(".eleven:checked").val();
 		var twelve=$(".twelve:checked").val();
		

		var result = {
 			"studentid" : studentid,
 			"studentemail": studentemail,
 			"course" : course,
 			"instname" : instname,
 			"one" : one,
 			"two" : two,
 			"three" :three,
 			"four" : four,
			"five": five,
 			"six" : six,
 			"seven" : seven,
 			"eight" : eight,
		    "nine" : nine,
 			"ten" :ten,
 			"eleven" :eleven,
 			"twelve" :twelve
			
 		}
 		console.log(result);
		debugger;
 		if (studentid =="" ||studentemail==""||course==""||instname==""||one==""||two=="" ||three==""||four=="" ||five=="" ||six=="" ||seven=="" ||eight=="" ||nine=="" ||ten=="" ||eleven=="" ||twelve=="" ){
			alert("all fields are required");
         	return;
		}
 		alert("form submitted");

 	});

});