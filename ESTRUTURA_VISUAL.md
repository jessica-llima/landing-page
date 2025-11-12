# 🎨 Visualização da Estrutura do Projeto

## Árvore Completa

```
📦 landing page
 ┣ 📄 README.md                    (Documentação principal)
 ┣ 📄 README_CSS.md                (Documentação CSS)
 ┣ 📄 CHECKLIST.md                 (Verificação)
 ┣ 📄 NAVEGACAO.md                 (Navegação)
 ┣ 📄 ESTRUTURA.md                 (Esta estrutura)
 ┣ 📄 package.json                 (Config)
 ┣ 📄 tailwind.config.js           (Tailwind config)
 ┃
 ┣ 📁 scr
 ┃ ┣ 📄 index.html               ⭐ PÁGINA INICIAL
 ┃ ┃ ├─ Título: 🏠 Central de Cadastros
 ┃ ┃ ├─ Links: ✏️ Entrar, 📝 Ir ao Formulário
 ┃ ┃ └─ Destino: assents/index.html
 ┃ ┃
 ┃ ┣ 📁 assents
 ┃ ┃ └─ 📄 index.html            ⭐ PÁGINA DE FORMULÁRIOS
 ┃ ┃    ├─ Título: Central de Cadastros
 ┃ ┃    ├─ Link: 🏠 Início (volta para index.html)
 ┃ ┃    ├─ Seletor: Tipo (Pessoa, Empresa, Ambos)
 ┃ ┃    ├─ Formulário Pessoa
 ┃ ┃    │  ├─ Nome (text)
 ┃ ┃    │  ├─ Email (email)
 ┃ ┃    │  ├─ Senha (password)
 ┃ ┃    │  └─ Botões: Limpar, Salvar
 ┃ ┃    ├─ Formulário Empresa
 ┃ ┃    │  ├─ CNPJ (text)
 ┃ ┃    │  ├─ Razão Social (text)
 ┃ ┃    │  ├─ Telefone (tel)
 ┃ ┃    │  └─ Botões: Limpar, Salvar
 ┃ ┃    └─ Formulário Endereço
 ┃ ┃       ├─ CEP (text)
 ┃ ┃       ├─ Rua (text)
 ┃ ┃       ├─ Número (text)
 ┃ ┃       ├─ Cidade (text)
 ┃ ┃       ├─ Estado (select)
 ┃ ┃       └─ Botões: Limpar, Salvar
 ┃ ┃
 ┃ ┣ 📁 css
 ┃ ┃ ┣ 📄 main.css               ⭐ ENTRADA CSS (importa tudo)
 ┃ ┃ ┃
 ┃ ┃ ┣ 📁 base
 ┃ ┃ ┃ ┣ 📄 variables.css        (Variáveis CSS)
 ┃ ┃ ┃ ┃ ├─ --bg, --card, --accent, --muted
 ┃ ┃ ┃ ┃ └─ --radius, --gap, font-family
 ┃ ┃ ┃ ┗ 📄 reset.css            (Reset global)
 ┃ ┃ ┃   ├─ html, body
 ┃ ┃ ┃   └─ box-sizing
 ┃ ┃ ┃
 ┃ ┃ ┣ 📁 components
 ┃ ┃ ┃ ┣ 📄 button.css           (Botões)
 ┃ ┃ ┃ ┃ ├─ .btn-primary
 ┃ ┃ ┃ ┃ ├─ .btn-ghost
 ┃ ┃ ┃ ┃ └─ .btn-home
 ┃ ┃ ┃ ┣ 📄 input.css            (Inputs/Selects)
 ┃ ┃ ┃ ┃ ├─ input[type=...]
 ┃ ┃ ┃ ┃ └─ select + focus states
 ┃ ┃ ┃ ┣ 📄 card.css             (Cards)
 ┃ ┃ ┃ ┃ ├─ .card
 ┃ ┃ ┃ ┃ ├─ .card h2
 ┃ ┃ ┃ ┃ └─ .card:hover
 ┃ ┃ ┃ ┗ 📄 form.css             (Formulários)
 ┃ ┃ ┃   ├─ form, .row, .field
 ┃ ┃ ┃   ├─ .actions, .compact
 ┃ ┃ ┃   └─ .helper + media queries
 ┃ ┃ ┃
 ┃ ┃ ┗ 📁 layouts
 ┃ ┃   ┣ 📄 header.css            (Header)
 ┃ ┃   ┃ ├─ header
 ┃ ┃   ┃ ├─ .header-actions
 ┃ ┃   ┃ └─ .btn-home:hover
 ┃ ┃   ┗ 📄 grid.css              (Grids)
 ┃ ┃     ├─ .wrap, .grid
 ┃ ┃     ├─ .cards-grid
 ┃ ┃     └─ media queries (responsive)
 ┃ ┃
 ┃ ┗ 📁 js
 ┃   └─ 📄 main.js                ⭐ ENTRADA JS
 ┃      ├─ handleSubmit()          (Submit forms)
 ┃      ├─ resetFormById()         (Reset forms)
 ┃      ├─ updateVisibility()      (Tipo selector)
 ┃      └─ initEventListeners()    (Inicia tudo no DOMLoaded)
 ┃
 ┗ 📁 .vscode
   └─ Configurações VS Code

```

## 📊 Camadas do Projeto

```
┌─────────────────────────────────────────────────┐
│           HTML (Semântica)                      │
│  ┌──────────────────────────────────────────┐  │
│  │  index.html + assents/index.html         │  │
│  │  - Estrutura limpa                       │  │
│  │  - IDs únicos                            │  │
│  │  - Sem handlers inline                   │  │
│  └──────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│           CSS (Estilo)                          │
│  ┌──────────────────────────────────────────┐  │
│  │  main.css → importa 8 arquivos          │  │
│  │  - base/ (variáveis + reset)            │  │
│  │  - components/ (4 componentes)          │  │
│  │  - layouts/ (2 layouts)                 │  │
│  │  - Modular e reutilizável               │  │
│  └──────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│           JavaScript (Interatividade)           │
│  ┌──────────────────────────────────────────┐  │
│  │  main.js                                 │  │
│  │  - Event listeners via DOMContentLoaded  │  │
│  │  - Submit, Reset, Scroll, Visibilidade  │  │
│  │  - Sem dependências externas             │  │
│  └──────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

## 🔄 Fluxo de Requisição

```
1. User abre http://localhost:8000/scr/index.html
   ↓
2. Browser requisita index.html
   ↓
3. index.html carrega:
   - main.css (que importa todos os CSS)
   - HTML semântico
   ↓
4. User clica em "✏️ Entrar"
   ↓
5. Browser requisita assents/index.html
   ↓
6. assents/index.html carrega:
   - main.css (todos os CSS)
   - main.js (com event listeners)
   ↓
7. JavaScript inicia:
   - DOMContentLoaded → initEventListeners()
   - Listeners para: submit, click (reset, scroll), change (tipo)
   ↓
8. User interage:
   - Preenche formulário
   - Clica "Salvar" → alert + console.log
   - Clica "Limpar" → reset
   - Muda seletor "Tipo" → mostra/oculta cards
   - Clica "🏠 Início" → volta para index.html
```

## 🎯 Pontos Importantes

| Aspecto | Implementação |
|---------|---------------|
| **HTML** | 2 arquivos (index + assents/index) |
| **CSS** | 9 arquivos modulares + 1 main.css |
| **JS** | 1 arquivo (main.js) com todos listeners |
| **Navegação** | Links relativos (offline-friendly) |
| **Responsividade** | Media queries em base (mobile: 480px) |
| **Acessibilidade** | Semântica HTML5, labels, aria-* |
| **Performance** | Sem dependências externas |

---

Gerado em: 12 de novembro de 2025  
Visualização: ESTRUTURA_VISUAL.md
