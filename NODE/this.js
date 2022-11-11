console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

console.log('-------------------------------')
function teste(){
    // aqui o this é igual ao global pois esta dentro de uma função
    console.log(this === global)
    // e quando esta dentro da função para de apontar para exports
    console.log(this === exports)
    // e tambem para de apontar para module.exports
    console.log(this === module.exports)
}

teste()