// Object Serialization: process of converting object's state 
// to a string from which it can later be restored
// 
// Functions JSON.stringify() and JSON.parse() serialize
// and restore JavaScript objects. JSON: JavaScript Object Notation.

// Testing JSON.stringify() and JSON.parse():

let o = {x: 1, y: {z: [false, null, ""]}};
let s = JSON.stringify(o); 
// s == '{"x":1,"y":{"z": [false,null,""]}}'
let p = JSON.parse(s) 
// p === o