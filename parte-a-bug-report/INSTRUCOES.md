# 📝 Parte A — Bug Report Profissional

> **Duração:** 20 min · **Modalidade:** em duplas
> **Objetivo:** encontrar defeitos em uma aplicação web real e registrá-los com rigor profissional.

---

## 🎯 Missão

Você recebeu uma aplicação chamada **TarefaQS** — um gerenciador de
tarefas acadêmicas. A aplicação foi colocada em produção, mas o time
de QA está recebendo reclamações difusas dos usuários ("não
funciona", "ficou estranho", "perdi meus dados").

Seu papel é **agir como QA**: explorar a aplicação com olhar crítico,
identificar pelo menos 3 defeitos e registrá-los em um formato que
permita ao time de desenvolvimento corrigir cada um sem precisar
voltar a pedir informação.

---

## 🚀 Como acessar a aplicação

A aplicação é estática (HTML + CSS + JS) e deve ser acessada pela URL
do **GitHub Pages** do seu fork.

### Passo 1 — Ative o GitHub Pages no fork

No seu fork, abra **Settings → Pages** e configure:

- **Source:** `Deploy from a branch`
- **Branch:** `main`
- **Folder:** `/(root)`

### Passo 2 — Abra a página inicial publicada

Use a URL no formato:

```text
https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
```

Na página inicial do Pages, clique em **Abrir aplicação de testes** para entrar na Parte A.

Onde `NOME-DO-REPOSITORIO` deve ser exatamente o nome do seu fork no GitHub.

> Se o site ainda não estiver disponível, aguarde 1-3 minutos e atualize a página.
> Se o GitHub Pages não estiver acessível, abra localmente o arquivo
> `index.html` da raiz do repositório e clique em **Abrir aplicação de testes**.

### Passo 3 — Registre suas descobertas no próprio GitHub

Preencha `template-bug-report.md` diretamente pela interface web do GitHub
ou pelo editor online aberto com a tecla `.`.

---

## 🔍 Passo 1 — Exploração (5 min)

Abra a aplicação e **brinque com ela**. Não siga só o "fluxo feliz" —
bugs aparecem nas bordas.

### Checklist de exploração

- [ ] Criar tarefas com títulos curtos, longos, com emoji, com HTML
- [ ] Criar tarefas sem preencher nada
- [ ] Criar tarefas com prazo no passado, no futuro distante, em branco
- [ ] Trocar prioridade para valores fora do esperado (0, 99, 3.5)
- [ ] Marcar tarefas como concluídas; tentar remarcar como pendente
- [ ] Usar os filtros; usar combinações de filtro + concluído
- [ ] Adicionar várias tarefas e observar o contador de estatísticas
- [ ] Clicar em "Limpar tudo"
- [ ] Atualizar a página após criar tarefas
- [ ] Redimensionar a janela do navegador para diferentes larguras
- [ ] Navegar pela aplicação usando **apenas o teclado** (Tab, Enter)

### Dicas profissionais

> 🕵️ **Mantenha o Console do navegador aberto** (F12 → Console).
> Muitos bugs deixam rastros em logs de erro que dão a causa raiz.

> 🧪 **Experimente clicar rápido ou duas vezes em botões.** Race
> conditions aparecem só sob stress.

> 📸 **Capture evidências já durante a exploração.** É muito mais
> chato tentar reproduzir um bug para a screenshot depois.

---

## 🐛 Passo 2 — Identificação e triagem (5 min)

Liste todos os candidatos a defeito que encontraram. Para cada um,
pergunte:

1. **É realmente um bug?** Ou é o comportamento esperado do sistema?
2. **É reproduzível?** Consigo provocar o problema novamente seguindo
   os mesmos passos?
3. **Qual o impacto para o usuário final?**
4. **Em qual categoria se enquadra?** (funcional, UX, validação,
   persistência, consistência, performance, acessibilidade…)

Escolham os **3 defeitos mais representativos** — idealmente de
categorias diferentes.

---

## ✍️ Passo 3 — Registro (10 min)

Preencha uma seção completa no arquivo
[`template-bug-report.md`](template-bug-report.md) para cada um dos
3 defeitos escolhidos.

### Dicas para cada campo

**Título** — pense em "o quê + onde + quando".

**Passos para reprodução** — escreva como se fosse explicar para
alguém que nunca usou o sistema. **Numerados. Objetivos.**

**Severidade × Prioridade** — use a matriz abaixo como referência de preenchimento. A **Severidade** determina quão grave é tecnicamente (decidida pela equipe técnica/QA), e a **Prioridade** determina a urgência de negócio (decidida pelo PO/gerente).

| Cenário | Severidade | Prioridade | Porque |
|---|---|---|---|
| App falha ao salvar tarefa | **Crítica** | **P1** | Bloqueia função principal |
| Typo no título da página | **Baixa** | **P1** | Dano de imagem na home |
| Layout quebra em tela estreita | **Média** | **P3** | Impacta minoria de usuários |
| Cor do botão ligeiramente errada | **Baixa** | **P4** | Cosmético, pode esperar |

**Evidência** — screenshot, GIF ou log do console.

---

## 📤 Ao terminar

1. Confira o checklist de qualidade no final de `template-bug-report.md`.
2. Siga para a `parte-b-code-review/INSTRUCOES.md`.
3. Ao final das duas partes, consolide tudo em `entregavel/RELATORIO.md`.