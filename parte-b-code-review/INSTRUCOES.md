# 🔍 Parte B — Code Review Guiado

**Duração:** 25 min · **Modalidade:** em duplas

## Missão

Revisar um trecho de **~150 linhas de JavaScript** e identificar todos os
defeitos possíveis **sem executar o código**. Registrar cada achado como
se fosse um comentário em um Pull Request real no GitHub.

## O arquivo sob revisão

O código está em `codigo-para-revisar.js`. Ele simula um módulo de
**gerenciamento de usuários** com operações de consulta, cadastro,
atualização e regras de negócio.

Se estiver usando o GitHub Pages do fork, abra primeiro a página inicial da raiz do repositório e clique em **Abrir código para revisão**. Se preferir, também pode abrir o arquivo diretamente no repositório.

**O código contém, no mínimo, 6 problemas intencionais:**

| # | Categoria | Severidade esperada |
|---|---|---|
| 1 | Constante declarada mas não usada para validação interna | Baixa |
| 2 | Tratamento de erro ausente em chamadas assíncronas | Média |
| 3 | **SQL injection em query string concatenada** | **Crítica** |
| 4 | Função com complexidade ciclomática > 15 | Alta |
| 5 | Código duplicado entre funções | Média |
| 6 | Nomes de variáveis pouco descritivos | Baixa |

## Passo a passo

### 📖 Passo 1 — Leitura fria (5 min)

Leiam o arquivo completo sem anotar nada ainda.

- O que este código **deveria** fazer?
- Qual a responsabilidade de cada função?
- Onde estão os pontos de entrada?
- Onde estão os pontos de saída?

### 🧐 Passo 2 — Revisão dimensional (10 min)

Percorram o código uma vez por cada dimensão do checklist em
`checklist-revisao.md`.

### ✍️ Passo 3 — Registro das findings (10 min)

Para cada problema encontrado, preencha uma entrada no arquivo
`formulario-code-review.md` **como se fosse um comentário em PR**.

## Critérios de qualidade

- [X] Cobri **todas as 5 dimensões** do checklist?
- [X] Identifiquei **pelo menos os 6 problemas intencionais**?
- [X] Cada finding cita a **linha exata**?
- [X] Cada finding tem **severidade** e **rótulo**?
- [X] As sugestões de correção são concretas?
- [X] Os comentários são construtivos?

## Entrega

Depois de concluir a revisão, copie as findings para
`entregavel/RELATORIO.md`.