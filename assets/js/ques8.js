 $(document).ready(function(){
       $("#addrow").click(function(){
            var id = $("#text").val();
            var username = $("#text1").val();
            var phoneno = $("#text2").val();
            var email = $("#text3").val();
            var image = $("#image").val();
            
            
            var info = "<tr><td><input type='checkbox' name='record'></td><td>" + id + "</td><td>" + username + "</td><td>"
            + phoneno + "</td><td>" + email + "</td><td>" + image + "</td></tr>";
            $("table tbody").append(info);
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



  
    
	// 	$("#add").click(function(){
	// 			 var listToAdd = listTempl($("#text").val());
	// 			 var listToAdd1 = listTempl1($("#text1").val());
	// 			 $("#mytable tbody").append(listToAdd + listToAdd1);
	// 			 $("#text").val("");
	// 			 $("#text1").val("");
	// 	  });


	// function listTempl(str) {
	// 	// $("#mytable tbody").append("<tr><td>" + a + "</td><td>" + b + "</td><td>" + c + "</td></tr>");
	// 	// return "<tr><td>" + str + "</td></tr>";
	// 	return '<td>' + str + '</td>';}

	// function listTempl1(str) {
	// 	return '<td>' + str + '</td>';}

 // });








		