// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
function Hello(name){
    return name;
}

function HelloWorld(Hello){
    return Hello("Welcome!! Shaldon Barnes")
}

myname = HelloWorld(Hello)
console.log(myname)