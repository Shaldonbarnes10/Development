//syntax for normal functions:
function helloWorld(name){
    return `Hello ${name} welcome onboard!!!`
}

let Myname = helloWorld("Shaldon")
console.log(Myname)

//syntax for arrow functions:
const greet = (name) => {
    return `Hello ${name} How u doin??!`
}
let Great_name = greet("Shaldon")
console.log(Great_name)

//anonymous functions:
function createTeaMaker() {
    return function(teaType) {
        return `Making ${teaType}`;
    };
}
let teaMaker = createTeaMaker();
console.log(teaMaker);

//ex2
const GREET = function(name) {
    return `Hello, ${name}`;
};
console.log(GREET("Shaldon")); // Output: Hello, Shaldon

//anonymous arrow fns
const square = (n) => n * n;
console.log(square(5)); // Output: 25


//Closure Definition:
//A closure is created when a function remembers variables from its outer (enclosing) scope, even after that outer function has finished executing.

function createTeaMaker(name) {
    let score = 100; // <-- this variable is enclosed in the closure

    return function(teaType) {
        return `Making ${teaType} ${name} ${score}`;
    };
}
let TEAMaker = createTeaMaker("hitesh"); // 'name' and 'score' are now closed over
let result = TEAMaker("green tea");      // Inner function still has access to 'name' and 'score'
console.log(result); // Making green tea hitesh 100
