function removeCookieBar() {
    const cookiesBarContainer = document.getElementById('cookiesBar');
    cookiesBarContainer.remove();
}

export default function cookieBar() {
    const cookiesBtn = document.getElementById('cookiesBtn');
    cookiesBtn.addEventListener('click', removeCookieBar);
}
