function semana (num){
    switch (num){
        case 1:
            return 'Fim de semana'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia util'
        case 7:
            return 'Fim de semana'
        default:
            return 'Dia Invalido'
    }
}

console.log(semana(10))
