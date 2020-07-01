/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// global variables
const list = document.querySelectorAll('.student-item'); // list of all students
const perPage = 10; // number of students shown per page
const mainDiv = document.querySelector('.page'); // the main div element that contains all the content
const pagDiv = document.createElement('div'); // the div element that contains the pagination list
let filteredList = []; // an empty array that will contain the filtered list of students from the users input 


// the showPage function will only display the 10 students we want on a given page
function showPage (list, page) {
  
  const startIndex = (page * perPage) - perPage; // the index of the first student on a given page
  const endIndex = page * perPage; // the index of the last student on that same page

  // a for loop that only displays the students with index values including and between the startIndex and endIndex values 
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = 'block'; // display the list items
    } else {
      list[i].style.display = 'none'; // hide the list items
    }
  }

}


// the appendPageLinks function will add the appropriate number of pages which will be determined by the list that is passed through the function
function appendPageLinks (arr) {
  
  const pagUl = document.createElement('ul'); // the ul element that contains the pagination links
  pagDiv.className = 'pagination'; // gave the pagDiv a class name of pagination 
  mainDiv.appendChild(pagDiv); // appended pagDiv to the mainDiv 
  pagDiv.appendChild(pagUl); // appended pagUl to the pagDiv
  var pages = Math.ceil(arr.length/perPage); // determined the number of pages
  
  // a for loop that creates a list item with link for each page
  for (let i = 0; i <= pages; i++) {
    if (i > 0) {
      const li = document.createElement('li'); // create the list item
      pagUl.appendChild(li); // append the list item to pagUl
      const a = document.createElement('a'); // create a link
      li.appendChild(a); // append a link to each list item
      a.href = '#'; // links lead to the top of the page
      a.textContent = i; // give each list item a textContent equal to the page number
      if (i === 1) {
        a.className = 'active' // give the first page an active class as a default
      }
    }
  }

  pagUl.addEventListener('click', (e) => {
    const link = document.querySelectorAll('a');
    if (e.target.tagName === 'A') {
      for (let i = 0; i < link.length; i++) {
        const links = link[i];
        links.className = 'none';
      }
      e.target.className = 'active';
      showPage(list, e.target.textContent);
    }
  })

}


showPage(list, 1); // call the showPage function
appendPageLinks(list); // call the appendPageLinks function


// search bar
const header = document.querySelector('.page-header');
const searchDiv = document.createElement('div'); // create a new div for the search bar
searchDiv.style.display = 'inline'; 
searchDiv.style.float = 'right';
header.appendChild(searchDiv); // appended search bar to the header 
const input = document.createElement('input'); // added an input
input.placeholder = 'Search for students...';
const button = document.createElement('button'); // added a button
button.textContent = 'Search';
searchDiv.appendChild(input); // appended the input to the search bar
searchDiv.appendChild(button); // appended the button the search bar


// the search function will add functionality to the search bar
function search(input, studList) {
  
  // the noResults variable contains the text that will show if there are no matches in the search
  const noResults = document.createElement('p');
    noResults.textContent = 'No results';
    noResults.style.textAlign = 'center';
    noResults.style.display = 'none';

  mainDiv.appendChild(noResults); // append the noResults variable to the mainDiv
  const filter = input.value.toUpperCase(); // users input
  filteredList = []; // the empty array that will contain the filtered list of students from the users input
  mainDiv.removeChild(pagDiv); // after the user enters text in the input, remove the original pagination links
  pagDiv.innerHTML = ''; // reset the pagination links

  // a for loop to get a list of students
  for (let i = 0; i < studList.length; i++) {
    const studentNames = document.querySelectorAll('h3')[i];
    studList[i].style.display = 'none'; // hide all students
    
    if (filter.length > 0 && studentNames.textContent.toUpperCase().includes(filter)) {
      filteredList.push(studList[i]); // add all filtered students to the filteredList array
      noResults.style.display = 'none'; // hide the noResults variable
    } else if (filteredList.length === 0) {
      noResults.style.display = ''; // display the noResults variable
    }

  }

  showPage(filteredList, 1); // call the showPage function with the filteredList array
  appendPageLinks(filteredList); // call the appendPageLinks function with the filteredList array

}


// add a keyup event listener to the input
input.addEventListener('keyup', (event) => {
  if (input.value !== '') {
    search(input, list); // call the search function 
  } else {
    pagDiv.innerHTML = ''; // reset the pagination links
    showPage(list, 1); // call the showPage function
    appendPageLinks(list); // call the appendPageLinks function
  }
})

