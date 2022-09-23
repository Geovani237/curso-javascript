let number1 = 27
let number2 = 5
let number3 = 7

if(number1 > number2 && number1 > number3){
    console.log("O maior número é: " ,  number1)
}else if(number2 > number1 && number2 > number3){
    console.log("O maior número é: " , number2)
}else{
    console.log("O maior número é: " , number3)
}

if(number1 < number2 && number1 < number3){
    console.log("O menor número é: ",number1)
}else if(number2 < number1 && number2 < number3){
    console.log("O menor número é: ",number2)
} else{
    console.log("O menor número é: ",number3)
}
