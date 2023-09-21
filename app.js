const btn = document.querySelector('.theme')
const header = document.querySelector('.header')

btn.addEventListener('click', () => {
    header.classList.toggle('header--active')
})