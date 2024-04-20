function multi(){
    numero = document.getElementById("livros").value 
    let total =''
    if (numero > 7){
        valor = 15
        total  = valor * numero
    }
    else{
        valor = 22
        total = valor * numero    
    }
    let resultado = document.getElementById('resultado').innerHTML ="O preço por livro é de R$"+valor
    let resultadoTotal = document.getElementById('resultadototal').innerHTML ="O preço total é de R$"+total
}

function multa(){
    velocidade = document.getElementById("velo").value 
    if (velocidade > 60){
        valorMulta = (velocidade - 60) * 100
        let resultado2 = document.getElementById('resultado2').innerHTML ="A multa é de: R$" + valorMulta
    }
    else{
        let resultado2 = document.getElementById('resultado2').innerHTML ="Está dentro do limite de velocidade"
    }
}

function cargo(){
    let trab = document.getElementById('trab')
    let salMinimo = 3000
    let resultado3 = document.getElementById('resultado3').innerHTML ="Seu salário"

    switch (trab){
        case 'jr':
            resultado3.innerHTML ="Seu salário é de: R$" + salMinimo
            break
        case 'pleno':
            resultado3 = document.getElementById('resultado3').innerHTML ="Seu salário é de: R$" + salMinimo*2
            break
        case 'senior':
            resultado3 = document.getElementById('resultado3').innerHTML ="Seu salário é de: R$" + salMinimo*3
            break
        case 'techlead':
            resultado3 = document.getElementById('resultado3').innerHTML ="Seu salário é de: R$" + salMinimo*4
            break
        case 'diretor':
            resultado3 = document.getElementById('resultado3').innerHTML ="Seu salário é de: R$" + salMinimo*5
            break
        
    }
}