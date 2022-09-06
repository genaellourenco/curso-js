
function contar(){

    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pular = document.getElementById('pular')
    let res = document.getElementById('res') 

    if(inicio.value.length == 0 || fim.value.length == 0 || pular.value.length == 0){
        // alert('[ERRO] Falta dados !')
        res.innerHTML = 'Impossivel conatar!'
    } else {
        res.innerHTML = "Contando...<br>" 
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pular.value)
        if (p <= 0){
           window.alert ('Passa invalido! consideirando passo 1') 
           p = 1
        }

        if (i < f) {

            // Contagem crescente

            for(let c = i ; c <= f ; c += p) {
                res.innerHTML += `${c} \u{25B6}` 
            } 

        } else {

            // Contagem regressiva 

            for(let c = i ; c >= f ; c -= p)
                res.innerHTML += `${c} \u{25B6}` 

        }
    } 
     res.innerHTML += `\u{26A0} `
}

