const list1 = document.querySelector('.list1');
const list2Cat = document.querySelector('.list2__cat');
const list2Dog = document.querySelector('.list2__dog');
const list2Fish = document.querySelector('.list2__fish');
let activeElement = null;
const btn = document.querySelectorAll('.btn');


list1.addEventListener('click', showList);


function showList(e) {
  const target = e.target;


  list2Cat.style.display = 'none';
  list2Dog.style.display = 'none';
  list2Fish.style.display = 'none';


  if (target.classList.contains('list1__cat')) {
    list2Cat.style.display = 'block';
  } else if (target.classList.contains('list1__dog')) {
    list2Dog.style.display = 'block';
  } else if (target.classList.contains('list1__fish')) {
    list2Fish.style.display = 'block';
  }
 
}

list2Cat.addEventListener('click', showProduct);
list2Dog.addEventListener('click', showProduct);
list2Fish.addEventListener('click', showProduct);

function showProduct(e){
  const target = e.target;
  if (activeElement) {
    activeElement.style.display = 'none';
  }
 
  if (target.classList.contains('cat1')) {
    activeElement = document.querySelector('.cat1__info');
  } else if (target.classList.contains('cat2')) {
    activeElement = document.querySelector('.cat2__info');
  } else if (target.classList.contains('cat3')) {
    activeElement = document.querySelector('.cat3__info');
  } else if (target.classList.contains('dog1')) {
    activeElement = document.querySelector('.dog1__info');
  } else if (target.classList.contains('dog2')) {
    activeElement = document.querySelector('.dog2__info');
  } else if (target.classList.contains('dog3')) {
    activeElement = document.querySelector('.dog3__info');
  } else if (target.classList.contains('fish1')) {
    activeElement = document.querySelector('.fish1__info');
  } else if (target.classList.contains('fish2')) {
    activeElement = document.querySelector('.fish2__info');
  } else if (target.classList.contains('fish3')) {
    activeElement = document.querySelector('.fish3__info');
  }

  activeElement.style.display = 'block';
}


btn.forEach((button) => {
  button.addEventListener('click', buyProduct);
});


function buyProduct() { 
  alert("Товар куплено!");

  if (activeElement) {
    activeElement.style.display = 'none';
    activeElement = null;
  }

  list2Cat.style.display = 'none';
  list2Dog.style.display = 'none';
  list2Fish.style.display = 'none';
}


