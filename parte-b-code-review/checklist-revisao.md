# ✅ Checklist de Revisão de Código

Use este arquivo como roteiro durante a leitura de
`codigo-para-revisar.js`.

## 📘 Dimensão 1 — Legibilidade

- [X] Os nomes de variáveis, funções e parâmetros são descritivos?
- [ ] Funções têm tamanho razoável?
- [ ] O fluxo do código é fácil de seguir?
- [ ] Há comentários onde realmente ajudariam?

## ⚠️ Dimensão 2 — Tratamento de erros

- [ ] Chamadas assíncronas (`async/await`, `Promise`) têm `try/catch`?
- [ ] Erros são logados ou propagados de forma útil?
- [ ] Nenhuma exceção é silenciosamente engolida?
- [ ] Valores `null`/`undefined` são tratados antes do uso?

## 🔒 Dimensão 3 — Segurança

- [ ] Entradas do usuário são validadas e sanitizadas?
- [ ] Queries usam prepared statements?
- [ ] Não há credenciais hardcoded?
- [ ] Não há exposição de dados sensíveis em logs?

## 🧮 Dimensão 4 — Complexidade

- [X] Há função com complexidade ciclomática alta?
- [X] Há trechos que pedem extração de função?
- [X] Há código duplicado que viola DRY?
- [X] Condicionais podem ser simplificados?

## 📐 Dimensão 5 — Padrões

- [X] O código segue convenções de nomenclatura do JavaScript (ex: `camelCase`)?
- [X] Usa `const` e `let` de forma adequada, evitando `var`?
- [X] Existem regras ou estruturas excessivamente confusas e fora de padrão?

## 🎯 Rótulos de finding

| Rótulo | Quando usar |
|---|---|
| `blocker` | Defeito crítico que impede o merge |
| `major` | Problema significativo que deve ser corrigido |
| `nit` | Ajuste cosmético ou sugestão não bloqueante |
| `question` | Dúvida sobre a intenção antes de julgar |