function render(variables = {}) {

    const {
        includeCover = true,
        background = 'default-cover.jpg',
        avatarURL = 'default-avatar.jpg',
        name = 'Nombre',
        lastname = 'Apellido',
        role = 'Rol Profesional',
        city = 'Ciudad',
        country = 'País',
        twitter = null,
        github = null,
        linkedin = null,
        instagram = null
    } = variables;

    const coverElement = document.getElementById('cover');
    const coverImageElement = document.getElementById('cover-image');
    if (includeCover) {
        coverElement.style.display = 'block';
        coverImageElement.src = background;
    } else {
        coverElement.style.display = 'none';
    }


    const avatarImageElement = document.getElementById('avatar-image');
    avatarImageElement.src = avatarURL;


    const fullNameElement = document.getElementById('full-name');
    fullNameElement.textContent = `${name} ${lastname}`;


    const roleElement = document.getElementById('role');
    roleElement.textContent = role;


    const locationElement = document.getElementById('location');
    locationElement.textContent = `${city}, ${country}`;


    const socialLinksElement = document.getElementById('social-links');
    socialLinksElement.innerHTML = '';

    const socialPlatforms = { twitter, github, linkedin, instagram };
    for (const [platform, username] of Object.entries(socialPlatforms)) {
        if (username) {
            const link = document.createElement('a');
            link.href = `https://${platform}.com/${username}`;
            link.target = '_blank';
            link.innerHTML = `<img src="icons/${platform}.png" alt="${platform} icon">`;
            socialLinksElement.appendChild(link);
        }
    }
}
