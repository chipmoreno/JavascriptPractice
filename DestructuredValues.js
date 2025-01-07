let [a,b] = [1,2];
[a,b] = [a+1,b+1]
[a,b] = [b, a]
[a,b] // returns 3, 2, incremented and swapped

let o = { x: 1, y: 2 };
for (const [name, value] of Object.entries(o)){
    console.log(name, value) // this pritns "x 1", "y 2"   
}

let [x,y] = [1]; // x is 1, y undefined
[x,y] = [1,2,3]; // x 1, y 2
[,x,,y] = [1,2,3,4] // x is 2, y is 4

let [t, ...u] = [1,2,3,4] // u = [2,3,4]

let [i, [q, p]] = [1, [2,2.5], 3];
// above: i is 1, q is 2, p is 2.5

// Array destructuring doesn't require an array.
// Any iterable object on the rigthhand side will work
// Including any object that can be used with a for/of loop.

let [first, ...rest] = "Hello";
// first == H, rest = ["e", "l", "l", "o"]