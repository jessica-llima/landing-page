# Project Structure — landing-page

Objetivo: documentar a organização atual do repositório e a convenção a ser seguida.

Estrutura proposta e atual:

```
landing-page/
├── .github/
│   └── copilot-instructions.md
├── archive/                    # Documentos arquivados (antes na raiz)
├── backend/                    # FastAPI scaffold
│   ├── main.py
│   └── requirements.txt
├── frontend/                   # Vite + React scaffold (opcional)
│   ├── package.json
│   └── src/
├── scr/                        # Páginas estáticas (HTML/CSS/JS)
│   ├── index.html
│   ├── assents/
│   ├── css/
│   └── js/
├── scripts/                    # Scripts de conveniência (PS1)
├── README.md
└── PROJECT_STRUCTURE.md
```

Notas:
- `scr/` mantém as páginas estáticas que já existem e servem como referência rápida.
- `frontend/` e `backend/` são scaffolds para migração gradual para React + FastAPI.
- `archive/` guarda documentação que foi arquivada para manter histórico.

Recomendações de workflow local:
- Backend: `cd backend` → criar venv → `pip install -r requirements.txt` → `uvicorn main:app --reload --port 8001`
- Frontend: `cd frontend` → `npm install` → `npm run dev` (porta 5173)
- Visualização estática: `python -m http.server 8000` a partir da raiz para abrir `scr/` (porta 8000)

Próximos passos possíveis:
- Migrar formulários de `scr/assents` para componentes React em `frontend/src/components`.
- Adicionar `docker-compose.yml` para desenvolvimento unificado.
