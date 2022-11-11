const schedule = require('node-schedule')

// esta função utiliza de alguns comandos importados do node-schedules que nos baixamos e por meio de um temporizador
// executa esta função de acordo com os parametros passados
const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 5', function () {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

// cancela a tarefa um depois de um tempo
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 10
regra.second = 30

// executa apos a finalização da primeira e execuntando quando der 30 segundos
const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds())
})