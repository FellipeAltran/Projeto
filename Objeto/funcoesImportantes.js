 const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
 }

 // pega as entidades do objeto
 console.log(Object.keys(pessoa))

 // pega os valores do obejto
 console.log(Object.values(pessoa))

 // pega uma lista dos entidades e valores em arrays
 console.log(Object.entries(pessoa))

 Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
 })

 