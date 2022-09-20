// Operadores lógicos
/*
&& --> operador E (and)
|| --> operador OU (or)
! --> operador NÃO (not)
*/
let n1 = 10
let n2 = 5
let n3 = 20

console.log(!(n1 > n2))
console.log(!(false))

console.log(n1 > n2 && n1 > n3)
console.log(n1 > n2 || n1 > n3)

//operador && avalia todas as operações se uma for FALSE, o resultado é FALSE.
//operador || avalia todas as operações, se uma for TRUE o resultado sera TRUE.