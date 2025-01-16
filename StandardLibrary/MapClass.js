let m = new Map();
let n = new Map([
    ["one",1],
    ["two,2"]   
]);

let copy = new Map(n); // new map w/ same keys,values as map n
let o = {x:1,y:2}; //obj with 2 properties
let p = new Map(Object.entries(o));
// Map from object o

// query values with get() and add new key/value pair w/ set()
// calling set() on preexisting key changes value
// has() checks if specified key exists, delete() removes key/value
//clear() removes all key/value pairs, size() finds out how many
// keys map contains

let x = new Map();
x.size // 0
x.set("one",1);
x.size // 1
x.get("one")
x.delete("one")

// set() can be chained

let y = new Map().set("one", 1).set("two", 2).set("three", 3);

let z = new Map();
z.set(1,{}) // map empty object to key 1
console.log(z.get(1)) // {}

z.set({},1) // doesn't work

//key, value

// iterating through a map of arrayed key value pairs
let z1 = new Map([["x",1],["y",2]])
for(let [key,value] of z1){
    console.log(key,value)
}

console.log(z1.keys())
console.log(z1.values())
