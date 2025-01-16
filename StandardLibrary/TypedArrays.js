// Elements of a typed arrayare all numbers
// Length must be specified at creation and is immutable
// Elements are always initialized to 0 when created

// There are 11 types of typed arrays: int, float, bigint, etc

// Uint8Clamped Array is a special variant holding unsigned bytes
// this is how memory works at a low level - very fast
// this clamping/wrapping behavior is required by HTML <canvas>
// element's low level API for manipulating pixel colors

let bytes = new Uint8Array(1024);
let matrix = new Float64Array(9);
let point = new Int16Array(3);
let rgba = new Uint8ClampedArray(4);
let sudoku = new Int8Array(81);

let white = Uint8ClampedArray.of(255, 255, 255, 0); //RGBA opaque white
let ints = Uint32Array.from(white);
let buffer = new ArrayBuffer(1024*1024);
buffer.bytelength // 1024*1024, 1MB

// Return the largest prime smaller than n, using the sieve of Eratosthenes
function sieve(n) {
    let a = new Uint8Array(n+1); // a[x] will be 1 if x is composite
    let max = Math.floor(Math.sqrt(n)); // Don't do factors higher than this
    let p = 2; // 2 is the first prime
    while(p <= max) { // For primes less than max
    for(let i = 2*p; i <= n; i += p) // Mark multiples of p as composite
    a[i] = 1; while(a[++p]) /* empty */;
    }
    while(a[n]) n--;
    return n;
    // The next unmarked
    // Loop backward to
    // And return it
    }

    // Typed Arrays and DataView class give you tools to 
    // process binary data, write JavaScript programs for things 
    // such as decompressing ZIP Files, extracting metadata from JPEG
    