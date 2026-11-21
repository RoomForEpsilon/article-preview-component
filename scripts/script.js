const button = document.querySelector('button');
button.addEventListener('click', () => {

    const avatarWrapper = document.getElementsByClassName("avatar-wrapper")[0];
    const socialLinksWrapper = document.getElementsByClassName("social-links-wrapper")[0];
    const avatarButtonWrapper = document.querySelector(".avatar-button-wrapper");
 
    if (avatarWrapper.hidden === false) {
    
        avatarWrapper.hidden = true;
        socialLinksWrapper.hidden = false;
        avatarButtonWrapper.classList.add("avatar-is-hidden");
        button.classList.add("button-is-clicked");
        button.ariaExpanded = "true";
    } else {
        avatarWrapper.hidden = false;
        socialLinksWrapper.hidden = true;
        avatarButtonWrapper.classList.remove("avatar-is-hidden");
        button.classList.remove("button-is-clicked");
        button.ariaExpanded = "false";
    }
});