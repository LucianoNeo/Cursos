function validaDados(arr,number) {
    try{
        if(!arr || !number) throw new ReferenceError('Valores em branco não aceitos')

        if(typeof arr !== 'object') throw new TypeError('O array precisa ser do tipo OBJECT')
    
        if(typeof number !== 'number') throw new TypeError('O segundo parametro precisa ser do tipo NUMBER')
    
        if(arr.length !== number ) throw new RangeError('O segundo parametro precisa ser igual a quantidade de itens do array')
        console.log(`A array dada possui os seguintes valores: [${arr}] e bate com a quantidade informada que foi: ${number}, portanto passaram no teste!`)
    }
    catch(e){
if(e instanceof ReferenceError){
    console.log("Este erro é um REFERENCE ERROR")
    console.log(e.message)
}
else if(e instanceof TypeError){
    console.log("Este erro é um TYPE ERROR")
    console.log(e.message)
}
else if(e instanceof RangeError){
    console.log("Este erro é um RANGE ERROR")
    console.log(e.message)
}
else{
    console.log("Tipo de erro não esperado" + e)
}
}
}


const array = ["bota","sapato"]

validaDados(array,2)

