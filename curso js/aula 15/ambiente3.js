

let num =[9,5,8,3,4,1]
num.push(7)
num.sort()
console.log(`nosso vetor é o ${num}`)

console.log(`o vetor tem ${num.length} posiçôes`)
console.log(`o primeiro vetor é ${num[0]}`)
let pos = num.lastIndexOf(8)
if (pos == -1){
    console.log(`valor não foi encontrado`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}