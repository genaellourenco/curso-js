var idade = 17
console.log(`Você tem ${idade} anos.`)
    if(idade >= 18 && idade <= 65){
    console.log ('Voto Obrigatório.') 
} else if(idade >= 16 || idade >= 66){
    console.log ('Voto Opcional.') 
} else if(idade <= 15) {
    console.log ('Não Vota.') 
}