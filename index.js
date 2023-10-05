// Make simple function
// function iamafucntion(z) {
//     let a = z
//     return a
// }
// var a = iamafucntion('cat')
// console.log(a);

/*
//Simple function to create Object
function iamafucntion(z) {
    function sum(m,n){
    return(m+n)}
    let a = z
    return sum(2,2)
}
var a = iamafucntion('cat')
console.log(a);
*/

// Prgram to create 4 functions and each serving as an object

//function for object tiger
function Tiger(name){
    this.name = name;
    this.sound = "Roar";
    this.makesound = function(){
        console.log(this.name + " says " + this.sound)
    };
}

//function for object Lion
function Lion(name){
    this.name = name;
    this.sound = "Roar";
    this.makesound = function(){
        console.log(this.name + " says " + this.sound)
    };
}

//function for object Monkey
function Monkey(name){
    this.name = name;
    this.sound = "Chatter";
    this.makesound = function(){
        console.log(this.name + " says " + this.sound)
    };
}

//function for object Snake
function Snake(name){
    this.name = name;
    this.sound = "Hiss";
    this.makesound = function(){
        console.log(this.name + " says " + this.sound)
    };
}

//Creating objects for each animal
var tiger = new Tiger("Tiger");
var lion = new Lion("Lion");
var monkey = new Monkey("Monkey");
var snake = new Snake("Snake");

var jungleAnimals = [tiger, lion, monkey, snake];

jungleAnimals.forEach(function(animal){
    animal.makesound();
})


