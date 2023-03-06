var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
var select_animais = document.getElementById('select_animais');
// Selecionar elemento 'container' ( 1 ponto)
var container = document.getElementById('container');
// Selecionar elemento 'nome' ( 1 ponto)
var nome = document.getElementById('nome');

// Adicionar Listener 'change' ao elemento 'select_animais' (1 ponto)
select_animais.addEventListener('change', listarAnimais);

// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
container.addEventListener('mouseover', mostrarNome);
// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
container.addEventListener('mouseout', limparNome);

function listarAnimais() { // Implementação da função (10 pontos)
limparDivContainer();
// Verifica qual a opção selecionada
var opcaoSelecionada = select_animais.value;
var animais;
if (opcaoSelecionada === 'dog') {
animais = cachorros;
} else if (opcaoSelecionada === 'cat') {
animais = gatos;
}
// Itera sobre os animais e cria as imagens
for (var i = 0; i < animais.length; i++) {
var animal = animais[i];
var imagem = document.createElement('img');
imagem.src = './img/' + animal.imagem + '.jpg';
imagem.alt = animal.nome;
imagem.title = animal.nome;
container.appendChild(imagem);
}
}

function mostrarNome(e) { // Implementação da função (4 pontos)
var alvo = e.target;
nome.innerText = alvo.title;
}

function limparNome() {
nome.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}