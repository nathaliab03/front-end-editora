const botao = document.querySelector('.botao-fixo')

window.addEventListener("scroll", event => {
    if(window.scrollY == 0) {
        botao.classList.remove('visible')
    } else {
        botao.classList.add('visible')
    }
})