console.log("Hello World1");
try{
    var y = x * 5;
}
catch(error){
    console.log(error);
}
finally{
    console.log("Finally block")       //=>finally na jalna he jalna agr error b aai
}
var sum = 5 * 5;
console.log("Hello World2");
console.log("Hello World3");
console.log("Hello World4");

//var title ="I love Javascript";
//let title2 ="I love Javascript";
//const title3 ="I love Javascript";//isma value change nai hoti agr ho tu error aa jata jasa necha aya
//title3 ="I hate Javascript";// Assignment to constant variable.

//3 type of Scopes:-
//global Scope var
//local Scope  =>function{}
//block scope  =>{}

//     var x= 5;
//   let abc = 10;
//  if(true){
//     var x= 5;
//     let y = 10;
//     const z = 20; 
//  }
// console.log(x);

// function myfunction(){
//     var x = 3;
//     let y = 10;
//     const z = 15;
// }
// console.log(x);// ReferencesErroe:x is not defined



//string built-in methods:-

//var title = "I love JavaScript";
// console.log(tittle.toUpperCase());//I LOVE JAVASCRIPT
// console.log(tittle.toLowerCase());//i love javascript
// console.log(tittle.length);//17
// console.log(tittle.charAt(0));//I
// console.log(tittle.charAt(1));//
// console.log(tittle.charAt(2));//l
// console.log(tittle.charCodeAt(2));
// console.log(tittle.slice(2,6));//love
// console.log(tittle.slice(2));//love Javascript
// console.log(tittle.indexOf("love"));//2
// console.log(tittle.indexOf("hate"));//-1
// console.log(tittle=tittle.replace("love","like"));//I like JavaScript
// console.log(tittle.split(" "));//[ 'I', 'love', 'JavaScript' ]   =>var ma(.)ho tu isko dalivater bolta
// console.log(tittle.split(""));//['I', ' ', 'l', 'o', 'v','e', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
// console.log(tittle.trim());        //ya side sa space khtm karta ha
// console.log(tittle.concat("!!!"));//I love JavaScript!!!
// console.log(tittle.repeat(2));//I love JavaScriptI love JavaScript
// console.log(tittle.startsWith("I"));//true
// console.log(tittle.endsWith("I"));//false
// console.log(tittle.includes("like"));//ture
// console.log(tittle.includes("hate"));//false
// console.log(tittle.search("like"));//2
// console.log(tittle.search("hate"));//-1
// console.log(tittle.match(/like/g));//["like"]
// console.log(tittle.match(/hate/g));//null
// console.log(tittle.match(/like/g).length);//1
// console.log(tittle.match(/hate/g).length);//TypeError:Cannot read the null
// console.log(tittle.match(/like/g).index);//2
// console.log(tittle.match(/like/g).input);// I like Javascript

// var newTitle=""
// for (var index = 0; index < title.length; index++) {
//     const char = title[index];

//     if(char =="l" && title[index + 3] =="e"){
//         newTitle +="hate";
//         index +=3;
//     }else{
//         newTitle += char;
//     }
// }
// console.log(newTitle);// I hate Javascript

// //Date Built-in methods:-
// var date =new Date();
// console.log(date); //2025-08-09T00:26:36.474Z
// console.log(date.getDate());//8
// console.log(date.getDay());//5
// console.log(date.getFullYear());//2025
// console.log(date.getHours());//17
// console.log(date.getMilliseconds());//960
// console.log(date.getMinutes());//33
// console.log(date.getMonth());//7
// console.log(date.getSeconds());//20
// console.log(date.getTime());//1754699772051
// console.log(date.getTimezoneOffset());//420
// console.log(date.getUTCDate());//9
// console.log(date.getUTCDay());//6

// //SET METHODS:-
// var date = new Date();
// console.log(date.getFullYear());//2024
// date.setFullYear(2024);
// console.log(date.getFullYear());//2024
// date.setMonth(11);
//  console.log(date.getMonth());//11
//  date.setDate(8);
//  console.log(date.getDate());//8
//  date.setHours(7);
//  console.log(date.getHours());//7

// formatteDate ="${date.getdate()}/${date.getmonth()}/${date.getyear()}"
// console.log(formatteDate);//8/7/2025







