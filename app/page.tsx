const offers = [
  {
    number: '01',
    title: 'Energiearbeit',
    text: 'Eine achtsame energetische Begleitung vor Ort oder aus der Ferne – abgestimmt auf das, was Sie im Moment brauchen.',
    price: 'ab 55 €',
  },
  {
    number: '02',
    title: 'Kartenlegen',
    text: 'Persönliche und telefonische Beratung mit Lenormand-, Tarot-, Skat- und Orakelkarten sowie Pendel.',
    price: 'ab 45 €',
  },
  {
    number: '03',
    title: 'Manuelle Anwendungen',
    text: 'Dorn-Breuß-Anwendung und bioenergetische Massage als achtsame, ganzheitliche Unterstützung.',
    price: '75 € / Stunde',
  },
  {
    number: '04',
    title: 'Haus- & Raumklärung',
    text: 'Energetische Klärung und Harmonisierung von Wohnungen, Häusern, Räumen und Grundstücken.',
    price: 'nach Absprache',
  },
];

const qualifications = [
  'Reiki – 1. und 2. Grad',
  'Feng-Shui-Grundlagenseminar',
  'Fußreflexzonentherapie – Grund- und Aufbaukurs',
  'Breuß-Dorn-Fleig – mehrere Ausbildungsstufen',
  'Bioenergetische Massagetechniken',
  'Innerwise und weitere energetische Methoden',
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <div className="wrap nav">
          <a className="brand" href="#start" aria-label="Ulis Zuversicht Startseite">
            <span className="brandMark">UZ</span>
            <span><strong>Ulis Zuversicht</strong><small>Ulrike Mader</small></span>
          </a>
          <nav aria-label="Hauptnavigation">
            <a href="#begleitung">Begleitung</a>
            <a href="#angebote">Angebote</a>
            <a href="#ueber-mich">Über mich</a>
            <a className="navCta" href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <section id="start" className="hero serenityHero">
        <div className="heroBackdrop" aria-hidden="true" />
        <div className="wrap heroGrid">
          <div className="heroCopy">
            <p className="eyebrow lightHero">Persönliche Begleitung · Energiearbeit · Kartenlegen</p>
            <h1>Neue Zuversicht für Ihren Lebensweg.</h1>
            <p className="lead">Mit Herz, Intuition und langjähriger Erfahrung begleite ich Menschen auf ihrem persönlichen Weg – einfühlsam, respektvoll und ohne zu urteilen.</p>
            <div className="actions">
              <a className="button heroButton" href="mailto:zuversicht@mein.gmx">Termin anfragen</a>
              <a className="heroTextLink" href="#begleitung">Mehr erfahren <span>↓</span></a>
            </div>
            <div className="trustRow heroTrust">
              <span>Persönlich</span><i />
              <span>Einfühlsam</span><i />
              <span>Mit Herz und Intuition</span>
            </div>
          </div>
        </div>
      </section>

      <section id="begleitung" className="section welcomeSection">
        <div className="wrap welcomeGrid">
          <div>
            <p className="eyebrow">Schön, dass Sie hier sind</p>
            <h2>Für mich steht immer der Mensch im Mittelpunkt.</h2>
          </div>
          <div className="welcomeCopy">
            <p>Jeder Mensch bringt seine eigene Geschichte mit. Manche kommen erschöpft, manche voller Sorgen, andere stehen vor einer wichtigen Entscheidung oder möchten einfach wieder neue Kraft tanken.</p>
            <p>Ich bin für meine Menschen da – mit dem, was sie in diesem Moment brauchen: Energie, ein offenes Ohr, ein gutes Gespräch und einen geschützten Raum, in dem wieder Leichtigkeit entstehen darf.</p>
            <p className="highlightText">Das Schönste ist für mich, wenn ein Mensch belastet zu mir kommt und meine Räume später wieder mit einem Lächeln verlässt.</p>
          </div>
        </div>
      </section>

      <section className="orientation wrap">
        <div className="sectionIntro">
          <p className="eyebrow">Vielleicht kennen Sie dieses Gefühl</p>
          <h2>Sie wünschen sich Klarheit, Entlastung oder neue Orientierung.</h2>
        </div>
        <div className="orientationGrid">
          {[
            ['01', 'Eine Entscheidung steht an und Sie drehen sich im Kreis.'],
            ['02', 'Sie fühlen sich erschöpft, traurig oder innerlich unruhig.'],
            ['03', 'Sie möchten wieder Kraft, Vertrauen und Leichtigkeit spüren.'],
          ].map(([number, text]) => (
            <article key={number}><span>{number}</span><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section id="angebote" className="section offersSection">
        <div className="wrap">
          <div className="sectionHeader">
            <div><p className="eyebrow">Meine Angebote</p><h2>Begleitung, die zu Ihrer Situation passt.</h2></div>
            <p>Keine Begegnung ist gleich. Im Mittelpunkt stehen immer Ihr Anliegen, Ihr Tempo und das, was sich für Sie gerade stimmig anfühlt.</p>
          </div>
          <div className="cards">
            {offers.map((offer) => (
              <article className="card" key={offer.title}>
                <span className="cardNumber">{offer.number}</span>
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
                <div className="cardFooter"><strong>{offer.price}</strong><span>Persönlich anfragen →</span></div>
              </article>
            ))}
          </div>
          <p className="notice">Hinweis: Meine Angebote dienen der persönlichen und energetischen Begleitung. Sie ersetzen keine ärztliche Diagnose oder Behandlung und beinhalten keine Heilversprechen.</p>
        </div>
      </section>

      <section className="section tarotStorySection">
        <div className="wrap tarotStoryGrid">
          <div className="tarotVisual" role="img" aria-label="Tarotkarten, Rose und Pendel" />
          <div className="tarotStoryCopy">
            <p className="eyebrow">Karten als Wegweiser</p>
            <h2>Neue Blickwinkel für Fragen, die Sie bewegen.</h2>
            <p>Karten und Pendel sind für mich keine fertigen Antworten und nehmen Ihnen keine Entscheidung ab. Sie können sichtbar machen, was im Alltag manchmal verborgen bleibt, und neue Möglichkeiten eröffnen.</p>
            <p>Welchen Weg Sie wählen, bleibt immer Ihre eigene Entscheidung.</p>
          </div>
        </div>
      </section>

      <section id="ueber-mich" className="section aboutSection">
        <div className="wrap aboutGrid">
          <div className="aboutVisual">
            <div className="imagePanel" role="img" aria-label="Ulrike Mader lächelnd im Garten" />
            <div className="experienceBadge"><strong>Von Herzen</strong><span>für meine Menschen da</span></div>
          </div>
          <div className="aboutCopy">
            <p className="eyebrow">Über mich</p>
            <h2>Ich begleite Menschen so, wie ich es selbst leben möchte: offen, ehrlich und mit ganzem Herzen.</h2>
            <p>Spiritualität war für mich nie etwas Fremdes. Ich bin in einer Familie aufgewachsen, in der diese Themen selbstverständlich sein durften. Meine Mutter gab mir ihr Wissen über das Kartenlegen bereits spielerisch in meiner Kindheit weiter.</p>
            <p>Über viele Jahre konnten sich meine Wahrnehmung, meine Intuition und meine Fähigkeiten entwickeln. Heute verbinde ich Karten, Pendel, Energiearbeit, Raumklärung und manuelle Anwendungen zu einer sehr persönlichen Form der Begleitung.</p>
            <p>Manche Menschen kommen regelmäßig zum Auftanken. Andere benötigen nur wenige Termine und gehen ihren Weg danach selbstständig weiter. Beides ist gut – denn mein Wunsch ist nicht, dass Sie mich brauchen, sondern dass Sie sich wieder getragen und gestärkt fühlen.</p>
            <p className="signature">Ulrike Mader</p>
          </div>
        </div>
      </section>

      <section className="faithSection">
        <div className="wrap faithGrid">
          <div>
            <p className="eyebrow light">Was mich trägt</p>
            <h2>Vor jeder Begleitung bitte ich darum, helfen zu dürfen.</h2>
          </div>
          <div>
            <p>Ich öffne mich bewusst für die Kraft, die Menschen als Gott, Universum, Engel oder göttliche Quelle bezeichnen. Dabei verstehe ich mich als Begleiterin und Vermittlerin.</p>
            <p>Was entstehen darf, geschieht auf seine eigene Weise und in seinem eigenen Tempo. Dafür empfinde ich eine tiefe Dankbarkeit.</p>
          </div>
        </div>
      </section>

      <section className="quoteSection">
        <div className="wrap quoteInner">
          <span className="quoteMark">“</span>
          <blockquote>Ich bin für meine Menschen da – genau mit dem, was sie in diesem Moment brauchen.</blockquote>
        </div>
      </section>

      <section id="qualifikationen" className="section qualificationSection">
        <div className="wrap qualificationGrid">
          <div className="stickyTitle">
            <p className="eyebrow light">Erfahrung & Qualifikationen</p>
            <h2>Intuition, Lebenserfahrung und stetige Weiterbildung.</h2>
            <p>Meine Arbeit verbindet persönliche Erfahrung mit einer Vielzahl an Aus- und Weiterbildungen.</p>
          </div>
          <ol className="timeline">
            {qualifications.map((q, index) => <li key={q}><span>{String(index + 1).padStart(2, '0')}</span><p>{q}</p></li>)}
          </ol>
        </div>
      </section>

      <section id="kontakt" className="section contactSection">
        <div className="wrap contactCard">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h2>Der erste Schritt darf ganz einfach sein.</h2>
            <p>Schreiben Sie mir kurz, was Sie gerade bewegt. Gemeinsam schauen wir, welche Form der Begleitung für Sie passend ist.</p>
            <a className="button primary" href="mailto:zuversicht@mein.gmx">E-Mail schreiben</a>
          </div>
          <address>
            <span>Ulrike Mader</span>
            Ringstraße 83<br />89129 Langenau-Albeck<br />Deutschland
            <hr />
            <a href="mailto:zuversicht@mein.gmx">zuversicht@mein.gmx</a>
          </address>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footerGrid">
          <div><strong>Ulis Zuversicht</strong><span>Persönliche Begleitung · Energiearbeit · Kartenlegen</span></div>
          <div><span>© {new Date().getFullYear()} Ulrike Mader</span><span>Impressum · Datenschutz</span></div>
        </div>
      </footer>
    </main>
  );
}
