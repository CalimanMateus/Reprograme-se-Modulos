prompt = require("prompt-sync")();

soma = 0;
continua = "s";

while (continua == "s") {
  num = parseInt(prompt('Digite um número: '));
  soma = soma + num;
  continua = prompt('Você deseja continuar (s/n): ');
}

console.log('A soma é:', soma);