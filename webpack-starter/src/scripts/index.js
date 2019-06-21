// ********    CONST VS LET
console.log("**************  CONST VS LET *****************");
if (true) { var foo = 9; }

if (true) { let bar = 10; }

console.log("'var' foo: ", foo," pollutes global namespace...");
try {
    bar;
} catch(error) {
    console.log("ReferenceError:  'let' bar: does NOT pollute global namespace...");
}


// **************  Rest Parameters **************
console.log("**************  Rest Parameters *****************");

// Use spread operator in parameters parents to create an array
// Note: 'Rest' parameter MUST BE LAST in parameter list
function sendCars(day, ...allCarIds){
    allCarIds.forEach( id => console.log(day, id) );
}

sendCars('Monday',100,200,555);

// ****************  Destructuring Arrays ******************
console.log("**************  Destructuring Arrays *****************");


let carIds = [100,101,102];
let car1, car2, car3;
[car1, car2, car3] = carIds;   //  <----  Here is destructuring
let ourCars = [car1, car2, car3] ;
const showCars = ourCars.map( id => `carId: ${id}`) ;
console.log( "Our Cars: ", showCars );
let remainingCars;
let carId2s = [10,20,30];
[car1, ...remainingCars] = carId2s;  // <---  can replace with [, ...remainingCars] to skip first element
console.log("car ids: ",[car1].concat(remainingCars));


// **************** Destructuring Objects ***********************
console.log("**************  Destructuring Objects *****************");

let car = { id: 5000, style: 'convertible' };

let {id, style} = car;
console.log(`id: ${id} style: ${style}`);

let ordObj = {"first": '1st', "second": '2nd'};
let first, second;
// Problem!!!  ---> {first,second} = ordObj;
({first,second} = ordObj);    // <--- THIS Solves Problem!!!
console.log(first, second);


// ****************  Spread Syntax    **************************
console.log("**************  Spread Syntax *****************");

const startCars = (car1, car2, car3) => console.log("car codes: ",car1, car2, car3);

// both Strings and Arrays are itterables...

let carCodes = '123';   // <--- 'Spreads' a string
let moreCodes = [100,200,300];   // <--- Also 'spreads' an array
startCars(...carCodes);
startCars(...moreCodes);


// ********************  typeof()   ****************************
console.log("**************  typeof() *****************");

typeof(1); // number
typeof(true); // boolean
typeof('Hello'); // string
typeof( function(){} );  // function
typeof({}); // object
typeof(null); // object
typeof(undefined);  // undefined
typeof(Nan);  // number


// *********************  Common Type Conversions *************************
console.log("**************  Common Type Conversions *****************");

/**
toString:    foo.toString();                 // foo becomes a string
parseInt:    Number.parseInt('55', 10);      // converts '55' to base 10 55
to Float:    Number.parseFloat('55.44');     // converts string to float
**/

// parseInt and parseFloat stop parsing when they hit non digital characters
console.log(Number.parseInt('123abc'));     //  123
console.log(Number.parseFloat('123.456abcdef'));   // 123.456
console.log(Number.parseInt('abc123'));  // NaN Error!!!!!  Must START with digit!


// ********************  Loop Controls  ***************************************
console.log("**************  Loops Controls *****************");

/**  continue and break statements
**/

//  They actually don't mention that array.forEach won't let you use a continue or break
//  statement...


// ******************    Equality Operators  (Duh!) *********************

//   ===   without type conversion
//   ==    allows type conversion
//   !=    allows type conversion
//   !==   no type conversion allowed
//
//   ****************     Unary Operators **************************************
//
//   ++var1
//   var1++
//   --var1
//   var1--
//   +var1     <-- converts to number
//   -var1     <-- changes sign of number

var var1 = 8;
let ops = [ var1, ++var1, var1++, var1, --var1, var1--, +var1.toString(), -var1];
ops.map( elem => console.log("Unary Op var: ",elem) );

// ********************  Boolean Operators (logical operators)  *******************

console.log("**************  Boolean Operators *****************");

// if ( var1 > 5 && var2 < 100 )
// if ( var1 > 5 || var2 < 100 )
// if ( var1 > 5 || var2 < 100 && var3 === 5 )   <===  '&&' has HIGHER PRECIDENCE so this
// will wind up being (var1 > 5) OR (var2 < 100 && var3 === 5)
//
// !var1   negates or converts to opposite of var1

if (true || false && false)  console.log("Evaluates to true...");
if ((true || false) && true)  console.log("Evaluates to true...");


// ********************* Relational Operators  ************************************
//
//   When using Strings it goes by ASCII values of characters
//
//   "Zoo" < "alphabet"     <--  Uppercase characters are Less Than Lowercase characters
//
//   Solution:  Simply convert both strings to Upper OR Lower case.
//
//
//   ********************   Conditional Operator  **********************************
console.log("**************  Conditional Operators *****************");
//
//   This is just the TERNARY Operator!!!!
//
console.log( 5>4 ? 'greater' : 'lesser' );


// **********************   Assignment Operators ************************************
//
//     +=   
//     -=  
//     /= 
//     *=    shows the product
//     %=    shows the remainder
//     <<= 1      bit shift operator by number of positions  
//     >>= 1      shift bits in opposite direction
//     >>>= 1     shift bits to right but keep sign
let year = 1964;
console.log( year %= 5 );     //<===   Try out the different operators...



// **********************  Operator Precidence   ************************************
// Find the MDN chart with a summary of operator precidence

// **********************  Function Scope ************************************
console.log("**************  Function Scope *****************");

function startCar(carId){
    let message = "Starting...";  // if we use var "message" will get hoisted and NOT be out of scope.
}
startCar(123);
//console.log("Error!  Out of scope!  Reference error: ",message);   

function newStartCar(carId){
    let message = "Starting...";
    let startFn = function turnKey(){
        let message = "Override Message!";
        console.log("message: ",message);
    };
    startFn();
}
startCar(123);

// **********************  IFFE Pattern ************************************

console.log("**************  IFFE Pattern *****************");

let app = (function(){
    let carId = 123;
    console.log("in function...");
    return {};
})();

console.log("app: ",app);

// **********************  Closures ************************************

console.log("**************  Closures with IIFE *****************");

let app1 = (function(){
    let carId = 123;
    let getId = function(){
        return carId;
    };
    return {
        getId: getId
    };
})();

console.log(app1.getId());

// **********************  Call Apply and Bind ************************************

console.log("************** Call Apply and Bind *****************");

let obj1 = {
    carId: 123,
    getId: function(){
        return this.carId;
    }
};
let obj2 = {
    carId: 123,
    getId: function(prefix){
        return prefix + this.carId;
    }
};


let newCar1 = { carId: 456 };
let newFn = obj1.getId.bind(newCar1);

let newFn1 = obj1.getId.call(newCar1);

let newFn2 = obj2.getId.apply(newCar1, ["carId: "]);

console.log("newFn: ",newFn, " newFn1: ",newFn1, " newFn2: ",newFn2);


// ********************** Constructor Functions ************************************

console.log("************** Constructor Functions *****************");

// Old way   Either way will work.  But adding to prototype is more efficient for memeory.
function Greeter(name){
    this.name = name; 

    //this.greet = function(){
    //    return "Hello "+this.name;
    //}
}
Greeter.prototype.greet = function(){
    return "Hello "+this.name;
};

let hijoe = new Greeter("Joe");
console.log(hijoe.greet());


// New way es6

class Person {
    constructor(name){
        this.name = name;
    }
}

let newguy = new Person("Joe");
console.log("My name is",newguy.name);
// new edit the attribute...
newguy.name = "Brad";
console.log("Now my name is",newguy.name);

// Now we can add a method too

class Animal {
    constructor(type, name, sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }

    soundOff() {
        return `My name is ${this.name}, I'm a ${this.type} and I say "${this.sound}!"`;
    }
}

let marvin = new Animal("Penguin","Marvin","Linux");

console.log(marvin.soundOff());

// More on inheriting from classes

//class Vehicle {
//    constructor(){
//        this.type = 'car';
//    }
//
//    start(){
//        return `Now I'm starting ${this.type}`;
//    }
//}
//
//class Car extends Vehicle {
//    start(){
//        return 'in drivers seat... ' + super.start();
//    }
//}

// Note: Car is already importing from Vehicle
// It all works just as before we commented out classes above in same file
import { Car } from "./models/car";

let beater = new Car();
console.log(beater.start());



