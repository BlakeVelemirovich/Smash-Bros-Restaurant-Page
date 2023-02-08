import createHome from "./Home";
import createAbout from "./aboutMe";
import createCharacters from "./Characters";

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

// Header buttons

let homeBtn = document.createElement('button');
let characterBtn = document.createElement('button');
let aboutBtn = document.createElement('button');

homeBtn.className = 'headerButton';
characterBtn.className = 'headerButton';
aboutBtn.className = 'headerButton';

homeBtn.innerHTML = 'Home';
characterBtn.innerHTML = 'Characters';
aboutBtn.innerHTML = 'About';

homeBtn.addEventListener('click', function() {
    removeActive();
    homeBtn.id = 'active';
    main.textContent = '';
    main.appendChild(createHome());
});

characterBtn.addEventListener('click', function() {
    removeActive();
    characterBtn.id = 'active';
    main.textContent = '';
    main.appendChild(createCharacters());
});

aboutBtn.addEventListener('click', function() {
    removeActive();
    aboutBtn.id = 'active';
    main.textContent = '';
    main.appendChild(createAbout());
});

buttonContainer.appendChild(homeBtn);
buttonContainer.appendChild(characterBtn);
buttonContainer.appendChild(aboutBtn);

const removeActive = () => {

    const headerButtons = document.querySelectorAll('.headerButton');    
    headerButtons.forEach(button => {
        button.id = '';
    });
}

//Initial invoking of the Home Page
let main = document.createElement('div');
main.className = 'main';
contentSelector.appendChild(main);
main.appendChild(createHome());
