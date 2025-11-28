// ARRAYS
let familiares = ["Juliano", "Marlei", "Ricardo", "Sonia"];
let momentos = ["Natal juntos", "Viagem em família", "Almoço de domingo"];

// MATRIZ
let matrizFamilia = [
    ["Marlei", 55],
    ["Sonia", 30],
    ["Ricardo", 28],
    ["Juliano", 34]
];

console.log("Matriz de familiares (nome e idade):");
console.table(matrizFamilia);

// OBJETO
let membroEspecial = {
    nome: "Marlei",
    idade:55,
    papel: "Mãe",
    mensagem: "Sempre cuidou de todos com amor!"
};

console.log("Objeto membro especial:", membroEspecial);

// FOR → lista automática
let listaFamilia = document.getElementById("listaFamilia");
for (let i = 0; i < familiares.length; i++) {
    let li = document.createElement("li");
    li.innerText = familiares[i];
    listaFamilia.appendChild(li);
}

// FOR → momentos especiais
let listaMomentos = document.getElementById("listaMomentos");
for (let i = 0; i < momentos.length; i++) {
    let item = document.createElement("li");
    item.innerText = momentos[i];
    listaMomentos.appendChild(item);
}

// IF / ELSE → mostrar frase
function mostrarFrase() {
    let frase = document.getElementById("frase");

    if (frase.style.display === "none") {
        frase.style.display = "block";
    } else {
        frase.style.display = "none";
    }
}

// SWITCH → mensagem especial
function escolherFamiliar() {
    let opcao = prompt("Escolha um familiar: Marlei, Sonia, Ricardo ou Juliano");
    let mensagem = document.getElementById("mensagemEscolha");

    switch (opcao) {
        case "Sonia":
            mensagem.innerText = "Sonia: Obrigado por todo o amor de irmã!";
            break;
        case "Marlei":
            mensagem.innerText = "Marlei: mamãe que cuidou de todos!";
            break;
        case "Ricardo":
            mensagem.innerText = "Ricardo: Um irmão incrivel!";
            break;
        case "Juliano":
            mensagem.innerText = "Juliano: o Irmão mais velho!";
            break;
        default:
            mensagem.innerText = "Familiar não encontrado.";
    }
}

// WHILE → contador simples
let contador = 1;
while (contador <= 3) {
    console.log("Fato legal sobre minha família:", contador);
    contador++;
}

// DOM + Evento
function mudarTexto() {
    document.getElementById("mouseArea").innerText = "Você passou o mouse! 😄";
}

