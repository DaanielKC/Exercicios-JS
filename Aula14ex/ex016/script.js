function Contar() {
var inicio = document.getElementById('txti')
var fim = document.getElementById('txtf')
var passo = document.getElementById('txtp')
var res = document.getElementById('res')
var c = Number(inicio.value)
var p = Number(passo.value)
if (inicio.value.length == 0 || fim.value.length == 0) { 
    window.alert('Impossível contar!');
    return;
} 
if (passo.value == '') {
    window.alert('Passo Inválido! Considerando PASSO 1')
    p = 1
} 
res.innerHTML = 'Contando: <br>'
while (c <= fim.value) { 
    res.innerHTML += `${c} ` 
    c += p
}   
}
