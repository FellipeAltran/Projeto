const pai = { nome: 'Pedro', cabelo: 'preto'}

console.log(pai)

const filha = Object.create(pai)

console.log(filha.cabelo)

const filho = Object.create(pai, {
    nome: { value: 'Fellipe', writable: false, enumerable: true}
})

console.log(filho.nome, filho.cabelo)
filho.nome = 'yasuo'
console.log(filho.nome)

for (let key in filho){
    filho.hasOwnProperty(key) ?
    console.log(key): console.log(`Por herança ${key}`)
}