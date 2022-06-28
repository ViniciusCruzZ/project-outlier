let login = document.getElementById('email')
let pass = document.getElementById('password')

let btn = document.getElementsByClassName('enviar');

function teste() {
    alert(login)
    alert(pass)
}

btn.onclick = function () {
    alert(login)
}