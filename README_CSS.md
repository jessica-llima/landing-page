# Estrutura de Pastas CSS - Landing Page

## Organização Modular

Os estilos CSS foram organizados em uma estrutura modular para facilitar manutenção e reutilização:

### Pastas e Arquivos

```
scr/css/
├── base/
│   ├── variables.css      # Variáveis CSS e custom properties (:root)
│   └── reset.css          # Estilos de reset e normalização global
├── components/
│   ├── button.css         # Estilos de botões (.btn-primary, .btn-ghost)
│   ├── input.css          # Estilos de inputs e selects
│   ├── card.css           # Estilos de cards (.card)
│   └── form.css           # Estilos de formulários (.row, .field, .actions)
├── layouts/
│   ├── header.css         # Estilos do header e header-actions
│   └── grid.css           # Estilos de grid e layout (.wrap, .grid, .cards-grid)
├── main.css               # Arquivo principal que importa todos os outros
└── styles.css             # Arquivo legado (opcional - pode ser removido)
```

### Como Importar

O arquivo `main.css` importa todos os arquivos modulares em ordem:

```css
@import url('./base/variables.css');
@import url('./base/reset.css');
@import url('./components/button.css');
@import url('./components/input.css');
@import url('./components/card.css');
@import url('./components/form.css');
@import url('./layouts/header.css');
@import url('./layouts/grid.css');
```

### Nos HTMLs

Os arquivos HTML importam apenas `main.css`:

- `scr/index.html`: `<link rel="stylesheet" href="css/main.css">`
- `scr/assents/index.html`: `<link rel="stylesheet" href="../css/main.css">`

## Benefícios da Estrutura Modular

- **Manutenibilidade**: Cada arquivo cuida de um aspecto específico
- **Reusabilidade**: Componentes podem ser copiados para outros projetos
- **Escalabilidade**: Fácil adicionar novos componentes ou layouts
- **Legibilidade**: Código mais organizado e fácil de navegar
- **Performance**: Facilita implementar CSS crítico ou lazy loading futuro

## Adicionar Novos Estilos

1. **Novos componentes**: Crie um arquivo em `components/` (ex: `components/modal.css`)
2. **Novos layouts**: Crie um arquivo em `layouts/` (ex: `layouts/sidebar.css`)
3. **Novas variáveis**: Adicione em `base/variables.css`
4. **Importar no main.css**: Adicione a importação em `main.css`

---

*Estrutura criada em 12 de novembro de 2025*
