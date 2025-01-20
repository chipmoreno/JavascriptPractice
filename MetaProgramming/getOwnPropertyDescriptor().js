console.log(Object.getOwnPropertyDescriptor({x:1},"x"));

// value: 1, writable: true, enumerable: true, configurable: true

const random = {
    get octet() { return Math.floor(Math.random()*256); },
    };

console.log(Object.getOwnPropertyDescriptor(random, "octet"));

// get: f, set: undefined, enumerable: true, configurable: true