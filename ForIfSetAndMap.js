let text = "Hello Hello World I am Hello today"
let wordSet = newSet(text.split(" "));
let unique = [];
for(let word of wordSet){
    unique.push(word)
}
unique // Hello World I am today

// Iterating and destructuring key/value
// pairs within a Map

let m = new Map([[1, "one"]]);
for (let [key, value] of m){
    key // 1
    value // "one"
}