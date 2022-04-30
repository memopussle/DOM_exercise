/////////////////Examines the HTML document object//////////

//console.dir(document);

//Print domain
// console.log(document.domain);

// //access URL
// console.log(document.URL);

// //title of page
// console.log(document.title);

// //type of DOC
// console.log(document.doctype);

// //head
// console.log(document.head);

// //body
// console.log(document.body);

//////Get a specific div/class
console.log(document.all[11]); //-> title

/////change a content of a div/class
//thismethod should be avoided because when you squeeze div/element -> it will target the new div
document.all[11].textContent = "Hello";

//print the whole form
console.log(document.forms);
//print first line of form
console.log(document.forms[0]);
console.log(document.link);

//img
console.log(document.images);

//////////////SELECTOR//////////

//GetElementByID
console.log(document.getElementById("header-title"));
var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");

//////////Change content by targeting ID
//textContent # innerHTML : innerHTML pays attention to styling
headerTitle.textContent = "Hello";
headerTitle.innerHTML = "Goodbye";

//doesn't change h1 ->h3, put h3 inside original h1
headerTitle.innerHTML = "<h3>Hello</h3>";

/////////Change style
//use camelCase for selector: borer-bottom ->borderBottom
header.style.borderBottom = "solid 3px black";

///////////////Get Element by Class Name///////
var items = document.getElementsByClassName('list-group-item');

//give us all of list-group-item
console.log(items);

//second child of ul
console.log(items[1]);

//change content for class .
items[1].textContent = "Hello 2";

//change style for class
//camelCase
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//NOT GOING TO WORK bc it's an array -> have to loop thru it
// items.style.backgroundColor = '#f4f4f4';
//-> For loop
for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}


//////////////////Get element by Tag name////////////////

var li = document.getElementsByTagName("li");

console.log(li);

console.log(li[1]);

li[1].textContent = "Hello 2";

li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";


for (var i = 0; i < li.length; i++) {
 li[i].style.backgroundColor = "#f4f4f4";
}



///////////////QUERY SELECTOR/////////
//only for 1 item
//for ID class
var header = document.querySelector('#main-header');
header.style.botterBottom = 'solid 4px #ccc';

//for tag
//only grab the first input
var input = document.querySelector('input');
input.value = 'Hello World';

//target submit button
var submit = document.querySelector('input[type = "submit"]');
//change button value from submit -> send
submit.value = "SEND";

//target class
//get the first .list-group-item
var item = document.querySelector('.list-group-item');
item.style.color = "red";

//target last item
var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = 'blue';

//second item
var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "purple";


////////QUERY SELECTOR ALL//////
//target all div with class title
var titles = document.querySelectorAll('.title');
console.log(titles);

//change content of first title
titles[0].textContent = 'Bye bye';

//change every odd li will have backgroun color of #f4f4f4
var odd = document.querySelectorAll('li:nth-child(odd)');
var even= document.querySelectorAll("li:nth-child(even)");

for(var i = 0; i< odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = "#ccc";
}