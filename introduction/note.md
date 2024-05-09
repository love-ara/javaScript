
1. Difference btw Map and reduce:
-Map : transforms each element of an array and returns a new array.
-Reduce: combines all the elements of an array into a single value.

2. Map function accepts callback function that is called for each element in the array, and an optional thisArg parameter
 that sets the value of this inside the callback function.

3. Callbacks are functions passed as arguments and run after a task is completed.

4. difference btw let and var:
the main difference is their scope.
-let : variables declared with let are blocked-scoped.
-var: variables  declared with var are function-scoped.

5. JavaScript has 2 scopes: Global and Local(Function scope and block scope)

6. Module scope: code.js(structure.js, main.js, utils.js)

7. OOP : 
 4 concept of opp: Encapsulation-> is same as separation of concerns, it is also hiding of information and behaviour into an object
 Abstraction: is hiding a behavior or the inner working of an object. hiding implementations.
 methods: Are behavior
 classes: A template 
 polymorphism: object that inherit from another but implement the method differently
 inheritance: is about method sharing.

 8.OOP in js:
 -prototype-based programming: when obj encapsulates its properties, its methods and datas instead of the class

 let animal = {
    type : "Unknown",
    sound: function(){
        console.log("the " +this.type + "makes a sound")
    }
 }
 let obj  = Object.create(animal);
 dog.type = "Dog";

let goat = {
    color: "black";
}
Object.setPrototypeOf(goat, animal);
goat.type = "Goat";

let vehicle = {wheels: 4};
let car = {
    seats : 5,
    __proto__: vehicle,
    wheels : 6
}

JavaScript constructor function: construction function or obj construction function
function Person(name, age){
    this.name  = name;
    this.age = age;

    this.sayName = function(){
        console.log(this.name);
    }
}

const personOne = new Person("Jumoke", 13);
console.log(personOne.name)
console.log(new Person("John", 20));
personTwo.sayName();
 -class-based programming

JavaScript classes 
classes are bluePrints of a type of object with the certain properties and methods to generate object


const jsom = '{"result" : true, "count" : 42}';
const obj = JSON.parse(jsom);
console.log(obj);

const s = JSON.stringify(obj);
console.log(s);


-prototype is a property of every js object.

function Human(_name, _age){
    this._name = _name;
    this._age = _age;
}

function Employer(_name, _age, _designation){

this.designation = _designation;
    this.setAge = (newAge) => {
        console.log('${fnewAge}');
        this.age = newAge;
    }
}

Human.call(this._name, _age) : .call will make attributes of a function available to another





Asynchronous:


 
