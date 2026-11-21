const button = document.querySelector('button');
button.addEventListener('click', () => {
    const avatar_wrapper = document.getElementsByClassName("avatar-wrapper")[0];
    avatar_wrapper.hidden = true;
    const social_links_wrapper = document.getElementsByClassName("social-links-wrapper")[0];
    social_links_wrapper.hidden = false;
    const avatar_button_wrapper = document.querySelector(".avatar-button-wrapper");
    avatar_button_wrapper.classList.add("avatar-is-hidden");

    button.classList.add("button-is-clicked");
    button.ariaExpanded = "true";
});