const offers = [
  {
    number: '01',
    title: 'Kartenlegen',
    text: 'Persönliche und telefonische Beratung mit Lenormand-, Tarot-, Skat- und Orakelkarten sowie Pendel.',
    price: 'ab 45 €',
  },
  {
    number: '02',
    title: 'Energiearbeit',
    text: 'Eine ruhige energetische Begleitung vor Ort oder aus der Ferne – für Entlastung, Ausgleich und neue Impulse.',
    price: 'ab 55 €',
  },
  {
    number: '03',
    title: 'Haus- & Raumklärung',
    text: 'Energetische Klärung und Harmonisierung von Wohnungen, Häusern, Räumen und Grundstücken.',
    price: 'nach Absprache',
  },
  {
    number: '04',
    title: 'Manuelle Anwendungen',
    text: 'Dorn-Breuß-Anwendung und bioenergetische Massage als achtsame, ganzheitliche Unterstützung.',
    price: '75 € / Stunde',
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
            <a href="#angebote">Angebote</a>
            <a href="#ueber-mich">Über mich</a>
            <a href="#qualifikationen">Erfahrung</a>
            <a className="navCta" href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <section id="start" className="hero">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />
        <div className="wrap heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Spirituelle Lebensberatung · Energiearbeit</p>
            <h1>Neue Zuversicht für Ihren persönlichen Weg.</h1>
            <p className="lead">Manchmal braucht es keinen fertigen Rat, sondern einen geschützten Raum, einen neuen Blickwinkel und jemanden, der aufmerksam zuhört.</p>
            <div className="actions">
              <a className="button primary" href="mailto:zuversicht@mein.gmx">Termin anfragen</a>
              <a className="textLink" href="#angebote">Angebote entdecken <span>↘</span></a>
            </div>
            <div className="trustRow">
              <span>Persönlich</span><i />
              <span>Einfühlsam</span><i />
              <span>Seit vielen Jahren erfahren</span>
            </div>
          </div>

          <div className="heroVisual" aria-label="Ruhevolle dekorative Darstellung">
            <div className="portraitPlaceholder">
              <span>Portrait<br />von Ulrike</span>
            </div>
            <blockquote>„Ich helfe Ihnen dabei, neue Möglichkeiten zu erkennen. Welchen Weg Sie wählen, bleibt immer Ihre Entscheidung.“</blockquote>
            <div className="seal">Mit Herz<br />& Intuition</div>
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
            ['02', 'Sie fühlen sich blockiert, erschöpft oder innerlich unruhig.'],
            ['03', 'Ein Raum oder eine Situation fühlt sich nicht mehr stimmig an.'],
          ].map(([number, text]) => (
            <article key={number}><span>{number}</span><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section id="angebote" className="section offersSection">
        <div className="wrap">
          <div className="sectionHeader">
            <div><p className="eyebrow">Meine Angebote</p><h2>Begleitung, die zu Ihrer Situation passt.</h2></div>
            <p>Jede Sitzung ist individuell. Im Mittelpunkt stehen immer Ihr Anliegen, Ihr Tempo und das, was Sie gerade brauchen.</p>
          </div>
          <div className="cards">
            {offers.map((offer) => (
              <article className="card" key={offer.title}>
                <span className="cardNumber">{offer.number}</span>
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
                <div className="cardFooter"><strong>{offer.price}</strong><span>Mehr erfahren →</span></div>
              </article>
            ))}
          </div>
          <p className="notice">Hinweis: Die Angebote ersetzen keine ärztliche Diagnose oder Behandlung. Es werden keine Heilversprechen gegeben.</p>
        </div>
      </section>

      <section id="ueber-mich" className="section aboutSection">
        <div className="wrap aboutGrid">
          <div className="aboutVisual">
            <div className="imagePanel"><span>Authentisches Foto<br />in natürlichem Licht</span></div>
            <div className="experienceBadge"><strong>Viele Jahre</strong><span>Erfahrung & Weiterbildung</span></div>
          </div>
          <div className="aboutCopy">
            <p className="eyebrow">Über mich</p>
            <h2>Spiritualität war für mich nie etwas Fremdes.</h2>
            <p>Ich bin in einer Familie aufgewachsen, in der spirituelle Themen selbstverständlich sein durften. Meine Mutter gab mir ihr Wissen über das Kartenlegen bereits spielerisch in meiner Kindheit weiter.</p>
            <p>Über viele Jahre konnten sich meine Wahrnehmung, meine Intuition und meine Fähigkeiten entwickeln. Heute begleite ich Menschen mit Karten, Pendel und weiteren medialen Hilfsmitteln – respektvoll, ehrlich und ohne Entscheidungen abzunehmen.</p>
            <p>Ergänzend fließen Energiearbeit, energetische Haus- und Raumklärung sowie manuelle Anwendungen in meine Arbeit ein.</p>
            <p className="signature">Ulrike Mader</p>
          </div>
        </div>
      </section>

      <section className="quoteSection">
        <div className="wrap quoteInner">
          <span className="quoteMark">“</span>
          <blockquote>Jeder Mensch trägt vieles bereits in sich. Manchmal braucht es nur einen neuen Blick, damit der eigene Weg wieder sichtbar wird.</blockquote>
        </div>
      </section>

      <section id="qualifikationen" className="section qualificationSection">
        <div className="wrap qualificationGrid">
          <div className="stickyTitle">
            <p className="eyebrow light">Erfahrung & Qualifikationen</p>
            <h2>Fundiertes Wissen, stetig erweitert.</h2>
            <p>Meine Arbeit verbindet persönliche Erfahrung, Intuition und eine Vielzahl an Aus- und Weiterbildungen.</p>
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
            <p>Schreiben Sie mir kurz, worum es geht. Gemeinsam klären wir, welche Form der Begleitung für Sie passend ist.</p>
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
          <div><strong>Ulis Zuversicht</strong><span>Spirituelle Lebensberatung & Energiearbeit</span></div>
          <div><span>© {new Date().getFullYear()} Ulrike Mader</span><span>Impressum · Datenschutz</span></div>
        </div>
      </footer>
    </main>
  );
}
