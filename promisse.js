function randomico(min, max){
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * ( max - min) + min)
}

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

esperaAi("Frase 1", randomico(1,3))
    .then(msg =>{
        console.log(msg)
        return esperaAi('Frase 2', randomico(1,3))
    })
    .then(msg2 =>{
        console.log(msg2)
        return esperaAi('Frase 3', randomico(1,3))
    })
    .then(msg3 => {
        console.log(msg3)})
    .then(() =>{
        console.log("FIM")
    })
    .catch(()=>{
        console.log('Falhou')
    })