/*let contador = 1

while (contador <=10){
    console.log(contador)
    contador++
}*/

/*for (let i=1;i>=10;i++){
    console.log(i)
}*/

const notas = [6.7, 9.3, 7.4]
for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Fellipe',
    sobrenome: 'Altran',
    idade: 20,
    peso: 85
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
