//2:Assignment operators:-
//=,+=,-=,*=,/=,%=
var num=10;
num += 5; // num = num + 5 
num -=5; // num = num - 5
num *=2; // num = num * 2
num /= 2; // num = num / 2
num %=3; // num = num % 3
//console.log(num); 

//3:Comparison operators:-ture or false
//==,===,!=,!==,>,<,>=,<=
//var a = 10;  var a="10"; 
var b = 20;
var c=a==b; // false
var c=a!=b; // true
var c=a<b; // true
var c=a>b; // false
var c=a<=b; // true
var c=a>=b; // false
var c=a===b; // false 
 var c=a!==b; // true 
//console.log(c);

//4:Logical operators:-true or false
//&&,||,!

 //1.logical AND(&&)
     //T&& T = T
     //T&& F = F 
     //F&& T = F     
     //F&& F = F 
//2.logical OR(||)
       // T|| T = T
        //T|| F = T 
        //F|| T = T     
        //F|| F = F
//3.logical NOT(!)
        //!T = F
var x = 10;
var y = 20;
//var result=! (2 - x > 5 * 2 && y < 15 % 2 || x == 10 && y== 20 +10);
//var result =!(2*2 !=5 && 10 <15%5 -5 || 10 >=10 && 3+17 <=20);  
//console.log(result); // false

//5:ternary operator:-
//?:
//var result=10<20? "Naveed":"Ali"    =>agr true ho tu phly wala colun ata or agr false ho tu dusra wala ata
//var result=2+2 >=4?
//console.log(result);

   farhrenheit (F)=(Temperature in degree Celsius (C) * 9/5) + 32;
   var tempincelsius = 100;
   var tempincelsius = (tempincelsius * 9/5) + 32;
   console.log("Temperature in Fahrenheit: " + tempincelsius + "°F");