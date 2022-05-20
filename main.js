const btn = document.querySelector('.btn');
const bodyBgc = document.querySelector('body');

const colours = ['red', 'blue', 'green', 'purple', 'orange'];


const changeColour = () => {
    let random = Math.floor(Math.random() * colours.length);
    bodyBgc.style.backgroundColor = colours[random];
};

btn.addEventListener('click', changeColour)