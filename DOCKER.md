# Docker Compose — Desenvolvimento (dev)

Este repositório inclui um `docker-compose.yml` simples para facilitar o desenvolvimento com containers.

Serviços:
- `backend` — constrói a imagem a partir de `backend/` e roda `uvicorn main:app` na porta `8001`.
- `frontend` — constrói a imagem a partir de `frontend/` e roda o dev server do Vite na porta `5173`.
- `static` — usa a imagem oficial do Python para servir `scr/` via `python -m http.server 8000`.

Como usar:

```powershell
# A partir da raiz do projeto
docker-compose up --build
```

URLs úteis:
- Backend: http://localhost:8001
- Frontend (Vite): http://localhost:5173
- Static site: http://localhost:8000/scr/index.html

Notas:
- O serviço `frontend` executa o dev server do Vite. Para um fluxo de produção, crie um build (`npm run build`) e sirva os arquivos estáticos com Nginx.
- Volumes montados permitem editar o código localmente e ver mudanças no container (hot-reload do Vite funciona se o host tiver Node). 
