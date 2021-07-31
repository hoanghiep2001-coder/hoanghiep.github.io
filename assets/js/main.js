const openNav = document.querySelector('.header-bars-icon')
const Nav = document.querySelector('.header-bar-packages')

const closeNav = document.querySelector('.header-bars-close')

function showNav() {
    Nav.classList.add('open')
}

function hideNav() {
    Nav.classList.remove('open')
}

openNav.addEventListener('click', showNav)
closeNav.addEventListener('click', hideNav)

// sticky header
window.onscroll = () => {
    let scroll = document.querySelector('header');

    if (window.pageYOffset > 100) {
        scroll.classList.add('sticky');
    } else {
        scroll.classList.remove('sticky');
    }
}

// open section destination
