function contar() {
var iniciotxt = document.getElementById('inicio')
var fimtxt = document.getElementById('fim')
var passotxt = document.getElementById('passo')
var res = document.getElementById('res')
var contagem = document.getElementById('contagem')

if (iniciotxt.value.length == 0 || fimtxt.value.length == 0 || passotxt.value.length == 0){
    alert("Impossível contar, preencha todos os campos!")
    }   
else {
    var inicio = Number(iniciotxt.value)
    var fim = Number(fimtxt.value)
    var passo = Number(passotxt.value)
    if (passo == 0) {
        alert("Passo invalido, utilizando passo 1")
        passotxt.value = 1
        passo = 1
    }
    if(inicio < fim){
    contagem.innerHTML =''
    while (inicio <= fim) {
            res.innerText = "Contando..."
            contagem.innerHTML += `${inicio} 👉`
            inicio += passo
            }
            contagem.innerHTML += `🏁`
            console.log(passo)   
        }else{
            contagem.innerHTML =''
            while (inicio >= fim) {
                res.innerText = "Contando..."
                contagem.innerHTML += `${inicio} 👉`
                inicio -= passo
                }
                contagem.innerHTML += `🏁`
                console.log(passo)      
        }
}
     

}

