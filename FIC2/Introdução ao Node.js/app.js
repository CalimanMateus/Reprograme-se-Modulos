const readline = require('readline-sync');

module.exports = function app() {
  const alunos = [];

  for (let i = 1; i <= 10; i++) {
    let nome = readline.question(`Digite o nome do aluno ${i}: `);
    let nota = parseFloat(readline.question(`Digite a nota do aluno ${i}: `));

    const aluno = {
      nome: nome,
      nota: nota
    };
    alunos.push(aluno);
  }

  let maiorNota = alunos[0].nota;
  let nomeMaiorNota = alunos[0].nome;
  let menorNota = alunos[0].nota;
  let nomeMenorNota = alunos[0].nome;
  let somaNotas = alunos[0].nota;
  let numAprovados = alunos[0].nota >= 60 ? 1 : 0;

  for (let i = 1; i < alunos.length; i++) {
    const aluno = alunos[i];
    if (aluno.nota > maiorNota) {
      maiorNota = aluno.nota;
      nomeMaiorNota = aluno.nome;
    }
    if (aluno.nota < menorNota) {
      menorNota = aluno.nota;
      nomeMenorNota = aluno.nome;
    }
    somaNotas += aluno.nota;
    if (aluno.nota >= 60) {
      numAprovados++;
    }
  }

  const mediaNotas = somaNotas / alunos.length;
  const numReprovados = alunos.length - numAprovados;

  console.log(`Maior nota: ${maiorNota}, Nome do aluno: ${nomeMaiorNota}`);
  console.log(`Menor nota: ${menorNota}, Nome do aluno: ${nomeMenorNota}`);
  console.log(`Média das notas: ${mediaNotas}`);
  console.log(`Quantidade de alunos aprovados: ${numAprovados}`);
  console.log(`Quantidade de alunos reprovados: ${numReprovados}`);
}