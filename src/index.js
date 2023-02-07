import createHome from "./Home";

// Header title Creation
let homeTitle = document.createElement('h1');
let titleText = document.createTextNode('Super Smash Brothers!');
homeTitle.appendChild(titleText);

let headerContainer = document.createElement('div');
let buttonContainer = document.createElement('div');
headerContainer.className = 'header';
buttonContainer.className = 'headerButtonContainer';
headerContainer.appendChild(homeTitle);

let contentSelector = document.querySelector('#content');
contentSelector.appendChild(headerContainer);
contentSelector.appendChild(buttonContainer);

// Header buttons factory function and creation
let createButtons = function(name) {

    let newButton = document.createElement('button');
    newButton.className = 'headerButton';
    let text = document.createTextNode(name);
    newButton.appendChild(text);
    buttonContainer.appendChild(newButton);
}

window.onload = () => {
        
        createButtons('Home');
        createButtons('Characters');
        createButtons('About Me');
}

//Initial invoking of the Home Page
contentSelector.appendChild(createHome());