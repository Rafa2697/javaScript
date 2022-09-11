function classificado(notaVestibular, notaEnem){
    let aprovadoVestibular = (notaVestibular >= 8);
    let aprovadoEnem = (notaEnem >= 700);

    if(aprovadoVestibular || aprovadoEnem){
    console.log("classificado");
    }else{
        console.log("desclassificado");
    }
}

classificado(8, 500)