 const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
 pilotos.pop() // remove o ultimo elemento do array
 console.log(pilotos)

 pilotos.push('Verstappen') // adiciona um elemento na ultima posição do array
 console.log(pilotos)

 pilotos.shift() // remove a primeira posição do array
 console.log(pilotos)

 pilotos.unshift('Hamilton') // adiciona um elemento a primeira posiçaõ do array
 console.log(pilotos)

 // splice pode adicionar e remover elementos

 // adicionar:
 pilotos.splice(2, 0, 'Bottas', 'Massa')
 console.log(pilotos)

 // remover
 pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

// O comando slice altera uma copia por isso armazena ela em outro array, ja o splice altera o array original

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)