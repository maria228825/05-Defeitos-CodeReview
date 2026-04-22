const db = require('./infra/db');
const crypto = require('./infra/crypto');
const logger = require('./infra/logger');

const TIPOS_VALIDOS = ['aluno', 'professor', 'funcionario', 'visitante'];

async function listarUsuariosAtivos() {
  return db.executarQuery('SELECT * FROM usuarios WHERE ativo = 1');
}

async function buscarUsuarioPorNome(nome) {
  const query = "SELECT * FROM usuarios WHERE nome = '" + nome + "'";
  return db.executarQuery(query);
}

async function cadastrarUsuario(dados) {
  const salt = 10;
  const senhaHash = await crypto.hash(dados.senha, salt);
  const usuario = {
    nome: dados.nome,
    email: dados.email,
    tipo: dados.tipo,
    senha: senhaHash,
    ativo: true,
    criadoEm: new Date().toISOString()
  };

  await db.insert('usuarios', usuario);
  logger.info('Usuario cadastrado: ' + dados.email);
  return usuario;
}

async function atualizarEmail(id, novoEmail) {
  const u = await db.buscarPorId('usuarios', id);
  u.email = novoEmail;
  await db.atualizar('usuarios', id, u);
  logger.info('Email atualizado: ' + novoEmail);
  return u;
}

function calcularLimiteEmprestimo(usuario) {
  const hoje = new Date();
  let limite = 5;

  if (usuario.tipo === 'professor') {
    if (usuario.tempoCasaEmDias > 365) {
      if (usuario.atrasos === 0) {
        limite = 20;
      } else {
        if (usuario.atrasos < 3) {
          limite = 15;
        } else {
          if (usuario.multaPendente) {
            limite = 1;
          } else {
            limite = 3;
          }
        }
      }
    } else {
      if (usuario.atrasos === 0) {
        limite = 10;
      } else {
        if (usuario.atrasos < 3) {
          limite = 7;
        } else {
          if (usuario.suspenso) {
            limite = 0;
          } else {
            limite = 2;
          }
        }
      }
    }
  } else if (usuario.tipo === 'aluno') {
    if (usuario.posGraduacao) {
      if (usuario.atrasos === 0) {
        limite = 10;
      } else {
        if (usuario.atrasos <= 2) {
          limite = 6;
        } else {
          if (usuario.multaPendente) {
            limite = 0;
          } else {
            limite = 2;
          }
        }
      }
    } else {
      if (usuario.bolsista) {
        limite = 6;
      } else {
        if (usuario.atrasos > 5) {
          limite = 1;
        } else {
          limite = 4;
        }
      }
    }
  }

  if (usuario.bloqueadoAte && new Date(usuario.bloqueadoAte) > hoje) {
    return 0;
  }

  return limite;
}

function calcularLimiteComSuspensao(usuario) {
  let limite = 5;

  if (usuario.suspenso) {
    return 0;
  }

  if (usuario.tipo === 'professor') {
    if (usuario.tempoCasaEmDias > 365) {
      if (usuario.atrasos === 0) {
        limite = 20;
      } else if (usuario.atrasos < 3) {
        limite = 15;
      } else if (usuario.multaPendente) {
        limite = 1;
      } else {
        limite = 3;
      }
    } else if (usuario.atrasos === 0) {
      limite = 10;
    } else if (usuario.atrasos < 3) {
      limite = 7;
    } else {
      limite = 2;
    }
  } else if (usuario.tipo === 'aluno') {
    if (usuario.posGraduacao && usuario.atrasos === 0) {
      limite = 10;
    } else if (usuario.posGraduacao && usuario.atrasos <= 2) {
      limite = 6;
    } else if (usuario.posGraduacao && usuario.multaPendente) {
      limite = 0;
    } else if (usuario.bolsista) {
      limite = 6;
    } else if (usuario.atrasos > 5) {
      limite = 1;
    } else {
      limite = 4;
    }
  }

  return limite;
}

module.exports = {
  TIPOS_VALIDOS,
  listarUsuariosAtivos,
  buscarUsuarioPorNome,
  cadastrarUsuario,
  atualizarEmail,
  calcularLimiteEmprestimo,
  calcularLimiteComSuspensao
};