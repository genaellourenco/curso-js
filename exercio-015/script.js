function carregar() {
    
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    // var hora = 14

    msg.innerHTML = `Agora são ${hora} horas.`
   
    if(hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'image/bomdia.png'
        document.body.style.background = '#3b98e2'
    } else if ( hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'image/boatarde.png'
        document.body.style.background = '#eb980b'
    } else {
        // BOA NOITE
        img.src = 'image/boanoite.png'
        document.body.style.background = '#15262e'
    }

}
