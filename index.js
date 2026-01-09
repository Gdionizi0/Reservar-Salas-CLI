const prompt = require('prompt-sync')();

const { listarSalas, criarSala } = require('./services/salaService');
const { criarReserva, lerReservas } = require('./services/reservaService');

function menu() {
  console.log('\n=== Sistema de Reserva de Salas ===');
  console.log('1 - Listar salas');
  console.log('2 - Criar sala');
  console.log('3 - Criar reserva');
  console.log('4 - Listar reservas');
  console.log('0 - Sair');

  const opcao = prompt('Escolha uma opção: ');

  switch (opcao) {
    case '1':
      listarSalasMenu();
      break;

    case '2':
      criarSalaMenu();
      break;

    case '3':
      criarReservaMenu();
      break;

    case '4':
      listarReservasMenu();
      break;

    case '0':
      console.log('👋 Encerrando sistema...');
      break;

    default:
      console.log('❌ Opção inválida!');
      menu();
  }
}

/* ===== MENUS ===== */

function listarSalasMenu() {
  const salas = listarSalas();

  console.log('\n=== Salas Cadastradas ===');

  if (salas.length === 0) {
    console.log('Nenhuma sala cadastrada.');
  } else {
    salas.forEach(sala => {
      console.log(
        `ID: ${sala.id} | Nome: ${sala.nome} | Capacidade: ${sala.capacidade} | Descrição: ${sala.descricao}`
      );
    });
  }

  voltarMenu();
}

function criarSalaMenu() {
  console.log('\n=== Criar Sala ===');

  const nome = prompt('Nome da sala: ');
  const capacidade = prompt('Capacidade: ');
  const descricao = prompt('Descrição: ');

  const criada = criarSala(nome, capacidade, descricao);

  if (criada) {
    console.log('✅ Sala criada com sucesso!');
  } else {
    console.log('❌ Já existe uma sala com esse nome.');
  }

  voltarMenu();
}

function criarReservaMenu() {
  console.log('\n=== Criar Reserva ===');

  const salas = listarSalas();

  if (salas.length === 0) {
    console.log('❌ Nenhuma sala cadastrada. Crie uma sala primeiro.');
    voltarMenu();
    return;
  }

  console.log('\nSalas disponíveis:');
  salas.forEach(sala => {
    console.log(`- ${sala.nome}`);
  });

  const sala = prompt('Sala: ');
  const data = prompt('Data (YYYY-MM-DD): ');
  const horario = prompt('Horário (HH:MM): ');
  const responsavel = prompt('Responsável: ');

  const resultado = criarReserva({
    id: Date.now(),
    sala,
    data,
    horario,
    responsavel
  });

  if (resultado.erro) {
    console.log('❌', resultado.erro);
  } else {
    console.log('✅ Reserva criada com sucesso!');
  }

  voltarMenu();
}

function listarReservasMenu() {
  console.log('\n=== Reservas ===');

  const reservas = lerReservas();

  if (reservas.length === 0) {
    console.log('Nenhuma reserva encontrada.');
  } else {
    reservas.forEach(reserva => {
      console.log(
        `Sala: ${reserva.sala} | Data: ${reserva.data} | Horário: ${reserva.horario} | Responsável: ${reserva.responsavel}`
      );
    });
  }

  voltarMenu();
}

function voltarMenu() {
  prompt('\nPressione ENTER para voltar ao menu...');
  menu();
}

/* ===== INICIAR ===== */
menu();
