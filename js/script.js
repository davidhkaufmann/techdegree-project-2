/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const listItems = document.querySelectorAll('.student-item');
const perPage = 10;


function showPage (list, page) {
  const startIndex = (page * perPage) - perPage;
  const endIndex = page * perPage;
  for (let i = 0; i < listItems.length; i++) {
    if (i >= startIndex && i < endIndex) {
      listItems[i].style.display = 'block';
    } else {
      listItems[i].style.display = 'none';
    }
  }
}


function appendPageLinks (list) {
  const mainDiv = document.querySelector('.page')
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  div.className = 'pagination';
  mainDiv.appendChild(div);
  div.appendChild(ul);
  for (let i = 1; i < listItems.length/10; i++) {
    if (i > 0) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      li.appendChild(a);
      a.href = '#';
      a.textContent = i;
      ul.firstElementChild.firstElementChild.className = 'active';
      for (let i = 0; i < a.length; i++) {
        a[i].classList.remove('active');
        console.log(a);
      }
    }
  }
}

appendPageLinks();


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.