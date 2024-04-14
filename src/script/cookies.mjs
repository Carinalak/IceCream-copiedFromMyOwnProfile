function removeCookieBar() {
    const cookiesBarContainer = document.getElementById('cookiesBar');
    cookiesBarContainer.innerHTML = '';
    cookiesBarContainer.style.backgroundColor = 'transparent';
}

export default function cookieBar() {
    const cookiesBtn = document.getElementById('cookiesBtn');
    cookiesBtn.addEventListener('click', removeCookieBar);
}
