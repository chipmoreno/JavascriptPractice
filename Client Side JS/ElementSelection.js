sect1 = document.getElementById("sect1");
colors = document.getElementById("color");
headings = document.getElementById("h1");
subheads = document.getElementById("h2");
tooltips = document.getElementById("tooltip");
sidebars = document.getElementById("sidebar");

//  using Element properties:

document.children[0].children[1];
document.firstElementChild.firstElementChild.nextElementSibling;

// Suppose this document:

<html><head><title>Test</title></head><body>Hello World!</body></html>

// Second child of the first child is the <body> element
// It has a nodeType of 1, and a nodeName of "BODY"

// Demonstration of Node-based traversal API, function
// returning all text within element or doucment

function textContent(e){
    let s = "";
    for(let child = e.firstChild; child!==null;child=child.nextSibling){
        let type = child.nodeType;
        if(type===3){
            s+=child.nodeValue;
        } else if (type ===1){
            s+=textContent(child);
        }
    }
    return s;
}

// In practice you would write e.textContent to obtain textual
// content of element e

// HTML Atributes as Element Properties:

let image = document.querySelector("#main_image");
let url = image.src; // The src attribute is the URL of image
image.id==="main_image"//True

// Setting form-submission attributes of <form> element

let f = document.querySelector("form");
f.action="www.example.com/submit";
f.method="POST";
