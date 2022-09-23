const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
            console.log('reprovado')
            break
        default:
            console.log('Nota Invalida')
    }
}

imprimirResultado(5.5);
imprimirResultado(10);
imprimirResultado(8);
imprimirResultado(-3)