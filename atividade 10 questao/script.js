// //Atividade – Vetores e Matrizes em JavaScript

// //Resolva os exercícios abaixo:

// //Exercício 1

// //Crie um vetor com 4 cores diferentes e mostre todas no console.

let cores = ['vermelho', 'azul', 'verde', 'amarelo'];
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}


// //Exercício 2

// //Crie um vetor com 6 números e mostre apenas os números pares.

let numeros = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}





// Exercício 3

// Crie um vetor com 5 números e mostre a soma total dos elementos.
let numeros2 = [10, 20, 30, 40, 50];
let soma = 0;
for (let i = 0; i < numeros2.length; i++) {
    soma += numeros2[i];
}
console.log("Soma total dos elementos:", soma);





// Exercício 4

// Crie um vetor com 5 números e mostre qual é o maior valor armazenado.

let numeros3 = [15, 22, 8, 19, 31];
let maior = numeros3[0];
for (let i = 1; i < numeros3.length; i++) {
    if (numeros3[i] > maior) {
        maior = numeros3[i];
    }
}
console.log("Maior valor armazenado:", maior);


// Exercício 5

// Crie uma matriz 3x3 com números inteiros e mostre todos os elementos no console.

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length;j++) {
        console.log(matriz[i][j]);
    

    }

}

// Exercício 6

// Usando a mesma matriz anterior, mostre apenas os números da diagonal principal.


let matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matriz2.length; i++) {
    console.log(matriz2[i][i]);

}


// Exercício 7

// U(sando a matriz 3x3, calcule e mostre a soma de todos os valores.

let somamatriz = 0;
for (let i = 0; i < matriz.length; i++) 
{
    for (let j = 0; j < matriz[1].length; j++)
    {
        somamatriz+= matriz[i][j];
    }
}
console.log("soma de todos os valores da matriz:", somamatriz);


      
// Exercício 8

// Mostre a soma dos elementos de cada linha da matriz separadamente.

let somalinhas = [];
for (let i = 0; i < matriz.length; i++)
{
    let somaLinha = 0;
    for (let j = 0; j < matriz[i].length; j++)
    {
        somaLinha += matriz[1][j];
    }
    somalinhas.push(somaLinha);
    console.log("Soma da linha", i, ":", somaLinha);

}


// Exercício 9

// Crie um vetor com 3 nomes de alunos e uma matriz com 3 notas para cada um. Mostre o nome e a média de cada aluno.

let alunos = ['Rawi', 'Rafael', 'Vinicius'];
let notas = [
    [8, 9,10],
    [10,10,10],
    [5,4,10]
];
for (let i = 0; i < alunos.length; i++) 
{
    let somanotas = 0;
    for (let j = 0; j < notas[i].length; j++)
    {
        somanotas += notas[i][j];
    }
let media = somanotas / notas[i].length; 
console.log("aluno:", alunos)[i], "media:", media;
}

// Exercício 10

// Crie uma matriz 3x3 com números aleatórios de 1 a 10 e mostre no console.

let matrizaleatoria = [];
for (let i = 0; i < 3; i++)
{
    matrizaleatoria[i] = [];
    for (let j = 0; j < 3; j++)
    {
        matrizaleatoria(i)[j] = Math.floor(Math.random() * 10) + 1;
        console.log(matrizaleatoria[i][j]);
    }
}



// Desafio Extra

// Mostre todos os números maiores que 5 da matriz criada no exercício 10.
