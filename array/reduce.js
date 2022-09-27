const alunos = [
    { nome: 'Fellipe', nota: 7.5, bolsista: false },
    { nome: 'Vinicius', nota: 10.0, bolsista: true },
    { nome: 'Vitor', nota: 6.4, bolsista: false }
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)