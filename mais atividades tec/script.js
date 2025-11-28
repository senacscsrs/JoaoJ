// Lista de Exercícios – Objetos em JavaScript
// 1. Criando um objeto simples
// Crie um objeto chamado pessoa com as propriedades nome, idade e cidade.
// Depois, exiba todas as informações no console.
const pessoa = {
    nome: "João",
    idade: 65,
    cidade: "Porto alegre"
}
console.log("nome: " + pessoa.nome, "idade: " + pessoa.idade, "cidade: " + pessoa.cidade);




// 2. Atualizando informações
// Usando o objeto pessoa do exercício anterior:
// Altere a cidade para “Santa Cruz do Sul RS”.
// Adicione uma nova propriedade chamada profissao.
// Mostre o resultado final no console.
pessoa.cidade = "Santa Cruz do Sul RS";
pessoa.profissao = "Bombeiro";
console.log(pessoa.cidade, pessoa.profissao); 




// 3. Objeto com função
// Crie um objeto carro com as propriedades marca, modelo, ano e uma função ligar() que mostre no console:
// “O carro [marca] [modelo] foi ligado!”
// Execute o método.
const carro = {
    marca: "ford",
    modelo: "fiesta",
    ano: 2010,
    ligar: function() {
        console.log("O carro " + this.marca + " " + this.modelo + " foi ligado");
    }
}
carro.ligar();



// 4. Usando if dentro de um método
// Crie um objeto usuario com as propriedades nome e idade.
// Adicione um método chamado verificarIdade() que:
// Mostre “Maior de idade” se a idade for 18 ou mais.
// Mostre “Menor de idade” caso contrário.
const usuario = {
    nome: "Rawi",
    idade: 15,
    verificarIdade: function() {
        if (this.idade >= 18) {
            console.log("Maior de idade");
        } else {
            console.log("Menor de idade");
        }
    }
}
usuario.verificarIdade();

// 5. Objeto com array
// Crie um objeto aluno com:
// nome,
// notas (array com 3 números),
// e um método media() que calcule e retorne a média.
// Mostre a média no console.
const aluno = {
    nome: "Vinicius",
    notas: [7, 8, 9],
    media: function() {
        const soma = this.notas.reduce((acc, curr) => acc + curr, 0);
        return soma / this.notas.length;
    }
}
console.log("Média: " + aluno.media());



// 6. Laço com array de objetos
// Crie um array chamado produtos com 3 objetos, cada um contendo nome e preco.
// Use um for para mostrar o nome e o preço de cada produto.
const produtos = [
    { nome: "Produto 1", preco: 30 },
    { nome: "Produto 2", preco: 60 },
    { nome: "Produto 3", preco: 90 }
];
for (let i = 0; i < produtos.length; i++) {
    console.log("Nome: " + produtos[i].nome + ", Preço: " + produtos[i].preco);
}



// 7. Condicional em objetos
// Com base no array produtos do exercício anterior, mostre apenas os produtos com preço maior que 50.
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].preco > 50) {
        console.log("Produto com preço maior que 50: " + produtos[i].nome + " - " + produtos[i].preco);
    }
}



// 8. Função que recebe um objeto
// Crie uma função chamada mostrarFilme(filme) que recebe um objeto com titulo e ano e mostre:
// “O filme [titulo] foi lançado em [ano].”
// Chame a função passando um objeto criado por você.
function mostrarFilme(filme) {
    console.log("O filme " + filme.titulo + " foi lançado em " + filme.ano + ".");
}   
const meuFilme = {
    titulo: "Inception",
    ano: 2010
};
mostrarFilme(meuFilme);



// 9. Objeto dentro de objeto
// Crie um objeto empresa com:
// nome,
// endereco (outro objeto com rua, numero, cidade).
// Mostre no console o nome da empresa e o nome da rua.
const empresa = {
    nome: "Tech Solutions",
    endereco: {
        rua: "Av. Central",
        numero: 1000,
        cidade: "Metropolis"
    }
};
console.log("Nome da empresa: " + empresa.nome + ", Rua: " + empresa.endereco.rua);



// 10. Controle de estoque
// Crie um objeto produto com as propriedades:
// nome,
// preco,
// estoque,
// e um método chamado vender() que:
// Diminua o estoque em 1 cada vez que for chamado.
// Mostre no console:
// “Venda realizada! Estoque atual: [estoque].”
// Teste o método várias vezes e veja o estoque diminuindo.
const produto = {
    nome: "Notebook",
    preco: 3000,
    estoque: 5,
    vender: function() {
        if (this.estoque > 0) {
            this.estoque--;
            console.log("Venda realizada! Estoque atual: " + this.estoque);
        } else {
            console.log("Estoque esgotado!");
        }
    }
};
produto.vender();
produto.vender();
produto.vender();
produto.vender();
produto.vender();
produto.vender();
produto.vender(); // Testando venda com estoque esgotado

