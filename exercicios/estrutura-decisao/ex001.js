function TurnoEstudo(){

    turno = document.querySelector("#turnoEstudo").value
    if(turno == 'M' || turno == 'm'){
        document.querySelector("#resultado").innerHTML ='Bom dia!'
    }else if(turno == 'V' || turno == 'v'){
        document.querySelector("#resultado").innerHTML ='Boa tarde!'
    }else if(turno == 'N' || turno == 'n'){
        document.querySelector("#resultado").innerHTML ='Boa noite!'
    } else{
        document.querySelector("#resultado").innerHTML ='Valor invalido!'
    }
}