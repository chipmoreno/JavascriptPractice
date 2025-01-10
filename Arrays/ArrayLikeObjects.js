// Determine if o is array-like object
// Strings and functions have numeric length properties,
// but are excluded by the typeof test. In client-side JS,
// DOM text nodes have a numeric length property, and may
// need to be excluded with an additional o.nodeType ! == 3 test.

function isArrayLike(o){
    if (o &&
        typeof o === "object" &&
        Number.isFinite(o.length) &&
        o.length >= 0 &&
        Number.isInteger(o.length) &&
        o.length < 4294967295
    ) {return true;}
else
{ return false; 
}
}

// Strings can behave like arrays and we can test to find out if 
// objects are strings or arrays with tests like these.

// Since array-like objects do not inhereit from Array.prototype
// you cannot invoke array methods directly, but indirectly with
// Function.call method.

let a = {"0": "a", "1": "b", "2": "c", length: 3};
Array.prototype.join.call(a, "+") // "a+b+c"
Array.prototype.map.call(a, a => XMLDocument.toUpperCase())
// ["A","B","C"]
Array.prototype.slice.call(a, 0) // ["a,""b","c"]: true array copy
Array.from(a) // easier true array copy

// String As Array

let s = "test";
s.charAt(0) // "t"
s[1] // e

// We can apply generic array methods to strings:

Array.prototype.join.call("Javascript", " ") // "J a v a s c r i p t"
// Strings are immutable so when treated as arrays, they are read only
// Push, Sort, Reverse, Splice mutate an array so not strings
// Attempted mutation of a string fails silently
