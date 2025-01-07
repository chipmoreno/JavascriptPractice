

let strname = "string name";
let symname = Symbol("propname");
typeof strname // Returns "string"
typeof symname // "symbol" symname is a symbol
let o = {};
o[strname] = 1;
o[symname] = 2;
o[strname]
o[symname]

// Symbol.for() takes a string argument
// and returns a Symbol value associated 
// with the string you pass

let s = Symbol.for("shared");
let t = Symbol.for("shared)");
s.toString() // returns Symbol(shared)
Symbol.keyFor(t) // returns "shared"
