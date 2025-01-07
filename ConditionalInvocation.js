// A simpler way to check:

function square(x, log){
    if (log) {
        log(x);
    }
    return x * x;
}

// Now we can write like this:

function square(x, log){
    log?.(x); // Calls function if there is one
    return x * x;
}

// ?.() only checks if lefthand side is null/undefined. It does 
// not verify value is actually a function. square() 
// would still throw an exception if you passed it two numbers.

let f = null, x = 0;
try {
    f(x++); // throws TypeErorr, f is null
} catch (e){
    x // 1: x is incremented before exception is thrown
}

f?.(x++) // undefined - f is null, no exception is thrown
x // 1: increment skipped, expression short circuited

o.m() // Regular property access, regular invocation
o?.m() // Conditional property access, regular invocation
o.m?.() // Regular property access, conditional invocation