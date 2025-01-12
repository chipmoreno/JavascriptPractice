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
console.log(checkscope2()()); // What does this return?
console.log(s)

// f() is executed using the scope they are defined in.
// f() was defined in scope where the variable is bound to "local".
// Binding still in effect when f is executed, even if executed in global
// context...