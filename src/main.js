import { nanoid } from 'nanoid';
import './style.css';

const passowordBottom = document.querySelector('button');
const displayPssowordBottom = document.querySelector('h2');

passowordBottom.addEventListener('click', () => {
    const randomPassoword = nanoid();
    displayPssowordBottom.innerHTML = randomPassoword;
});
