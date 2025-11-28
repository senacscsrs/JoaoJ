// 1-Altere1-Altere a cor de fundo da página quando clicar em um botão.
function mudarCorDeFundo() {
    document.body.style.backgroundColor = "lightblue";
}

// 2-Esconda um elemento usando .style.display.
function esconderElemento() {
    const elemento = document.getElementById("elementoParaEsconder");
    elemento.style.display = "none";
}


// 3-Crie um campo de senha com botão “mostrar/ocultar senha”.
function toggleSenha() {
    const senhaInput = document.getElementById("senha");
    const tipo = senhaInput.getAttribute("type") === "password" ? "text" : "password";
    senhaInput.setAttribute("type", tipo);
}


// 4-Crie uma lista onde digitar um item adiciona ele na tela.
function adicionarItem() {
    const itemTexto = document.getElementById("itemTexto").value;
    const lista = document.getElementById("lista");
    const novoItem = document.createElement("li");
    novoItem.textContent = itemTexto;
    lista.appendChild(novoItem);
}

// 5-Crie um quadrado que aumenta de tamanho a cada clique.
let tamanho = 100;
function aumentarQuadrado() {
    tamanho += 20;
    const quadrado = document.getElementById("quadrado");
    quadrado.style.width = tamanho + "px";
    quadrado.style.height = tamanho + "px";
}

// 6-Adicione uma imagem e altere a imagem exibida na página com dois botões (próxima/anterior).
const imagens = [
    "imagem1.jpg",
    "imagem2.jpg",
    "imagem3.jpg"
];
let indiceAtual = 0;
function mostrarImagem(indice) {
    const imgElemento = document.getElementById("imagemExibida");
    imgElemento.src = imagens[indice];
}

// 7-Crie um relógio digital usando setInterval().
function iniciarRelogio() {
    setInterval(() => {
        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, '0');
        const minutos = String(agora.getMinutes()).padStart(2, '0');
        const segundos = String(agora.getSeconds()).padStart(2, '0');
        const relogioElemento = document.getElementById("relogio");
        relogioElemento.textContent = `${horas}:${minutos}:${segundos}`;
    }, 1000);
}   


// 8-Mude o texto de todos os <p> da página usando querySelectorAll().
function mudarTextoParagrafos() {
    const paragrafos = document.querySelectorAll("p");
    paragrafos.forEach((p) => {
        p.textContent = "Texto alterado!";
    }
);
}   


// 9-Altere o título da página quando o mouse passar por cima dele.
function alterarTitulo() {
    const titulo = document.getElementById("tituloPagina");
    titulo.textContent = "Título Alterado!";
}

// 10-Crie um modo claro/escuro (dark mode).
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


// 11-Trocar o conteúdo de um elemento usando innerText.
function trocarConteudo() {
    const elemento = document.getElementById("elementoParaTrocar");
    elemento.innerText = "Conteúdo alterado!";
}


// 12-Inserir HTML dentro de um elemento usando innerHTML. a cor de fundo da página quando clicar em um botão.
function inserirHTML() {
    const elemento = document.getElementById("elementoParaInserir");
    elemento.innerHTML = "<strong>HTML inserido!</strong>";
}
