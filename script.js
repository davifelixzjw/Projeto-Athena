// =========================================================
// MENU HAMBÚRGUER
// =========================================================
const botaoMenu = document.querySelector("#btn-menu");
const menu = document.querySelector(".nav");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("ativo");
    });
}

// =========================================================
// FECHAR O MENU AO CLICAR EM UM LINK
// =========================================================
const linksDoMenu = document.querySelectorAll(".nav a");

linksDoMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        if (menu) {
            menu.classList.remove("ativo");
        }
    });
});

// =========================================================
// FORMULÁRIO DE CONTATO
// =========================================================
const formContato = document.querySelector("#form-contato");
const avisoForm = document.querySelector("#form-aviso");

if (formContato && avisoForm) {
    formContato.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = document.querySelector("#nome").value;
        avisoForm.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada ao Athena.`;
        formContato.reset();
    });
}

// =========================================================
// FORMULÁRIO DE CADASTRO
// =========================================================
const formCadastro = document.querySelector("#form-cadastro");
const avisoCadastro = document.querySelector("#cadastro-aviso");

if (formCadastro && avisoCadastro) {
    formCadastro.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = document.querySelector("#nome").value.trim();
        const email = document.querySelector("#email").value.trim();
        const senha = document.querySelector("#senha").value;
        const confirmarSenha = document.querySelector("#confirmar-senha").value;

        if (senha !== confirmarSenha) {
            avisoCadastro.style.color = "#FCA5A5";
            avisoCadastro.textContent = "As senhas não coincidem. Tente novamente.";
            return;
        }

        localStorage.setItem("athenaUsuario", JSON.stringify({ nome, email }));
        avisoCadastro.style.color = "#86EFAC";
        avisoCadastro.textContent = `Conta criada para ${nome}! Redirecionando para o login...`;

        setTimeout(function () {
            window.location.href = "login.html";
        }, 1000);
    });
}

// =========================================================
// FORMULÁRIO DE LOGIN E RECUPERAÇÃO
// =========================================================
const formLogin = document.querySelector("#form-login");
const avisoLogin = document.querySelector("#login-aviso");
const linkEsqueciSenha = document.querySelector("#esqueci-senha");

if (linkEsqueciSenha && avisoLogin) {
    linkEsqueciSenha.addEventListener("click", function (evento) {
        evento.preventDefault();
        const emailDigitado = document.querySelector("#email").value.trim();
        avisoLogin.style.color = "#86EFAC";
        avisoLogin.textContent = emailDigitado
            ? `Instruções de recuperação enviadas para ${emailDigitado}.`
            : "Digite seu e-mail acima para recuperar sua senha.";
    });
}

if (formLogin && avisoLogin) {
    formLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const email = document.querySelector("#email").value.trim();
        const salvo = JSON.parse(localStorage.getItem("athenaUsuario") || "null");
        const nomeExibicao = salvo && salvo.email === email ? salvo.nome : "leitor";

        avisoLogin.style.color = "#86EFAC";
        avisoLogin.textContent = `Bem-vindo de volta, ${nomeExibicao}! Acesso liberado.`;
    });
}

// =========================================================
// ANO AUTOMÁTICO NO RODAPÉ
// =========================================================
const campoAno = document.querySelector("#ano");

if (campoAno) {
    const anoAtual = new Date().getFullYear();
    campoAno.textContent = anoAtual;
}