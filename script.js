
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var mes = data.getMonth() //inserir o mes para teste
    var est = data.getMonth()

    msg.innerHTML = `Estamos em`

    if (mes == 0) {
        msg.innerText += ' Janeiro.'
        img.setAttribute('src', 'foto-verao.jpg')
    } else if (mes == 1 ) {
        msg.innerText += ' Fevereiro.'
        img.setAttribute('src', 'foto-verao.jpg')
    } else if (mes == 2) {
        msg.innerText += ' Março.'
        img.setAttribute('src', 'foto-outono.jpg')
    } else if (mes == 3) {
        msg.innerText += ' Abril.'
        img.setAttribute('src', 'foto-outono.jpg')
    } else if (mes == 4) {
        msg.innerText += ' Maio.'
        img.setAttribute('src', 'foto-outono.jpg')
    } else if (mes == 5) {
        msg.innerText += ' Junho.'
        img.setAttribute('src', 'foto-inverno.jpg')
    } else if (mes == 6) {
        msg.innerText += ' Julho.'
        img.setAttribute('src', 'foto-inverno.jpg')
    } else if (mes == 7) {
        msg.innerText += ' Agosto.'
        img.setAttribute('src', 'foto-inverno.jpg')
    } else if (mes == 8) {
        msg.innerText += ' Setembro.'
        img.setAttribute('src', 'foto-inverno.jpg')
    } else if (mes == 9) {
        msg.innerText += ' Outubro.'
        img.setAttribute('src', 'foto-primavera.jpg')
    } else if (mes == 10) {
        msg.innerText += ' Novembro.'
        img.setAttribute('src', 'foto-primavera.jpg')
    } else {
        msg.innerText += ' Dezembro.'
        img.setAttribute('src', 'foto-primavera.jpg')
    }

    msg.innerHTML += `<br>Estação do ano:`   
    
    switch(est) {
        case 0:
        case 1:
            window.document.getElementById('msg').innerText += ' Verão.'
            break
        case 2:
        case 3:
        case 4:
            window.document.getElementById('msg').innerText += ' Outono.'
            break
        case 5:
        case 6:
        case 7:
        case 8:
            window.document.getElementById('msg').innerText += ' Inverno.'
            break
        default:
            window.document.getElementById('msg').innerText += ' Primavera.'
            break
    } 
}


//window.document.getElementById('msg').innerText = 'Olá!'

/*
MESES
0- Jan
1- Fev
2- Mar
3- Abr
4- Mai
5- Jun
6- Jul
7- Ago
8- Set
9- Out
10- Nov
11- Dez
*/