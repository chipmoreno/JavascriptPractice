class EZArray extends Array{
    get first(){return this[0];}
    get last(){return this[this.length-1]}
}

let a = new EZArray();
// A is an EZArray and an Array
// Inherits all functions from Array, but also has first() and last()

// Example defining TypedMap subclass of Map, adding type
// checking and ensuring keys and values of map are of specified
// type. Demonstrates super keyword to invoke constructor and
// subclass methods.

class TypedMap extends Map{
    constructor(keyType, valueType, entries){
        if(entries){
            for(let [k, v] of entries){
                if (typeof k !== keyType || typeof v !== valueType){
                    throw new TypeError(`Wrong type for entry [${k}, ${v}]`);
                }
            }
        }
        super(entries);
        this.keyType=keyType;
        this.valueType=valueType;
    }
    // Redefining set(): adding type checking for new entries
    // added to map
    set(key,value){
        if(this.keyType && typeof key !== this.keyType){
            throw new TypeError(`${key} is not of type ${this.keyType}`);
        }
        if(this.valueType && typeof value !== this.valueType){
            throw new TypeError(`${value} is not of type ${this.valueType}`);
        }
        return super.set(key,value);
    }
}

// set() overrides.
// set like class implemented with delegation

class Histogram{
    // Initializing: creating Map object to delegate to
    constructor(){this.map = new Map();}
    count(key) { return this.map.get(key) || 0; }
    has(key){return this.count(key) > 0; }
    get size() { return this.map.size; }
    add(key) {this.map.set(key, this.count(key) + 1);}
    delete(key) {
        let count = this.count(key); if (count === 1) {
        this.map.delete(key); } else if (count > 1) {
        this.map.set(key, count - 1); }
        }
    [Symbol.iterator]() { return this.map.keys(); }
    keys() { return this.map.keys(); } 
    values() { return this.map.values(); } 
    entries() { return this.map.entries(); }
}
// this is an example of delegating method definitions to a Map
// object without actually subclassing anything.
// Composition vs. Inheritance: composition is preferable