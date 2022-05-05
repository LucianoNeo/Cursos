const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos(array){
const valsUnis = new Set(array)
return [...valsUnis] //UTILIZA ARGUMENTO REST PRA TORNAR UM SET NUM NOVO ARRAY
}
console.log(valoresUnicos(meuArray))