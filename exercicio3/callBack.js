const fabricantes = ['Mercedes','Audi','BMW'];

function imprimir(nome,indice){
    console.log(`${indice + 1}. ${nome}`)
}


// forEach para cada elemento do array ele vai chamar de volta a função
fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricantes){
    console.log(fabricantes)
})

// arrow function
fabricantes.forEach(fabricantes => console.log(fabricantes))