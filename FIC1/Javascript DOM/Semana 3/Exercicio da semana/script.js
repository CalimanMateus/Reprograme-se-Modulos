(function() {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          form.classList.add('was-validated')
        } else {
          inserir()
          form.classList.remove('was-validated')
          form.reset()
        }
        event.preventDefault()
        event.stopPropagation()
      }, false)
    })
})()


function getLocalStorage() {
  return JSON.parse(localStorage.getItem('bd_aeronaves')) ?? [];
}

function setLocalStorage(bd_aeronaves) {
  localStorage.setItem('bd_aeronaves', JSON.stringify(bd_aeronaves));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() { // Adaptação da função atualizarTabela (5 pontos)
  limparTabela();
  const bd_aeronaves = getLocalStorage();
  let index = 0;
  for ( aeronave of bd_aeronaves) {
    const novaLinha = document.createElement('tr');
    if (aeronave.passageiros === 0) {
      novaLinha.classList.add('table-danger');
    }
    novaLinha.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${aeronave.codigoAeronave}</td>
        <td>${aeronave.nomeComandante}</td>
        <td>${aeronave.passageiros}</td>
        <td>${aeronave.cargaMin}</td>
        <td>${aeronave.cargaMax}</td>
        <td>${aeronave.classeAeronave}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `
    document.querySelector('#tabela>tbody').appendChild(novaLinha)
    index++;
  }
}

function inserir() { // Adaptação da função inserir (10 pontos)
  const aeronave = {
    codigoAeronave: document.getElementById('codigoAeronave').value,
    nomeComandante: document.getElementById('nomeComandante').value,
    passageiros: document.getElementById('passageiros').value,
    cargaMin: document.getElementById('cargaMin').value,
    cargaMax: document.getElementById('cargaMax').value,
    classeAeronave: document.getElementById('ClasseAeronave').value
  }
  const bd_aeronaves = getLocalStorage();
  bd_aeronaves.push(aeronave);
  setLocalStorage(bd_aeronaves);
  atualizarTabela();
}

function excluir(index) { // Adaptação da função excluir (5 pontos)
  const bd_aeronaves = getLocalStorage();
  bd_aeronaves.splice(index, 1);
  setLocalStorage(bd_aeronaves);
  atualizarTabela();
}

function validarCodigoAeronave() { // Adaptação da função validar (10 pontos)
  const bd_aeronaves = getLocalStorage();
  for (aeronave of bd_aeronaves) {
    if (codigoAeronave.value == aeronave.codigoAeronave) {
      codigoAeronave.setCustomValidity("Este Código de Aeronave já existe!");
      feedbackCodigo.innerText = "Este Código de Aeronave já existe!";
      return false;
    } else {
      codigoAeronave.setCustomValidity("");
      feedbackCodigo.innerText = "Informe o Códiogo da Aeronave Corretamente.";
    }
  }
  return true;
}

atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const codigoAeronave = document.getElementById("codigoAeronave");
const feedbackCodigo = document.getElementById("feedbackCodigo");
codigoAeronave.addEventListener('input', validarCodigoAeronave);