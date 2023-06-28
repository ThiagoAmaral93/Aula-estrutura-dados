const readline = require('readline');

// Cria uma interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definição das variáveis e matrizes
var medicamentos = [];
var precos = [];
var quantidades = [];

// Função para cadastrar um medicamento
function cadastrarMedicamento() {
  rl.question("Digite o nome do medicamento:", function(nome) {
    rl.question("Digite o preço do medicamento:", function(preco) {
      rl.question("Digite a quantidade em estoque:", function(quantidade) {
        medicamentos.push(nome);
        precos.push(parseFloat(preco));
        quantidades.push(parseInt(quantidade));

        console.log("Medicamento cadastrado com sucesso!");
        exibirMenu();
      });
    });
  });
}

// Função para pesquisar informações sobre um medicamento
function pesquisarMedicamento() {
  rl.question("Digite o nome do medicamento a ser pesquisado:", function(nome) {
    var index = medicamentos.indexOf(nome);

    if (index !== -1) {
      console.log("Medicamento encontrado:");
      console.log("Nome: " + medicamentos[index]);
      console.log("Preço: R$" + precos[index]);
      console.log("Quantidade em estoque: " + quantidades[index]);
    } else {
      console.log("Medicamento não encontrado.");
    }
    exibirMenu();
  });
}

// Função para calcular o valor total dos medicamentos em estoque
function calcularValorTotal() {
  var valorTotal = 0;
  for (var i = 0; i < medicamentos.length; i++) {
    valorTotal += precos[i] * quantidades[i];
  }

  console.log("Valor total dos medicamentos em estoque: R$" + valorTotal.toFixed(2));
  exibirMenu();
}

// Função para exibir o menu principal
function exibirMenu() {
  console.log("== Farmácia - Sistema de Controle de Medicamentos ==");
  console.log("1. Cadastrar medicamento");
  console.log("2. Pesquisar medicamento");
  console.log("3. Calcular valor total dos medicamentos em estoque");
  console.log("0. Sair");

  rl.question("Digite a opção desejada:", function(opcao) {
    switch (parseInt(opcao)) {
      case 1:
        cadastrarMedicamento();
        break;
      case 2:
        pesquisarMedicamento();
        break;
      case 3:
        calcularValorTotal();
        break;
      case 0:
        console.log("Saindo do sistema...");
        rl.close();
        break;
      default:
        console.log("Opção inválida.");
        break;
    }
  });
}

exibirMenu();