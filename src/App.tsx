import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Check,
  ChevronRight,
  Cpu,
  Globe2,
  Mail,
  MessageCircle,
  Menu,
  Network,
  Phone,
  Ship,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Company", href: "#company" },
  { label: "Our Businesses", href: "#businesses" },
  { label: "Global Vision", href: "#global" },
  { label: "Leadership", href: "#leadership" },
  { label: "Innovation", href: "#innovation" },
  { label: "Contact", href: "#contact" },
];

const businesses = [
  {
    number: "01",
    name: "International Trade",
    description:
      "Exploring business opportunities through imports, exports, and international commercial relationships.",
    icon: Ship,
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=85",
    className: "trade",
  },
  {
    number: "02",
    name: "Real Estate",
    description:
      "Recognizing opportunities in the real estate sector as part of UTC's broader business interests.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    className: "real-estate",
  },
  {
    number: "03",
    name: "Industrial Activities",
    description:
      "Supporting a diversified business vision across industrial and commercial opportunities.",
    icon: Network,
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=85",
    className: "industry",
  },
  {
    number: "04",
    name: "Financial Markets",
    description:
      "Exploring participation in global financial markets, including foreign exchange and cryptocurrency markets, subject to applicable laws and regulations.",
    icon: BarChart3,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=85",
    className: "markets",
  },
  {
    number: "05",
    name: "Trading Technology",
    description:
      "Developing a forward-looking vision around professional manual trading and algorithmic trading strategies.",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
    className: "technology",
  },
];

const markets = [
  { name: "India", x: 68, y: 55 },
  { name: "Nepal", x: 69, y: 48 },
  { name: "Sri Lanka", x: 68, y: 63 },
  { name: "Dubai, UAE", x: 59, y: 51 },
  { name: "Bangladesh", x: 72, y: 52 },
  { name: "Other international markets", x: 80, y: 37 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Wordmark({ light = true }: { light?: boolean }) {
  return (
    <a className={`wordmark ${light ? "wordmark-light" : "wordmark-dark"}`} href="#top" aria-label="UTC — United Trading Company, home">
      <span className="wordmark-main">UTC</span>
      <span className="wordmark-name">UNITED TRADING COMPANY</span>
      <span className="wordmark-est">EST. 1965</span>
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="section-label">
      <span />
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMarket, setActiveMarket] = useState("India");
  const [heroImageFailed, setHeroImageFailed] = useState(false);
  const [buildingImageFailed, setBuildingImageFailed] = useState(false);

  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner">
          <Wordmark />
          <nav className={`desktop-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#company" className="header-cta">
            Explore UTC <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label} <ArrowUpRight size={15} />
            </a>
          ))}
        </nav>
      </header>

      <section className={`hero ${heroImageFailed ? "hero-no-image" : ""}`} aria-labelledby="hero-title">
        {!heroImageFailed && (
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=90"
            alt=""
            onError={() => setHeroImageFailed(true)}
          />
        )}
        <div className="hero-overlay" />
        <div className="hero-grid" />
        <div className="hero-content page-width">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }}>
            <div className="hero-eyebrow"><span /> ESTABLISHED IN 1965 <i /> GLOBAL AMBITIONS</div>
            <h1 id="hero-title">Experience.<br />Innovation.<br /><em>A Global Vision.</em></h1>
            <p className="hero-description">
              From a legacy rooted in 1965 to an expanding international vision, UTC continues to explore opportunities across global trade, industry, real estate, and financial markets.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#company">Discover Our Journey <ArrowRight size={16} /></a>
              <a className="button button-outline" href="#global">Explore Our Vision <ArrowUpRight size={16} /></a>
            </div>
          </motion.div>
          <div className="hero-coordinate"><span>25°12′N</span> &nbsp; 55°16′E <b>— DUBAI, UAE</b></div>
        </div>
        <a href="#company" className="scroll-cue" aria-label="Scroll to company heritage"><ArrowDown size={16} /></a>
        <div className="hero-index">01 <span>/</span> 06</div>
      </section>

      <section className="heritage section-pad" id="company">
        <div className="heritage-layout page-width">
          <motion.div className="heritage-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={fadeUp} transition={{ duration: 0.55 }}>
            <SectionLabel>OUR HERITAGE</SectionLabel>
            <h2>A Legacy<br />Since <em>1965.</em></h2>
            <div className="heritage-year"><span>1965</span><i /> <span>TODAY & BEYOND</span></div>
          </motion.div>
          <motion.div className="heritage-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={fadeUp} transition={{ duration: 0.55, delay: 0.12 }}>
            <p className="lead-copy">Experience offers perspective.<br />Ambition opens new horizons.</p>
            <p className="body-copy">
              UTC has been operating since 1965 and has maintained a long-standing business presence in Dubai. Over the decades, the organization has pursued opportunities across imports and exports, real estate, industries, and financial markets. Building on this business history, UTC continues to explore new opportunities, technology-driven approaches, and international expansion.
            </p>
            <div className="arabic-copy" lang="ar" dir="rtl">
              <span>نبذة عن الشركة</span>
              <p>
                تعمل شركة يونايتد تريدينغ كومباني منذ عام ١٩٦٥، ولها حضور راسخ في دبي. وتستكشف الشركة الفرص في مجالات التجارة الدولية والعقارات والأنشطة الصناعية والأسواق المالية، وتسعى إلى بناء علاقات أعمال واستكشاف فرص جديدة في الأسواق الدولية، مع الالتزام بالقوانين واللوائح المعمول بها.
              </p>
            </div>
            <a className="text-link" href="#businesses">Explore our businesses <ArrowRight size={16} /></a>
          </motion.div>
        </div>
        <div className="heritage-highlights page-width">
          {[
            ["01", "Established in 1965", "A foundation shaped by decades of business experience."],
            ["02", "A Long-Standing Dubai Presence", "Rooted in one of the world's most connected cities."],
            ["03", "A Vision for Global Growth", "Looking ahead to new opportunities and relationships."],
          ].map(([num, title, description]) => (
            <div className="highlight" key={num}>
              <span className="highlight-number">{num}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <ArrowUpRight className="highlight-arrow" size={18} />
            </div>
          ))}
        </div>
      </section>

      <section className="businesses section-pad" id="businesses">
        <div className="page-width">
          <div className="section-head">
            <div>
              <SectionLabel>OUR BUSINESSES</SectionLabel>
              <h2>One legacy.<br /><em>Many horizons.</em></h2>
            </div>
            <p className="section-intro">A diversified outlook, guided by experience and an openness to what comes next.</p>
          </div>
          <div className="business-grid">
            {businesses.map((business, index) => {
              const Icon = business.icon;
              return (
                <motion.article
                  className={`business-card ${business.className}`}
                  key={business.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  <div className="business-photo" style={{ backgroundImage: `url("${business.image}")` }} role="img" aria-label={`${business.name} illustration`} />
                  <div className="business-shade" />
                  <div className="business-card-top"><span>{business.number} / 05</span><span className="business-icon"><Icon size={19} strokeWidth={1.6} /></span></div>
                  <div className="business-card-content">
                    <h3>{business.name}</h3>
                    <p>{business.description}</p>
                    <a href="#contact" aria-label={`Enquire about ${business.name}`}><ArrowUpRight size={19} /></a>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <p className="business-note">Business interests and market participation are subject to applicable laws and regulations. No specific services, licenses, or investment outcomes are implied.</p>
        </div>
      </section>

      <section className="global-section section-pad" id="global">
        <div className="page-width global-layout">
          <div className="global-copy">
            <SectionLabel>OUR GLOBAL VISION</SectionLabel>
            <h2>Building Connections.<br /><em>Expanding Horizons.</em></h2>
            <p>UTC aims to strengthen its international brand presence and explore new markets through business relationships, collaboration, and a long-term growth vision.</p>
            <div className="market-picker" aria-label="Illustrative markets">
              {markets.map((market) => (
                <button
                  key={market.name}
                  type="button"
                  className={activeMarket === market.name ? "market-active" : ""}
                  onClick={() => setActiveMarket(market.name)}
                  aria-pressed={activeMarket === market.name}
                >
                  <span />{market.name}<ArrowUpRight size={13} />
                </button>
              ))}
            </div>
            <div className="market-selected"><span className="status-dot" /> Exploring opportunities in <strong>{activeMarket}</strong></div>
          </div>
          <div className="map-panel" aria-label="Illustrative map of target markets, not a representation of current operations">
            <div className="map-caption"><Globe2 size={15} /> AN INTERNATIONAL OUTLOOK</div>
            <svg className="world-map" viewBox="0 0 900 450" role="img" aria-label="Illustrative world map highlighting markets of interest">
              <defs>
                <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.2" fill="currentColor" />
                </pattern>
              </defs>
              <g className="map-land">
                <path d="M99 91 129 68 165 62 190 78 217 83 234 108 222 132 201 141 190 166 171 175 159 205 143 214 127 197 116 174 99 163 86 137 77 114Z" />
                <path d="m201 209 23 7 20 27 9 33-10 36-13 37-14 42-14 31-12-16 5-38-13-35 2-36-13-30 6-31Z" />
                <path d="m365 90 23-14 35 5 16 16-4 18-31 4-21-11Z" />
                <path d="m386 136 29-19 34 10 22 24 13 35-8 40-20 40-27 34-22-16-15-37-15-36-3-39Z" />
                <path d="m438 90 30-25 52-9 39 15 46-3 35 13 32-6 39 16 42 3 35 18-6 21-31 4-24 21-35-5-20 19-37-10-23 17-25-12-25 16-26-14-15-28-24-12-23-21-32 3-29-17-9-23Z" />
                <path d="m650 214 25-16 33 8 30 19 9 29-21 17-31-7-15-20-25-3Z" />
                <path d="m749 313 22-13 22 8 6 18-22 14-22-8Z" />
                <path d="m314 102 8-4 7 13-8 12-8-7Z" />
              </g>
              {markets.slice(0, 5).map((market) => (
                <g className={`map-marker ${activeMarket === market.name ? "map-marker-active" : ""}`} key={market.name}>
                  <circle cx={`${market.x * 9}`} cy={`${market.y * 4.5}`} r="8" />
                  <circle cx={`${market.x * 9}`} cy={`${market.y * 4.5}`} r="3" />
                </g>
              ))}
              <path className="map-route" d="M531 230 Q594 160 612 250 T648 245 T612 285 T648 245" />
            </svg>
            <div className="map-legend"><span /> Markets of interest <span className="legend-line" /> Connections to explore</div>
            <p className="map-footnote">Illustrative markets of interest — not a representation of current UTC operations.</p>
          </div>
        </div>
      </section>

      <section className="leadership section-pad" id="leadership">
        <div className="page-width leadership-layout">
          <div className="leadership-portrait">
            <div className={`portrait-frame ${buildingImageFailed ? "building-fallback" : ""}`}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85"
                alt="Modern commercial building representing UTC's Dubai presence"
                onError={() => setBuildingImageFailed(true)}
              />
            </div>
          </div>
          <div className="leadership-copy">
            <SectionLabel>LEADERSHIP</SectionLabel>
            <h2>Leadership with<br /><em>a global outlook.</em></h2>
            <div className="leader-profile">
              <h3>Mohammad Abdul Motal Fayaz</h3>
              <p className="leader-role">Managing Director, UTC</p>
            </div>
            <div className="leader-profile india-profile">
              <h3>Mr. N. Rajasekhar</h3>
              <p className="leader-role">Managing Director, UTC India</p>
              <p className="body-copy">With an MBA in Finance, Mr. N. Rajasekhar brings a finance-led perspective to the organization's business ambitions in India.</p>
              <div className="leader-credential"><Check size={15} /> MBA in Finance</div>
            </div>
          </div>
        </div>
      </section>

      <section className="innovation section-pad" id="innovation">
        <div className="innovation-glow" />
        <div className="page-width innovation-layout">
          <div className="innovation-copy">
            <SectionLabel>INNOVATION & TECHNOLOGY</SectionLabel>
            <h2>Tradition in perspective.<br /><em>Technology in view.</em></h2>
            <p>UTC's forward-looking vision includes exploring technology-driven approaches to trading, bringing together professional manual methods and algorithmic strategies.</p>
            <a className="button button-gold" href="#contact">Explore UTC's vision <ArrowRight size={16} /></a>
          </div>
          <div className="innovation-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-center"><Cpu size={32} strokeWidth={1.3} /></div>
            <div className="visual-node node-a"><BarChart3 size={17} /><span>MARKET INSIGHT</span></div>
            <div className="visual-node node-b"><Network size={17} /><span>ALGORITHMIC THINKING</span></div>
            <div className="visual-node node-c"><Globe2 size={17} /><span>GLOBAL PERSPECTIVE</span></div>
            <div className="visual-crosshair" />
          </div>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="page-width contact-inner">
          <SectionLabel>LET'S CONNECT</SectionLabel>
          <h2>Every journey starts<br />with a <em>conversation.</em></h2>
          <p>Get in touch with UTC to discuss our business interests and international vision.</p>
          <div className="contact-details">
            <a href="mailto:utc.asia26@gmail.com"><Mail size={18} /><span><small>EMAIL</small>utc.asia26@gmail.com</span><ArrowUpRight size={15} /></a>
            <a href="tel:+13658912079"><Phone size={18} /><span><small>CALL</small>+1 (365) 891-2079</span><ArrowUpRight size={15} /></a>
            <a href="https://wa.me/13658912079" target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>WHATSAPP</small>+1 (365) 891-2079</span><ArrowUpRight size={15} /></a>
          </div>
          <a href="#businesses" className="button button-gold">Discover our businesses <ArrowRight size={16} /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-main">
          <div className="footer-brand">
            <Wordmark />
            <p>Experience. Innovation.<br />A global vision.</p>
          </div>
          <div className="footer-links">
            <span>EXPLORE</span>
            {navItems.slice(0, 5).map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
          </div>
          <div className="footer-note">
            <span>OUR OUTLOOK</span>
            <p>Building on a business history dating to 1965, with a long-standing presence in Dubai and an evolving international vision.</p>
            <a href="#top">Back to top <ChevronRight size={14} /></a>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} United Trading Company. All rights reserved.</span>
          <span>Business interests are subject to applicable laws and regulations.</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
