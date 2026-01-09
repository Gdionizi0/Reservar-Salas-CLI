const fs = require('fs');
const path = require('path');
const { listarSalas } = require('./salaService');

const filePath = path.join(__dirname, '../data/reservas.json');

function lerReservas() {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function salvarReservas(reservas) {
  fs.writeFileSync(filePath, JSON.stringify(reservas, null, 2));
}

function criarReserva(reserva) {
  const salas = listarSalas();
  const salaExiste = salas.find(s => s.nome === reserva.sala);

  if (!salaExiste) {
    return { erro: 'Sala não existe' };
  }

  const reservas = lerReservas();
  const conflito = reservas.find(r =>
    r.sala === reserva.sala &&
    r.data === reserva.data &&
    r.horario === reserva.horario
  );

  if (conflito) {
    return { erro: 'Conflito de horário' };
  }

  reservas.push(reserva);
  salvarReservas(reservas);
  return { sucesso: true };
}

module.exports = { criarReserva, lerReservas };
