function getStorageItem(key) {
    return localStorage.getItem(key);
}

function setStorageItem(key, value) {
    localStorage.setItem(key, value);
}

function FazerLogin() {
    if (getStorageItem('loginEfetuado') === 'true') {
        alert("O Login já foi efetuado.");
        return;
    }

    var userLogin = getStorageItem('userLogin');
    var userSenha = getStorageItem('userSenha');

    if (!userLogin || !userSenha) {
        alert("Realize o cadastro.");
        return;
    }

    var tentativaLogin = prompt("Digite seu login: ");
    var tentativaSenha = prompt("Digite sua senha: ");

    if (tentativaLogin === userLogin && tentativaSenha === userSenha) {
        alert("Login efetuado com sucesso!");
        setStorageItem('loginEfetuado', 'true');
        window.location.href = "site.html";
    } else {
        alert("Login incorreto, tente novamente.");
    }
}

function FazerRegistro() {
    var userLogin = prompt("Digite seu login: ");
    var userSenha = prompt("Digite sua senha: ");

    if (userLogin === "" || userSenha === "") {
        alert("Você não digitou nada!");
        return;
    }

    setStorageItem('userLogin', userLogin);
    setStorageItem('userSenha', userSenha);
    setStorageItem('loginEfetuado', 'false');

    alert("Cadastro realizado com sucesso!");
}

function mostrarLoginUsuario() {
    var userLogin = getStorageItem('userLogin');
    var userLoginDisplay = document.getElementById("userLoginDisplay");

    if (userLoginDisplay) {
        userLoginDisplay.textContent = "Usuário logado: " + userLogin;
    }
}

function FazerLogout() {
    if (getStorageItem('loginEfetuado') === 'true') {
    var pergunta = prompt("Tem certeza que deseja sair? Digite 'Sim' para confirmar.");
    if (pergunta.toLowerCase() === "sim") {
        alert("Logout efetuado com sucesso!");
        setStorageItem('loginEfetuado', 'false');
        window.location.href = "index.html";
    }
}
}

function ExcluirConta() {
    if (getStorageItem('loginEfetuado') === 'true') {
        var pergunta = prompt("Deseja realmente excluir a conta? Digite 'SIM' para excluir.");
        if (pergunta.toUpperCase() === "SIM") {
            alert("Conta excluída com sucesso");

            localStorage.removeItem('userLogin');
            localStorage.removeItem('userSenha');

            setStorageItem('loginEfetuado', 'false');
        }
    } else {
        alert("Realize o login");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname === '/site.html') {
        mostrarLoginUsuario();
    }
});