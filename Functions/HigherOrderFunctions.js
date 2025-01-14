// Higher Order Function: operates on other functions: 
// takes one or more functions as arguments and returns a new
// function

function not(f){
    return function(...args){
        let result = f.apply(this, args);
        return !result;
    };
}

const even = x => x % 2 === 0; 
// Function determines if number is even
const odd = not(even);
console.log([1,1,3,5,5].every(odd))
const notOdd = not(odd);
console.log([1,1,3,5,5].every(notOdd))

function mapper(f){
    return a => map(a, f);
}

// mapper takes function f as an argument
// returns new function that takes an array as an arg
// applies the map function to a using f

// Increment is a function that takes a and returns
// a +1

// IncrementAll, (returns a+1 => map (a, f))

// incrementAll is a function that takes an array a,
// applies the map function to a using the increment
// function

// incrementAll applies x + 1 to each element of 1,2,3
// resulting in 2,3,4


// mapper(f) === returns a => map(a, f)
// Increment === x => x+1
// incrementAll === a => map (a, f) for a => a +1
// Incrementall, given increment, 
// returns a => map(a,f) mapper(increment)
// mapper()

const increment = a => a+1;
const incrementAll = mapper(increment);
incrementAll([1,2,3]) // [2,3,4]

function compose(f,g){
    return function(...args){
        return f.call(this, g.apply(this, args));
    };
}

const sum = (x,y) => x+y;
const square = x = x*x;
compose(square,sum)(2,3)

// function compose takes two functions g and f as args
// returns function that takes any number of args
// inside returned func, g is applied to the args
// f is applied to that

// Pausing here at page 373, before starting Chapter 9: Classes
// to learn more about React and other technologies in order
// to put my JS knowledge into action.