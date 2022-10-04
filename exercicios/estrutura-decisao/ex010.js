function MenorMaior(){number1 = parseFloat(document.querySelector("#numberOne").value) 
number2 = parseFloat(document.querySelector("#numberTwo").value) 
number3 = parseFloat(document.querySelector("#numberThree").value) 

if(number1 > number2 && number1 > number3){
    document.querySelector("#resultado").innerHTML += 'O maior número é: ' + number1 + '<br>'
}else if(number2 > number1 && number2 > number3){
    document.querySelector("#resultado").innerHTML += 'O maior número é: ' + number2 + '<br>'
}else{
    document.querySelector("#resultado").innerHTML += 'O maior número é: ' + number3 + '<br>'
}

if(number1 < number2 && number1 < number3){
    document.querySelector("#resultado").innerHTML += 'O menor número é: ' + number1 + '<br>'
}else if(number2 < number1 && number2 < number3){
    document.querySelector("#resultado").innerHTML += 'O menor número é: ' + number2 + '<br>'
} else{
    document.querySelector("#resultado").innerHTML += 'O menor número é: ' + number3 + '<br>'
}
}
