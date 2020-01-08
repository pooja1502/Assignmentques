$(function() {
	$("button").click(function(){

		var array = []; 
            $("input:checkbox[name=symptoms]:checked").each(function() { 
                array.push($(this).val()); 
            });

		var firstname=$("#firstname").val();
		var lastname=$("#lastname").val();
		var areacode=$("#areacode").val();
		var phoneno=$("#phoneno").val();
		var asthma=$("#asthma").val();
		var cancer=$("#cancer").val();

		// var chestPain=$("#chestPain").val();
		// var cardiacdisease=$("#cardiacdisease").val();
		// var respiratory=$("#respiratory").val();
		// var cardiovascular=$("#cardiovascular").val();
		var medication=$(".medication:checked").val();
		var allergies=$(".allergies:checked").val();
		var gender=$(".gender:checked").val();
		var tobacco=$("#tobacco").val();
		var drug=$("#drug").val();
		var alcohol=$("#alcohol").val();


 // $('button').on('click', function() { 
 //            var array = []; 
 //            $("input:checkbox[name=symptoms]:checked").each(function() { 
 //                array.push($(this).val()); 
 //            });

		
		var result = {
			"firstname" : firstname,
			"lastname": lastname,
			"areacode" : areacode,
			"phoneno" : phoneno,
			"asthma" : asthma,
			"cancer" : cancer,
			"symptoms":symptoms,
			// "chestPain" :chestPain,
			// "cardiacdisease" : cardiacdisease,
			// "respiratory" :respiratory,
			// "cardiovascular" :cardiovascular,
			"medication" :medication,
			"allergies" :allergies,
			"gender" :gender,
			"tobacco" :tobacco,
			"drug" :drug,
			"alcohol" :alcohol
		}
		console.log(result);

		debugger;
		if (firstname =="" ||lastname==""||phoneno==""||medication==""||allergies==""||gender=="") {
			alert("all fields are required");
        	return;
		}
		alert("form submitted");

	});

});