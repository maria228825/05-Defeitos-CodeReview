**Dupla:** [Mauro Raya Franco 232009] + [Maria Clara Arci 228825]  
**Data da revisão:** [22/04/2026]

---

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
