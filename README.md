# Landing Page - Central de Cadastros

Projeto de página de cadastro com HTML modular, CSS organizado e JavaScript puro (sem dependências externas).

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

## 🚀 Como Usar

### 1. Iniciar o Servidor Local

No PowerShell, na pasta do projeto:

```powershell
cd 'C:\Users\limaj\Desktop\landing page'
python -m http.server 8000
```

### 2. Abrir no Navegador

- **Página Inicial**: http://localhost:8000/scr/index.html
- **Formulários**: http://localhost:8000/scr/assents/index.html

## ✨ Funcionalidades

### Página Inicial (`scr/index.html`)
- Bem-vindo com descrição do projeto
- Botões para entrar nos formulários
- Dica sobre o seletor de tipo

### Página de Cadastros (`scr/assents/index.html`)
- **Seletor de Tipo**: Alterna entre Pessoa, Empresa ou Ambos
- **Formulário Pessoa**: Nome, Email, Senha
- **Formulário Empresa**: CNPJ, Razão Social, Telefone
- **Formulário Endereço**: CEP, Rua, Número, Cidade, Estado
- **Botões de Ação**: Limpar (reset) e Salvar
- **Navegação**: Link "Início" para voltar à página inicial

## 🎨 Estrutura CSS Modular

Os estilos estão organizados em:

- **base/** - Variáveis e reset global
- **components/** - Componentes reutilizáveis (button, input, card, form)
- **layouts/** - Layouts e estruturas (header, grid)

Veja `README_CSS.md` para mais detalhes.

## 💻 JavaScript (Sem Dependências)

O arquivo `scr/js/main.js` implementa:

- Submissão de formulários (com console.log + alert)
- Reset de formulários via botão "Limpar"
- Scroll suave com botão "Ir ao formulário"
- Visibilidade dinâmica de cards (seletor Pessoa/Empresa)
- Todos os event listeners ligados via `DOMContentLoaded`

**Sem atributos inline**: `onsubmit`, `onclick` foram removidos e substituídos por listeners JavaScript.

## 📱 Responsividade

A página é responsiva para:
- Desktop (880px+)
- Tablet (480px - 880px)
- Mobile (até 480px)

## 🔄 Histórico de Mudanças

1. ✅ Separação de HTML/CSS/JS (sem inline handlers)
2. ✅ Seletor de tipo (Pessoa/Empresa/Ambos)
3. ✅ Página inicial com navegação
4. ✅ Organização CSS modular
5. ✅ Remoção de `styles.css` legado

## 📝 Próximos Passos (Sugestões)

- Integrar envio via fetch (POST para backend)
- Adicionar validação de formulário
- Salvar dados no localStorage
- Adicionar animações com CSS
- Criar temas (dark mode)
- Adicionar testes automatizados

---

**Criado em**: 12 de novembro de 2025  
**Status**: ✅ Funcional e otimizado
