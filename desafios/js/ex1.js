function carregar() {
    const hour = new Date()
    horas = hour.getHours()
    const res = document.getElementById('hora-do-dia')
    const ing = document.getElementById('img')
    
    if (horas >= 0 && horas < 12){
        res.innerHTML = `<p>São ${horas} horas. Bom - Dia!</p>`
        document.body.style.background = '#6d7af3'
        ing.src = 'ex1/manha.png'
    }
    else if (horas >= 12 && horas < 19) {
        res.innerHTML = `<p>São ${horas} horas. Boa - Tarde!</p>`
        document.body.style.background = '#ffb672'
        ing.src = 'ex1/tarde.png'
    }
    else {
        res.innerHTML = `<p>Sao ${horas} horas. Boa - Noite!</p>`
        document.body.style.background = '#a7a7a7' //#a7a7a7
        ing.src = 'ex1/noite.png'
    }
}