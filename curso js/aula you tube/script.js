
function testes(){
    return new Promise(function(resolve,reject){
        setTimeout(resolve, 2000, 'teste')
    })
}

function testes2(){
    return new Promise(function(resolve,reject){
        setTimeout(resolve, 1000, 'teste2')
    })
}

(
    async function(){
        testes().then(function(val){
            console.log(val);
        });
        testes2().then(function(val){
            console.log(val);
        });

        console.log('chamando depois da função Promise de 2 segundos')
    }
)();

