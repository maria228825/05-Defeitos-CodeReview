# Atividade Prática — Bug Report Profissional + Code Review Guiado

> **Gestão de Defeitos e Revisões de Código**
> Qualidade de Software · Prof. Claudio Nunes

[![Duração](https://img.shields.io/badge/duração-1h00-1C7293)](#-duração-e-pacing)
[![Modalidade](https://img.shields.io/badge/modalidade-híbrida-065A82)](#)
[![Entregável](https://img.shields.io/badge/entregável-1_relatório-F59E0B)](#-entregável)

---

## 📌 Sobre esta atividade

Nesta atividade, você vai **praticar duas competências inseparáveis** do engenheiro de qualidade moderno:

1. **Caçar defeitos** em uma aplicação em execução e registrá-los com rigor profissional.
2. **Revisar código-fonte** identificando problemas antes que uma única linha de teste seja escrita.

A atividade é dividida em duas partes independentes, mas complementares — ambas contribuem para o mesmo relatório final.

### 🎯 Objetivos de aprendizagem

Ao final desta atividade você será capaz de:

- Escrever **bug reports profissionais** contendo passos reproduzíveis, evidências e severidade/prioridade coerentes.
- Diferenciar **severidade** (impacto técnico) de **prioridade** (urgência de negócio).
- Conduzir uma **revisão de código estruturada** com base em checklist multidimensional.
- Identificar defeitos clássicos: **SQL injection, complexidade excessiva, tratamento de erro ausente, duplicação, nomes ruins**.
- Redigir **comentários de PR** claros, específicos e acionáveis.

### 🧭 Pré-requisitos

- Ter participado das aulas de **Introdução à Qualidade**, **Métricas** e **Teste de Software**.
- Conhecer o fluxo básico de **Pull Request no GitHub** (criar branch, abrir PR, comentar).
- Navegador moderno + editor de código (VS Code recomendado).

---

## ⏱ Duração e pacing

| Segmento | Tempo | Atividade |
|---|---|---|
| **Abertura** | 5 min | Briefing, formação de duplas e checagem de ambiente |
| **Parte A — Bug Report** | 20 min | Exploração + registro de ≥ 3 defeitos |
| **Transição** | 5 min | Rápida discussão de achados da Parte A |
| **Parte B — Code Review** | 25 min | Revisão do trecho de JS com checklist |
| **Fechamento** | 5 min | Consolidação do relatório e submissão |
| **Total** | **1h00** | |

> ⚠️ A atividade é em **duplas**. Cada dupla entrega **um único relatório** com ambos os nomes.

---

## 🧰 Setup inicial

### 1. Faça o fork deste repositório

Clique em **Fork** no canto superior direito desta página. Trabalhe sempre no **seu fork**, não no repositório original.

### 2. Ative o GitHub Pages no seu fork

No seu fork, abra **Settings → Pages** e configure:

- **Source:** `Deploy from a branch`
- **Branch:** `main`
- **Folder:** `/(root)`

Depois de salvar, aguarde o GitHub publicar o site.

### 3. Abra a página inicial da atividade no navegador

Use a URL publicada do seu fork no formato:

```text
https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
```

Essa página inicial funciona como um hub da atividade. A partir dela, use os links para:

- abrir a aplicação da **Parte A**;
- abrir o arquivo de código da **Parte B**;
- consultar rapidamente o propósito da atividade.

Onde `NOME-DO-REPOSITORIO` deve ser exatamente o nome do seu fork no GitHub.
Se o fork manteve o nome original, esse trecho da URL normalmente será o
mesmo nome exibido no topo da página do repositório.

> 💡 Se o GitHub Pages ainda não tiver publicado ou estiver bloqueado na rede da instituição,
> abra localmente o arquivo `index.html` da raiz do repositório no navegador e use a página inicial normalmente.

> 💡 Se preferir editar tudo no navegador, use a interface web do GitHub ou pressione `.` no repositório para abrir o editor online.

### 4. Estrutura do repositório

```
NOME-DO-REPOSITORIO/
├── index.html                        ← página inicial usada pelo GitHub Pages
├── README.md                          ← você está aqui
├── parte-a-bug-report/
│   ├── app/                           ← aplicação web com defeitos injetados
│   │   ├── index.html
│   │   ├── app.js
│   │   └── style.css
│   ├── INSTRUCOES.md
│   └── template-bug-report.md         ← preencha suas descobertas aqui
├── parte-b-code-review/
│   ├── codigo-para-revisar.js         ← ~150 linhas com problemas intencionais
│   ├── checklist-revisao.md           ← use como roteiro
│   ├── INSTRUCOES.md
│   └── formulario-code-review.md      ← registre suas findings aqui
└── entregavel/
    └── RELATORIO.md                   ← template do entregável final
```

### 5. Use o repositório durante a atividade

- As instruções detalhadas da Parte A estão em: [`parte-a-bug-report/INSTRUCOES.md`](parte-a-bug-report/INSTRUCOES.md).
- As instruções detalhadas da Parte B estão em: [`parte-b-code-review/INSTRUCOES.md`](parte-b-code-review/INSTRUCOES.md).
- Abra primeiro a `index.html` da raiz publicada no GitHub Pages do seu fork.
- A partir dessa página, acesse a aplicação da **Parte A** e o código da **Parte B**.
- Preencha os arquivos Markdown diretamente no seu editor ou no editor web do GitHub.

---

# 📦 Entregável e Avaliação

## O que entregar

**A entrega será feita via Microsoft Teams, em formato PDF.**

1. Consolide os seus resultados no arquivo **`entregavel/RELATORIO.md`**.
2. Gere um PDF a partir deste arquivo markdown (usando exportadores de PDF do VS Code, por exemplo).
3. Faça o envio da atividade na tarefa designada no **Teams**.

Esse relatório final deverá conter:
- **Identificação da dupla.**
- **Parte A:** os **3 bug reports** completos (copiados e colados do seu form de exploração).
- **Parte B:** as **findings de code review** (copiadas do arquivo de review).
- **Reflexão final (obrigatória, 1-2 parágrafos).**


# 🧭 Revisão teórica rápida

Antes de começar, certifique-se de que você e sua dupla dominam os conceitos abaixo. Se algum estiver frio, revejam os slides do encontro.

| Conceito | Revisão em 1 linha |
|---|---|
| **Severidade** | Impacto técnico do defeito no sistema. |
| **Prioridade** | Urgência de negócio para correção. |
| **Ciclo de vida do bug** | NOVO → ATRIBUÍDO → ABERTO → CORRIGIDO → VERIFICADO → FECHADO (com REABERTO como caminho alternativo). |
| **Revisão estática** | Análise do código **sem executá-lo** — complementa (não substitui) os testes. |
| **Tipos de revisão (ISTQB)** | Informal · Walkthrough · Técnica · Inspeção formal. |
| **OWASP Top 10** | Lista das principais vulnerabilidades de aplicações web. |
| **Complexidade ciclomática** | Número de caminhos independentes em uma função. Ideal: ≤ 10. |
| **DRE (Defect Removal Efficiency)** | % de defeitos capturados antes da produção. |
| **Eficiência de Revisão** | Defeitos encontrados em revisões / total de defeitos. Times maduros: 60-80%. |

---

# 🆘 FAQ

<details>
<summary><strong>E se encontrarmos menos de 3 bugs na Parte A?</strong></summary>

Isso é improvável — a aplicação tem mais de 3 defeitos injetados. Se acontecer, expliquem no relatório **o processo de exploração que usaram**: isso também é avaliado. Bugs funcionais, de UX, de validação e de acessibilidade contam.
</details>

<details>
<summary><strong>A Parte B precisa que eu execute o código?</strong></summary>

**Não.** O ponto principal da Parte B é praticar **verificação estática** — encontrar defeitos só lendo o código. Se executarem para confirmar uma suspeita, tudo bem, mas o registro deve ser estilo revisão de PR, não teste dinâmico.
</details>


<details>
<summary><strong>Preciso saber SQL para identificar o SQL injection?</strong></summary>

Nem tanto. Basta reconhecer o **padrão** de concatenação direta de input do usuário em uma string de query (`"SELECT * FROM users WHERE name = '" + nome + "'"`). Esse padrão é **sempre** vulnerável, independentemente do banco.
</details>

<details>
<summary><strong>E se eu discordar da severidade atribuída na tabela?</strong></summary>

Ótimo! Discordância fundamentada é **bem-vinda** — registre sua justificativa. A tabela é um guia, não uma sentença. Revisar bugs é um exercício de julgamento profissional.
</details>

<details>
<summary><strong>Posso usar IA (ChatGPT, Copilot, Claude) para me ajudar?</strong></summary>

**Sim, mas com regras.** Podem usar como **parceiro de trabalho** — pedir explicações de conceitos, revisar a redação dos reports, discutir se algo é ou não um defeito. **Não podem** pedir para a IA "encontrar os bugs por mim" na Parte B. O objetivo é desenvolver seu próprio olho crítico. Se usarem IA, **declarem no relatório** de que forma.
</details>

---

# 📚 Referências e leitura complementar

- **ISTQB Foundation Syllabus** — capítulos sobre Static Testing e Defect Management.
- **OWASP Top 10** — https://owasp.org/www-project-top-ten/
- **"Code Complete" (Steve McConnell)** — capítulo 21: Collaborative Construction.
- **"Clean Code" (Robert C. Martin)** — capítulos sobre nomes, funções e tratamento de erros.
- **Google Engineering Practices — Code Review** — https://google.github.io/eng-practices/review/
- **Conventional Comments** — https://conventionalcomments.org/ (rótulos padronizados para PR).

---


