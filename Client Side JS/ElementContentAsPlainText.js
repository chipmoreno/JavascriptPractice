let para = document.querySelector("p");
// first <p> in the doc
let text = para.textContent;
para.textContent = "Hello World!" // text altered

// Creating, Inserting, Deleting Nodes

paragraph=document.createElement("p"); // empty <p>
emphasis=document.createElement("em"); // empty <em>
emphasis.append("World");
paragraph.append("Hello ", emphasis, "!");
paragraph.prepend("!");
paragraph.innerHTML //"!Hello <em>World</em>!"
