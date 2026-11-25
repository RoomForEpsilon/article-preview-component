const button = document.querySelector('.share-button');
const avatarWrapper = document.getElementsByClassName("avatar-wrapper")[0];
const socialLinksWrapper = document.getElementsByClassName("social-links-wrapper")[0];
const avatarButtonWrapper = document.querySelector(".avatar-button-wrapper");

button.addEventListener('click', () => {

    const shouldOpen = socialLinksWrapper.hidden;

    avatarWrapper.hidden = shouldOpen;
    socialLinksWrapper.hidden = !shouldOpen;

    avatarButtonWrapper.classList.toggle("avatar-is-hidden", shouldOpen);
    button.classList.toggle("button-is-clicked", shouldOpen);
    button.ariaExpanded = String(shouldOpen);
 
});