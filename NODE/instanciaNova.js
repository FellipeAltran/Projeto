// um factory retorna um novo obejto 
module.exports = () => {
    return {
        valor:  1,
        somador(){
            this.valor++
        }
    }
}