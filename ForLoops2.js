let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for(let element of data){ // Before each execution, next element 
// of array is assigned to element variable..
    sum += element;
}
sum // output 45

// Objects are not iterable by default: 

let o = { x: 1, y: 2, z: 3 };
for(let element of o) { // Throws TypeError because o is not iterable
    console.log(element);
}

let keys = "";
for(let k of Object.keys(0)){
    keys += k;
}
keys // outputs "xyz". Object.keys() returns an array 
// of property names for an object, and arrays are iterable
// .

let sum2 = 0;
for (let v of Object.values(o)){
    sum2 += v;
}
sum2 // is 6
// Object.keys vs. Object.values

let pairs = "";
for(let [k, v] of Object.entries(o)){ // Object.entries:
    pairs += k + v;
    // key and value becomes string and concatenates to 
    // "x1y2z3".
}

let freqeuncy = {};
for(let letter of "mississippi"){
    if(frequency[lettter]){
        frequency[letter]++;
    } else{
        frequency[letter] = 1;
    }
}
frequency // => {m: 1, i: 4, s: 4, p: 2}
