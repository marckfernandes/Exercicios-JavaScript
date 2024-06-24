function carregar() { 
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#F28749'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#BF751B'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#AEACF2'
    }
}
