//syntax for oop
//object literal method
// let variable eg cars = {
//  id: 1,
//  model:2005,
//  color: "blue"
//  engine: 1122344,
//  description: "it is a nice car"
//}
// for(let anything in variable eg cars){

// }



let car = {
    id: 1,
    model: 2005,
    color: "blue",
    engine: 1122344,
    description: "it is a nice car"
}
for (let anything in car) {
    console.log(anything)
    console.log(car[anything])
}
// console.log(car.description) 
// console.log(car.color) 

//instance of object method

// let car = new Object();
// car.id = 1;
// car.engine = 244466666;
// car.description = "its a nice car"
// car.color = "blue"

// console.log(car.color);
// console.log(car.description);
// console.log(car.id);


// object constructor function method
function cars(id, name, model, description, color, engine) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.model = model;
    this.color = color;
    this.engine = engine;
}
let toyota = new cars(1, "benz", 2004, "nice car", "candy", 122345)
let benz = new cars(2, "benz", 2005, "nicer car", "blue", 1234555)

console.log(benz.model)

//classes in java
//sytax
// class anything{
//     constructor(anything, anything, anything, anything, anything, anything){
//         this.id = id;
//         this.description = description; 
//         this.model = model;
//         this.color = color;
//         this.engine = engine;
//         this.name = name;
//     }
// note : your items should be = thier duplicate eg this.item = item

// }
class anything {
    constructor(name, age, address, position, role, id) {
        this.id = id;
        this.address = address;
        this.age = age;
        this.position = position;
        this.role = role;
        this.name = name;
    }

}

let peter = new anything( "peter", 16, "ada george", "student", "learn", "0571" )
let chinaka = new anything( "chinaka", 30, "ada george", "instructor", "teach", "9579" )

console.log(peter.name)

//class inheritance in java script
// syntax
// class anything1 extends anything{
//     constructor (name, age, address, position, role, id, gender, DOB)//anything can be in there
//         super(name, age, address, position, role, id); // these are only for the items from the parent
//         this.gender = gender;
//         this.DOB = DOB;
// }

//let peter = new anything( "peter", 16, "ada george", "student", "learn", "0571","male","25/04/09")
class anything1 extends anything{
    constructor (name, age, address, position, role, id, gender, DOB){    
        super(name, age, address, position, role, id); 
        this.gender = gender;
        this.DOB = DOB;
    }
}

let Peter = new anything1( "peter", 16, "ada george", "student", "learn", "0571","male","25/04/09")

console.log(Peter)