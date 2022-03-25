let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number (n) <= 100) {
        return true
    }else{
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }

}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value )) //adicionando o valor na lista
        let item = document.createElement('option') //cria o elemento (item) 
        item.text = `Valor ${num.value} adicionado.` //faz receber o (num.value no elemento item.)
        lista.appendChild(item) //faz o elemento item aparecer na lista.
        res.innerHTML = ''

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //faz o valor (isNumero) voltar a 0
    num.focus()  // faz com que o foco fique no seletor de numero.

}

function finalizar() {
     if (valores.length == 0) {
         window.alert('adicione valores antes de finalizar')
     } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} Números cadastrados.</p>`// mostra o total de elementos numericos.
        res.innerHTML += `<p> o maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> o menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media} </p>`
     }
}
/**/ */