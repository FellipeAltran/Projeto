const alunos = [
    { nome: 'Fellipe', nota: 7.5, bolsista: false },
    { nome: 'Vinicius', nota: 10.0, bolsista: true },
    { nome: 'Vitor', nota: 6.4, bolsista: false }
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))