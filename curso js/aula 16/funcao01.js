function parimpar(n){
    if (n%2 == 0){ //se o "n" for divisivel por 2 ele vai retornar 'par', se   não for retornarar impar.
        return 'par'
    } else {
        return 'impar'
    }

}
let res = parimpar(12)  //chamada(12)
console.log(res)