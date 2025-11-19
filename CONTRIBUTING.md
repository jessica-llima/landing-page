# Contributing — landing-page

Obrigado por contribuir! O objetivo é manter o projeto limpo e consistente.

Regras rápidas:
- Siga a arquitetura: `scr/` (estático), `frontend/` (React), `backend/` (FastAPI)
- Escreva CSS desktop-first nos arquivos de `scr/css/components` e `scr/css/layouts`.
- Adicione media queries apenas em `scr/css/layouts/responsive.css`.
- Use `@import` em `scr/css/main.css` para incluir novos arquivos.

Fluxo de contribuição:
1. Crie uma branch com nome `feature/` ou `fix/`.
2. Faça commits pequenos e descritivos.
3. Abra PR para `main` e descreva as mudanças.

Testes locais:
- Para validar visualmente, use `python -m http.server 8000` na raiz e abra `scr/`.
- Para o scaffold backend/frontend, ver `README.md` e `PROJECT_STRUCTURE.md`.

Obrigado!
