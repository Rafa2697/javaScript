
function aprovadoOuReprovado(nota1, nota2, nota3, faltas){

let media = (nota1 + nota2 + nota3) / 3;

if(media >= 7 && faltas >= 10){
    console.log(media + " aprovado");
}else{
    console.log(media + " reprovado");
}
}

aprovadoOuReprovado(5, 10, 10, 8)