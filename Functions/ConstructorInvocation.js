// If a function or method invocation is preceded by keyword new
// then it is a constructor invocation

// If a constructor invocation includes an arg list in parentheses,
// those arg expressions are evaluated, passed to function
// in same way they would be for function and method invocations

// These are equivalent:
o = new Object();
o = new Object;

// Constructor Invocation creates new, empty object inheriting
// object specified by prototype property of constructor

// Constructors don't normally use return, but if they do,
// the object becomes the value of the invocation expression.
// Or if return with no value, or primitive value, return value
// is ignored and new object is return value.

// Optional Parameters and Defaults

// When a function is invoked with less args than declared
/* parameters, the addtl parameters are set to default which
is normally undefined. It's useful to write funcs so that
some args are optional: */

// Append names of enumerable properties of o to a[], return a.
//If a is omitted, create and return new array.

function getPropertyNames(o,a){
    if(a===undefined) a = []; 
    for(let property in o) a.push(property);
    return a;
}

let o = {a: 1}, b = {c:2,d:4};
let a = getPropertyNames(o) // a == ["a"]
getPropertyNames(b, a); // a === ["x","y","z"]; add b's properties

// Instead of using if(a===undefined) a = []; 
// you can write a = a || [];

// Also:

function getPropertyNames(o, a = []){
    for(let property in o) a.push(property);
    return a;
}

