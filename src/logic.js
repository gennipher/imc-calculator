const MENSAGENS = {
    ACIMA_NIVEL1: 'Sobrepeso',
    ACIMA_NIVEL2: 'Obesidade grau 1',
    ACIMA_NIVEL3: 'Obesidade grau 2',
    ACIMA_NIVEL4: 'Obesidade grau 3',
    ABAIXO: 'Abaixo do peso',
    NORMAL: 'Peso adequado',
    INVALIDO: 'Valores inválidos!'
}

function calculaIndice(peso, altura) {
    if (peso <= 0 || altura <= 0) {
        return 0
    }
    
    const indice = ((peso / (altura*altura)) * 10000)

    if (indice > 0) {
        return parseFloat(indice.toFixed(4))
    }

    return 0
}

function calculoFeminino(idade, indice) {
    let resultado

    if (idade == Infinity || indice == Infinity) {
        resultado = MENSAGENS.INVALIDO
    } else if (Number.isNaN(idade) || Number.isNaN(indice)){
        resultado = MENSAGENS.INVALIDO
    } else if (idade == undefined || indice == undefined ) {
        resultado = MENSAGENS.INVALIDO
    } else if (idade == 0 || indice == 0) {
        resultado = MENSAGENS.INVALIDO
    } else if (idade == '10') {
        if (indice <= 14,22){
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 14.23 && indice <= 20.18){
            resultado = MENSAGENS.NORMAL
        
        } else if (indice >= 20.19){
            resultado = MENSAGENS.ACIMA_NIVEL1
        }
    } else if (idade == '11') {
        if (indice <= 14,59) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 14.6 && indice <= 21.17) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 21.18) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        }
    }
    else if (idade == '12') { 
        if (indice <= 14.97) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 14.98 && indice <= 22.16) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 22.17) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        }
    }
    else if (idade == '13') {
        if (indice <= 15.35) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 15.36 && indice <= 23.07) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 23.08) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        }
    }
    else if (idade == '14') {
        if (indice <= 15.66) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 15.67 && indice <= 23.87) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 23.88) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        }
    }
    else if (idade == '15') {
        if (indice <= 16) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 16.01 && indice <= 24.28) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 24.29) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        }
    }
    else if (idade == '16') {
        if (indice <= 16.36) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 16.37 && indice <= 24.73) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 24.74) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        }
    }
    else if (idade == '17') {
        if (indice <= 16.58) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 16.59 && indice <= 25.22) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 25.23) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        }
    }
    else if (idade == '18') {
        if (indice <= 16.7) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 16.71 && indice <= 25.55) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 25.56) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        }
    }
    else if (idade == '19') {
        if (indice <= 16.86) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 16.87 && indice <= 25.84) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 25.85) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        }
    }
    else if ((idade >= '20') && (idade <= '59')){
        if (indice < 18.5) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice > 18.5 && indice <25) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >=25 && indice < 30) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        } else if (indice >= 30 && indice <= 34.9) {
            resultado = MENSAGENS.ACIMA_NIVEL2
        } else if (indice >= 35 && indice <= 39.9) {
            resultado = MENSAGENS.ACIMA_NIVEL3
        } else if (indice >= 40) {
            resultado = MENSAGENS.ACIMA_NIVEL4
        }
    }
    else if (idade >= '60') {
        if (indice <= 22) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice > 22 && indice < 27) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 27) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        }
    }

    return resultado
    
}

function calculoMasculino(idade, indice) {

    if (idade == Infinity || indice == Infinity) {
        resultado = MENSAGENS.INVALIDO
    } else if(idade == 0 || indice == 0) {
        resultado = MENSAGENS.INVALIDO
    } else if (idade == '10') {
        if (indice <= 14,41) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 14.42 && indice <= 19.5) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 19.6) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        }

    } else if (idade == '11') {
        if (indice <= 14,82) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 14.83 && indice <= 20.34) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 20.35) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        }

    } else if (idade == '12') {
        if (indice <= 15.23) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 15.24 && indice <= 21.11) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 21.12) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        } 

    } else if (idade == '13') {
        if (indice <= 15.72) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 15.73 && indice <= 21.92) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 21.93) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        }

    } else if (idade == '14') {
        if (indice <= 16.17) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 16.18 && indice <= 22.76) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 22.77) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        } 

    } else if (idade == '15') {
        if (indice <= 16.58) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 16.59 && indice <= 23.62) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 23.63) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        } 

    } else if (idade == '16') {
        if (indice <= 17) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 17.01 && indice <= 24.44) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 24.45) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        } 

    } else if (idade == '17') {
        if (indice <= 17.3) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 17.31 && indice <= 25.27) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 25.28) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        } 

    } else if (idade == '18') {
        if (indice <= 17.53) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 17.54 && indice <= 25.94) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 25.95) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        } 

    } else if (idade == '19') {
        if (indice <= 17.79) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice >= 17.8 && indice <= 26.35) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 26.36) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        } 

    } else if ((idade >= 20) && (idade <= 59)){
        if (indice < 18.5) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice > 18.5 && indice < 25) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 25 && indice < 30) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        } else if (indice >= 30 && indice <= 34.9) {
            resultado= MENSAGENS.ACIMA_NIVEL2
        } else if (indice >= 35 && indice <= 39.9) {
            resultado= MENSAGENS.ACIMA_NIVEL3
        } else if (indice >= 35 && indice <= 39.9) {
            resultado= MENSAGENS.ACIMA_NIVEL3
        } else if (indice >= 40) {
        resultado= MENSAGENS.ACIMA_NIVEL4
        } 

    } else if (idade >= 60){
        if (indice <= 22) {
            resultado = MENSAGENS.ABAIXO
        } else if (indice > 22 && indice < 27) {
            resultado = MENSAGENS.NORMAL
        } else if (indice >= 27) {
            resultado = MENSAGENS.ACIMA_NIVEL1
        }
    }

    return resultado
}

function eValido(idade, indice) {
    
    let resultado = true;

    if (idade == Infinity || indice == Infinity) {
        resultado = false
    } else if (Number.isNaN(idade) || Number.isNaN(indice)){
        resultado = false
    } else if (idade == undefined || indice == undefined ) {
        resultado = false
    } else if (idade == 0 || indice == 0) {
        resultado = false
    }

    return resultado
}



module.exports = {
    calculaIndice,
    calculoFeminino,
    calculoMasculino,
    eValido
}