//the first method (older one)
/*
let person = {
    name : "Shaldon"
}

let car = {
    model : "Ferrari",
    __proto__: person,
    23:24
}

console.log(car[23])
console.log(person["name"])
*/
//the second method
let vehicle = {
    wheels:4
}

let brand = {
    rolls_royce: 5 
}

Object.setPrototypeOf(brand,vehicle) // the prototype of brand is set to vehicle
console.log(Object.getPrototypeOf(brand))
console.log(Object.getPrototypeOf(vehicle))