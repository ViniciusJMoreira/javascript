function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anonasc = document.getElementById('year-day')
    var res = document.getElementById('div-res-txt')

    if (anonasc.value.lenght == 0 || Number(anonasc.value) > ano) {
        res.innerHTML = 'Algo esta errado'
    }
    else {
        var sex = document.getElementsByName('sexo')
        var tot = ano - Number(anonasc.value)
        
        if (sex[0].checked) {
            if (tot > 0 && tot < 10 ) {
                res.innerHTML = `Voce tem ${tot} anos. Uma criança`
            }
            else if (tot < 20) {
                res.innerHTML = `Voce tem ${tot} anos. Um Jovem`
            }
            else if (tot < 50) {
                res.innerHTML = `Voce tem ${tot} anos. Um Homem`
            }
            else {
            res.innerHTML = `Voce tem ${tot} anos. Um Idoso`
            }
        }
        else if (sex[1].checked){
            document.body.style.background = 'pink'

            if (tot > 0 && tot < 10 ) {
                res.innerHTML = `Voce tem ${tot} anos. Uma criança`
            }
            else if (tot < 20) {
                res.innerHTML = `Voce tem ${tot} anos. Uma Jovem`
            }
            else if (tot < 50) {
                res.innerHTML = `Voce tem ${tot} anos. Uma mulher`
            }
            else {
            res.innerHTML = `Voce tem ${tot} anos. Uma Idosa`
            }        }
        res.style.color = '#00f'
    }
}