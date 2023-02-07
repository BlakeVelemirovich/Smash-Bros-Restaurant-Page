function createHome() {
    let contentContainer = document.createElement('div');
    contentContainer.className = 'contentContainer';

    let contentP = document.createElement('p');
    let contentText = document.createTextNode('This website is all about my personal Super Smash Bros. journey. It is a platform to showcase my history and evolution as a Smash player, including my favorite characters, notable victories, and milestones in my Smash career.');
    contentP.appendChild(contentText);
    contentContainer.appendChild(contentP);

    let contentImage = document.createElement('img');
    contentImage.className = 'contentImage';
    contentImage.src = '../images/Smash.png';
    contentContainer.appendChild(contentImage);
    return contentContainer;
}

export default createHome;