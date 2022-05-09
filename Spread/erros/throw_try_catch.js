// THROW = apresenta informação como ERRO (x vermelho) no console do navegador

// TRY = faz o teste

// CATCH = acionado quando há erro


function verificaPalindromo(string) {
    if (!string) throw "String inválida"
    return string === string.split('').reverse().join('')
}

function tryCatchExemplo(string){
  try{
    verificaPalindromo(string)
  }
  catch(e){
    throw e;
}
}

tryCatchExemplo('')