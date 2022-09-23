// arguments e um array dentro da função que contem os parametros que foram passados  para ela

function somar(){
    let soma = 0
        for (i in arguments){
            soma += arguments[i]
        }
    return soma
}

console.log(somar(5,5,5))