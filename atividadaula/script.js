
let valor = Number(prompt("Informe o valor do empréstimo: "));
let parcelas = Number(prompt("Informe a quantidade de parcelas (máximo 24): "));

if (parcelas < 1 || parcelas > 24) {
    alert("Número de parcelas inválido! Digite de 1 até 24.");
} else {
    let taxa = 0.03;
    let montante = valor * (1 + taxa) ** parcelas;
 let parcela = montante / parcelas;
    alert("Empréstimo aprovado!\n" +
          "Valor solicitado: R$ " + valor.toFixed(2) + "\n" +
          "Parcelas: " + parcelas + "\n" +
          "Valor final a pagar: R$ " + montante.toFixed(2) + "\n" +
          "Valor de cada parcela: R$ " + parcela.toFixed(2));
}
