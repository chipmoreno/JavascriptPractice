// JS objects inherit from Object.prototype (primarily, methods)
// Such as: hasOwnProperty() and propertyIsEnumerable()
// 
// Also static functions defined on Object constructor: like
// Object.create(), Object.keys()
// 
// toString() method: takes no arguments, returns string
// that represents value of object
// 
// toString() is invoked on concatenation or when passing
// object to method expecting a string

// Example of re-defining toString function:

let s = { x: 1, y: 1}.toString(); // s == "[object Object]"

let point = { x: 1, y: 2, 
    toString: function(){ return `(${this.x}, ${this.y})`;}
};
// => "(1, 2)": toString() is used for string conversion


// toLocaleString(): return localization string representation
// Date and Number classes define customized versions of
// toLocaleString() attempt to format numbers, dates, times
// according to local conventions

let point2 = { x: 1000, y: 2000, toString: function(){return
    `${this.x},${this.y})`;},
    toLocaleString: function(){
        return `(${this.x.toLocaleString()},
        ${this.y.toLocaleString()})`;
    }
};
point2.toString() // => "(1000, 2000)"
point2.toLocaleString() 
// => "(1,000, 2,000)": note thousands separators

// valueOf() - like toString() but when needs to convert 
// object to primitive type other than string - a number
// Calls method if object used in context where primitive
// value is required.

let point3 = { x: 3, y: 4, valueOf: function() { return Math.hypot(this.x, this.y);}
};
Number(point) // => 5: valueOf() is used for conversions to numbers
point > 4 // true
point > 5 // false

// toJSON() - not defined by Object.prototype but JSON.stringify() 
// method. Looks for a toJSON() method on any object it is asked to
// serialize If method exists on object to be seralized, it is invoked,
// and return value is serialzied, instead of original object

// Date class define toJSON() method that returns serializable string
// representation of date.

let point4 = { x: 4, y: 5, toString: function() { return `(${this.x}, ${this.y})`},
toJSON: function() { return this.toString();}
};
JSON.stringify([point]) // => '["(1, 2)"]'

// Shorthand Properties example:

let x = 1, y = 2;
let o = { x, y };
o.x + o.y // 3

// Computed Property Names example:

const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }

let p = {
    [PROPERTY_NAME]: 1,
    [computePropertyName()]: 2
};
p.p1 + p.p2 // 3

// With this syntax: square brackets delimit arbitrary 
// Javascript expression - expression is evaluated, resulting
// value (converted to string, if necessary) is used as property 
// name

// Symbols as Property Names:

const extension = Symbol("my extension symbol");
let z = {
    [extension]: { /* extension data here */}
};
z[extension].m = 0; 
// this will not conflict with other properties of o

/* Symbols are opaque values. You can't do anything else
with them except use them as property names. Every Symbols
is different from every other Symbols, which means they are good
for creating unique property names. Create a new Symbol by calling
Symbol(). The value returned by Symbol() is not equal to any other
Symbol or other value. You can pass a string to Symbol()
and this string is used when your Symbol is converted to a string.

Two Symbols, created with the same string argument, are
still different from one another.

The point: define a safe extension mechanism for JavaScript objects.
If you get an object from third-party code that you do not control
and need to add your own properties but want to make sure those
properties do not conflict with properties that may already exist, 
you can safely use Symbols as property names. 

(however the third party code could use Object.getOwnPropertySymbols()
to discover the symbols and then alter/delete those properties, which 
is why Symbols are not a security mechanism.)*/

// Spread Operator example:

let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 }; 
let rect = { ...position, ...dimensions };

rect.width + rect.height // 175