// Header title Creation
let homeTitle = document.createElement('h1');
let titleText = document.createTextNode('Super Smash Brothers!');

homeTitle.appendChild(titleText);

let contentSelector = document.querySelector('#content');
contentSelector.appendChild(homeTitle);

// Header buttons function
let createButtons = function(name) {

    let newButton = document.createElement('button');
    let text = document.createTextNode(name);
    newButton.appendChild(text);
    contentSelector.appendChild(newButton);
}

window.onload = () => {
        
        createButtons('Home');
        createButtons('Characters');
        createButtons('About Me');
}

//Content 

