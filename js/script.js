/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Declaring my global variables for the total number of list items and the number of list items per page.

const list = document.querySelectorAll('.student-item');
const perPage = 10;


/*
Declaring the showPage function which includes the following:
  1. Determine the first and last list items for each page (startIndex and endIndex).
  2. Loop through all the list items and determine which to show based on their index value and hide the rest.
*/

function showPage (list, page) {
  const startIndex = (page * perPage) - perPage;
  const endIndex = page * perPage;
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}


/*
Declaring the appendPageLinks function which includes the following:
  1. Declare the mainDiv, div, and ul variables.
  2. Assign the class 'pagination' to the div which will contain the pagination links.
  3. Append the new div and ul to the page.
  4. Create a new variable (pages) to round up the number of pages to a whole number.
  5. Loop through the pages variable, and for each page created a list item with a link.
  6. Give the first link a class of 'active'.
*/

function appendPageLinks (list) {
  const mainDiv = document.querySelector('.page')
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  div.className = 'pagination';
  mainDiv.appendChild(div);
  div.appendChild(ul);
  var pages = Math.ceil(list.length/10);
  for (let i = 0; i <= pages; i++) {
    if (i > 0) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      li.appendChild(a);
      a.href = '#';
      a.textContent = i;
      ul.firstElementChild.firstElementChild.className = 'active';
    }
  }
}


/*
Called the showPage function with a page parameter of 1 so that when the page loads it shows the first 10 students.
Called the appendPageLinks function to show the pagination links at the bottom of the page.
Declare a links variable which includes all the link tags.
*/

showPage(list, 1);
appendPageLinks(list);
const links = document.querySelectorAll('a');


/*
Declared the setAction function which includes the following:
  1. Loop through the links variable and remove the 'active' class from all the pagination links.
  2. Give the targeted link an 'active' class.
  3. Display the students on the page that that match the targeted link.
*/

function setAction(event) {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }
  var targetedLink = event.target;
  targetedLink.classList.add('active');
  if (targetedLink.className == 'active') {
    showPage(list, targetedLink.textContent);
  }
}


/*
Added an event listener that displays the students for each link when it is clicked.
*/

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener ('click', (event) => {
    setAction(event);
  });
}