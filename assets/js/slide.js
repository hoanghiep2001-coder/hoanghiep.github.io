// gan bien $ de goi cac selector ( đỡ phải viết dài )
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const dots = $$('.body-beaches-dot-item') 
const imgs = $$('.body-beaches-img-item')

dots.forEach((dot, index) => {
    const img = imgs[index]

    dot.onclick = function() {

        $('.body-beaches-dot-item.active').classList.remove('active')
        $('.body-beaches-img-item.active').classList.remove('active')

        this.classList.add('active')
        img.classList.add('active')
    }
})

// Tablet/Mobile Nav

const openTabletNav = $('.tablet__header-icon')
const closeTabletNav = $('.tablet__close-img')
const TabletNav = $('.tablet__header-bars-container')

function showTabletNav() {
    TabletNav.classList.add('close')
}

function hideTabletNav() {
    TabletNav.classList.remove('close')
}

openTabletNav.addEventListener('click', showTabletNav)
closeTabletNav.addEventListener('click', hideTabletNav)
