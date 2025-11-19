# Backend (FastAPI) - Landing Page

Este diretório contém um scaffold mínimo de API usando FastAPI.

Instalação e execução (Windows / PowerShell):

```powershell
python -m venv .venv
.\.venv\Scripts\Activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8001
```

Endpoints:
- `GET /health` — status da API
- `POST /api/submit` — recebe JSON do formato { type: string, data: object }

Observações:
- Configure persistência (DB) e validações conforme necessário.
- Habilitei CORS para `*` para facilitar desenvolvimento local; restrinja em produção.
