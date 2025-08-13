class Car{
    make = 'BMW';
    model = 'A3';
    year = 2011;    
    constructor(a,b,c){
        this.make = a;
        this.model = b;
        this.year = c;
    }
      start(val){
        console.log('Engine started',val);
    }
   stop(){
    console.log('Eingine stopped');
   }
}
        
class ElectricCar extends Car{
   speed = 100;
   constructor(a,b,c,d){
         super(a,b,c);    //super use hota ha=>child ma rahta huwa parents constructor ko call karna
         this.speed = d; 
   }
   charge(){
    console.log('Battery is charging');
   }
   start(){
    super.start(10);
    console.log('Electric engine started');
   }
}

let electricCar = new ElectricCar('Tesla','MOdels',2020,150);
electricCar.start();
electricCar.charge();
//electricCar.speed = 200;
console.log(electricCar);

//ak he car ak sa  zyada class sa connect ho tu (multipkes inheritense)
//agr parent sa aga child or pir us ka child ma same data trasfer h raha ho tu usa(multiples level inheritense) 
//agr parent or child ka mather same ho jai tu child parent ka mather ko override ka da ga