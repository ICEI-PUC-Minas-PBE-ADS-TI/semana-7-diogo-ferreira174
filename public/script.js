
let nome = prompt("Digite seu nome:");

function lerNumero(mensagem) {
    let valor;
    while (true) {
        valor = Number(prompt(mensagem));
        if (!isNaN(valor)) {
            return valor;
        } else {
            alert("Valor inválido! Digite um número.");
        }
    }
}


let renda = lerNumero("Digite sua renda mensal:");


let qtdDespesas = lerNumero("Quantas despesas deseja informar? (1 a 5)");

while (qtdDespesas < 1 || qtdDespesas > 5) {
    alert("Digite um valor entre 1 e 5.");
    qtdDespesas = lerNumero("Quantas despesas deseja informar? (1 a 5)");
}


let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let despesa = lerNumero(`Digite o valor da Despesa ${i}:`);
    totalDespesas += despesa;
}

let sobra = renda - totalDespesas;

let classificacao;

if (sobra > 0) {
    classificacao = "Situação positiva 👍";
} else if (sobra === 0) {
    classificacao = "Situação equilibrada ⚖️";
} else {
    classificacao = "Situação negativa ⚠️";
}


let resultado = 
`===== ORÇAMENTO PESSOAL =====
Nome: ${nome}
Renda: R$ ${renda.toFixed(2)}
Total de despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Classificação: ${classificacao}`;


alert(resultado);

console.log(resultado);