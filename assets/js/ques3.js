
$(function(){
$("#submit").click(function() {
                var state = $("#select1").val();
                
                if (state == "madhyapradesh")
                 {
                 	alert("you chose mp");
                    // $("#result").html(number + " is an even no");
                 }
                 else 
                     $("#result").html(number + " is an odd no");
                
                // }
                // else
                //     alert("please enter number only");
            });














// $(function(){

//  var state = $("#select1").val();
// // $("#select1").click(function(){
// if (state == "madhyapradesh") {
// 	alert("heyy");
// }
// });



// var state=[{state_id:1,name:"madhyapradesh"},{state_id:2,name:"rajasthan"},
// {state_id:3,name:"gujarat"}];

// var city=[{city_id:1,name:"indore",state_id:1},
// {city_id:1,name:"ujjain",state_id:1},
// {city_id:1,name:"dewas",state_id:1},
// {city_id:2,name:"jaipur",state_id:2},
// {city_id:2,name:"udaipur",state_id:2},
// {city_id:2,name:"jodhpur",state_id:2},
// {city_id:3,name:"surat",state_id:3},
// {city_id:3,name:"ahmedabad",state_id:3},
// {city_id:3,name:"bhuj",state_id:3},
// ]

// if(city.city_id == state.state_id){
// $("#select2").text();
// }
});


