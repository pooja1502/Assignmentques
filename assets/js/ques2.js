
$(function(){
$("#button").click(function() {
                var number = $("#num").val();
                // if(typeof(number)==number){
                if (number % 2 == 0)
                 {
                    $("#result").html(number + " is an even no");
                 }
                 else 
                     $("#result").html(number + " is an odd no");
                
                // }
                // else
                //     alert("please enter number only");
            });





    $("#button1").click(function() {
                var number = $("#num").val();
                // if(typeof number == 'number'){

                if (number == 1 || number == 2) {
                    $("#result1").html(number + " is a prime number");
                    return;
                }

                for (i = 2; i < number; i++) {
                    if (number % i == 0) {
                        $("#result1").html(number + " is not prime no");
                        break;
                    } 
                    else 
                       $("#result1").html(number + " is a prime number");
                    
                }
            // }
            // else alert("not a num");
             
            });
        

});





















// var abc = 65;
// if(typeof abc == 'number')
//     document.write(abc + "is no");
// else document.write("no nu");






































