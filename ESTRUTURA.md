# 📊 Estrutura do Projeto - Landing Page

## 🏗️ Estrutura Completa

```
landing page/
│
├── 📄 README.md                 # Documentação principal do projeto
├── 📄 README_CSS.md             # Documentação da estrutura CSS modular
├── 📄 CHECKLIST.md              # Checklist de verificação
├── 📄 NAVEGACAO.md              # Documentação de navegação interna
├── 📄 package.json              # Configuração do projeto
├── 📄 tailwind.config.js        # Configuração Tailwind (se usado)
│
├── 📁 scr/                      # Pasta principal do projeto
│   │
│   ├── 📄 index.html            # ⭐ Página inicial (abertura)
│   │   └── Links para: assents/index.html
│   │   └── Botões: ✏️ Entrar, 📝 Ir ao formulário
│   │
│   ├── 📁 assents/
│   │   └── 📄 index.html        # 📋 Página de formulários
│   │       ├── Link: 🏠 Início (retorna para index.html)
│   │       ├── Formulário Pessoa (Nome, Email, Senha)
│   │       ├── Formulário Empresa (CNPJ, Razão Social, Telefone)
│   │       └── Formulário Endereço (CEP, Rua, Número, Cidade, Estado)
│   │
│   ├── 📁 css/                  # Estilos CSS modulares
│   │   │
│   │   ├── 📄 main.css          # ⭐ Arquivo principal (importa todos)
│   │   │   └── Importa: base/* + components/* + layouts/*
│   │   │
│   │   ├── 📁 base/             # Estilos globais
│   │   │   ├── 📄 variables.css # Variáveis CSS (:root)
│   │   │   │   └── --bg, --card, --accent, --muted, --radius, --gap
│   │   │   │
│   │   │   └── 📄 reset.css     # Reset e normalização
│   │   │       └── html, body, box-sizing
│   │   │
│   │   ├── 📁 components/       # Componentes reutilizáveis
│   │   │   ├── 📄 button.css    # Estilos de botões
│   │   │   │   └── .btn-primary, .btn-ghost, .btn-home
│   │   │   │
│   │   │   ├── 📄 input.css     # Estilos de inputs/selects
│   │   │   │   └── input, select, focus states
│   │   │   │
│   │   │   ├── 📄 card.css      # Estilos de cards
│   │   │   │   └── .card, .card h2, .card:hover
│   │   │   │
│   │   │   └── 📄 form.css      # Estilos de formulários
│   │   │       └── .row, .field, .actions, .compact, .helper
│   │   │
│   │   └── 📁 layouts/          # Layouts e estruturas
│   │       ├── 📄 header.css    # Header e navegação
│   │       │   └── header, .header-actions, .btn-home
│   │       │
│   │       └── 📄 grid.css      # Grids responsivos
│   │           └── .wrap, .grid, .cards-grid, media queries
│   │
│   ├── 📁 js/                   # JavaScript
│   │   └── 📄 main.js           # ⭐ Script principal
│   │       ├── handleSubmit()   # Submissão de formulários
│   │       ├── resetFormById()  # Reset de formulários
│   │       ├── updateVisibility() # Controle de visibilidade tipo
│   │       └── initEventListeners() # Liga todos os listeners
│   │
│   └── 📁 dist/                 # Pasta de compilação (build)
│       └── (gerada automaticamente)
│
└── 📁 .vscode/                  # Configuração VS Code
    └── launch.json, settings.json, etc.

```

## 📋 Resumo de Arquivos

### HTML (2 arquivos)
| Arquivo | Descrição | Função |
|---------|-----------|--------|
| `scr/index.html` | Página inicial | Bem-vindo, links para formulários |
| `scr/assents/index.html` | Página de formulários | Cadastros (Pessoa, Empresa, Endereço) |

### CSS (9 arquivos)
| Arquivo | Linhas | Descrição |
|---------|--------|-----------|
| `main.css` | ~20 | Importador de todos os CSS |
| `base/variables.css` | ~10 | Variáveis (:root) |
| `base/reset.css` | ~10 | Reset global |
| `components/button.css` | ~30 | Botões |
| `components/input.css` | ~20 | Inputs/Selects |
| `components/card.css` | ~20 | Cards |
| `components/form.css` | ~70 | Formulários |
| `layouts/header.css` | ~50 | Header |
| `layouts/grid.css` | ~50 | Grids |

### JavaScript (1 arquivo)
| Arquivo | Linhas | Descrição |
|---------|--------|-----------|
| `js/main.js` | ~67 | Event listeners, lógica |

### Documentação (4 arquivos)
| Arquivo | Descrição |
|---------|-----------|
| `README.md` | Documentação geral |
| `README_CSS.md` | Documentação CSS modular |
| `CHECKLIST.md` | Checklist de verificação |
| `NAVEGACAO.md` | Documentação de navegação |

## 🔗 Fluxo de Navegação

```
┌────────────────────────────┐
│    Página Inicial           │
│  (scr/index.html)           │
│                             │
│  Header: 🏠 Central         │
│  Body: Bem-vindo            │
│  Botões: ✏️ Entrar          │
│          📝 Ir ao Form      │
└────────────────────────────┘
        ↓ (href=assents/)
┌────────────────────────────┐
│    Formulários              │
│ (scr/assents/index.html)    │
│                             │
│  Header: 🏠 Início          │
│  Header: Tipo Selector      │
│  Body: 3 Formulários        │
│  - Pessoa                   │
│  - Empresa                  │
│  - Endereço                 │
└────────────────────────────┘
        ↑ (href=../index.html)
        └─ Link: 🏠 Início
```

## 🎯 Dependências de Arquivo

### HTML
```
index.html
├── ../css/main.css
├── ../css/base/variables.css
├── ../css/base/reset.css
├── ../css/components/button.css
├── ../css/components/input.css
├── ../css/components/card.css
├── ../css/components/form.css
├── ../css/layouts/header.css
├── ../css/layouts/grid.css
└── ../js/main.js

assents/index.html
├── ../css/main.css (e todas acima)
└── ../js/main.js
```

## 📊 Estatísticas

- **Total de Arquivos**: 21
- **Arquivos HTML**: 2
- **Arquivos CSS**: 9
- **Arquivos JS**: 1
- **Arquivos de Documentação**: 4
- **Total de Linhas de Código**: ~400+ (sem docs)

## 🎨 Variáveis CSS Disponíveis

```css
:root {
    --bg: #f5f7fb;              /* Fundo principal */
    --card: #2bf707;            /* Cor de cards */
    --accent: #bfc1c5;          /* Cor de acentuação */
    --muted: #6b7280;           /* Cor de texto secundário */
    --radius: 10px;             /* Border radius padrão */
    --gap: 18px;                /* Espaçamento padrão */
}
```

## 🚀 Como Iniciar

```powershell
# 1. Navegar até o projeto
cd 'C:\Users\limaj\Desktop\landing page'

# 2. Iniciar servidor
python -m http.server 8000

# 3. Abrir no navegador
# - Inicial: http://localhost:8000/scr/index.html
# - Formulários: http://localhost:8000/scr/assents/index.html
```

---

**Estrutura Criada**: 12 de novembro de 2025  
**Status**: ✅ Completo e Funcional  
**Pronto para**: 🎨 Estilização personalizada
