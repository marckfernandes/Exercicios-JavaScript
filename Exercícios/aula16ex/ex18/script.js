 const números = []

function verificar() {

    let numString = document.querySelector('input#txtnum')
    let numBase = Number(numString.value)
    var x = 0

    if(valorAdd[0].value.indexOf("Adicionar") != -1) {
        valorAdd.remove(0)
    }

    if(numString.value === '') {
        window.alert('[ERRO] O número base não foi definido. Digite um número entre 1 e 100 para continuar!')
    }
    else if(numBase > 100) {
        window.alert('[ERRO] O número base não pode ser maior que 100. Digite um número entre 1 e 100 para continuar!')
    }
    else if (numBase < 1) {
        window.alert('[ERRO] O número base não pode ser menor que 1. Digite um número entre 1 e 100 para continuar!')
    }
    else if (números.includes(numBase)) {
        window.alert('[ERRO] Valor já foi informado. Digite outro número entre 1 e 100 para continuar')
    }
    else {
        adicionar()
    }
}

function adicionar() {

    let numString = document.querySelector('input#txtnum')
    let numBase = Number(numString.value)
    let select = document.querySelector('select#valorAdd')
    let option = document.createElement('option')
    
    option.text = `Valor ${numBase} adicionado.`
    select.add(option)
    números.push(numBase)
}

function finalizar() {
    
    var soma = 0;

    for(let i = 0; i < números.length; i++) {
        soma += números[i];
    }

    var média = (soma / números.length);

    números.sort()
    resComplementar.innerHTML = `
    - Ao todo, temos <strong>${números.length}</strong> números cadastrados.<br>
    - O maior valor informado foi ${números[números.length - 1]}.<br>
    - O menor valor informado foi ${números[0]}.<br>
    - Somando todos os valores, temos ${soma}.<br>
    - A média dos valores digitados é ${média}.<br>`
}

function reiniciar(resComplementar) {
        resComplementar.innerHTML = ''
}
