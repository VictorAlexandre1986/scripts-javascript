function randomico(min, max){
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * ( max - min) + min)
}

function esperaAi(msg,tempo,funcaoCallback){
    setTimeout(()=>{
        console.log(msg)
        if(funcaoCallback){
            funcaoCallback()
        }
    },tempo)
}

esperaAi('1',randomico(1,3), function(){
    esperaAi('2', randomico(1,3), function(){
        esperaAi('3', randomico(1,3),function(){
            console.log('Fim')
        })
    })
})