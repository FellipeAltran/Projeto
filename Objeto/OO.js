// existe a constante pessoa

const pessoa = { nome: 'Joao'}
console.log(pessoa)

pessoa.nome = 'Pedro'

console.log(pessoa)

// aqui impedimos que se faça qualquer alteração nela

Object.freeze(pessoa)

pessoa.nome = 'Maria'

console.log(pessoa)