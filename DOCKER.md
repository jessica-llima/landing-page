# Docker Compose — Desenvolvimento (dev)

Este repositório inclui um `docker-compose.yml` simples para facilitar o desenvolvimento com containers.

Serviços:
- `backend` — constrói a imagem a partir de `backend/` e roda `uvicorn main:app` na porta `8001`.
- `frontend` — constrói a imagem a partir de `frontend/` e roda o dev server do Vite na porta `5173`.
- `static` — usa a imagem oficial do Python para servir `scr/` via `python -m http.server 8000`.

Como usar:

# Docker — desenvolvimento e produção

Este repositório traz um `docker-compose.yml` preparado para executar os três componentes principais:

- `backend` — API FastAPI (porta `8001`)
- `frontend` — build estático servido por Nginx (porta `5173` mapeada para porta `80` do container)
- `static` — servidor simples em Python para o diretório `scr/` (porta `8000`)

Observação: o `frontend` foi atualizado para um fluxo de produção (multi-stage Dockerfile): o build é feito com Node e o artefato é servido por Nginx.

Execução (produção simples)

1) Build e start:

```powershell
cd 'C:\Users\limaj\Desktop\landing page'
docker compose up --build
```

2) Acessos:

- Backend: http://localhost:8001
- Frontend (Nginx): http://localhost:5173
- Static site: http://localhost:8000/scr/index.html

Execução (desenvolvimento local)

- Para desenvolvimento frontend com hot-reload, prefira rodar o Vite localmente:

```powershell
cd frontend
npm install
npm run dev
# aberto em http://localhost:5173
```

Considerações e dicas

- Se for publicar em produção real, ajuste os mapeamentos de porta e o Dockerfile do frontend
	para servir em porta 80 (ou configurar reverse-proxy) e remover volumes que exponham código
	fonte sensível.
- A imagem do Nginx no Dockerfile usa um `nginx.conf` simples que garante fallback para `index.html`.
- Para reduzir tempo de build em CI, use cache de dependências entre builds do Node.
