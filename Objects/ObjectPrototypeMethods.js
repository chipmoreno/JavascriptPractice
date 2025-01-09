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

// Shorthand Method example:

let square = {
    area() { return this.side * this.side; }, 
    side: 10
    };
    square.area() // => 100

// area: function() { ... }, function() now omitted

const METHOD_NAME = "m";
const symbol = Symbol();
let weirdMethods = {
    "method with Spaces"(x) {return x + 1; },
    [METHOD_NAME](x) { return x + 2 },
    [symbol](x) { return x + 3; } 
};
weirdMethods["method With Spaces"](1) // 2
weirdMethods[METHOD_NAME](1) // 3
weirdMethods[symbol](1) // 4

/* Property Getters and Setters

Getter and Setter definitions are prefixed with get or set.*/

let o4 = {
    dataProp: value,
    get accessorProp(){ return this.dataProp; },
    set accessorProp(value) { this.dataProp = value; }
}

// Interesting example representing 2D Cartesian point

let p3 = {
    x: 1.0,
    y: 1.0,

    get r() { return Math.hypot(this.x, this.y); },
    set r(newvalue) {
        let oldvalue = Math.hypot(this.x, this.y);
        let ratio = newvalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },
    get theta() { return Math.atan2(this.y, this.x);}
};
p3.r // Math.SQRT2
p3.theta // Math.PI / 4

// Accessor properties are inherited so you can use object
// p3 as a prototype for other points. You can give new
// objects their own x and y properties and they'll inherit
// r and theta properties. 

let q = Object.create(p3);
q.x = 3; q.y = 4;
q.r // 5
q.theta // Math.atan2(4, 3)

// Other reason to use accessor properties include
// sanity checking of property writes and returning
// different values on each property read:

const serialnum = {
    // This property holds next serial num
    // the _ hints it is for internal use only
    _n: 0,
    get next() { return this._n++; },
    set next(n){
        if (n > this._n) this._n = n;
        else throw new Error("serial can only be set to larger value");
    }
};

serialnum.next = 10;
serialnum.next
serialnum.next // 11: different value each tiem we get next

// Following object has accessor properties returning random
// numbers. random.octet yeidls random number between 0 and 255
// every evaluation.

const random = {
    get octet() { return Math.floor(Math.random()*256); },
    get uint16() {return Math.floor(Math.random()*65536); },
    get int16() {return Math.floor(Math.random()*65536) -32768; },
}