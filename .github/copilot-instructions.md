# Copilot Instructions - Landing Page

Uma landing page de cadastro modular sem dependências externas, construída com HTML/CSS/JS puro.

## Arquitetura

### Estrutura de Pastas
```
scr/
├── index.html              # Página inicial (welcome)
├── assents/index.html      # Página de formulários (cadastros)
├── js/
│   └── main.js             # Event listeners sem handlers inline
└── css/
    ├── main.css            # Entry point - importa todos os arquivos
    ├── base/               # Estilos globais e variáveis
    │   ├── variables.css   # CSS custom properties (:root)
    │   └── reset.css       # Normalização global
    ├── components/         # Componentes reutilizáveis
    │   ├── button.css
    │   ├── input.css
    │   ├── card.css
    │   └── form.css
    └── layouts/            # Estruturas de página
        ├── header.css
        ├── grid.css
        ├── welcome.css
        └── cards-display.css
```

### Fluxo de Dados
1. **index.html** → Links para `assents/index.html` e `cards.html`
2. **assents/index.html** → Contém 3 cards (Pessoa, Empresa, Endereço) com seletor de tipo
3. **JavaScript** → Listener global em `DOMContentLoaded` para:
   - Submissão de formulários (valida + console.log + alert)
   - Reset via botão com atributo `data-reset`
   - Visibilidade dinâmica de cards com `#tipo-select`

## Convenções do Projeto

### JavaScript
- **Sem handlers inline**: Nenhum `onclick`, `onsubmit` direto no HTML
- **Data attributes**: Use `data-reset="form-id"` para resetar formulários
- **ID naming**: Formulários usam `id="form-{tipo}"` (ex: `form-pessoa`, `form-empresa`)
- **Estratégia de dados**: FormData API → JSON object → console.log/alert (preparado para fetch futuro)

Exemplo de submissão:
```javascript
const form = e.target;
const data = Object.fromEntries(new FormData(form).entries());
console.log('submissão:', type, data);
```

### CSS
- **Modular**: Cada arquivo importado em `main.css` em ordem específica
- **Variáveis globais** em `base/variables.css`:
  - `--bg`, `--card`, `--accent`, `--muted`, `--radius`, `--gap`
  - Breakpoints: `--breakpoint-mobile` (480px), `--breakpoint-tablet` (880px), `--breakpoint-desktop` (1100px)
- **Componentes**: Classes de utilidade simples (ex: `.btn-primary`, `.card`, `.field`)
- **Sem Tailwind**: CSS puro com custom properties
- **Responsividade**: Desktop-first, centralizada em `layouts/responsive.css`
  - Todos os estilos base são para desktop (1100px+)
  - Nenhum media query nos arquivos de componentes/layouts
  - Todos os breakpoints em um arquivo: `responsive.css` (organizados por tamanho)

Exemplo de import em HTML:
```html
<!-- Main entry point -->
<link rel="stylesheet" href="css/main.css">
```

### HTML
- **Semântico**: `<article>`, `<form>`, `<label>`, `<input>` com atributos corretos
- **Accessibility**: `id` + `for` em labels, `aria-label` em selects dinâmicos
- **Formulários estruturados**:
  ```html
  <article class="card" aria-labelledby="tipo-title">
    <h2 id="tipo-title">Título</h2>
    <form id="form-tipo">
      <div class="row">
        <label for="campo">Label</label>
        <div class="field">
          <input id="campo" name="campo" type="text" required>
        </div>
      </div>
      <div class="actions">
        <button type="button" class="btn-ghost" data-reset="form-tipo">Limpar</button>
        <button type="submit" class="btn-primary">Salvar</button>
      </div>
    </form>
  </article>
  ```

## Workflow de Desenvolvimento

### Iniciar servidor local
```powershell
cd 'C:\Users\limaj\Desktop\landing page'
python -m http.server 8000
```
Acesse: http://localhost:8000/scr/index.html

### Adicionar novo formulário
1. Crie um novo `<article class="card">` em `assents/index.html`
2. Atribua `id="card-{tipo}"` e `id="form-{tipo}"`
3. Adicione opção em `#tipo-select`
4. JavaScript detecta automaticamente via `form[id^="form-"]` e `#card-{tipo}`

### Adicionar novo estilo de componente
1. Crie arquivo em `css/components/` (ex: `components/modal.css`)
2. Adicione `@import url('./components/modal.css');` em `main.css`
3. Use variáveis de `base/variables.css` para cores e espaçamentos
4. **IMPORTANTE**: Escreva estilos para DESKTOP PRIMEIRO (sem media queries)
5. Adicione media queries para outros breakpoints em `layouts/responsive.css`

### Adicionar responsividade
1. Escreva estilos desktop no arquivo do componente/layout
2. Abra `layouts/responsive.css`
3. Localize o breakpoint desejado (TABLET, MOBILE, etc)
4. Adicione overrides específicas daquele tamanho

## Padrões Específicos

### Seletor de Tipo
- Controla visibilidade via ID `tipo-select`
- Valores: `ambos`, `pessoa`, `empresa`, `endereco`
- Valor padrão: `ambos` mostra Person + Empresa

### Validação
- HTML5 built-in: `required`, `type="email"`, `minlength`, `pattern`
- Sem biblioteca de validação extra

### Navegação
- Link "Inicio" em `assents/index.html` retorna a `../index.html`
- Botões "Entrar" na welcome page apontam para `assents/index.html` ou `cards.html`

## Arquivos Críticos para Entender o Projeto

- **`README.md`** - Visão geral e instruções de início rápido
- **`README_CSS.md`** - Explicação da arquitetura CSS modular
- **`scr/css/main.css`** - Entry point de estilos
- **`scr/js/main.js`** - Toda a lógica JavaScript
- **`scr/index.html`** - Estrutura da página inicial
- **`scr/assents/index.html`** - Estrutura dos formulários

## Próximas Melhorias Sugeridas

- Integração com backend via `fetch()` em `handleSubmit()`
- Validação de CNPJ e CPF com bibliotecas específicas
- Sistema de mensagens de sucesso/erro
- Persistência localStorage para rascunhos
