let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0} // RGBA color
let {r, g, b} = transparent; 

const {sin, cos, tan} = Math;

let points = [{x: 1, y: 2}, {x: 3, y:4}]; 
// An array of two point objects
let [{x: x1, y:y1}, {x: x2, y: y2}] = points
// Destructured into 4 variables
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // true

let points2 = { p1: [1,2], p2: [3,4]};
let { p1: [c1, v1], p2: [c2, v2] } = points2;
(c1 === 1 && v1 === 2 && c2 === 3 && v2 === 4) // true

// Complex destructuring syntax can be challenging to write and read 
// It may be better to write assignments explicitly 
// such as = let x1 = points.p1[0];.