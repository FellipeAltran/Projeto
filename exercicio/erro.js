// cria uma opcao dentro da funcao para presumir que talvez algo possa dar errado

function tratarErro (erro){
    //throw new Error('...');
    throw 10;
    //throw true
    //throw 'mensagem'
    /*throw {
        nome: erro.name
        msg: erro.message,
        date: new Date
    }*/
}

function imprimirNome (obj){
    try{ // tenta o comando
        console.log(obj.name.toUpperCase()+'!!!');
    } catch (e) {  // se der erro aciona o catch
        tratarErro(e)
    } finally {  // mesmo que de problema ele aciona o finally
        console.log('final');
    }
}

// o erro esta aqui tem que passar a variavel certa do objeto

const obj = {name: 'Fellipe'}
imprimirNome(obj)