// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';

// let nome = prompt("Informe seu nome")
// //Nome : maior que 3 caracteres;
// while(nome.length <= 3){
//     nome = prompt("Informe seu nome")
// }

// let idade = prompt("Informe sua idade")
// //idade : entre 0 e 150;
// while(idade < 0 || idade > 150){
//     idade = prompt ("Informe sua idade")
// }

// let salario = prompt("Informe seu salário")
// //salario : maior que zero;
// while(salario <= 0){
//     salario = prompt("Informe seu salário")
// }

// let sexo = prompt("Informe o sexo (f ou m)")
// //sexo : 'f' ou 'm';
// while(sexo != 'f' && sexo != 'm'){
//     sexo = prompt("Informe o sexo (f ou m)")
// }

// let estadoCivil = prompt("Informe o estado civil(s - solteiro, c - casado, v - viúvo, d - divorciado)")
// //estado civil:'s', 'c', 'v', 'd';
// while(estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'v' && estadoCivil != 'd'){
//     estadoCivil = prompt("Infome o estado civil(s-solteiro, c-casado, v-viúvo, d - divorciado)")
// }

function CadastrarCliente() {
    let nome = document.querySelector("#nome").value
    if (nome.length < 3) {
        document.querySelector("#erro-nome").innerHTML = "<em>O nome deve possuir mais de 3 caracteres</em>"
        document.querySelector("#nome").focus()
        return
    } else{
        document.querySelector("#erro-nome").innerHTML = ""
    }
    // fazer um if para os outros campos...
    alert("Cadastro efetuado com sucesso!!!")
}