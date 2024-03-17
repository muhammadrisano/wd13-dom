// getElementById -> meyeleksi element yg membiliki atribut id -> mengembalikan element

const elTitle = document.getElementById('title')
console.log(elTitle);
// elTitle.innerHTML = "helo world"

elTitle.style.color = "red"

// getElementsByClassName
const elementsItem = document.getElementsByClassName('item')

for(let i = 0; i<elementsItem.length; i++){
  elementsItem[i].style.color = "blue"
}

// getElementsByTagName

// const elP = document.getElementsByTagName('p')
// console.log(elP);

// querySelector

const elSearch = document.querySelector('.search')
// console.log(elSearch);
// elSearch.style.backgroundColor = 'lightblue'


// querySelectorAll
// const elSearchs = document.querySelectorAll('.search')
// elSearchs.forEach(element => {
//   element.style.backgroundColor = 'red'
// });

//

const elP = document.querySelector('p')
elP.classList.add('content')
