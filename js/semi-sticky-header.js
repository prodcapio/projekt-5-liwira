let Scroll = 0;
const threshold = 15;

window.addEventListener('scroll', function () {
    const header = document.getElementById('semi-sticky-header')
    const burgericon = document.getElementById('burger-icon')
    let currentScroll = this.window.pageYOffset
    let scrollForskel = currentScroll - Scroll;

    if (scrollForskel > threshold) {
        header.style.transform = 'translateY(-175px)';
        burgericon.style.transform = 'translateY(-175px)';
    } else if (scrollForskel < -threshold) {
        header.style.transform = 'translateY(0px)';
        burgericon.style.transform = 'translateY(0px)';
    }

    Scroll = currentScroll
});
