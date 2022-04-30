////////////////TRANVERSING DOM/////////////

// var itemList = document.querySelector("#items");
// //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "orangered";

// //console log parent node of #main => div container
// console.log(itemList.parentNode.parentNode);

// //childNodes
// //it is not recommended because text_NODE in between
// console.log(itemList.childNodes);

// //children
// console.log(itemList.children);
// //get the first children
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// //firstChild
// //-> text_NODE because of space
// console.log(itemList.firstChild);

// //firstElmentChild
// //-> li
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// //lastChild
// //-> text_NODE because of space
// console.log(itemList.lastChild);

// //lastElmentChild
// //-> last li
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

// //nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousElementSibling);
// //previousElementSbling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';



//createElement

//create a div
var newDiv = document.createElement('div');
//add a class Hello to div
newDiv.className = "hello";

// Add id
newDiv.id = 'Hello1';

//add attribute
newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivText = document.createTextNode("hello World");

//Add text to div
newDiv.appendChild(newDivText);

//insert newDiv onto html doc 
//grab location: header .container
var container = document.querySelector('header .container');
//choose where it should be placed in header .container
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = "30px";

container.insertBefore(newDiv, h1);