// Cadeia de protótipos 

Object.prototype.attr0 = '0'
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C'}

// Aqui vemos um exemplo de herança, nem todos esses atributos estao presente no objeto filho
// porem com a herança do objeto passada do avo, pai e objeto e possivel acessar essas variaveis
// a partir do objeto filho

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)



