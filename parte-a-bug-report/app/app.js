/* TarefaQS — Lógica da aplicação
 *
 * ATENÇÃO: Esta aplicação contém DEFEITOS INJETADOS PROPOSITALMENTE
 * para fins didáticos. Não use em produção.
 */

(function() {
  'use strict';

  let tarefas = [];
  let proximoId = 1;
  let filtroAtual = 'todas';

  const form = document.getElementById('form-tarefa');
  const inputTitulo = document.getElementById('titulo');
  const inputCategoria = document.getElementById('categoria');
  const inputPrazo = document.getElementById('prazo');
  const inputPrioridade = document.getElementById('prioridade');
  const btnLimpar = document.getElementById('btn-limpar');
  const btnLimparTudo = document.getElementById('btn-limpar-tudo');
  const filtroSelect = document.getElementById('filtro');
  const lista = document.getElementById('lista-tarefas');
  const toast = document.getElementById('toast');

  function mostrarToast(mensagem, tipo) {
    toast.textContent = mensagem;
    toast.className = 'toast show ' + (tipo || '');
    setTimeout(function() {
      toast.className = 'toast';
    }, 2500);
  }

  function formatarData(dataStr) {
    if (!dataStr) return 'Sem prazo';
    const partes = dataStr.split('-');
    return partes[2] + '/' + partes[1] + '/' + partes[0];
  }

  function escapeHtml(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
  }

  form.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const titulo = inputTitulo.value.trim();
    const categoria = inputCategoria.value;
    const prazo = inputPrazo.value;
    const prioridade = parseInt(inputPrioridade.value, 10);

    const tarefa = {
      id: proximoId++,
      titulo: titulo,
      categoria: categoria,
      prazo: prazo,
      prioridade: prioridade,
      concluida: false,
      criadaEm: new Date().toISOString()
    };

    tarefas.push(tarefa);
    renderizar();
    mostrarToast('Tarefa adicionada', 'success');

    // form.reset();
  });

  btnLimpar.addEventListener('click', function() {
    form.reset();
    inputPrioridade.value = 3;
  });

  btnLimparTudo.addEventListener('click', function() {
    tarefas = [];
    renderizar();
    mostrarToast('Todas as tarefas foram removidas', 'error');
  });

  filtroSelect.addEventListener('change', function() {
    filtroAtual = filtroSelect.value;
    renderizar();
  });

  function alternarConclusao(id) {
    const tarefa = tarefas.find(function(t) { return t.id === id; });
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
      renderizar();
    }
  }

  function removerTarefa(id) {
    tarefas = tarefas.filter(function(t) { return t.id !== id; });
    renderizar();
    mostrarToast('Tarefa removida');
  }

  function renderizar() {
    let tarefasVisiveis = tarefas;
    if (filtroAtual === 'pendentes') {
      tarefasVisiveis = tarefas.filter(function(t) { return !t.concluida; });
    } else if (filtroAtual === 'concluidas') {
      tarefasVisiveis = tarefas.filter(function(t) { return t.concluida; });
    }

    tarefasVisiveis.sort(function(a, b) {
      if (a.prioridade !== b.prioridade) {
        return b.prioridade - a.prioridade;
      }
      return (a.prazo || '').localeCompare(b.prazo || '');
    });

    atualizarEstatisticas();

    if (tarefasVisiveis.length === 0) {
      lista.innerHTML = '<li class="empty-state">Nenhuma tarefa para exibir com o filtro atual.</li>';
      return;
    }

    const html = tarefasVisiveis.map(function(t) {
      const classeConcluida = t.concluida ? 'concluida' : '';
      const tituloEscapado = escapeHtml(t.titulo);
      const badgeCategoria = '<span class="badge badge-' + t.categoria + '">' +
        t.categoria.charAt(0).toUpperCase() + t.categoria.slice(1) + '</span>';
      const prazoTexto = formatarData(t.prazo);
      const prioridadeTexto = 'Prioridade <span class="prioridade-' + t.prioridade + '">' +
        t.prioridade + '</span>';

      return '<li class="tarefa ' + classeConcluida + '" data-id="' + t.id + '">' +
        '<input type="checkbox" class="tarefa-checkbox" ' +
          (t.concluida ? 'checked' : '') +
          ' onchange="__alternarConclusao(' + t.id + ')">' +
        '<div class="tarefa-conteudo">' +
          '<div class="tarefa-titulo">' + tituloEscapado + '</div>' +
          '<div class="tarefa-meta">' +
            badgeCategoria +
            '📅 ' + prazoTexto + ' · ' + prioridadeTexto +
          '</div>' +
        '</div>' +
        '<button class="btn btn-danger btn-small" ' +
          'onclick="__removerTarefa(' + t.id + ')">Remover</button>' +
        '</li>';
    }).join('');

    lista.innerHTML = html;
  }

  function atualizarEstatisticas() {
    const total = tarefas.length;
    let pendentes = tarefas.filter(function(t) { return !t.concluida; }).length;
    const concluidas = tarefas.filter(function(t) { return t.concluida; }).length;

    const urgentes = tarefas.filter(function(t) {
      return t.prioridade === 5 && !t.concluida;
    }).length;
    pendentes = pendentes + urgentes;

    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-pendentes').textContent = pendentes;
    document.getElementById('stat-concluidas').textContent = concluidas;
  }

  window.__alternarConclusao = alternarConclusao;
  window.__removerTarefa = removerTarefa;

  renderizar();
})();