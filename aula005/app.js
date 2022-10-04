function QuemEhEssePokemon(pokemon){
    if(pokemon == "pikachu"){
       document.querySelector(".acerto").innerHTML ='Parabéns, você acertou'
    }else{
       document.querySelector(".acerto").innerHTML ='Inferlizmente você erro.'
    }
    document.querySelector("#pokemon-imagem").style.filter="brightness(1)"
    document.querySelector("#nome-pokemon").innerHTML = "Pikachu"
}