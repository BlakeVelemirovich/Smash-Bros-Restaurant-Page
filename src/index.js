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

//Content 
let contentContainer = document.createElement('div');
contentContainer.className = 'contentContainer';
contentSelector.appendChild(contentContainer);

let contentP = document.createElement('p');
let contentText = document.createTextNode('This website is all about my personal Super Smash Bros. journey. It is a platform to showcase my history and evolution as a Smash player, including my favorite characters, notable victories, and milestones in my Smash career.');
contentP.appendChild(contentText);
contentContainer.appendChild(contentP);

let contentImage = document.createElement('img');
contentImage.className = 'contentImage';
contentImage.src = '../images/Smash.png';
contentContainer.appendChild(contentImage);

