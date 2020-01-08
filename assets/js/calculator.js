// $(document).ready(function(){
//   $("#1").click(function(){
//     $("result").val();
//   });
//   $("#show").click(function(){
//     $("p").show();
//   });
// });

// $(document).ready(function() {
//     $('button').on('click', function(e) {
//         let btn = e.target.innerHTML;
//         if (btn >= '0' && btn <= '9') {
//             console.log('number');
//         } else {
//             console.log('operation');
//         }
//     });
// });
$(document).ready(function(){
$("#one,#two,#three,#four,#five,#six,#seven,#eight,#nine,#zero").click(function(){
       var str = $(this).val();
       $('#result').val($("#result").val() + str);
      
    });
    });


$("#sum").onclick(function(){
  	sum();
  });

function sum(){
	
}
