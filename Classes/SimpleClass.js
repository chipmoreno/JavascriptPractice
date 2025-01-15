function range(from, to){
    let r = Object.create(range.methods);
    r.from = from;
    r.to = to;
    return r;
}
range.methods = {
    includes(x){return this.from <= x && x <= this.to;},
    *[Symbol.iterator](){
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },
    toString() { return "(" + this.from + "..." + this.to + ")";}
};
let r = range(1,3);
console.log(range(1,3))
console.log(r.includes(2))
console.log(r.toString())

function Range(from, to){
    this.from = from;
    this.to = to;
}

Range.prototype = {
    includes: function(x){return this.from <= x && x <= this.to;
},

[Symbol.iterator]: function*(){
    for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },
    toString: function(){return ")" + this.from + "..." + this.to 
        + ")";}
    };
let r1 = new Range(1,3);
console.log(r1.includes(2),
r.toString()
)

// constructor property example:

let F = function(){};
let p = F.prototype;
let c = p.constructor;
console.log(c === F); // true

let o = new F();
console.log(o.constructor === F) // true

// Subclass inheriting from Class:

class Span extends Range{
    constructor(start, length){
        if(length >= 0){
            super(start, start + length);
        } else {
            super(start + length, start);
        }
    }
}

// New field syntax:

class Buffer{
    size = 0;
    capacity = 4096;
    buffer = new Uint8Array(this.capacity);
}

class Buffer2{
    #size = 0; // Private size field - size cannot be modified
    get size() {return this.#size;}
}
