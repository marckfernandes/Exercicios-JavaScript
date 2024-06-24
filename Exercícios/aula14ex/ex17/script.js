function verificar() {
    let numBase = document.querySelector('input#txtnum')
    
    if (numBase.value.length === 0) {
        window.alert('[ERRO] O número base não foi definido. Digite um número para começar!')
        location.reload()
    }
    else {
        multiplicar()
    }

}

function multiplicar() {

    if (tabuada.options.length === 10) {
        reiniciar(tabuada)
        }

    let numBase = document.querySelector('input#txtnum')
    let a = Number(numBase.value)    
    let x = document.querySelector('select#tabuada')
    
    tabuada.remove(0)

    for(let b = 0; b <= 9; b++) {
        let option = document.createElement('option')
        option.text = `${a} x ${b} = ${a*b}`
        x.add(option)
    }


}

function reiniciar(tabuada) {
    while (tabuada.options.length > 0) {
        tabuada.remove(0)
    }
    let option = document.createElement('option')
    option.text = "Digite um número acima e em seguida clique em 'Gerar Tabuada'."
    tabuada.add(option)
}