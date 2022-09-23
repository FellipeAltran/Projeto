function jurosSimples (tempo, taxa, init){
    const juros = init * (taxa/100) * tempo
    const mont = init + juros
    return mont
}

function jurosComposto (tempo, taxa, init){
    const juros = init * (taxa/100) * tempo
    const mont = init * Math.pow((1+taxa/100),tempo)
    return mont
}

console.log(jurosComposto(12,1,300))