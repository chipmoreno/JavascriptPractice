// This function returns ab object representing a rectangle's 
// dimensions: if only width is supplied, make it twice as high as
// wide

const rectangle = (width,height=width*2) => ({width,height});
console.log(rectangle(1)) // width: 1, height 2
console.log(rectangle (1, 1))

// Parameter Defaults: Write functions invoked with 
// fewer args than params.

// Rest Parameters enable opposite case:
// write functions that can be invoked with arbitrarily
// more args than params


// Function expecting one or more numeric arguments and returns
// largest one:

function max(first =-Infinity, ...rest){
    let maxValue = first;
    for(let n of rest) {
        if (n > maxValue){
            maxValue = n;
        }
    }
    return maxValue;
}

console.log(max(1, 2349324, 29437592374, 29, 396, 1871284937389473))

// Rest parameter preceded by ... (NOT spread operator) and must be 
/* final parameter in function declaration. The value of a 
rest parameter is always an array */

// Functions like the previous are called variadic functions,
// variable arity functions, or varag functions.

// The Arguments Object: array like object allowing
// arugment values passed to the function to be retrieved by 
// number rather than by name.

function max(x){
    let maxValue = -Infinity;
    for(let i = 0; i < arguments.length; i++){
        if (arguments[i] > maxValue) maxValue = arguments[i];
    }
    return maxValue;
}

let numbers = [5,2,10,-1,99,100]
console.log(Math.min(numbers)) // numbers is not a number
console.log(Math.min(...numbers)) // -1

// Function taking function and returning wrapped version:

function timed(f){
    return function(...args){
        console.log(`Entering function ${f.name}`);
        let startTime = Date.now();
        try {
            return f(...args);
        } finally {
            console.log(`Exiting ${f.name} after ${Date.now()-startTime}ms`);
        }
    }
}

function benchmark(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    return sum;
}

console.log(timed(benchmark)(1000000))

// Destruturing Function Args into Parameters:

function vectorAdd(v1, v2){
    return [v1[0] + v2[0], v1[1] + v2[1]];
}
vectorAdd([1,2],[3,4]) // 4, 6

// The above would be easier to understand if we destructured
// the two vector args into more clearly named parameters:

function vectorAdd2([x1,y1], [x2,y2]){ // Unpack 2 args into 4 param
    return [x1+x2,y1+y2]
}
vectorAdd([1,2],[3,4]) // 4, 6

// If definign function expecting obj arg, 
// you can destructure paramaters of that object

// This tie, let's represesent vectors as objects, with x and y
// paramters:

function vectorMultiply3({x,y}, scalar){
    return { x: x * scalar, y: y * scalar };
}
vectorMultiply3({x:1,y:2},2) // 2, 4

function vectorAdd(
    {x: x1, y: y1},// unpack 1st object into x1 and y1 params
    {x: x2, y: y2} // unpack 2nd object into x2 and y2 params
)
{
    return { x: x1 + x2, y: y1 + y2 };
}
vectorAdd({x:1,y:2},{x:3,y:4}) // x: 4, y 6


// Ex. return different int each time it is called
// uses property of itself to remember next vzlue
uniqueInteger.counter = 0;
function uniqueInteger() {
    return uniqueInteger.counter++;
}
console.log(uniqueInteger())
console.log(uniqueInteger())