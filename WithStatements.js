// with statement runs block of code as if properties of speciifed
// object were variables in scope for that code
// 
// with (object)
//      statement
// .

// In client-side JS, you may have to type expressions
// such as this to access HTML form elements:
document.forms[0].address.value

// If you need to write expressions like this a number of times
// you can use the with statement to treate the properties
// of the form object like variables:

with (document.forms[0]){
    name.value = ""
    address.value = ""
    email.value = ""
}

//Alternative way:

let f = document.forms[0];
f.name.value = "";
f.address.value = "";
f.email.value = "";