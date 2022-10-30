

function calc(){
    let nome = document.getElementById("nome").value // .value para pegar o que for digitado no campo do elemento.
    let nota1 = Number (document.getElementById('nota1').value)
    let nota2 = Number (document.getElementById('nota2').value)
    let nota3 = Number (document.getElementById('nota3').value)

    let res = (nota1 + nota2 + nota3) / 3

    info.innerHTML = (`Analizando a situação de ${nome}`)
    info1.innerHTML = (`Com as notas ${nota1}, ${nota2} e ${nota3} a média é ${res}`)
    

    if (res < 3){
        info2.innerHTML = (`Com a média abaixo de 3,0 o aluno está reprovado`)
    }else if (res >= 3 && res <=6){
        info2.innerHTML = (`Com a média entre 3,0 e 6,0 o aluno está em recuperação`)
    }else if (res > 6){
        info2.innerHTML = (`Com a média acima de 6,0 o aluno está aprovado`)
    }
}