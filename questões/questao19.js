function cardapio (cod,quant){
    switch(cod){
        
        case 100:
            quant = quant * 3.00
            console.log(`Valor total do Cachorro Quente: R$ ${parseFloat(quant).toFixed(2).replace('.', ',')}`)
            break
        case 200:
            quant = quant * 4.00
            console.log(`Valor total do Hamburguer Simples: R$ ${parseFloat(quant).toFixed(2).replace('.', ',')}`)
            break
        case 300:
            quant = quant * 5.50
            console.log(`Valor total do Cheedeburguer: R$ ${parseFloat(quant).toFixed(2).replace('.', ',')}`)
            break
        case 400:
            quant = quant * 7.50
            console.log(`Valor total do Bauru: R$ ${parseFloat(quant).toFixed(2).replace('.', ',')}`)
            break
        case 500:
            quant = quant * 3.50
            console.log(`Valor total do Refrigerante: R$ ${parseFloat(quant).toFixed(2).replace('.', ',')}`)
            break
        case 600:
            quant = quant * 2.80
            console.log(`Valor total do Suco: R$ ${parseFloat(quant).toFixed(2).replace('.', ',')}`)
            break
        default:
            console.log('Produto não existe!')  
    }
}

cardapio(400,3)