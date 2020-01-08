
$(function(){
	$("#show").hide();
  $("#hide").click(function(){
    $("#new,#hide").hide();
    $("#show").show();
  });

  $("#show").click(function(){
  	$("#new").show();
  	$("#hide").show();

  	$("#show").hide();

  });


var a=12;
		$("p").css("fontSize",a);

	$("#inc").click(function(){
		if(a<50)
		{
		a=a+1;
		$("p").css("fontSize",a);
		}
        else
 		{
		$("p").css("color","red");
		}
	});
	$("#dec").click(function(){
		if(a>7)
		{
		a=a-1;
		$("p").css("fontSize",a);
		}
		else
 		{
		$("p").css("color","red");
		}
	
	});
	



function clock() {
        setTimeout(function() {
            var d = new Date();
            var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            $("#clock").html(time);
            clock();
        }, 1000);
    }

    clock();




    
});






