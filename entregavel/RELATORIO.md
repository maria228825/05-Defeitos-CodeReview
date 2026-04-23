# 📦 Relatório Final

> **Atividade:** Bug Report Profissional + Code Review Guiado
> **Curso:** Qualidade de Software
> **Professor:** Prof. Claudio Nunes

---

## 👥 Identificação da dupla

| Nome completo | RA | GitHub |
|---|---|---|
| [Mauro Raya Franco] | [232009] | [@MauroRaya] |
| [Maria Clara Arci] | [228825] | [@maria228225] |

**Ambiente de testes:** [Chrome 121 no Windows 11, GitHub Pages do fork, editor web do GitHub]

---

## 📋 Sumário

- [Parte A — Bug Reports](#parte-a--bug-reports)
- [Parte B — Code Review](#parte-b--code-review)
- [Reflexão final](#-reflexão-final)
- [Declarações](#-declarações)

---

## Parte A — Bug Reports

## BUG-001

**Título:** [CONTEXTO] Prioridade de tarefa com valor fora do esperado (1-5)

**Severidade:** Média  
**Justificativa da severidade:** Não é algo crítico que impacta diretamente o sistema como um todo, porém é uma inconveniência frequente e negativa para o usuário.

**Prioridade:** P2  
**Justificativa da prioridade:** Não é a maior prioridade no momento, mas impacta diretamente a experiência do usuário.

**Ambiente:**
- Navegador: [Chrome 121.0]
- Sistema Operacional: [Windows 11]
- Versão da aplicação: TarefaQS v1.0.0

**Passos para reprodução:**
1. Abra o site no caminho: `https://maria228825.github.io/05-Defeitos-CodeReview/parte-a-bug-report/app/index.html`.
2. No campo de prioridade da tarefa, digite um valor fora do esperado (1 < valor > 5).
3. Clique no botão de adicionar a tarefa.

**Resultado esperado:**
Uma mensagem de erro e não permitir a criação da tarefa.

**Resultado obtido:**
Tarefa criada com sucesso.

**Evidência:**
![Descrição da evidência](evidencias/bug-001-captura.png)

**Sugestão de causa raiz (opcional):**
Adicionar um operador lógico (if, else) para capturar valores fora do esperado durante criação de uma tarefa.

---

## BUG-002

**Título:** [CONTEXTO] Criação de uma tarefa sem dados preenchidos

**Severidade:** Média  
**Justificativa da severidade:** Não é algo crítico que impacta diretamente o sistema como um todo, porém é uma inconveniência frequente e negativa para o usuário.

**Prioridade:** P2  
**Justificativa da prioridade:** Não é a maior prioridade no momento, mas impacta diretamente a experiência do usuário.

**Ambiente:**
- Navegador: [Chrome 121.0]
- Sistema Operacional: [Windows 11]
- Versão da aplicação: TarefaQS v1.0.0

**Passos para reprodução:**
1. Abra o site no caminho: `https://maria228825.github.io/05-Defeitos-CodeReview/parte-a-bug-report/app/index.html`.
2. Não preencha os campos.
3. Clique no botão de adicionar a tarefa.

**Resultado esperado:**
Uma mensagem de erro e não permitir a criação da tarefa.

**Resultado obtido:**
Tarefa criada com sucesso.

**Evidência:**
![Descrição da evidência](evidencias/bug-002-captura.png)

**Sugestão de causa raiz (opcional):**
Adicionar um operador lógico (if, else) para capturar os valores dos campos durante criação de uma tarefa.

---

## BUG-003

**Título:** [CONTEXTO] Tarefas não persistem após recarregar a página

**Severidade:** Crítica  
**Justificativa da severidade:** Impacta diretamente o sistema, resultando na perda dos registros das tarefas.

**Prioridade:** P4  
**Justificativa da prioridade:** Precisa ser tratado assim que possivel, já que impacta diretamente o usuário resultando em perda de dados.

**Ambiente:**
- Navegador: [Chrome 121.0]
- Sistema Operacional: [Windows 11]
- Versão da aplicação: TarefaQS v1.0.0

**Passos para reprodução:**
1. Abra o site no caminho: `https://maria228825.github.io/05-Defeitos-CodeReview/parte-a-bug-report/app/index.html`.
2. Preencha os dados de uma tarefa.
3. Clique no botão para criar uma tarefa.
4. Recarregue a página.

**Resultado esperado:**
As tarefas deveriam persistir e aparecer corretamente na tela.

**Resultado obtido:**
As tarefas foram perdidas.

**Sugestão de causa raiz (opcional):**
Registrar as tarefas em um banco de dados.

---

## ✅ Critérios de qualidade do bug report
*(Use para conferir antes de entregar)*

- [X] Título descritivo — outra pessoa entende o problema só pelo título?
- [X] Passos são **numerados** e **reproduzíveis** por terceiros?
- [X] Há **pelo menos uma evidência** (screenshot, GIF ou log)?
- [X] Severidade tem **justificativa explícita**?
- [X] Prioridade tem **justificativa explícita**?
- [X] Ambiente inclui **navegador + SO**?
- [X] "Esperado vs. Obtido" deixa o gap claro?

## ✅ Checklist de qualidade dos reports

Antes de submeter, confirme em cada report:

- [X] Título é específico e acionável (não `"Não funciona"`).
- [X] Passos estão **numerados** e são reproduzíveis por terceiros.
- [X] Há **pelo menos uma evidência** por report (imagem, GIF ou log).
- [X] Severidade tem **justificativa explícita**.
- [X] Prioridade tem **justificativa explícita**.
- [X] Ambiente inclui **navegador + SO**.
- [X] "Esperado × Obtido" deixa a diferença clara.
- [X] Os 3 defeitos reportados cobrem **categorias diferentes**
      (funcional, UX, validação, persistência, etc.)

---

## Parte B — Code Review

### Finding #1

**📍 Linha(s):** 11–13
**🏷 Rótulo:** blocker
**📂 Dimensão:** Segurança
**⚠️ Severidade:** Crítica

**🐛 Problema:**
A query é construída por concatenação de string, permitindo **SQL Injection** caso o parâmetro `nome` seja malicioso.

**💡 Sugestão de correção:**
Utilizar queries parametrizadas para evitar injeção.

```javascript
async function buscarUsuarioPorNome(nome) {
  const query = "SELECT * FROM usuarios WHERE nome = ?";
  return db.executarQuery(query, [nome]);
}
```

**📚 Referência (opcional):** OWASP - SQL Injection

---

### Finding #2

**📍 Linha(s):** 16–28
**🏷 Rótulo:** major
**📂 Dimensão:** Erros
**⚠️ Severidade:** Alta

**🐛 Problema:**
Não há validação dos dados de entrada (`dados.nome`, `dados.email`, `dados.tipo`, `dados.senha`). Isso pode causar inconsistência ou falhas.

**💡 Sugestão de correção:**
Adicionar validações antes do processamento.

```javascript
if (!dados.nome || !dados.email || !dados.senha) {
  throw new Error('Dados obrigatórios não informados');
}

if (!TIPOS_VALIDOS.includes(dados.tipo)) {
  throw new Error('Tipo de usuário inválido');
}
```

---

### Finding #3

**📍 Linha(s):** 30–36
**🏷 Rótulo:** major
**📂 Dimensão:** Erros
**⚠️ Severidade:** Alta

**🐛 Problema:**
A função `atualizarEmail` não verifica se o usuário existe antes de atualizar (`u` pode ser `null` ou `undefined`).

**💡 Sugestão de correção:**

```javascript
async function atualizarEmail(id, novoEmail) {
  const u = await db.buscarPorId('usuarios', id);

  if (!u) {
    throw new Error('Usuário não encontrado');
  }

  u.email = novoEmail;
  await db.atualizar('usuarios', id, u);
  logger.info('Email atualizado: ' + novoEmail);
  return u;
}
```

---

### Finding #4

**📍 Linha(s):** 38–102
**🏷 Rótulo:** major
**📂 Dimensão:** Complexidade
**⚠️ Severidade:** Alta

**🐛 Problema:**
A função `calcularLimiteEmprestimo` possui alta complexidade ciclomática com muitos `if/else` aninhados, dificultando manutenção e testes.

**💡 Sugestão de correção:**
Refatorar usando funções auxiliares ou estratégia baseada em regras.

```javascript
function calcularLimiteProfessor(usuario) {
  if (usuario.tempoCasaEmDias > 365) {
    if (usuario.atrasos === 0) return 20;
    if (usuario.atrasos < 3) return 15;
    return usuario.multaPendente ? 1 : 3;
  }

  if (usuario.atrasos === 0) return 10;
  if (usuario.atrasos < 3) return 7;
  return usuario.suspenso ? 0 : 2;
}
```

---

### Finding #5

**📍 Linha(s):** 18
**🏷 Rótulo:** nit
**📂 Dimensão:** Padrões
**⚠️ Severidade:** Baixa

**🐛 Problema:**
Uso de `salt = 10` como valor fixo pode não ser ideal dependendo da política de segurança.

**💡 Sugestão de correção:**
Extrair para variável de ambiente.

```javascript
const salt = process.env.SALT_ROUNDS || 10;
```

---

### Finding #6

**📍 Linha(s):** 103–140
**🏷 Rótulo:** major
**📂 Dimensão:** Complexidade
**⚠️ Severidade:** Média

**🐛 Problema:**
Existe duplicação de lógica entre `calcularLimiteEmprestimo` e `calcularLimiteComSuspensao`, aumentando risco de inconsistência.

**💡 Sugestão de correção:**
Reutilizar a função principal e aplicar regra de suspensão separadamente.

```javascript
function calcularLimiteComSuspensao(usuario) {
  if (usuario.suspenso) return 0;
  return calcularLimiteEmprestimo(usuario);
}
```

---

## ✅ Checklist final

* [x] Há pelo menos 6 findings preenchidas
* [x] Cada finding cita linha, dimensão, rótulo e severidade
* [x] As sugestões são concretas e acionáveis
* [x] Pelo menos uma finding cobre segurança
* [x] Pelo menos uma finding cobre complexidade

---

## 💭 Reflexão final

> Responda em 1-2 parágrafos. Esta reflexão **é obrigatória**.

**Qual dimensão do checklist foi mais difícil aplicar? Por quê?**

A dimensão mais difícil foi **Complexidade**, pois exige analisar a lógica como um todo e não apenas erros pontuais. Funções com muitos `if/else` tornam essa avaliação mais subjetiva e trabalhosa.

**O que vocês fariam diferente se revisassem o código novamente?**

Se revisássemos novamente, focaríamos mais em refatoração e padronização desde o início. Também buscaríamos soluções mais organizadas para reduzir repetição e facilitar manutenção futura.

---

## 📣 Declarações


### Uso de IA como parceiro de trabalho

- [ ] Não usamos IA nesta atividade.
- [ ] Usamos IA para esclarecer conceitos teóricos.
- [X] Usamos IA para revisar a redação dos bug reports.
- [ ] Usamos IA para discutir se um achado era ou não um defeito.
- [ ] Uso específico: [descreva]

### Declaração de autoria

Declaramos que este relatório é de autoria da dupla, que exploramos
pessoalmente a aplicação da Parte A e lemos o código da Parte B. As
findings aqui registradas representam nosso próprio julgamento
técnico.