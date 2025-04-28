function logar() {
    var email = document.getElementById('email');
    var senha = document.getElementById('password');

    if (email.value == "garixbot@gmail.com" && senha.value == "1234567890") {
        localStorage.setItem("acesso", true);
        
        window.location.href = "index.html";
    }else {
        alert('Usuário ou senha inválidos!')
    }
}
