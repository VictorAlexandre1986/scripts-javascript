function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //Na onde passa a frase se nao passar uma string da um reject
            if(typeof msg !== 'string'){
                reject(false)
            }
            //resolve quando tudo da certo
            resolve(msg)
        },tempo)
    })
}

const promises = [
    esperaAi("Frase 1",3000),
    esperaAi("Frase 2", 500),
    esperaAi("Frase 3", 1000),
]

//Entrega todas as promisses juntas,só entrega qdo a ultima for concluida
Promise.all(promises)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(erro){
        console.log(erro)
    })


//Resolve a primeira que resolve
Promise.race(promises)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(erro){
        console.log(erro)
    })