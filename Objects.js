let p = { x: 2.3, y: -1.2 }; // Object with two properties
let q = {}; // empty obj with no properties
q.x = 2.3, q.y = -1.2 // now q has same properties as p

// object literals can be nested:

let rectangle = {
    upperLeft: { x: 2, y : 2},
    lowerRight: { x: 4, y: 5 }
}

let o = {x: 1, y: {z:3}}; // example object
let a = [o, 4, [5,6]] // example array containing obj
o.x
o.y.z //property Z of expression o.y
o["x"] //property x of object o
a[1] // element at index 1 of expression a (4)
a[2]["1"] // 6: element at index 1 of exp a[2]
a[0].x // property x of expression a[0] (1)

let i = { b: null };
i.b?.c.d // returns undefined
// By using ? instead of . we avoid TypeError 
// (a.b?.c).d would throw TypeError because it attempts to access
// property of value 'undefined'
// where a.b?.c.d (WITHOUT PARENTHESES) simply evaluates to 
// undefined and does not throw error
// property access with ?. is short circuiting - if subexpression
// to the left of ? evaluates to null or undefined, entire 
// expression immediately evaluates to undefined without
// further property access attempts
// 
// However - if B evaluates to an object but c is undefined
// this expression would throw a type error. The ? has to be used
// on the potentially undefined variable.