

function aprovadoOuReprovado(nota1, nota2, nota3){
    let media = ((nota1 * 3) + (nota2 * 3) + (nota3 * 4)) / 10;
    
    if(media < 5){
       console.log(media + " reprovado");
    }else if(media < 7){
        console.log(media + " exame");
    }else{
        console.log(media + " aprovado");
    }

    
}

aprovadoOuReprovado(2, 2, 9);

//media > 7 maior que 7
//media < 7 menor que 7
//media >= 7 maior ou igual a 7
//media <= 7 menor ou igual a 7
//media == 7 igual a 7
//media != 7 diferente de 7