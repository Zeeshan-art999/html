//write a program  to that convert the array value multiply by two even index
//e.g[10,12,13,14,15]=>[20,12,26,14,30] 
var nums = [10,12,13,14,15];
for(var i = 0;i<nums.length;i++){
    if(i%2==0){
        nums[i]=nums[i]*2;
    }
}
console.log(nums);


// var names = ['zain','usman','ahmed'];
// names.splice(Math.floor(names.length/2),0,'Ali','Waqar');
// names.splice(0,1,'Honey');
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
//  for(var i =0;i<5;i++){
//     console.log(names[i]);
// }


//names[names.lenght+1] = 'Noman';
//Built in function:-
// names.push('Abu Bakar','Akbar');           //last 
// names.unshift('Zeeshan','Ali');          //start
// names.pop();                            // last delete ka liya or ak pop ak he delete karta  
// names.shift();                          // start  delete ka liya or agr do bar delete karna ho tu do bar shift use hota 
//console.log(names);