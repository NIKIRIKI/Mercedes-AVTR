const cookieBox = document.querySelector(".popup");
const buttonAccept = document.querySelector("#acceptBtn");

const hideCookieBox = () => {
    cookieBox.style.display = 'none';
    // Set a cookie to remember the user's choice
    document.cookie = "cookieConsent=accepted; max-age=" + 60 * 60 * 24 * 30;
}

buttonAccept.addEventListener('click', hideCookieBox);
