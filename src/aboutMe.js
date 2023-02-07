const createAbout = () => {

    let aboutContainer = document.createElement('div');
    aboutContainer.className = 'aboutContainer';
    aboutContainer.appendChild(createLink('Github', '../images/Octicons-mark-github.svg'));
    aboutContainer.appendChild(createLink('Smashwiki', '../images/SmashBall.svg'));
    aboutContainer.appendChild(createLink('twitter', '../images/t.svg'));

    return aboutContainer;
}

const createLink = (website, logo) => {

    let link = document.createElement('div');
    link.className = 'link';
    
    const imageSrc = document.createElement('img');
    imageSrc.src = logo;
    
    const websiteName = document.createElement('p');
    websiteName.textContent = website;
    
    link.appendChild(imageSrc);
    link.appendChild(websiteName);

    return link;
}

export default createAbout;
