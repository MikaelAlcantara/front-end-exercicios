const botao = document.querySelector('#botao-dog');
const imagem = document.querySelector('#foto-dog');

function converterParaJSON(resposta) {
  return resposta.json();
}

function atualizarImagem(dados) {
  imagem.src = dados.message;  // URL da foto está em 'message'
}

function mostrarErro(erro) {
  console.log('Erro ao buscar foto:', erro);
}

function buscarFotoDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(converterParaJSON)
    .then(atualizarImagem)
    .catch(mostrarErro);
}

botao.addEventListener('click', buscarFotoDog);
