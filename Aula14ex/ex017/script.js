function tabuada() {
var num = document.getElementById('txtn').value
if (num.length == 0) {
    window.alert('Por Favor digite um número!')
} else {
for (var c = 1; c<=10; c ++) {
    var x = document.getElementById(`${c}`)
    x.innerHTML = `${num} x ${c} = ${Number(num)*c} ` 
}
}
}