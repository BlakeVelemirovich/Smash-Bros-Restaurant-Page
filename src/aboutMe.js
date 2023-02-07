const createAbout = () => {

    let aboutContainer = document.createElement('div');
    aboutContainer.className = 'aboutContainer';
    aboutContainer.appendChild(createLink('Github', './Octicons-mark-github.svg'));
    aboutContainer.appendChild(createLink('Smashwiki', './SmashBall.svg'));
    aboutContainer.appendChild(createLink('twitter', './t.svg'));

    return aboutContainer;
}

const createLink = (website, logo) => {

    let link = document.createElement('div');
    link.className = 'link';

    const websiteName = document.createElement('p');
    websiteName.textContent = website;

    const imageSrc = document.createElement('img');
    imageSrc.src = logo;

    link.appendChild(websiteName);
    link.appendChild(imageSrc);
    return link;
}

export default createAbout;
