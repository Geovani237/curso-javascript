function CalcularSalario(){
    salarioHora = parseFloat(document.querySelector("#salarioHora").value)
    totalHoras = parseFloat(document.querySelector("#totalHorasTrabalhadas").value)
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

    document.querySelector("#resultado").innerHTML = ''
    document.querySelector("#resultado").innerHTML = '+ Salário Bruto : R$'+ salarioBruto +'<br>'
    document.querySelector("#resultado").innerHTML += '- IR (11%) : R$'+ ir +'<br>'
    document.querySelector("#resultado").innerHTML += '- INSS (8%) : R$'+ inss +'<br>'
    document.querySelector("#resultado").innerHTML += '- Sindicato ( 5%) : R$'+ sindicato +'<br>'
    document.querySelector("#resultado").innerHTML += '= Salário Liquido : R$'+ salarioLiquido 
}