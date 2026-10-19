import Hero from "../components/Hero";
import Mark from "../components/Mark";

// Os botões abrem a tela /whatsapp, que leva para a conversa (número e mensagem em lib/whatsapp.js)
const WA = "/whatsapp";

// "big" ocupa 2 colunas. Com 3 cards "big" + 3 normais a grade fecha em 3 linhas sem buracos.
const services = [
  { title: "Sites", text: "Rápidos, bonitos e feitos para levar o visitante ao seu WhatsApp.", big: true },
  { title: "Aplicativos", text: "iPhone, Android e web, do protótipo à loja." },
  { title: "Sistemas", text: "Painéis e rotinas que tiram a planilha do caminho." },
  { title: "Inteligência Artificial", text: "Atendimento e triagem com IA, só quando faz sentido para o seu caso.", big: true },
  { title: "Automação", text: "Tarefas repetitivas rodando sozinhas." },
  { title: "Sob medida", text: "Tem uma necessidade específica? A gente desenha a solução.", big: true },
];

// Imagens ficam em /public/img e são geradas por scripts/shot-portfolio.js
// (tela inicial de cada site no ar, em 1600x1000 = 16/10, a proporção do .shot).
const projects = [
  {
    title: "ANABE Creative",
    category: "Catálogo + WhatsApp",
    text: "Ateliê de presentes artesanais. Catálogo organized por ocasião, orçamento montado no WhatsApp e sem cadastro nem carrinho.",
    image: "/img/anabe-creative.jpg",
    url: "https://anabecreative.vercel.app",
  },
  {
    title: "Moces Doces",
    category: "Site institucional",
    text: "Confeitaria artesanal de Vila Matilde. Vitrine de docinhos e encomendas, com vitrine animada e pedido fechado no WhatsApp.",
    image: "/img/moces-doces.jpg",
    url: "https://mocesdoces.vercel.app",
  },
  {
    title: "Pet Love Of Animals",
    category: "Landing page",
    text: "Banho, tosa, busca e entrega para pets. Serviços, galeria e agendamento pelo WhatsApp.",
    image: "/img/pet-love.jpg",
    url: "https://petlove-theta-blue.vercel.app",
  },
];

// Seta de link externo, usada no selo e na linha "ver site".
function Out() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

const steps = [
  { title: "Imersão", text: "Entendemos o negócio e o que o projeto precisa resolver." },
  { title: "Planejamento", text: "Escopo, prazo e prioridades definidos antes do código." },
  { title: "Design", text: "Você aprova as telas antes de virarem código." },
  { title: "Desenvolvimento", text: "Entregas por etapa, com endereço de teste sempre no ar." },
  { title: "Testes", text: "Quebramos antes que o seu cliente quebre." },
  { title: "Publicação", text: "No ar, com suporte depois da entrega." },
];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <a href="#topo" className="logo">
          <Mark className="lm" />
          FORGE TECH
        </a>
        <div className="links">
          <a href="#servicos">Serviços</a>
          <a href="#trabalho">Trabalho</a>
          <a href="#processo">Processo</a>
          <a className="btn sm" href={WA}>WhatsApp</a>
        </div>
      </nav>

      <main>
        <Hero wa={WA} />

        <section className="sec wrap rv" id="servicos">
          <h2>
            Seis frentes.
            <br />
            <i>Tudo sob medida.</i>
          </h2>
          <div className="bento">
            {services.map((s) => (
              <article key={s.title} className={`card${s.big ? " big" : ""}`}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sec wrap" id="trabalho">
          <h2 className="rv">
            Projetos
            <br />
            <i>que vendem.</i>
          </h2>
          <div className="work">
            {projects.map((p, i) => (
              <a
                key={p.title}
                className={`pj rv p${i}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir o site da ${p.title} em uma nova aba`}
              >
                <div className="shot">
                  <img src={p.image} alt={`Site ${p.title}`} loading="lazy" decoding="async" />
                  <span className="seal">
                    Ver site ao vivo <Out />
                  </span>
                </div>
                <div className="meta">
                  <h3>{p.title}</h3>
                  <span>{p.category}</span>
                  <p>{p.text}</p>
                  <span className="ver">
                    Ver site ao vivo <Out />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="sec wrap" id="processo">
          <div className="split">
            <h2 className="stk">
              Da ideia
              <br />
              ao <i>cliente.</i>
            </h2>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title} className="rv">
                  <span>{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="cta rv">
          <div className="wrap">
            <h2>
              Tem uma ideia?
              <br />
              <i>Vamos construir.</i>
            </h2>
            <p>Conte o que você quer criar. A Forge Tech transforma a ideia em uma solução digital.</p>
            <a className="btn big" href={WA}>Falar com a Forge Tech</a>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <span className="logo">
          <Mark className="lm" />
          FORGE TECH
        </span>
        <span>© 2026 Forge Tech</span>
      </footer>
    </>
  );
}
