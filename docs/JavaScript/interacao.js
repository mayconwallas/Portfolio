function anoRodape() {
    let rodape = document.querySelector('#rodapeAno')
    let anoDate = new Date();
    let anoRoda = anoDate.getFullYear()
    rodape.innerHTML = `<p id="rodapeAno">Maycon Wallas - ${anoRoda}</p>`
}