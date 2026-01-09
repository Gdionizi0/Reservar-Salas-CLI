const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/salas.json');

function lerSalas() {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function salvarSalas(salas) {
  fs.writeFileSync(filePath, JSON.stringify(salas, null, 2));
}

function listarSalas() {
  return lerSalas();
}

function criarSala(nome, capacidade, descricao) {
  const salas = lerSalas();

  const existe = salas.find(s => s.nome.toLowerCase() === nome.toLowerCase());
  if (existe) return false;

  salas.push({
    id: Date.now(),
    nome,
    capacidade,
    descricao
  });

  salvarSalas(salas);
  return true;
}

module.exports = {
  listarSalas,
  criarSala
};
