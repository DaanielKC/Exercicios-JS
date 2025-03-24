function tabuada() {
    var num = document.getElementById('txtn').value
    var tab = document.getElementById('tab')
    var n = Number(num)
    if (num.length == 0) {
        window.alert('Por Favor digite um número!')
    } else {
        tab.innerHTML = ''
    for (var c = 1; c<=10; c ++) {
        var item = document.createElement('option') 
        item.text = `${n} x ${c} = ${n*c} ` 
        tab.appendChild(item)
    }
    }
}
 