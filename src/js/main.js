const navTogglers = document.querySelectorAll('[data-nav-toggler]')
const navbar = document.querySelector('[data-navbar]')
const header = document.querySelector('[data-header]')
const logoImg = document.querySelector('.logo-img')

window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
        header.classList.add('active')
        logoImg.src="src/images/Logo-dark.svg"
        
    } else {
        header.classList.remove('active')
        logoImg.src="src/images/Logo-light.svg"
    }
})

navTogglers.forEach(elem => {
    elem.addEventListener('click', toggleNav)
})

function toggleNav(event) {
    navbar.classList.toggle('active')
    document.body.classList.toggle('nav-open')
    console.log(event)
}