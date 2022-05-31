const botao = document.getElementById("btn")
const titulo = document.getElementById("titulo")
const h1 = document.getElementById("title")
const footer = document.getElementById("footer")


botao.addEventListener('click',mudaTema)

function mudaTema() {
    document.body.classList.toggle("darkmode")
    botao.classList.toggle("darkmode")
    titulo.classList.toggle("darkmode")
    h1.classList.toggle("darkmode")
    footer.classList.toggle("darkmode")
    if (botao.classList.contains("darkmode")){
        botao.innerText="Light-Mode"
        titulo.innerText="Dark-Mode"
        h1.innerText="Dark Mode ON"
    }
    else{
        botao.innerText="Dark-Mode"
        titulo.innerText="Light-Mode"
        h1.innerText="Light Mode ON"
    }
}