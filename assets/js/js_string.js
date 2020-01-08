

ques1
 var str = "hello";
  if(typeof str == 'string'){
 	document.write(str + " is a string <br/>");
  }else{
 	document.write(str + " is not a string <br/>");
  }




 ques2
 function input(str){
 	var abc=str.length;
 	if(abc === 0)
 	{
 		return true;
 	}
 	else return false;
 }
 console.write(input('abc'));




// ques3
function myFunction() {
   var str = "How are you doing today?";
   var res = str.split(" ");
   document.getElementById("ques3").innerHTML = res;
 
 }



// // ques4
 function input(str)
 {
 
 	res= str.substring(1,4);
 	return res;

 }document.write(input("hellooo"));



// // ques8
 function myFunction1() {
   var str = "hello World!";
   var arr= str.substring(1,str.length);
   var res = str[0].toLowerCase();
   document.getElementById("ques8").innerHTML = res;
   document.write(res + arr);
  }



 function capitalizeFLetter() { 
          var input = document.getElementById("input"); 
          var x = document.getElementById("div"); 
          var string = input.value; 
          x.innerHTML = string.charAt(0).toUpperCase() + 
           string.slice(1); 
	



// ques16
text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
console.log(text_truncate('We are doing JS string exercises.'))




// ques15
function humanize(num){
if(num.length!= 11 && (num % 10)==1){
		return num + "st";
	}
	else if(num.length!= 12 && (num%10)==2){
		 return num + "nd";
		}
	else if(num.length!= 13 && (num%10)==3){
		 return num + "rd";
		}
		else return num +"th";

	}console.log(humanize(50));



// ques46
function stringcheck(str) {
  if (str.substring(0, 5)==='hello') 
  {
    return true
  }
  else{
  return false;}
}

document.write(stringcheck("hello How are you?"));




// ques47
function stringcheck(str) {
  if (str.substring(str.length-5, str.length)==='hello') 
  {
    return true
  }
  else{
  return false;}
}

document.write(stringcheck("hello How are you?"));

            

function tocheck(str)
{
	if (str.substring(3,1)==str.toUpperCase()) {
		return true;
	}
	else
		return false;
}
document.write(tocheck("HeLlOpooJA"));





function splice1(str){
	var=str.splice(1,10);
	return var;

}
document.write(splice1("hello hii how r u??"));







for (var ​i = 0; i<letters.length; i++) {
    if (letters[i] !== letters[i].toUpperCase()
        && letters[i] === letters[i].toLowerCase()) {
        console.log(letters[i] + ": " + true);
    } else {
        console.log(letters[i] + ": " + false);
    }
}​



Q44

 function isLowerCaseAt(str, index) {
     return str.charAt(index).toLowerCase() === str.charAt(index);
 }
 console.log(isLowerCaseAt('Js STRING EXERCISES', 1));




Q43
 function isUpperCaseAt(str, index) {
     return str.charAt(index).toUpperCase() === str.charAt(index);
 } console.log(isUpperCaseAt('Js STRING EXERCISES', 1));






// ques10
 function switchCase(string){
    var swap= [];
    for(var i = 0; i < string.length; i++){
        if(string != " "){
            
            if(string[i] == string[i].toUpperCase()){
              
                swap.push(string[i].toLowerCase());
                
            }
            else{
                swap.push(string[i].toUpperCase());
                }
            }
    }
    return swap.join("");
}

console.log(switchCase("i LOVE PiZzA"));





// ques13
repeat = function repeat(str, count) {
    if(typeof(count) == "undefined") {
    count =1;
  }
  return count < 1 ? '' : new Array(count + 1).join(str);
    }
console.log(repeat('Ha!'));



// ques14
insert = function insert(main_string, ins_string, pos) {
   if(typeof(pos) == "undefined") {
    pos = 0;
  }
   if(typeof(ins_string) == "undefined") {
    ins_string = '';
  }
   return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
    }
console.log(insert('We are doing some exercises.',"java",5));




// qyes22
function subStrAfterChars(str, char, pos)
{
  if(pos=='b')
   return str.substring(str.indexOf(char) + 1);
  else if(pos=='a') 
   return str.substring(0, str.indexOf(char));
  else
  return str;  
}

console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));




// ques23
function strip(str) {
    return str.replace(0, '');
}

console.log(strip('w3resource '));





// ques24
function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4));




// ques25
function alphabetize_string(str) 
{
	
return str.split('').sort();

}
console.log(alphabetize_string('United States'));






Q39

// function Uncapitalize(str1) {
//     return str1.charAt(0).toLowerCase() + str1.slice(1);
// }
// console.log(Uncapitalize('Js string exercises'));




Q38
// function case_search(str, search_str) {
//     var result = str.search(new RegExp(search_str, "i"));

//     if (result > 0)
//         return 'Matched';
//     else
//         return 'Not Matched';
// }

// console.log(case_search('JavaScript Exercises', 'exercises'));

// console.log(case_search('JavaScript Exercises', 'Exercises'));

// console.log(case_search('JavaScript Exercises', 'Exercisess'));







Q25
// function alphabetize_string(str) 
// {
    
// return str.split('').sort().join('').trim();

// }
// console.log(alphabetize_string('United States'));






Q24
// function truncate(str, no_words) {
//     return str.split(" ").splice(0,no_words).join(" ");
// }

// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));