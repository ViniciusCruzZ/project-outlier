function logar() {
    var email = document.getElementById('email');
    var senha = document.getElementById('password');

    if (email.value == "garixbot@gmail.com" && senha.value == "Isabella151220@") {
        localStorage.setItem("acesso", true);
        
        window.location.href = "index.html";
    }else {
        alert('Usuário ou senha inválidos!')
    }
}