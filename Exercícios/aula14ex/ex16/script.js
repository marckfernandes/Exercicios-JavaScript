function verificar() {
    
    var n1 = document.querySelector('input#txtInício')
    var n2 = document.querySelector('input#txtFim')
    var n3 = document.querySelector('input#txtPasso')
    var passo = Number(n3.value)


    if (n1.value.length == 0) {
        window.alert('[ERRO] O campo Início é de preenchimento obrigatório! Digite algum número para começar.')
    }
    else if(n2.value.length == 0) {
        window.alert('[ERRO] O campo Fim é de preenchimento obrigatório!. Digite algum número para começar.')
    }
    else if(n3.value.length == 0) {
        window.alert("[ERRO] O campo Passo é de preenchimento obrigatório!. Digite algum número maior que '0' para começar.")
    }
    else if(passo == 0) {
        window.alert("[AVISO] Para que a contagem aconteça o campo Passo precisa ser maior que '0'. Nesse caso, será considerado 'Passo = 1'.")
        contar()
    }
    else {
        contar()
    }

}

function contar() {

    var n1 = document.querySelector('input#txtInício')
    var n2 = document.querySelector('input#txtFim')
    var n3 = document.querySelector('input#txtPasso')
    var início = Number(n1.value);
    var fim = Number(n2.value)
    var passo = Number(n3.value)

    
    if(passo == 0) {
        passo = 1
    }

    resp.innerHTML = '...Contando...<br>'

    //CONTAGEM NORMAL
    if(início < fim) {
        for(var c = início; c <= fim; c += passo) {
            if(c + passo > fim) {
                resp.innerHTML += `${c}<br> 🎉 <strong>FIM</strong> 🎉 `
            }
            else {
            resp.innerHTML += `${c} 👉🏾 `
            }
        }
    } 

    // CONTAGEM REGRESSIVA
    else if(início > fim) {
        for(var c = início; c >= fim; c -= passo) {
            if(c - passo < fim) {
                resp.innerHTML += `${c}<br> 🎉 <strong>FIM</strong> 🎉 `
           }
           else {
            resp.innerHTML += `${c} 👉🏾 `
           }
        }
    }

    // SEM CONTAGEM
    else if(início === fim) {
        window.alert("Não é possível contar. 'Início' e 'Fim' possuem o mesmo valor, logo 'Passo = 0'. Para que a contagem aconteça 'Passo' precisa ser maior que '0' ou 'Início ≠ Fim.' Tente novamente!")
        location.reload()
    }
}