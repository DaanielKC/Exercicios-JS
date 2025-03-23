function contar() {
    var inicio = document.getElementById('txti').value
    var fim = document.getElementById('txtf').value
    var passo = document.getElementById('txtp').value
    var res = document.getElementById('res')
    var i = Number(inicio)
    var f = Number(fim)
    var p = Number(passo)
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) { 
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else { 
        res.innerHTML = 'Contando: <br>'
        if (p <= 0 ) {
        window.alert('Passo Inválido! Considerando PASSO 1')
        p = 1
        } 
        if (i < f) {
            while (i <= f) { 
                res.innerHTML += `${i} 👉 ` 
                i += p
            }  
        } else {
            while (i >= f) {
                res.innerHTML += `${i} 👉 `
                i -= p
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

//.value -> string
//Number().value -> number