var agora = new Date()
var hora = agora.getHours()

if (hora < 0 || hora > 23) {
    console.log(`Digite uma hora válida (0-23) `)
}
else if (hora < 12 && hora > 6) {
    console.log(`Bom dia, agora são exatamente ${hora} horas. `)
} else if (hora <= 18 && hora >= 12){
    console.log(`Boa tarde, agora são exatamente ${hora} horas. `)
} else if (hora >= 18 && hora <24){
    console.log(`Boa noite, agora são exatamente ${hora} horas. `)
} else{
    console.log(`Boa madrugada, agora são exatamente ${hora} horas. `)
}