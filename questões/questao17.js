function planos (salario, plano){
    switch(plano){
        case 'A':
            return console.log(salario+(salario*0.1))
            break
        case 'B':
            return console.log(salario+(salario*0.15))
            break
        case 'C':
            return console.log(salario+(salario*0.2))
            break
        default:
            return console.log('Plano Invalido')
    }
}

planos(500.00,'A')
planos(500.00,'B')
planos(500.00,'C')
planos(500.00,'D')