function gerar(){
var numerotxt = document.getElementById('numero')
var contador = Number(1)
var res = document.getElementById('res2')
var tab = document.getElementById('select')

if(numerotxt.value.length == 0){
    alert('Você deve digitar um numero')
}
else{
    var numero = numerotxt.value
    res.innerHTML = ''
    tab.innerText =''
for (contador = 1; contador <= 10; contador++) {
    
    var conta = contador*numero
    var item = document.createElement('option') // cria um elemento dentro do SELECT
    item.text = `${numero} x ${contador} = ${conta}`
    //item.value = `tab${c}`
    tab.appendChild(item) // atribui o item criado ao SELECT a cada ciclo
    
    //res.innerHTML += `${contador} x ${numero} = ${conta}`
    
}
}
}