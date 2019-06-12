const { calculoFeminino, calculoMasculino, calculaIndice } = require('./logic')


function calcular(indice, isFeminino, idade) {
    let resultado


    if (Number.isNaN(indice) || indice <= 0) {
        resultado= "Valores inválidos!"
    } else {
        if (isFeminino) {
            resultado = calculoFeminino(idade, indice)
        } else {
            resultado = calculoMasculino(idade, indice)
        }
        resultado = resultado + ", com indice " + indice.toFixed(2)
    }

    return resultado
}


const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const elPeso = document.getElementById('peso')
    const elAltura = document.getElementById('altura')
    const elIdade = document.getElementById('idade')
    const elFeminino = document.getElementById('feminino')
    const elResultado = document.getElementById('resultado')

    const indice = calculaIndiceApartirDosInputs(elPeso, elAltura)
    const resultado = calcular(
        indice,
        elFeminino.checked,
        parseInt(elIdade.value)
    )

    elResultado.value = resultado
})



function calculaIndiceApartirDosInputs (elPeso, elAltura) {
    const peso = parseInt (elPeso.value)
    const altura = parseInt(elAltura.value)
    

    return calculaIndice (peso, altura)
}


// function ready {
//     if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") 
//         ocultar()
//      else 
//         document.addEventListener('DOMContentLoaded', fn);
// }

// ready(function () {
//     const ocultar = document.querySelector('conteudo')

//     if (ocultar) 
        

// })

// function exibirConteudosDasDivs () {
//     const abaixoDoPeso = document.getElementById('abaixo-peso')
//     const pesoNormal = document.getElementById('normal-peso')
//     const pesoSobrepeso = document.getElementById('sobrepeso')
//     const obesidadeGrau1 = document.getElementById('obesidade-grau1')
//     const obesidadeGrau2 = document.getElementById('obesidade-grau2')
//     const obesidadeGrau3 = document.getElementById('obesidade-grau3')
// }