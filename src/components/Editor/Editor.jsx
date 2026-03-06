import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Toaster, toast } from 'react-hot-toast';
import './styles.css';

const TABS = [
  { id: 'sobre-mim', label: 'sobre_mim.md', icon: 'md' },
  { id: 'experiencia', label: 'experiencia.md', icon: 'md' },
  { id: 'projetos', label: 'projetos.md', icon: 'md' },
];

const CONTENT = {
  'sobre-mim': {
    title: 'Sobre mim',
    markdown: `> Sobre mim

- 🌎 Sou de Fernandópolis, São Paulo, Brasil
- 💻 Trabalho como desenvolvedor de software desde 2022
- 🎓 Atualmente cursando Ensino Superior em Sistemas para Internet
- ☕️ Amo café!
`,
  },
  'experiencia': {
    title: 'Experiência profissional',
    markdown: `> Experiência profissional

- 🏢 **[Blue Ape](https://blueape.dev/) — Full stack developer**  (2026 - presente)
  - Desenvolvimento de aplicativos web e mobile

- 🏢 **Ascont Sistemas e Web** — Estágiario e Desenvolvedor de Software Junior (2023 - 2025)
  - Desenvolvimento de aplicativos desktop e web

- 💼 Desenvolvedor Freelancer (2022 - 2023)
  - Soluções para escritórios de advocacia, academias, entre outros.
`,
  },
  'projetos': {
    title: 'Projetos',
    markdown: `> Projetos que me orgulho

- [📖 Biblify](https://github.com/jpmoncao/biblify): Meu projeto pessoal que tem como objetivo te ajudar a descobrir e compreender as riquezas registradas no livro mais impressionante de todos os tempos: a Bíblia!
- [🚚 API de logística](https://github.com/jpmoncao/logistics-api): Uma API de logística robusta desenvolvida com TypeScript e princípios de Domain-Driven Design (DDD).
- [🛒 Monção's E-commerce](https://github.com/jpmoncao/ecommerce-laravel): Um e-commerce completo desenvolvido com Laravel e Next.js.
- [📚 Livroteca](https://github.com/jpmoncao/livroteca-app): Aplicativo com React Native baseado no Letterbox, mas para livros.
- [💳 DESAFIO TÉCNICO: API de pagamentos com PicPay](http://github.com/jpmoncao/picpay-desafio-backend): API de pagamentos com PicPay desenvolvida em Node.js com Express.
- 📁 Confira todos os meus repositórios aqui: [https://github.com/jpmoncao](https://github.com/jpmoncao)
`,
  },
};

export default function Editor() {
  const [activeTab, setActiveTab] = useState('sobre-mim');
  const content = CONTENT[activeTab];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content.markdown);
    toast.success('Copiado!');
  };

  return (
    <section className="Editor">
      <Toaster position="top-center" toastOptions={{ style: { background: '#333', color: '#fff' } }} />
      <div className="editor-window">
        {/* Title bar estilo Cursor */}
        <div className="editor-titlebar">
          <div className="titlebar-buttons">
            <span className="titlebar-btn close" />
            <span className="titlebar-btn minimize" />
            <span className="titlebar-btn maximize" />
          </div>
          <div className="titlebar-title">portfolio — jpmoncao</div>
        </div>

        {/* Tabs estilo Cursor */}
        <div className="editor-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`editor-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Área de conteúdo - Markdown renderizado */}
        <div className="editor-content editor-content--markdown">
          <button
            type="button"
            className="content-copy-btn"
            onClick={copyToClipboard}
            title="Copiar"
            aria-label="Copiar conteúdo"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
          <div className="content-markdown">
            <ReactMarkdown
              components={{
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noreferrer">
                    {children}
                  </a>
                ),
              }}
            >
              {content.markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}
