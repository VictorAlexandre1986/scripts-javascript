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

async function executa(){
    try{
        const valor1 = await esperaAi('Frase 1', randomico(1,3))
        console.log(valor1)
        const valor2 = await esperaAi('Frase 2', randomico(1,3))
        console.log(valor2)
        const valor3 = await esperaAi('Frase 3', randomico(1,3))
        console.log('Terminamos na frase 3', valor3)
    } catch(erro){
        //Como o async await nao tem reject, é preciso usar o try catch
        console.log(erro)
    }

}

executa()