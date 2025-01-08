let o = { x: 1};
"x" in o // True
"y" in o // False
"toString" in o // True: o inherits toString property

o.hasOwnProperty("x") // True
o.hasOwnProperty("y") // False
o.hasOwnProperty("toString") // False - toString is inherited

// propertyIsEnumerable() refines hasOwnProperty() test 
// and returns true if object.hasOwnProperty(enumerable) is true.

o.propertyIsEnumerable("x") // True: x is enumerable
o.propertyIsEnumerable("toString") // false - not own property
Object.prototype.propertyIsEnumerable("toString") // false - not enumerable
