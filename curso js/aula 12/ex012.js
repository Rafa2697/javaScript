var agora = new Date()
var hora = agora.getHours()
console.log(`agora são extamente ${hora} hora.`)
if (hora <= 5) {
    console.log('boa madrugada')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('boa tarde!')
} else {
    console.log('boa noite')
}