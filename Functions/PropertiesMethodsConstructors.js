// function length property: number of args function expects
// All functions have prototype property
// call() and apply() allow you to indirectly invoke a function
// as if it were a method of some other object.

// Invoking f() as a method of object o():

false.call(o);
false.apply(o);

o.m = f; // Make f temporary method of o
o.m(); // Invoke it, passing no args, 
delete o.m; // Remove temporary method

// To pass two numbers to function f() and invoke it 
// as if it were a method of object o:

f.call(o, 1, 2);

// apply() is similar, but args must be arrayed:

f.apply(o, [1,2]);

// Using apply() to pass elements of an array to Math.max():

let biggest = Math.max.apply(Math, arrayOfNumbers);

// bind()

function f(y) { return this.x + y; }
let o = {x:1};
let g = f.bind(o);
let p = { x: 10, g }
p.g(2) // 3: g still bound to o, not p

// example of Function() constructor:

const f = new Function("x","y","return x*y");

// The above is equivalent to:

const f = function(x,y){return x*y;};w

// Function() does not use lexical scoping
// always compiled as if they were top level functions

let scope = "global";
function constructFunction(){
    let scope = "local";
    return new Function("return scope");
    // doesn't capture local scope
}

// this returns global because function returned by Function() constructor
// does not use local scope

console.log(constructFunction());

