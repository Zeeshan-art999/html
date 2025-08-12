
//lists of loop:-
// var index = 0 ;
// while (index < 4) {
//     console.log("while",userNames[index]);
// index++;
// }

// index = 0;
// do{
//     console.log("do while",userNames[index]);
//     index++;
// }while(index < 4);

// for(var i = 0; i < 4; i++){
//     console.log("for",userNames[i]);
// }

// function printName(a,b,c){            //three parameter hota han (a=value,b=index,c=array)show hota ha
//     console.log("forEach",a,b,c);
//     if(a % 2 == 0){
//        return "even";         //yan tk agr "filter" ko check karna ha even/old kary ga retrun ma even/old ka jwb mil jai ga console ma
//     }
//     else{
//         return "old";
//     }
    
    //console.log("forEach",value,index);
//}
//var userNames = ['ALI','Ahmad','Asghar','Hamza'];   ya or nech same he hain  bs example ka liya changing ki
//var userNames = ['1','3','4','5'];

//var result = userNames.forEach(printName);  //=>kuch be return nai karta
//var result = userNames.map(printName);    //=>input array ki value ko kam nai kar skti bs change kar skti
// var result = userNames.filter(printName);   //=>input array kam kar skta  value change nai kar skta
// console.log("result",result);

let car = {
    company : 'Toyota',
    model : 'Camry',
    year : 2025 ,
}
//for in loop:-
for(const key in car){
    //const element = car[key];           //for in loop object pr jlta ha
    console.log(key,car[key]);
}                                            

//for of loop:-
// for (const element of userNames){        //=>for of loop array pr jlta
//     console.log(element);
// }

// var userNames = ['ALI','Ahmad','Asghar','Hamza'];

//Standard function:-
// function printName(a){
//     console.log("a",a);
// }
// printName("Zeeshan");

//Annonymous function:-
// (function (element){
//     console.log(element);
// })(" I am Naveed")

//Arrow function:-
// const printName=(a)=>{
//     console.log("Hey! I am arrow function ", a);
// }
// printName(Hamza);

//userNames.forEach((element,index)=>{
//         console.log(element,index);   =>forEach ko arrow ka sath be kar skta
//})