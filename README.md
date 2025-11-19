# Landing Page - Central de Cadastros

Projeto de página de cadastro com HTML modular, CSS organizado e JavaScript puro (sem dependências externas).

## Estrutura resumida (atualizada)

```
landing-page/
├── .github/
├── archive/
├── backend/
├── frontend/
├── scr/
└── scripts/
```

## 📁 Estrutura do Projeto

```
landing page/
├── scr/
│   ├── assents/
│   │   └── index.html          # Página de formulários (Pessoa, Empresa, Endereço)
│   ├── css/
│   │   ├── base/
│   │   │   ├── variables.css   # Variáveis CSS
│   │   │   └── reset.css       # Reset global
│   │   ├── components/
│   │   │   ├── button.css      # Estilos de botões
│   │   │   ├── input.css       # Estilos de inputs/selects
│   │   │   ├── card.css        # Estilos de cards
│   │   │   └── form.css        # Estilos de formulários
│   │   ├── layouts/
│   │   │   ├── header.css      # Estilos do header
│   │   │   └── grid.css        # Estilos de grids/layouts
│   │   └── main.css            # Importa todos os arquivos CSS
│   ├── js/
│   │   └── main.js             # JavaScript com event listeners
│   └── index.html              # Página inicial (abertura/welcome)
├── README.md                    # Este arquivo
└── README_CSS.md               # Documentação da estrutura CSS
```

## 🚀 Como Usar (Desenvolvimento)
# Landing Page — Central de Cadastros (Finalizado)

Este repositório contém uma landing page modular para cadastro (HTML/CSS/JS), além de scaffolds opcionais para frontend (Vite + React) e backend (FastAPI). O objetivo desta atualização foi limpar arquivos desnecessários, consolidar estilos e preparar o projeto para entrega.

## Estrutura principal

```
landing-page/
├── .github/
├── archive/                # arquivos antigos e movimentados (se aplicável)
├── backend/                # scaffold FastAPI (opcional)
├── frontend/               # scaffold Vite + React (opcional)
├── scr/                    # site estático (HTML/CSS/JS)
└── scripts/                # scripts de conveniência (PowerShell)
```

## Mudanças aplicadas nesta finalização
- Remoção/limpeza de documentação antiga e duplicada.
- Consolidação de CSS modular e centralização de media queries em `scr/css/layouts/responsive.css`.
- Remoção de estilos inline e melhorias básicas de acessibilidade (`label`/`for`, `aria-hidden` quando aplicável).
- Adição de scaffolds para `backend/` (FastAPI) e `frontend/` (Vite + React) e arquivos Docker/Docker Compose para facilitar execução em containers.

> Nota: arquivos de documentação antigos foram removidos. Se precisar restaurá-los, use os comandos Git listados abaixo.

## Como executar (rápido)

Recomendo usar o script de conveniência `scripts/start-dev.ps1` (PowerShell) que inicia os serviços que estiverem configurados no ambiente.

PowerShell (na raiz do repositório):
```powershell
cd 'C:\Users\limaj\Desktop\landing page'
.
\scripts\start-dev.ps1
```

Comandos manuais (alternativa):

Servidor estático (servir `scr/`):
```powershell
cd 'C:\Users\limaj\Desktop\landing page\scr'
python -m http.server 8000
# Acessar: http://localhost:8000/index.html
```

Backend (FastAPI) — se desejar executar localmente:
```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8001
# Acessar: http://localhost:8001/docs
```

Frontend (Vite) — se desejar executar localmente:
```powershell
cd frontend
npm install
npm run dev
# Acessar: http://localhost:5173
```

Docker (opcional):
```powershell
docker compose up --build
# Serviços: static http://localhost:8000, backend http://localhost:8001, frontend http://localhost:5173
```

## Como reverter exclusões (Git)

Se quiser restaurar arquivos removidos antes de fazer push, use:
```powershell
git restore --staged --worktree <paths>
# ou para reverter o commit que removeu arquivos:
git revert <commit_hash>
```

Se já cometeu as remoções e precisa reverter tudo para um commit anterior (cuidado: isto pode descartar commits posteriores):
```powershell
git reset --hard <commit_hash_before_changes>
```

## Testes rápidos após limpeza

- Abra `http://localhost:8000/index.html` e `http://localhost:8000/assents/index.html` para verificar o site estático.
- Teste envio de formulários usando o frontend ou via `curl` apontando para `http://localhost:8001/api/submit` (se backend ativo).

## Próximos passos sugeridos

- Executar auditoria de acessibilidade (Lighthouse / axe) localmente (requer Node + Chrome).
- Opcional: compilar frontend para produção e ajustar Dockerfile para servir arquivos estáticos de forma eficiente.

---

**Última atualização**: 19 de novembro de 2025
