# 🐛 Bug Reports — Parte A

> Preencha uma seção completa para cada defeito encontrado. O mínimo
> exigido é **3 bug reports**. Apague este bloco antes de entregar.

**Dupla:** [Mauro Raya Franco 232009] + [Maria Clara Arci 228825]  
**Data da exploração:** [22/04/2026]  
**Navegador usado:** [Chrome 121]  
**Sistema operacional:** [Windows 11]  

---

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