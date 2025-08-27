class Car{
        make;
        model;
        year;
        constructor(a,b,c){
            this.make = a;           //class ka andr mather bolta hain or agr class sa bahir ho tu function
            this.model = b;
            this.year = c;
            console.log('Car created',a,b,c,);
        }  
        start(){
            console.log('Engine started');
        }
        stop(){
           console.log('Engine stop');
        }
}
let car = new Car("BWM","A3",1990,22223);
let car2 = new Car("Honda","civic",2024);    //ak object ki changing sa kise dosra object pr koi fark nai parta   
//car2.make = "Mercedes"
car.start();
car2.stop();