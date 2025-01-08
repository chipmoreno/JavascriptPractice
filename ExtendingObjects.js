let target = {x: 1}, source = {y: 2, z: 3};
for(let key of Object.keys(source)){
    target[key] = source[key];
}
target // {x: 1, y: 2, z: 3}

// Copying properties of one obj to another obj.

// This function can also be used with extend() or
// Object.assign()

// Object.assign() expects two or more objects as its arguments
// It modifies and returns first argument, target object,
// but does not alter the second or any subsequent arguments

// Copies enumerable own properties from source object(s) 
// into target object.
// Source object is processed in list order. Source #1 property
// overrides target property, source #2 overrides source #1
// property.

Object.assign(o, defaults); // o is overwritten by defaults
o = Object.assign({}, defaults, x)
// Creates new object, copy defaults to it, 
// overrides defaults with properties in x

// We can also express it like this:

o = {...defaults, ...o}

// We can also avoid overhead of extra object creation
// and copying by writing a version of Object.assign()
// that copies properties only if they are missing

function merge(target, ...sources){
    for(let source of sources){
        for(let key of Object.keys(source)){
            if (!(key in target)){
                target[key] = source[key];
            }
        }
    }
    return target;
}

Object.assign({x: 1}, {x: 2, y: 2}, {y: 3, z: 4})
merge({x: 1}, {x: 2, y: 2}, {y: 3, z: 4})

// It is straightforward to write property manipulation utilities
// like merge(). You could also write subtract(), restrict(),
// or other functions yourself.