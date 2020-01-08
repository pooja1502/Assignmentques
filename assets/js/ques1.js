// $(function(){


// $("#button").click(function(){

//     var num = $("#number").val();
//     for(i=1;i<=10;i++){
//         document.write(num + "*" + i+ "=" + num*i + "<br>");
      
//      // $("#result").html(num + "*" + i+ "=" + num*i);
// }

// });
// });
$(function(){


$("#button").click(function(){

    var num = $("#number").val();
    if(num>1 && typeof(num)==number){
    for(i=1;i<=10;i++){
        document.write(num + "*" + i + "=" + num*i + "<br>");
     
      // $("#result").html(num + "*" + i+ "=" + num*i);
}}
else
alert("number must be greater than 1 and should'nt be a string");

});
});



























 // text+=num*i;
        // $("#result").text($(text).val());