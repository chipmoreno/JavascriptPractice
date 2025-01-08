// Values in JS module are private 
// and cannot be imported into other modules
// unless they have been explicitly exported


const PI = Math.PI; 
const TAU = 2 * PI; 
export { PI, TAU };