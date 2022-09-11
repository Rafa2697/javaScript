

function teste(){
    let alunos = ["ana ", "bia ", "carlos"];
    let texto = "";
    for(let contador = 0; contador < alunos.length; contador++){
        texto = texto + alunos[contador]
    }

    console.log(texto);
}

teste();

function somarTodos(lista){
    let soma = 0;
    for(let i = 0; i < lista.length; i++){
        soma = soma + lista[i];
    }

    console.log(soma)
}

somarTodos([10,20,30]);