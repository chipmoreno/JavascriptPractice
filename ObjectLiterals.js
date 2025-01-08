let empty = {};
let point = { x: 0, y: 0};
let p2 = { x: point.x, y: point.y+1};
let book = {
    "main title": "Javascript",
    "sub-title": "The Definitive Guide",
    for: "all audiences",
    author:{
        firstname: "David",
        surname: "Flanagan"
    }
};

let o = new Object(); // same as {}
let a = new Array(); // same as []
let d = new Date;
let r = new Map();

// All objects have a prototype, but a 
// relatively small number of objects have a prototype property.
// These objs with prototype properties define prototypes
// for all othe robjects. 

let o1 = Object.create({ x: 1, y: 2}) // o1 inherits properties
// from x and y
o1.x + o1.y // = 3

// One use for Object.create9) is when you want to guard
// against unintended modification of an object by a 
// library function that you don't have control over.

// Instead of passing the object directly to the function,
// you can pass an object that inherits from it

// If function reads properties of that object, it will see
// the inherited values

// If it sets properties, those writes will not affect original
// object

let o3 = { x: "don't change this" };
library.function(Object.create(o3)); // Guard against modification

// dot operator

let author = book.author;
let name = author.surname;
let title = book.title;
book.edition = 7; // Create edition property of book

// the following two expressions have the same value:

book.author
book["author"]

// When using . operator to access object property, 
// the name of the property is expressed as an identifier.
// Identifiers must be typed literally as they are not a 
// data type and cannot be manipulated
// 
// On the other hand: accessing a property with []
// array notation, the name of the property is expressed 
// as a string. Strings are JS datatypes and can be
// manipulated and created while a program is running.

let addr = "";
for(let i = 0; i < 4; i++){
    addr += customer[`address${i}`] + "\n";
}

