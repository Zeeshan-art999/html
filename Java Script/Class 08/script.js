//var car = ["2021","honda","red",22230,"2022",toyota,black,36464,"2023","suzuki","blue",74665];

//price ---> 22230
//company --->honda
//modal --->2021
//color --->red

var car = {
     price : 22230,
    company : "honda",
     modal : 2021,
     color :"red"
}

car.automatic = true ;
car.company = "toyota";
delete car.color;
//console.log(car);

var car2 = {
     price : 36464,
     company : "toyota",
     modal : 2022,
     color:"black"
}
var car3 = {
     price : 74665,
     company : "suzuki",
     modal : 2021,
     color:"blue"
}

    var cars = [{
    price : 223304,
    company : "honda",
    modal : 2021,
    color :"red"
    },{
    price : 454684,
    company : "toyota",
    modal : 2022,
    color:"black"
    },{                                               
    price : 868650,
    company : "suzuki",
    modal : 2021,
    color:"blue"
    }];
    cars.push({
    price : 725683,
    company : "suzuki",
    modal : 2021,
    color:"blue"
    });
     var car1 = cars[0];
    //console.log(cars[0].company+ " " + cars[0].price);
    //console.log(cars[1].company+ " " + cars[1].price);
    //console.log(cars[2].company+ " " + cars[2].price);
    
for (var i=0; i < cars.length;i++){
    console.log(cars[i].company + " " + cars[i].price);
}
    
    
    

    