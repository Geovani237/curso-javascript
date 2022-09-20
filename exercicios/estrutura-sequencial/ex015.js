salarioHora = 29
totalHoras = 160
salarioBruto = (salarioHora * totalHoras)
ir = salarioBruto * (11/100)
inss = salarioBruto * (8/100)
sindicato = salarioBruto * (5/100)
salarioLiquido = salarioBruto  - ir - inss - sindicato

salarioBruto = salarioBruto.toLocaleString('pt-br',{minimumFractionDigits: 2})
ir = ir.toLocaleString('pt-br',{minimumFractionDigits: 2})
inss = inss.toLocaleString('pt-br',{minimumFractionDigits: 2})
sindicato = sindicato.toLocaleString('pt-br',{minimumFractionDigits: 2})
salarioLiquido = salarioLiquido.toLocaleString('pt-br',{minimumFractionDigits: 2})
console.log('+ Salário Bruto : R$', salarioBruto)
console.log('- IR (11%) : R$', ir)
console.log('- INSS (8%) : R$', inss)
console.log('- Sindicato ( 5%) : R$', sindicato)
console.log('= Salário Liquido : R$', salarioLiquido)