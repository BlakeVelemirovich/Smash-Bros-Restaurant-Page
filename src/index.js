// Header Creation
let homeTitle = document.createElement('h1');
let titleText = document.createTextNode('Super Smash Brothers!');

homeTitle.appendChild(titleText);

let contentSelector = document.querySelector('#content');
contentSelector.appendChild(homeTitle);