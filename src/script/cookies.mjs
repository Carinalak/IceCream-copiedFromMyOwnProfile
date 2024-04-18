function removeCookieBar() {
    const cookiesBarContainer = document.getElementById('cookiesBar');
    cookiesBarContainer.classList.add('cookies_bar_accepted');
    cookiesBarContainer.addEventListener('transitionend', () => {
        cookiesBarContainer.remove();
    });
}

export default function cookieBar() {
    const cookiesBtn = document.getElementById('cookiesBtn');
    cookiesBtn.addEventListener('click', removeCookieBar);
}
