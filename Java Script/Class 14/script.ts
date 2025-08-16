var a:number = 10;
var b:number = 20;

var totalPrice:number = a + b;
console.log("Total Price:"+totalPrice);

//Typescript types:-
var num1:number = 20;
var num2:number = 30;
var total:number = num1 + num2;
var UserName:string = "ase";    //issa kuch be aa skta ha number/boolean/variable.
var isUpdated:boolean = true;
var isUndefined:undefined = undefined;
var isnull:null = null;
var names:string[] = ["ase1","ase2","ase3"];
var numbers:number[] = [1,2,3,4];
var isUnknown:unknown = "unknown";
var anyType:any ="ase";   

var numArray:number[] = [1,2,3,4];
var stringArray:string[] =["a","b","c"];
var booleanArray:boolean[] =[true,false,true];
var anyArray:any[] =[1,"zain",true];
var data:[string,number,boolean] = ["ase",30,false];

//Typescript Functions:-
function add(a:number, b:number[]):number[]{
    return [a + b[0],7];
}

add(10,[1,22,3]);

// for(let index:number = 0; index < 20; index++ ){

// }

// let add2 = (a:number[] , b:number[] ):number[]=>{
//     return[1 + b[0]];
// }

//Objects
type ABC = {
    name:string,
    age:number,
}
 type XYZ={    
    isUpdate:boolean,
    email?:string,                 //option type
}
type SumType =ABC | XYZ
let user:SumType={               //   | union     & intersect=>ma agr ak na ho tu error ata    
    name:"ase",
    age:20,
    isUpdate:false,
}

type CustomType = string | number | boolean
let custom:CustomType = "ase";