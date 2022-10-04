const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// aqui ele exportou o index.js da pasta saudação do node_modules por causa do lodash
const saudacao = require('saudação')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)