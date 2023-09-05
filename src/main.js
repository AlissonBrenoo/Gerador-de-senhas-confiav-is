import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const passowordBottom = document.querySelector('button');
const displayPssowordBottom = document.querySelector('h2');
console.log('hello world');

passowordBottom.addEventListener('click', () => {
  const randomPassoword = nanoid();
  displayPssowordBottom.innerHTML = randomPassoword;
});

displayPssowordBottom.addEventListener('click', () => {
  copy(displayPssowordBottom.innerText);
});
