const prompt = require('prompt-sync')();

var alturas = []
var tamanho = 0;

// Implementar a entrada de dados
for (var i = 0; i <= 9; i++) {
  tamanho = parseFloat(prompt("Digite a altura do aluno " + i + " :"))
  alturas.push(tamanho)
}
// Implementar o processamento de dados			
// Fazer for dentro de for
// Implementar a saída de dados

 for (let i = 0; i < alturas.length; i++) {
    let count = 0;
    for (let j = 0; j < alturas.length; j++) {
      if (alturas[j] < alturas[i]) {
        count++;
      }
    }
    console.log(`O Aluno ${i} é maior que ${count} Aluno(s)`);
  }