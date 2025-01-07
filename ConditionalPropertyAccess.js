let a;
let index = 0;
try {
    a[index++]; // throws Type Error
} catch(e) {
    index // 1: increment occurs before TypeError
}
a?.[index++] // undefined: a is undefined
index // 1: not incremented, a?. short circuits
a[index++] //!TypeError: can't index undefined

// ?.() can also be used for checking if expression 
// to left of ? evaluates to null/undefined
// and then the entire invocation expression evaluates
// to undefined, and no exception is thrown.