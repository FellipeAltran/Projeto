function feira (fruta){
    const frutas = fruta
    switch(frutas){
        case 'maçã':
            return console.log('Não vendemos essa fruta aqui!')
            break;
        case 'kiwi':
            return console.log('Estamos com escassez de kiwis')
            break;
        case 'melancia':
            return console.log('Aqui está, são 3 reais o quilo')
            break;
        default:
            console.log('Não temos essa fruta')
    }
}
