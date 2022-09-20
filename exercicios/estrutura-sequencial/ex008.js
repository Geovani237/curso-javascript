let salarioHora = 10.5
let horas = 120
let salarioMes

salarioMes = salarioHora * horas

console.log("Seu salário esse Mês foi:",salarioMes.toLocaleString('pt-br', {minimumFractionDigits: 2}))