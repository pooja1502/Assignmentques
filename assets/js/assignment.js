

#q6
<!-- qes6 -->{
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
document.write(leapyear(2017));


}













<!-- ques10 -->
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}





<!-- ques12 -->
document.write(document.URL);







<!-- ques15 -->
function difference(n)
 {
    if (n <= 13)
        return (13 - n);
    else
        return (n - 13) * 2;
 }
document.write(difference(42))



<!-- ques16 -->
function sumTriple (x, y) {
  if (x == y) {
    return 3 * (x + y);
    } 






    
   else
   {
    return (x + y);
   }
 }
document.write(sumTriple(10, 20));
document.write(sumTriple(10, 10));



<!-- ques17 -->
function diff_num(n) {
  if (n <= 19) {
    return (19 - n);
    }
  else
    {
     return (n - 19) * 3;
    }
}

document.write(diff_num(12));
document.write(diff_num(19));




<!-- ques18 -->
function fun18(x,y){
  if(x==50 || y==50 || (x+y==50)){
  return true;

}
else
return false;
}
document.write(fun18(40,10));





<!-- ques19 -->
function testhundred(x) {
  return ((Math.abs(100 - x) <= 20) ||
   (Math.abs(400 - x) <= 20));
}

document.write(testhundred(10));




<!-- ques20 -->
function checkint(x, y)
{
  if ((x < 0 && y > 0) || ( x > 0 && y < 0)) 
    return true;
  }
  else 
  {
    return false;
  }
}
document.write(checkint(2,4));




<!-- ques21 -->
function string_check(str1) {
  if (str1.substring(0, 2).toLowerCase() === 'Py') 
  {
    return str1;
  }
  return "Py"+str1;
}

document.write(string_check("hthon"));



<!-- ques22 -->
function remove(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }

console.log(remove("purohit",0));





function slice(str){
  
  var str = "Hello World!";
var result = str.slice(2); 
document.write(result);
}





<!-- ques23 -->
function firstlast(str1) 
  {
  if (str1.length <= 1)
  {
    return str1;
  }
  mid_char = str1.substring(1, str1.length - 1);
  return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(firstlast('a'));





<!-- ques24 -->
function front_back(str)
{
  first = str.substring(0,1);
  return first + str + first;
}
console.log(front_back('a'));





<!-- ques25 -->
function checking(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}
document.write(checking(30));




<!-- ques27 -->
function java(str){
  if(str.length < 4 ){
  return false;
}
  var  str = str.substring(0,4);
  if(str == 'java')
  {
    return true;
  }
  else{
  return false;
}
}
document.write(java('javac'));





<!-- ques28 -->
function between(x,y){
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99))
  {
  return true;
}
  else{
  return false;
}
}
document.write(between(45,50));




<!-- ques29 -->
function between1(x,y,z){
if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)){
return true;
}
else{
return false;
}
}
document.write(between1(35,25,10));





<!-- ques31 -->
function compare34(x, y){ 
if( (x >= 40) && (x <= 60) && (y >= 40 && y <= 60) ){
if(x === y){
return "Numbers are the same";
}else if (x > y){
return x;
}else{
return y;
}
}else{
return "Numbers don't fit in range";
}
}

document.write(compare34(45, 60));





<!-- ques33 -->
function numbersrange(x, y) {
  if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) 
      || 
      (x >= 70 && x <= 100 && y >= 70 && y <= 100))
     {
    return true;
     } 
    else 
     {
    return false;
  }
}

document.write(numbersrange(44, 56));




<!-- ques34 -->
function maxrange(x, y){ 
if( (x >= 40) && (x <= 60) && (y >= 40 && y <= 60) ){
if(x === y){
return "Numbers are the same";
}else if (x > y){
return x;
}else{
return y;
}
}else{
return "Numbers don't fit in range";
}}
document.write(maxrange(40,60));





<!-- ques35 -->
function check_char(str, char)
 {
  ctr = 0;
  for (let i = 0; i < str.length; i++)
  {
    if (str.charAt(i) == char) {
      ctr++;
    }
  }
  return (ctr >= 2 && ctr <= 4);
}

document.write(check_char("Python", "y"));





<!-- ques36 -->
function lastdigit(x, y, z)
{
  if ((x > 0) && y > 0 && z > 0)
    {
     return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
   }
  else
    return false;
}

console.log(lastdigit(20, 30, 400));






<!-- ques39 -->
function sortaSum(x, y) 
 {
  const sum_nums = x + y;
  if (sum_nums >= 50 && sum_nums <= 80) {
    return 65;
  }
  return 80;
}

console.log(sortaSum(30,20));





<!-- quess40 -->
function check8(x, y) {
  if (x == 8 || y == 8) {
    return true;
  }

  if (x + y == 8 || Math.abs(x - y) == 8)
  {
    return true;
  }

  return false;
}

document.write(check8(7, 8));













<!-- ques41-->
function threenumbers41(x, y, z) {
  if (x == y && y == z) {
    return 30;
  }

  if (x == y || y == z || z == x) {
    return 40;
  }

  return 20;
}
document.write(threenumbers41(2, 8, 8));






<!-- ques44 -->
function compare44(x, y, z) 
{
if(x >= 20 && (x < y || x < z)) ||
(y >= 20 && (y < x || y < z)) ||
(z >= 20 && (z < y || z < x))
{
  return true;
}
else
return false;
}
document.write(compare44(23,14,17) )
;
}







<!-- ques47 -->
function test47(x, y, n) 
  {    
    if (n < 40 || n > 10000)
      return false;
    else
      if (n >= x && n <= y)
        return true;
      else
        return false;
  }
  document.write(test47(40,4000,45));





  <!-- ques48 -->
  function stringreverse(str) 
{
    return str.split("").reverse().join("");
}

document.write(stringreverse("w3resource"));



<!-- ques50-->
function capitalletter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

document.write(capitalletter("Write a JavaScript program to capitalize the first letter of each word of a given string."));




<!-- ques51 -->
function timeconvert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

document.write(timeconvert(71));




<!-- ques52 -->
function alphabet(str) { 

    return str.split("").sort().join("");
         
}

document.write(alphabet("Python"));





<!-- ques54 -->
function vowelCount(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowelCount("Python"));




<!-- ques57 -->
function string_copies (str, n) 
{
  if (n < 0)
    return false;
  else
  return str.repeat(n);
}
console.log(string_copies("abc", 5));







<!-- ques58 -->
function newstring(str)
{
  if (str.length >= 3) {
    result_str = str.substring(str.length - 3);
    return result_str + result_str + result_str + result_str;
  }
  else
    return false;
}
console.log(newstring("Python 3.0"));






<!-- ques59 -->
function firsthalf (str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  }
  return str;
}
document.write(firsthalf("Python"));




<!-- ques60 -->
function without_first_end(str) {
  return str.substring(1, str.length - 1);
}
console.log(without_first_end('JavaScript'));



<!-- qes61 -->
function concatenate(str1, str2) {
  str1 = str1.substring(1, str1.length);
  str2 = str2.substring(1, str2.length);
  return str1 + str2;
}

console.log(concatenate("PHP","JS"));





<!-- ques62 -->
function right_three(str) {
     if (str.length > 1)
       {
         return str.slice(-3) + str.slice(0, -3);
       }
  return str;
}
console.log(right_three("Python"));





<!-- ques63 -->
function middle_three(str) {
   if (str.length % 2!= 0) {
   
    mid = (str.length + 1)/2;
    return str.slice(mid - 2, mid + 1);
    }
  return str;
}
console.log(middle_three('abcdefg'));




<!-- ques65 -->
function end_script(str) {
  if (str.substring(str.length - 6, str.length) == 'Script') 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}
console.log(end_script("JavaScript"));




<!-- ques66 -->
function city_name(str) {
  if (str.length >= 3 && ((str.substring(0, 3) == 'Los')
                          || (str.substring(0, 3) == 'New')))
   
      {
          return str;
    }

  return '';
}

console.log(city_name("New York"));





<!-- ques68 -->
function twostring(str, n)
  {
    first_part = str.substring(0, n);
    last_part = str.substring(str.length - n);
    return first_part + last_part;
 }

document.write(twostring("JavaScript", 2));






<!-- ques72 -->
  function firstlastname72(nums)
   {
    var end = nums.length - 1;
    if (nums.length >= 1){
       return nums[0] == nums[end];
    } else {return false;}
}
document.write(firstlastname72([10,20,30]));




<!-- ques74 -->
function max74(nums) 
 {
    var max_val = nums[0] > nums[2] ? nums[0] : nums[2];

    nums[0] = max_val;
    nums[1] = max_val;
    nums[2] = max_val;

    return nums;
}
console.log(max74([20, 30, 40]));







<!-- ques80 -->
function swap80(arra) {
    [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
    return arra;
}
console.log(swap80([1, 2, 3, 4])); 
