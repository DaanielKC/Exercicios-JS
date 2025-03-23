function tabuada() {
    var num = document.getElementById('txtn').value
    if (num.length == 0) {
        window.alert('Por Favor digite um número!')
    } else {
    for (var c = 1; c<=10; c ++) {
        var a = document.createElement('option') 
        a.text = `${Number(num)} x ${c} = ${Number(num)*c}` 
    }
    }
}
 