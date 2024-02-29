function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(fano.value.length == 0 || fano.value > ano){
        alert('ERRO! Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca1.png')
            }else if (idade < 21){
                img.setAttribute('src', 'adolescente1.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulto1.png')
            }else{
                img.setAttribute('src', 'idoso1.png')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca2.png')
            }else if (idade < 21){
                img.setAttribute('src', 'adolescente2.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulto2.png')
            }else{
                img.setAttribute('src', 'idoso2.png')
            }
        }
        res.style.textAlign = 'center'
        res.style.width = '250px'
        res.style.margin = 'auto'
        res.innerHTML = `${genero} com ${idade} anos\r\r\r\r\r`
        res.appendChild(img)
    }
}