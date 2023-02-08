const createCharacters = () => {

    let characterContainer = document.createElement('div');
    characterContainer.className = 'characterContainer';

    characterContainer.appendChild(creator('../images/Fox.webp', 'Fox is my bread and butter, my tried and true. The character that I used to make waves in my province and become one of the best players in Canada. A fast and precise character, I would overwhelm my opponents with quick movements and brutally punish any mistakes.'));
    characterContainer.appendChild(creator('../images/Cloud.jpg', 'I enjoy Cloud and his aesthetics, he is a character I still use to this day, but with less success than Fox. In Ultimate I have taken a more casual mood compared to Smash 4'));
    characterContainer.appendChild(creator('../images/Sheik.png', 'Sheik is my soul character, the one that most fits me as a person. I used her as a alt in Smash 4 to great sucess'));

    return characterContainer;
}

const creator = (image, p) => {

    let character = document.createElement('div');
    character.className = 'character';

    let imageSrc = document.createElement('img');
    imageSrc.src = image;
    character.appendChild(imageSrc);

    let para = document.createElement('p');
    para.innerText = p;
    character.appendChild(para);

    return character;
}

export default createCharacters;