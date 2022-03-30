console.log(document.querySelector('header'));
console.log(document.querySelectorAll('section'));
console.log(document.getElementsByClassName("current"));
console.log(document.querySelector("section.current").nextElementSibling);
console.log(document.querySelector("section.current").previousElementSibling);
console.log(document.getElementsByClassName("col"));
console.log(document.querySelector("section.current") + document.querySelector("section.current").previousElementSibling);


// //Get element ById

// const favoriteFruits = document.getElementById('favoriteFruits');

// //Get a collection of elements by tag name

// const paragraphs = document.getElementsByTagName('p');

// //Get a collection of elements by class name




// //Get a single node
// const el = document.getElementById('username');

// //Get all inputs
// const inputs = document.getElementsByTagName('input');
// const inError = document.getElementsByClassName('error');

// inputs.length; //2
// inError.length; //1

// //Get all inputs
// const firstButton = document.querySelector('button');
// const inError = document.querySelectorAll('input.error');

// firstButton //single button node
// inError //Node list of inputs with class 'error'

// const links = document.querySelectorAll('a');

// //Works!
// const linkCount = links.length;
// const firstLink = links[0];

// //Doesn't work!
// links.forEach(function(link){
//         //do something with link
// });

// const links = document.querySelectorAll('a');
// const arrayOfLinks = Array.from(links);

// const listItems = document.querySelector('ul').children;
// listItems.length; //2

// const selectedItem = document.querySelector('li.selected')
// const first = selectedItem.previousElementSibling;
// const last = selectedItem.nextElementSibling;
// const list = selectedItem.parentElement;
// const header = selectedItem.parentElement.parentElement;
// const section = selectedItem.parentElement.parentElement.nextElementSibling;