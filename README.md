# Forge Tech - Website para Desenvolvimento de Soluções Digitais

Este é um site institucional criado com Next.js para a empresa fictícia Forge Tech, que oferece serviços de desenvolvimento web, aplicativos, sistemas, inteligência artificial, automação e soluções sob medida.

## 📝 Sobre o Projeto

Este projeto foi criado como parte do meu aprendizado em Next.js e React. Ele demonstra:

- Criação de páginas e layouts com Next.js 15
- Uso de componentes reutilizáveis
- Integração com WhatsApp para contato direto
- Estrutura de projeto organizada
- Estilização com CSS Modules ou similar (verificar arquivos)

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) v15.0.0
- [React](https://reactjs.org/) v19.0.0
- [React DOM](https://reactjs.org/docs/react-dom.html) v19.0.0

## ▶️ Como Executar o Projeto

1. Clone este repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura do Projeto

```
forge-tech/
├── app/                 # Páginas e layouts (Next.js App Router)
│   ├── layout.jsx       # Layout principal
│   ├── page.jsx         # Página inicial
│   └── whatsapp/        # Página de redirecionamento para WhatsApp
├── components/          # Componentes reutilizáveis
│   ├── Hero.jsx         # Seção de hero
│   ├── Mark.jsx         # Logo/marca
│   └── WaRedirect.jsx   # Página de redirecionamento para WhatsApp
├── lib/                 # Funções e configurações auxiliares
│   └── whatsapp.js      # Configurações do WhatsApp
├── scripts/             # Ferramentas de manutenção
│   └── shot-portfolio.js # Captura as telas dos sites do portfolio
├── public/              # Arquivos estáticos (imagens, etc.)
│   └── img/             # Imagens dos projetos
├── .next/               # Build do Next.js (gerado automaticamente)
├── node_modules/        # Dependências do npm
├── package.json         # Dependências e scripts
├── package-lock.json    # Versões travadas das dependências
└── README.md            # Este arquivo
```

## 🔧 Configuração do WhatsApp

As configurações do WhatsApp estão em `lib/whatsapp.js`:
```javascript
export const WHATSAPP_NUMBER = "5511960473833"; // Número no formato DDI+DDD+Número
export const WHATSAPP_MESSAGE = "Oi! Vi o site da Forge Tech e quero um orçamento.";
```

Para personalizar:
1. Edite o número do WhatsApp (mantendo apenas dígitos)
2. Edite a mensagem inicial que será enviada

## 🎯 Funcionalidades

- Página inicial com seções de serviços, projetos, processo e chamada para ação
- Navegação fixa com links para as seções
- Integração com WhatsApp para contato direto
- Página de redirecionamento com animação enquanto abre o WhatsApp
- Design responsivo

## 📚 Aprendizados

Como desenvolvedor jr. em Next.js, este projeto me ajudou a praticar:
- Estrutura de projetos com Next.js App Router
- Criação de componentes reutilizáveis
- Manipulação de rotas e navegação
- Trabalho com variáveis de ambiente e configurações
- Integração com serviços externos (WhatsApp API básica)
- Boas práticas de organização de código

## ⚠️ Observações Importantes

- Este é um projeto de aprendizado e pode conter melhorias futuras
- O número do WhatsApp atualmente é um exemplo - substitua pelo seu próprio número em produção
- As imagens em `/public/img/` são telas reais dos sites do portfolio, geradas por `scripts/shot-portfolio.js`
- O projeto está configurado como privado no package.json (typical for learning projects)

## 🤝 Contribuindo

Este é um projeto pessoal de aprendizado, portanto não aceito contribuições externas no momento. No entanto, sinta-se à vontade para usar este código como referência ou inspiração para seus próprios projetos.

---

*Desenvolvido como parte do meu jornada de aprendizado em Next.js e desenvolvimento web.*