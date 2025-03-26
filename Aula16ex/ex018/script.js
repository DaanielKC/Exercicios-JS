var valores = []
let res = document.getElementById('res')
function adicionar() {
    res.innerHTML = ''    
    let txtn = document.getElementById('txtn')
        let num = Number(txtn.value)
            
        for (let c in valores) {
            if (valores.indexOf(num) != -1) {
                window.alert('Valor inválido ou já encontrado na lista')
                return;
            }
        }
        
        
        if (num == '' || num > 100) {
            window.alert('Valor inválido ou já encontrado na lista')
                } else {
                valores.push(num)
                let número = document.createElement('option')
                número.text = `Valor ${num} adicionado.`
                tabela.appendChild(número)
            }
        }

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
    res.innerHTML = ''
    res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados <br>`

    let maiorv = 0
    for (let c in valores) {
        if (valores[c] > maiorv) {
            maiorv = valores[c]
        }
    }
    res.innerHTML += `O maior valor informado foi ${maiorv} <br>`

    let menorv = valores[0]
    for (let c in valores) {
        if (valores[c] < menorv) {
            menorv = valores[c]
        }
    }
    res.innerHTML += `O menor valor informado foi ${menorv} <br>`
    
    let soma = 0
    for (let c in valores){
        soma += valores[c]
    }
    res.innerHTML += `Somando todos os valores, temos ${soma} <br>`

    var media = (soma/valores.length)
    res.innerHTML += `A média dos valores digitados é ${media} <br>`

    }
}