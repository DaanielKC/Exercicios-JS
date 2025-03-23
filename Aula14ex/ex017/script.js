function tabuada() {
var num = document.getElementById('txtn').value
for (var c = 1; c<=10; c ++) {
    var x = document.getElementById(`${c}`)
    x.innerHTML = `${num} x ${c} = ${Number(num)*c} ` 
}
}