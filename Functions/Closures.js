// Consider following code:

let scope = "global scope" // Global
function checkscope(){
    let scope = "local scope"; // Local
    function f() { return scope; } // return local value
    return f;
}
console.log(checkscope()()) // "local scope"

let scope2 = "global scope"
function checkscope2(){
    let scope2 = "local scope";
    function f() {return scope2;}
    return f;
}
console.log(checkscope2()());
console.log(checkscope()()); // Both return local scope

// f() is defined in local scope:
// thus, variable is bound to "local"
// This exists even if f() is executed in a global context.

// Closures capture the local variable of a single function
// invocation and can use those variables as private state.

// Here is how we can rewrite uniqueInteger() using an immediately
// invoked function expression to define a namespace and a closure
// that uses that namespace to keep it's state private:

let uniqueInteger = (function() {
    let counter = 0;
    return function() {return counter++;};
}());
console.log(uniqueInteger())
console.log(uniqueInteger())

// Line 1 appears to assign function to variable uniqueInteger
// Actually: code is defining/invoking a function.
// it's actually the return value of the function that is being
// assigned to uniqueInteger

// Studying the body, it's return value is another function...
// It is this nested function {return counter++;}
// that is assigned to uniqueIntgeger
// The nested function has access to the variables
// in its scope and can use the counter variable defined in the
// outer function
// Once that outer function returns, no other code
// can see the counter variable: the inner function has exclusive
// access to it

// Private variables like counter are not exclusive to a single
// closure: two or more nested functions could be defined
// and share the same scope...

function counter(){
    let n = 0;
    return{
        count: function() {return ++n;},
        reset: function(){n=0;}
    };
}

let c = counter(), d = counter();
console.log("Counting:")
console.log(c.count()); // 1
console.log(d.count()); // 1
c.reset(); // c =0 
console.log(c.count()); //1
console.log(d.count()); // 2

// count() and reset() share access to private variable n.
// Each invocation of counter() creates a new scope
// independent of previous invocations and a new private
// variable within that scope. 

// This is a variation on counter using getters and setters:

function counter2(n) {
    return {
        get count() {
            return ++n;
        },
        set count(m) {
            if (m > n) n = m;
            else throw new Error("count can only increase");
        }
    };
}

let x = counter2(1000);
console.log(x.count); // Accessing the getter
console.log(x.count); // Accessing the getter again


/*try {
    x.count = 999; // Attempting to set a lower value
} catch (e) {
    console.error(e.message); // Output the error message
}*/
x.count = 1003; // Setting a higher value
console.log(x.count); // Accessing the getter again

// Following function adds property acessor methods for
// a property with the specified name to the object o.

// Methods are named get<name> and set<name>. If a predicate
// function is supplied, the setter method uses it to test
// its argument for validity before storing it.

// If predicate returns false, setter throws exception.

// Unsual thing: the property value changed by get/set is not
// stored in object o. Instead, is stored in local variable.

// Get/set are defined locally, thus, have access to this.

// This means the value is private to these two accessors and 
// cannot be set or modified except through the setter method.

function addPrivateProperty(o, name, predicate){
    let value;
    o[`get${name}`] = function() { return value; }
    o[`set${name}`] = function(v){
        if(predicate && !predicate(v)){
            throw new TypeError(`set${name}: invalid value ${v}`);
        } else{
            value = v;
        }
    };
}
// Demonstrating addPrivateProperty():
let o = {};
addPrivateProperty(o, "Name", x => typeof x === "string");
o.setName("Frank");
console.log(o.getName());
//o.setName(0); // Type Error

// Now, we must recognize when closures share access to a variable
// they should NOT share.

function constfunc(v) {return () => v; }
let funcs = [];
for(var i = 0; i < 10; i++) funcs[i] = constfunc(i);
funcs[5]()