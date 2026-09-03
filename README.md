# 🛡️ Segurança Digital - Guia Completo Contra Golpes Online

Um site educativo, acessível e moderno sobre segurança digital e prevenção de fraudes online.

## 📋 Sobre o Projeto

Este site foi desenvolvido como material educativo para ensinar pessoas a:
- **Identificar** os principais tipos de golpes digitais
- **Proteger-se** contra fraudes online
- **Reconhecer** sinais de alerta em mensagens suspeitas
- **Denunciar** crimes digitais às autoridades competentes

## ✨ Funcionalidades Principais

### 🎙️ Áudio Acessível (Text-to-Speech)
- Botão flutuante que lê todo o conteúdo da página em voz alta
- Suporte completo a português brasileiro
- Atalho de teclado: **Alt + A**
- Ideal para usuários com deficiência visual ou dificuldades de leitura
- Suporta navegadores modernos (Chrome, Firefox, Safari, Edge)

### ♿ Acessibilidade Completa
- Design responsivo para todos os tamanhos de tela
- Suporte a navegação por teclado
- Atributos ARIA para screen readers
- Modo escuro automático baseado nas preferências do sistema
- Cores com alto contraste
- Tipografia clara e legível
- Elementos clicáveis com tamanho mínimo de 44px x 44px

### 📱 Design Responsivo
- **Desktop:** Grade de 3 colunas para cards
- **Tablet:** Grid automático de 2 colunas
- **Mobile:** Layout em coluna única
- Botões e links otimizados para toque

### 🎨 Design Moderno
- Paleta de cores vibrante e profissional
- Animações suaves e não obstruindo
- Gradientes visuais atraentes
- Ícones emoji para melhor compreensão
- Sombras e efeitos de profundidade

## 📁 Estrutura de Arquivos

```
.
├── index.html          # Arquivo principal HTML
├── style.css          # Estilos CSS (1200+ linhas)
├── script.js          # JavaScript com lógica de áudio e interatividade
└── README.md          # Este arquivo
```

## 🚀 Como Usar

### Instalação Rápida

1. **Baixe os arquivos:**
   ```bash
   git clone <url-do-repositorio>
   ```

2. **Abra no navegador:**
   - Duplo clique em `index.html`, OU
   - Abra com um servidor local (recomendado):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (com http-server)
   npx http-server
   ```

3. **Acesse:**
   ```
   http://localhost:8000
   ```

### Funcionalidades Principais

#### 🔊 Ativar Áudio
1. Clique no botão **"🔊 Ativar áudio"** no topo da página
2. Ou pressione **Alt + A** no teclado
3. O site lerá todo o conteúdo em voz alta

#### 📖 Navegar
- Use o **menu de navegação** para pular entre seções
- Ou faça **scroll** tradicional
- Links de âncora levam diretamente para a seção

#### ✅ Checklist Interativo
- Clique nas caixas de seleção para marcar itens
- Texto fica tachado ao marcar
- Útil para aprender sinais de alerta

## 🎓 Conteúdo Educativo

### Seções Disponíveis

1. **Início** - Introdução ao problema de golpes digitais
2. **Tipos de Golpes** - 6 categorias principais:
   - Phishing
   - Falso investimento
   - Falso trabalho remoto
   - Clonagem de cartão
   - Engenharia social
   - Deepfake e vídeos falsificados

3. **Como Identificar** - 8 sinais de alerta:
   - Pressão urgente
   - URLs suspeitas
   - Erros no email
   - Ofertas demais
   - Ameaças
   - Pedido de dados sensíveis
   - Perfil suspeito
   - Contato estranho

4. **Como Se Proteger** - 8 passos práticos:
   - Verificar URLs
   - Contatar empresa diretamente
   - Nunca compartilhar dados
   - Usar autenticação de dois fatores
   - Desconfiar de ofertas
   - Atualizar dispositivos
   - Usar antivírus
   - Sempre ter dúvida

5. **Denunciar** - Passo a passo completo para denuncias

6. **Dicas de Ouro** - 8 recomendações práticas

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Semântica e estrutura
- **CSS3** - Grid, Flexbox, Gradientes, Animações
- **Vanilla JavaScript** - Sem dependências externas
- **Web Speech API** - Leitura em voz alta

### Acessibilidade
- **ARIA (Accessible Rich Internet Applications)**
- **semantic HTML**
- **Atributos role, aria-label, aria-live**
- **Skip links**
- **Focus management**

### Performance
- Arquivo CSS único (sem build)
- JavaScript sem minificação (legível e educativo)
- Imagens em emoji (sem requisições de rede)
- Otimizado para carregamento rápido

## 📊 Compatibilidade

| Navegador | Suporte | Áudio |
|-----------|---------|-------|
| Chrome 90+ | ✅ Total | ✅ Completo |
| Firefox 88+ | ✅ Total | ✅ Completo |
| Safari 14+ | ✅ Total | ✅ Completo |
| Edge 90+ | ✅ Total | ✅ Completo |
| Mobile (iOS) | ✅ Responsivo | ⚠️ Limitado |
| Mobile (Android) | ✅ Responsivo | ✅ Completo |

**Nota:** O áudio em iOS pode estar limitado em alguns navegadores por políticas do sistema operacional.

## ⌨️ Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| Alt + A | Ativar/desativar áudio |
| Tab | Navegar entre elementos |
| Enter | Ativar botões/links |
| Espaço | Clicar em checkboxes |

## 🎨 Personalização

### Alterar Cores
Edite as variáveis CSS em `style.css`:
```css
:root {
    --primary-color: #ff6b6b;      /* Vermelho principal */
    --secondary-color: #4ecdc4;    /* Verde/azul */
    --success-color: #2ecc71;      /* Verde sucesso */
    --warning-color: #f39c12;      /* Laranja aviso */
    --danger-color: #e74c3c;       /* Vermelho perigo */
}
```

### Adicionar Novas Seções
1. Adicione um nova `<section>` em `index.html`
2. Adicione um link no `<nav>`
3. Estilize com as classes CSS existentes

## 📚 Recursos Externos Recomendados

Para saber mais sobre segurança digital:
- [SaferNet](https://www.safernet.org.br) - Centro de denúncias online
- [Polícia Federal](https://www.pf.gov.br) - Denúncias de crimes virtuais
- [CERT.br](https://www.cert.br) - Segurança de redes
- [ESET](https://www.eset.com/br) - Dicas de segurança

## 👨‍💼 Créditos e Atribuição

Desenvolvido como material educativo para conscientização sobre segurança digital.

**Ideal para:**
- Escolas e universidades
- Campanhas de conscientização
- Treinamento corporativo
- Educação comunitária

## 📝 Licença

Este projeto é fornecido como material educativo de livre uso.

## 🐛 Reportar Problemas

Se encontrar algum problema:
1. Verifique se está usando um navegador moderno
2. Limpe o cache do navegador
3. Tente em outro navegador
4. Verifique o console (F12) para mensagens de erro

## 🎯 Próximas Melhorias

- [ ] Adicionar certificado de conclusão
- [ ] Quiz interativo
- [ ] Versão em múltiplos idiomas
- [ ] Integração com sistema de denúncias
- [ ] Estatísticas de engajamento
- [ ] Compartilhamento em redes sociais

## 📞 Contato e Feedback

Este é um projeto educativo. Seu feedback é importante para melhorar a conscientização sobre segurança digital.

---

## 🎓 Para Educadores

Se está usando este material em sala de aula:

1. **Assista o site com seus alunos**
2. **Pause para discussões**
3. **Peça aos alunos para:**
   - Ativar o áudio e ouvir em voz alta
   - Marcar os sinais de alerta no checklist
   - Compartilhar experiências pessoais (seguras)
   - Criar próprios exemplos de golpes

4. **Atividade complementar:**
   - Peça para identificar golpes em emails falsos
   - Role-play de situações de golpe
   - Pesquisa sobre casos reais (com contexto apropriado)

---

**Última atualização:** 2024
**Versão:** 1.0
**Status:** Pronto para produção ✅

```
🛡️ "Conhecimento é a melhor defesa contra golpes digitais" 🛡️
```