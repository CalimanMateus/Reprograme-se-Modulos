const prompt = require('prompt-sync')();
var array_aeronaves = [];

do {
  console.log("Sistema de Cadastro de Aeronaves");
  console.log("1 - Inserir Aeronave");
  console.log("2 - Excluir Aeronave");
  console.log("3 - Listar Aeronaves");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Cliente...\n");
    let codigo = parseInt(prompt("Digite o código da sua Aeronave: "));
    let piloto = prompt("Digite o nome do Piloto: ");
    let velocidade = parseInt(prompt("Digite a velocidade máxima da aeronave: "));
    let maxtripulantes = parseInt(prompt("Digite o número máximo de tripulantes da aeronave: "));
    let carga = parseInt(prompt("Digite a carga máxima da aeronave: "));

    // Neste trecho estamos declarando um objeto
    const aeronave = {
      codigo: codigo,
      piloto: piloto,
      velocidade: velocidade,
      maxtripulantes: maxtripulantes,
      carga: carga
    }
    // Chamar a função inserir
    inserir_aeronave(aeronave);

  } else if (opcao == 2) {
    console.log("\n\nExcluindo Aeronave...\n");
    let codigo = prompt("Digite o código da Aeronave: ");
    // Chamar a função excluir
    excluir_aeronave(codigo);

  } else if (opcao == 3) {
    console.log("\n\nListando Aeronaves...\n");
    // Chamar a função listar
    listar_aeronaves();
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_aeronave(aeronave) {
  // Implementar corpo da função
  array_aeronaves.push(aeronave);
}

function excluir_aeronave(codigo) {
  // Implementar corpo da função
  const index = array_aeronaves.findIndex(aeronave => aeronave.codigo == codigo);
  if (index > -1) {
    array_aeronaves.splice(index, 1);
  }
}

function listar_aeronaves() {
  // Implementar corpo da função

  array_aeronaves.forEach(aeronave => {
console.log(`Código da Aeronave:   ${aeronave.codigo.toString()} \nPiloto:  ${aeronave.piloto} \nVelocidade Máxima da aeronave:  ${aeronave.velocidade.toString()} Km/h \nNúmero máximo de tripulantes:  ${aeronave.maxtripulantes.toString()} \nCarga máxima:  ${aeronave.carga.toString()} Tonaladas \n`);
  });
}


