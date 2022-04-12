function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value >ano) {
        alert('ERRO - Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img') // criar tag html via script
        img.setAttribute('id','foto') // setar id para o elemento criado acima
        if (fsex[0].checked) {
            genero= 'Homem'
            
            if (idade >0 && idade <=4) {
                //Bebe
                img.setAttribute('src','bebe-m.jpg')
            }
            else if (idade <=10) {
                //Criança
                img.setAttribute('src','crianca-m.jpg')
            }      
            
            else if(idade < 21) {
                //jovem
                img.setAttribute('src','jovem-m.jpg')
            }
            else if(idade <50){
                //Adulto
                img.setAttribute('src','adulto-m.jpg')
            }else{
                //Idoso
                img.setAttribute('src','velho-m.jpg')
            }
        }else if (fsex[1].checked){
            genero= 'Mulher'
            if (idade >0 && idade <=4) {
                //Bebe
                img.setAttribute('src','bebe-f.jpg')
            }
            else if (idade <=10) {
                //Criança
                img.setAttribute('src','crianca-f.jpg')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src','jovem-f.jpg')
            }
            else if(idade <50){
                //Adulto
                img.setAttribute('src','adulto-f.jpg')
            }else{
                //Idoso
                img.setAttribute('src','velho-f.jpg')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // adiciona a tag criada via script abaixo da ja criada
    }

}