const prompt = require('prompt-sync')();
const fs = require('fs');

var array_carros = [];

async function main() {
  do {
    console.log("Sistema de Cadastro de Carros");
    console.log("1 - Cadastrar Carros");
    console.log("2 - Excluir Carros");
    console.log("3 - Listar Carros");
    console.log("0 - Sair");

    var opcao = prompt("Digite sua opção: ");

    if (opcao == 1) {
      console.log("\n\nInserindo Carro...\n");
      let codigo = parseInt(prompt("Digite o código: "));
      let placa = prompt("Digite a placa do carro: ");
      let nome = prompt("Digite o nome do carro: ");
      let montadora = prompt("Digite a montadora do carro: ");

      const carro = {
        codigo: codigo,
        placa: placa,
        nome: nome,
        montadora: montadora,
      }

      await inserir_carro(carro);
    } else if (opcao == 2) {
      console.log("\n\nExcluindo Carro...\n");
      let codigo = prompt("Digite o código do Carro: ");

      await excluir_carro(codigo);
    } else if (opcao == 3) {
      console.log("\n\nListando Carros...\n");

      listar_carro();
    } else if (opcao == 4) {
      console.log("\n\nAtualizando Carros...\n");
      let codigo = prompt("Digite o código do Carro: ");
    } else {
      console.log("\n\nSaindo do programa...\n");
    }

    prompt("\nEnter para continuar...");
    console.clear();
  } while (opcao != 0)
}

async function inserir_carro(carro) {
  array_carros.push(carro);
  await fs.promises.writeFile('carros.json', JSON.stringify(array_carros));
}

async function excluir_carro(codigo) {
  for (let i = 0; i < array_carros.length; i++) {
    if (array_carros[i]['codigo'] == codigo) {
      array_carros.splice(i, 1);
      await fs.promises.writeFile('carros.json', JSON.stringify(array_carros));
    }
  }
}

function listar_carro() {
  for (let i = 0; i < array_carros.length; i++) {
    const carro = array_carros[i];
    console.log(carro.codigo, ":", carro.placa, "-", carro.nome, "-", carro.montadora);
  }
}

main();