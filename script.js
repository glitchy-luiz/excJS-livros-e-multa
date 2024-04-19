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