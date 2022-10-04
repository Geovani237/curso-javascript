function MenorPreco() {

   produto1 = parseFloat (document.querySelector("#firstProduct").value)
   produto2 = parseFloat (document.querySelector("#secondProduct").value)
   produto3 = parseFloat (document.querySelector("#thirdProduct").value)

    if (produto1 < produto2 && produto1 < produto3) {
        document.querySelector("#resultado").innerHTML = 'Compre o 1º é o produto mais barato'
    } else if (produto2 < produto1 && produto2 < produto3) {
        document.querySelector("#resultado").innerHTML = 'Compre o 2º é o produto mais barato'
    } else {
        document.querySelector("#resultado").innerHTML = 'Compre o 3º é o produto mais barato'
    }

}
