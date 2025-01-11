// Print name and value of each property of o: return undefined

function printprops(o){
    for (let p in o){
        console.log(`${p}: ${o[p]}\n`)
    }
}

// printprops(o) return value is always undefined. 

function distance(x1, y1, x2, y2){
    let dx = x2 - x1;
    let dy = y2-y1;
    return Math.sqrt(dx*dx + dy* dy)
}

function factorial(x){
    if (x <= 1) return 1;
    return x * factorial(x-1)
}

// Function Expressions

const square = function(x) { return x*x; };

const f = function fact(x) { if (x<=1) return 1;
    else return x*fact(x-1);
};

[3,2,1].sort(function(a,b){return a-b;});

let tensquared = (function(x) {return x*x;}(10));

// Arrow Functions:

const sum = (x,y) => { return x + y };

// even more compact:
sum = (x,y) => x+y;


//with one parameter, no parentheses required
const polynomial = x => x*x +2*x +3;

// WIth an arrow function with no args, must be written
// with pair of empty parentheses

const constantFunc = () => 42;
const q = x => { return { value: x}; }; // q() returns an object)
const g = x => ({value:x}); // g() returns object
const h = x => { value: x}; // bad h returns nothing
const i = x = {v:x,w:x}; // bad: syntax error

// Concise syntax of arrow funcs is great for
// passing one func to another func:

let filtered = [1,null,2,3].filter(x => x !== null); 
// filtered = [1,2,3]
let squares = [1,2,3,4].map(x=>x*x);
//squares = [1,4,9,16]

// Arrow functions inherit the value of the 'this' keyword
// from the environment in which they are defined
// rather than defining their own invocation context
// as functions defined in other styles do

// Arrow functions do not have a prototype property, so they cannot
// be used as constructor functions for new classes

// Nested Functions: 

function hypotenuse(a,b){
    function square(x) { return x * x; }
    return Math.sqrt(square(a) + square(b));
}

// Regular function invocation expressions:

printprops({x:1});
let total = distance(0,0,2,1) + distance(2,1,3,5);
let probability = factorial(5)/factorial(13);

// Conditional Invocation Syntax if function is not null/undefined:

(f !== null && f !== undefined) ? f(x) : undefined

let calculator = {
    operand1: 1,
    operand2: 2,
    add(){
        this.result = this.operand1+this.operand2;
    }
};
calculator.add();
calculator.result // 2

// Most method invocations use the dot notation for property
/* access, but using square brackets is also acceptable: */

o["m"](x,y) // Another way to write o.m(x,y)
a[0](z)

customer.surname.toUpperCase() // Complex property access method
f().m() // invoke m() on return of f()

// this keyword

// nested functions do not inherit the this value of
/* containing function

Nested Func Invoked As Method: "this" === object invoked on.

Nested Function (NOT =>) invoked, "this" === global obj or undefined

Nested Func defined within method, invoked, can NOT use "this"
to obtain invocation context! "self" is the outer context, while
"this" is global or undefined. */

let o = {
    m: function() {
        let self = this; // Setting "this" to variable.
        this === o // True: "this" points to object o.
        f() // Calling Nested function.

        function f(){ 
            this === o // F: "this" === global/undefined.
            self === o // T: "self" === outer "this" === o
        }
    }
}

// HOWEVER: A Nested Arrow Function would properly inherit "this"

const f1 = () => {
    this === o // true, since arrow functions inherit this
};

// Another method: invoke bind() method of nested 
// function to define new function that is implicitly invoked
// on specified object:

const f2 = (function(){
    this === o 
    // True, since we bound this function to the outer "this"
}).bind(this);

