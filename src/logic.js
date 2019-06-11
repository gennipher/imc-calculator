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


module.exports = {
    calculaIndice
}