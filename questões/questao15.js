function carros (modelos){
    const modelo = modelos 

    switch(modelo){
        case 'hatch':
            return console.log('Compra efetuada com sucesso')
            break
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            return console.log('Tem certeza que não prefete este modelo')
        default:
            return console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

carros('hatch')
carros('sedans')
carros('motocicletas')
carros('caminhonetes')
carros('fellipe')