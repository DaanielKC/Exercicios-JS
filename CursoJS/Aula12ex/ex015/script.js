
function verificar() {
   var data = new Date();
   var ano = data.getFullYear();
   var  fAno = document.getElementById('txtano');
   var res = document.getElementById('res');
   if (fAno.value.lenght == 0 || Number(fAno.value) > ano) {
         window.alert('[ERRO] Verifique os dados e tente novamente!');
   } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var gênero = '';
        var img = document.createElement('img');  //<img id='' src=''>
        img.setAttribute('id', 'foto'); // <img id='foto' src=''>
        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade >= 0 && idade < 14) {
                //Criança
                img.setAttribute('src', 'fotocriancaM.jpg'); // <img id='foto' src='fotocriancaM.jpg'>
            } else if (idade >=14 && idade < 24) {
                //Jovem
                img.setAttribute('src', 'fotojovemM.jpg');
            } else if (idade >= 24 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoadultoM.jpg');
            } else {
                //Idoso
                img.setAttribute('src', 'fotoidosoM.jpg');
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher';
            if (idade >= 0 && idade < 14) {
                //Crinça
                img.setAttribute('src', 'fotocriancaF.jpg');
            } else if (idade >=14 && idade < 24) {
                //Jovem
                img.setAttribute('src', 'fotojovemF.jpg');
            } else if (idade >= 24 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoadultoF.jpg');
            } else {
                //Idoso
                img.setAttribute('src', 'fotoidosoF.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.<br/>`;
        res.appendChild(img);
        a.appendChild(gênero);
    }
}