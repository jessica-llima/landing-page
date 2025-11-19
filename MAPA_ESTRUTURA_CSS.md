# 🗺️ Mapa de Estrutura CSS - Responsividade Centralizada

## Fluxo de Importação

```
┌─────────────────────────────────────────────────────────────────┐
│                      scr/index.html                             │
│                   (ou scr/assents/index.html)                   │
│                                                                 │
│              <link rel="stylesheet" href="css/main.css">        │
└──────────────────────────────┬──────────────────────────────────┘
                               │
                               ▼
        ┌──────────────────────────────────────────────────┐
        │         scr/css/main.css                         │
        │  (Entry point - importa todos os arquivos)       │
        │                                                  │
        │  1️⃣  @import url('./base/variables.css');        │
        │  2️⃣  @import url('./base/reset.css');           │
        │  3️⃣  @import url('./components/button.css');    │
        │  4️⃣  @import url('./components/input.css');     │
        │  5️⃣  @import url('./components/card.css');      │
        │  6️⃣  @import url('./components/form.css');      │
        │  7️⃣  @import url('./layouts/header.css');       │
        │  8️⃣  @import url('./layouts/grid.css');         │
        │  9️⃣  @import url('./layouts/welcome.css');      │
        │  🔟 @import url('./layouts/cards-display.css'); │
        │  1️⃣1️⃣ @import url('./layouts/responsive.css');  │
        │                                                  │
        └──────────────────────────────────────────────────┘
```

## Hierarquia de Arquivos CSS

```
📁 scr/css/
│
├─ 📄 main.css ⭐ ENTRY POINT
│
├─ 📁 base/
│  ├─ 📄 variables.css
│  │  └─ Variáveis, cores, tipografia, breakpoints
│  │
│  └─ 📄 reset.css
│     └─ Reset global, normalização
│
├─ 📁 components/
│  ├─ 📄 button.css (DESKTOP-FIRST ✅)
│  ├─ 📄 input.css (DESKTOP-FIRST ✅)
│  ├─ 📄 card.css (DESKTOP-FIRST ✅)
│  └─ 📄 form.css (DESKTOP-FIRST ✅)
│
└─ 📁 layouts/
   ├─ 📄 header.css (DESKTOP-FIRST ✅)
   ├─ 📄 grid.css (DESKTOP-FIRST ✅)
   ├─ 📄 welcome.css (DESKTOP-FIRST ✅)
   ├─ 📄 cards-display.css (DESKTOP-FIRST ✅)
   │
   └─ 📱 responsive.css ⭐ CENTRALIZADO
      ├─ @media (max-width: 480px)        [MOBILE]
      ├─ @media (481px - 880px)          [TABLET]
      ├─ @media (881px - 1099px)         [DESKTOP MÉD]
      ├─ @media (min-width: 1100px)      [LARGE DESKTOP]
      ├─ @media (max-width: 360px)       [ULTRA SMALL]
      └─ @media print                    [PRINT]
```

## Fluxo de Cascade CSS

```
┌─────────────────────────────────────────────────────────────┐
│ 1. VARIÁVEIS GLOBAIS (variables.css)                       │
│    └─ --breakpoint-mobile, --gap, --color-accent, etc.    │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. RESET GLOBAL (reset.css)                               │
│    └─ * { box-sizing: border-box; }                       │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. COMPONENTES - DESKTOP FIRST (1100px+)                  │
│    ├─ button.css → .btn-primary, .btn-ghost               │
│    ├─ input.css → input, select styles                    │
│    ├─ card.css → .card, .card:hover                       │
│    └─ form.css → .field, .row, .actions                   │
│                                                           │
│    ⚠️ SEM media queries aqui!                             │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. LAYOUTS - DESKTOP FIRST (1100px+)                      │
│    ├─ header.css → header, .header-actions                │
│    ├─ grid.css → .grid, .cards-grid                       │
│    ├─ welcome.css → .welcome-container                    │
│    └─ cards-display.css → .card-button, .card-enlarged    │
│                                                           │
│    ⚠️ SEM media queries aqui!                             │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. MEDIA QUERIES CENTRALIZADAS (responsive.css)           │
│                                                           │
│    MOBILE (até 480px)                                    │
│    ├─ Override: .grid { grid-template-columns: 1fr; }   │
│    ├─ Override: header { flex-direction: column; }       │
│    └─ ...mais 200+ linhas de overrides                   │
│                                                           │
│    TABLET (481px - 880px)                               │
│    ├─ Override: .cards-grid { repeat(2, 1fr); }        │
│    ├─ Override: .welcome-header h1 { font-size: 2rem; }│
│    └─ ...mais 100+ linhas de overrides                  │
│                                                           │
│    ... e assim por diante                               │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
                    ✅ PÁGINA RENDERIZADA
```

## Estratégia: Desktop-First com Media Queries Centralizadas

```
DESKTOP (1100px+)
┌─────────────────────────────────────────────────┐
│ .grid {                                         │
│   grid-template-columns: 1.1fr 1fr;            │
│   gap: 18px;                                    │
│ }                                               │
└─────────────────────────────────────────────────┘
                        │
                        │ @media (max-width: 1099px)
                        ▼
DESKTOP MÉDIO (881px - 1099px)
┌─────────────────────────────────────────────────┐
│ .grid {                                         │
│   grid-template-columns: 1fr;  ← OVERRIDE      │
│ }                                               │
└─────────────────────────────────────────────────┘
                        │
                        │ @media (max-width: 880px)
                        ▼
TABLET (481px - 880px)
┌─────────────────────────────────────────────────┐
│ .grid {                                         │
│   grid-template-columns: 1fr;  ← Mantém       │
│   gap: 12px;  ← OVERRIDE                        │
│ }                                               │
└─────────────────────────────────────────────────┘
                        │
                        │ @media (max-width: 480px)
                        ▼
MOBILE (até 480px)
┌─────────────────────────────────────────────────┐
│ .grid {                                         │
│   grid-template-columns: 1fr;  ← Mantém       │
│   gap: 8px;  ← OVERRIDE                         │
│ }                                               │
└─────────────────────────────────────────────────┘
```

## Cascata de Responsividade

```
Estrutura de Seletores em responsive.css

@media (min-width: 481px) and (max-width: 880px) {
  ↑                                               ↑
  Liga em 481px (tablet small)        Desliga em 880px
}

@media (min-width: 881px) and (max-width: 1099px) {
  ↑                                                ↑
  Liga em 881px (desktop médio)        Desliga em 1099px
}

@media (min-width: 1100px) {
  ↑
  Liga em 1100px (large desktop) e permanece ligado
}

@media (max-width: 480px) {
           ↑
       Desliga em 480px (mobile pequeno)
}

@media (max-width: 360px) {
           ↑
       Desliga em 360px (ultra mobile)
}
```

## Exemplo Prático: Estilo de Botão

```
📄 components/button.css (DESKTOP-FIRST)
┌──────────────────────────────────────────┐
│ .btn-primary {                           │
│   padding: 14px 32px;  ← Desktop        │
│   font-size: 1.1rem;   ← Desktop        │
│   width: auto;         ← Desktop        │
│ }                                        │
└──────────────────────────────────────────┘

📱 layouts/responsive.css
┌──────────────────────────────────────────┐
│ @media (max-width: 880px) {             │
│   .btn-primary {                         │
│     padding: 12px 24px;  ← OVERRIDE    │
│     font-size: 0.95rem;  ← OVERRIDE    │
│   }                                      │
│ }                                        │
│                                          │
│ @media (max-width: 480px) {             │
│   .btn-primary {                         │
│     padding: 10px 16px;  ← OVERRIDE    │
│     font-size: 0.85rem;  ← OVERRIDE    │
│     width: 100%;         ← OVERRIDE    │
│   }                                      │
│ }                                        │
└──────────────────────────────────────────┘
```

## Ordem de Prioridade (Cascade)

```
1️⃣  Estilos base (1100px+) ← DESKTOP-FIRST
    └─ Tem menor especificidade

2️⃣  Media queries em responsive.css
    └─ Vão sendo aplicadas conforme a resolução diminui
    
3️⃣  Seletores mais específicos em responsive.css
    └─ Têm maior especificidade (aplicados por último)
    
⚠️  Importante: Respeitar a ordem no arquivo responsive.css
    ├─ Tablet primeiro (481px - 880px)
    ├─ Depois Desktop (881px - 1099px)
    ├─ Depois Mobile (até 480px)
    └─ Por fim Ultra Small (até 360px)
```

## Localização Rápida de Media Queries

```
Precisa alterar responsividade de:

✓ Header?
  └─ Procure por "/* Headers */" em responsive.css

✓ Grid/Layout?
  └─ Procure por "/* Grid */" em responsive.css

✓ Welcome page?
  └─ Procure por "/* Welcome Page */" em responsive.css

✓ Cards?
  └─ Procure por "/* Cards Display */" em responsive.css

✓ Um breakpoint específico?
  └─ Procure por "/* TABLET */", "/* MOBILE */", etc.
```

---

**Mapa criado em**: 19 de novembro de 2025
**Versão**: 1.0
**Status**: ✅ Documentação Completa
