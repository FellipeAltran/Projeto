const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaNova')

const contadorC = require('./instanciaUnica')()
const contadorD = require('./instanciaNova')()

contadorA.somador()
contadorB.somador()

console.log(contadorA.valor)
console.log(contadorB.valor)

