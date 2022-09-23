function correção (quantia){
    console.log(quantia.toFixed(2).toString().replace('.',','))
}

correção(0.1+0.2)