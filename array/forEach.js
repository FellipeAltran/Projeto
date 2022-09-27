const aprovados = ['Fellipe', 'Adriel', 'Marciano', 'Rafael', 'Willian', 'Balena']

aprovados.forEach( function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
}) 

//arrow function
aprovados.forEach(nome => console.log(nome))

