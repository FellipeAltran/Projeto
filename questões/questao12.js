function fatorial (num){
   let acu=1

    for(let i = num; i >=1; i--){
        acu = acu * i
    }
    return acu
}

console.log(fatorial(5))