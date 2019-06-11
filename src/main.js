function Feminino(idade, calculo) {
    let resultado

    if (idade == '10') {
        if (calculo <= 14,22)
            resultado = "Abaixo do peso"
        else if (calculo >= 14.23 && calculo <= 20.18)
            resultado = "Peso adequado"
        else if (calculo >= 20.19)
            resultado = "Sobrepeso"
    }
    else if (idade == '11') {
        if (calculo <= 14,59)
            resultado = "Abaixo do peso"
        else if (calculo >= 14.6 && calculo <= 21.17)
            resultado = "Peso adequado"
        else if (calculo >= 21.18)
            resultado = "Sobrepeso"
    }
    else if (idade == '12') {
        if (calculo <= 14.97)
            resultado = "Abaixo do peso"
        else if (calculo >= 14.98 && calculo <= 22.16)
            resultado = "Peso adequado"
        else if (calculo >= 22.17)
            resultado = "Sobrepeso"
    }
    else if (idade == '13') {
        if (calculo <= 15.35)
            resultado = "Abaixo do peso"
        else if (calculo >= 15.36 && calculo <= 23.07)
            resultado = "Peso adequado"
        else if (calculo >= 23.08)
            resultado = "Sobrepeso"
    }
    else if (idade == '14') {
        if (calculo <= 15.66)
            resultado = "Abaixo do peso"
        else if (calculo >= 15.67 && calculo <= 23.87)
            resultado = "Peso adequado"
        else if (calculo >= 23.88)
            resultado = "Sobrepeso"
    }
    else if (idade == '15') {
        if (calculo <= 16)
            resultado = "Abaixo do peso"
        else if (calculo >= 16.01 && calculo <= 24.28)
            resultado = "Peso adequado"
        else if (calculo >= 24.29)
            resultado = "Sobrepeso"
    }
    else if (idade == '16') {
        if (calculo <= 16.36)
            resultado = "Abaixo do peso"
        else if (calculo >= 16.37 && calculo <= 24.73)
            resultado = "Peso adequado"
        else if (calculo >= 24.74)
            resultado = "Sobrepeso"
    }
    else if (idade == '17') {
        if (calculo <= 16.58)
            resultado = "Abaixo do peso"
        else if (calculo >= 16.59 && calculo <= 25.22)
            resultado = "Peso adequado"
        else if (calculo >= 25.23)
            resultado = "Sobrepeso"
    }
    else if (idade == '18') {
        if (calculo <= 16.7)
            resultado = "Abaixo do peso"
        else if (calculo >= 16.71 && calculo <= 25.55)
            resultado = "Peso adequado"
        else if (calculo >= 25.56)
            resultado = "Sobrepeso"
    }
    else if (idade == '19') {
        if (calculo <= 16.86)
            resultado = "Abaixo do peso"
        else if (calculo >= 16.87 && calculo <= 25.84)
            resultado = "Peso adequado"
        else if (calculo >= 25.85)
            resultado = "Sobrepeso"
    }
    else if ((idade>=20) && (idade<=59)){
        if (calculo < 18.5)
            resultado = "Abaixo do peso"
        else if (calculo > 18.5 && calculo <25)
            resultado = "Peso adequado"
        else if (calculo >=25 && calculo < 30)
            resultado = "Sobrepeso"
        else if (calculo >= 30 && calculo <= 34.9)
            resultado= "Obesidade grau 1"
        else if (calculo >= 35 && calculo <= 39.9)
            resultado= "Obesidade grau 2"
        else if (calculo >= 35 && calculo <= 39.9) 
            resultado= "Obesidade grau 2"
        else if (calculo >= 40)
            resultado= "Obesidade grau 3"
    }
    else if (idade >= 60){
        if (calculo <= 22)
            resultado = "Abaixo do peso"
        else if (calculo > 22 && calculo < 27)
            resultado = "Peso adequado"
        else if (calculo >= 27)
            resultado = "Sobrepeso"
    }

    return resultado
}

function Masculino(idade, calculo) {
    if (idade == '10') {
        if (calculo <= 14,41)
            resultado = "Abaixo do peso"
        else if (calculo >= 14.42 && calculo <= 19.5)
            resultado = "Peso adequado"
        else if (calculo >= 19.6)
            resultado = "Sobrepeso"
    }
    else if (idade == '11') {
        if (calculo <= 14,82)
            resultado = "Abaixo do peso"
        else if (calculo >= 14.83 && calculo <= 20.34)
            resultado = "Peso adequado"
        else if (calculo >= 20.35)
            resultado = "Sobrepeso"
    }
    else if (idade == '12') {
        if (calculo <= 15.23)
            resultado = "Abaixo do peso"
        else if (calculo >= 15.24 && calculo <= 21.11)
            resultado = "Peso adequado"
        else if (calculo >= 21.12)
            resultado = "Sobrepeso"
    }
    else if (idade == '13') {
        if (calculo <= 15.72)
            resultado = "Abaixo do peso"
        else if (calculo >= 15.73 && calculo <= 21.92)
            resultado = "Peso adequado"
        else if (calculo >= 21.93)
            resultado = "Sobrepeso"
    }
    else if (idade == '14') {
        if (calculo <= 16.17)
            resultado = "Abaixo do peso"
        else if (calculo >= 16.18 && calculo <= 22.76)
            resultado = "Peso adequado"
        else if (calculo >= 22.77)
            resultado = "Sobrepeso"
    }
    else if (idade == '15') {
        if (calculo <= 16.58)
            resultado = "Abaixo do peso"
        else if (calculo >= 16.59 && calculo <= 23.62)
            resultado = "Peso adequado"
        else if (calculo >= 23.63)
            resultado = "Sobrepeso"
    }
    else if (idade == '16') {
        if (calculo <= 17)
            resultado = "Abaixo do peso"
        else if (calculo >= 17.01 && calculo <= 24.44)
            resultado = "Peso adequado"
        else if (calculo >= 24.45)
            resultado = "Sobrepeso"
    }
    else if (idade == '17') {
        if (calculo <= 17.3)
            resultado = "Abaixo do peso"
        else if (calculo >= 17.31 && calculo <= 25.27)
            resultado = "Peso adequado"
        else if (calculo >= 25.28)
            resultado = "Sobrepeso"
    }
    else if (idade == '18') {
        if (calculo <= 17.53)
            resultado = "Abaixo do peso"
        else if (calculo >= 17.54 && calculo <= 25.94)
            resultado = "Peso adequado"
        else if (calculo >= 25.95)
            resultado = "Sobrepeso"
    }
    else if (idade == '19') {
        if (calculo <= 17.79)
            resultado = "Abaixo do peso"
        else if (calculo >= 17.8 && calculo <= 26.35)
            resultado = "Peso adequado"
        else if (calculo >= 26.36)
            resultado = "Sobrepeso"
    }
    else if ((idade >= 20) && (idade <= 59)){
        if (calculo < 18.5)
            resultado = "Abaixo do peso"
        else if (calculo > 18.5 && calculo < 25)
            resultado = "Peso adequado"
        else if (calculo >= 25 && calculo < 30)
            resultado = "Sobrepeso"
        else if (calculo >= 30 && calculo <= 34.9)
            resultado= "Obesidade grau 1"
        else if (calculo >= 35 && calculo <= 39.9)
            resultado= "Obesidade grau 2"
        else if (calculo >= 35 && calculo <= 39.9) 
            resultado= "Obesidade grau 2"
        else if (calculo >= 40)
        resultado= "Obesidade grau 3"
    }
    else if (idade >= 60){
        if (calculo <= 22)
            resultado = "Abaixo do peso"
        else if (calculo > 22 && calculo < 27)
            resultado = "Peso adequado"
        else if (calculo >= 27)
            resultado = "Sobrepeso"
    }
    return resultado
}

function calcular() {

    const peso = parseInt(document.getElementById('peso').value)
    const altura = parseInt(document.getElementById('altura').value)
    const idade = parseInt(document.getElementById('idade').value)
    const feminino = document.getElementById('feminino').checked
    const calculo = (peso / (altura*altura)) * 10000

    let resultado


    if (calculo != calculo) {
        resultado= "Valores inválidos!"
    } else {
        if (feminino) {
            resultado = Feminino(idade, calculo)
        } else {
            resultado = Masculino(idade, calculo)
        }
        resultado = resultado + ", com indice " + calculo.toFixed(2)
    }

    document.getElementById('resultado').value = resultado
}


const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    calcular()
})
