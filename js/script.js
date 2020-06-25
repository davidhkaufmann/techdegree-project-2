/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const listItems = document.querySelectorAll('.student-item');
const perPage = 10;


function showPage (page) {
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


function appendPageLinks () {
  const mainDiv = document.querySelector('.page')
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  div.className = 'pagination';
  mainDiv.appendChild(div);
  div.appendChild(ul);
  for (let i = 0; i < listItems.length/8; i++) {
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


showPage(1);
appendPageLinks();
const links = document.querySelectorAll('a');


function setAction(event) {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }
  var targetedLink = event.target;
  targetedLink.classList.add('active');
  if (targetedLink.className == 'active') {
    showPage(targetedLink.textContent);
  }
}


for (let i = 0; i < links.length; i++) {
  links[i].addEventListener ('click', (event) => {
    setAction(event);
  });
}