


$(document).ready(function(){
	$("#button").click(function(){
var user= $("#username").val();
var pass= $("#password").val();

if(user == "pooja@15" && pass == 12345){
	alert("success");
}
else
alert("username or password does'nt match");
});


        $("#addrow").click(function(){
            var username = $("#text").val();
            var password = $("#text1").val();
            var abc = "<tr><td><input type='checkbox' name='record'></td><td>" + username + "</td><td>" + password + "</td></tr>";
            $("table tbody").append(abc);
            $("#text").val("");
	 		$("#text1").val("");
        });
       
        // Find and remove selected table rows
        $("#deleterow").click(function(){
            $("table tbody").find('input[name="record"]').each(function(){
                if($(this).is(":checked")){
                    $(this).parents("tr").remove();
                }
            });
        });
    });    

