$(document).ready(function(){
$("#rect1").hide();
$("#square1").hide();
$("#circle1").hide();
$("#triangle1").hide();

$("#rect").click(function(){
  $("#rect1").show();
  $("#circle1").hide();
   $("#square1").hide();
   $("#triangle1").hide();
    });

    $("#square").click(function(){
    $("#square1").show();
    $("#rect1").hide();
    $("#circle1").hide();
    $("#triangle1").hide();
      });

      $("#circle").click(function(){
      $("#circle1").show();
      $("#rect1").hide();
      $("#square1").hide();
      $("#triangle1").hide();
      });

        $("#triangle").click(function(){
        $("#triangle1").show();
        $("#circle1").hide();
        $("#rect1").hide();
        $("#square1").hide();
        });


//Area of rec 
     $("#area").click(function(){
     var a = $("#width").val();
     var b = $("#height").val();
     $("#result").val (a * b);
    });
  //Circumference of rec
   $("#circumference").click(function(){
   var a = $("#width").val();
   var b  = $("#height").val();
   $("#result").val (2 *(a) + 2 * (b));
   });


//Area of square
            $("#area_square").click(function() {
                var a = $("#width_square").val();
                $("#result_square").val((a) * (a));
            });
            //Circumference of square
            $("#circumference_square").click(function() {
                var a = $("#width_square").val();
                $("#result_square").val(4 * (a));
            });


 //Area of circle
      $("#area_circle").click(function() {
        var a = $("#radius_circle").val();
        $("#result_circle").val((22 / 7) * (a) * (a));
      });
      //Circumference of circle
      $("#circumference_circle").click(function() {
        var a = $("#radius_circle").val();
        $("#result_circle").val((2) * (22 / 7) * (+a));
      });         


 // Area of triangle
            $("#area_triangle").click(function(){
              var a = $("#length1").val();
              var b = $("#breadth1").val();
              $("#result_triangle").val(((a) * (b))/2);
            });
            // circumference of triangle
             $("#circumference_triangle").click(function(){
              var a=$("#side1").val();
              var b=$("#side2").val();
              var c=$("#side3").val();
              $("#result_triangle").val((+a) + (+b) +  (+ c));
            });

           
});