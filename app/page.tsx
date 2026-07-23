const offers = [
  { title: 'Kartenlegen', text: 'Persönliche oder telefonische Beratung mit Lenormand-, Tarot-, Skat- und Orakelkarten sowie Pendel.', price: 'ab 45 €' },
  { title: 'Energiearbeit', text: 'Energetische Begleitung vor Ort oder als Fernbehandlung – für Entspannung, Ausgleich und neue Impulse.', price: 'ab 55 €' },
  { title: 'Energetische Reinigung', text: 'Energetische Klärung und Harmonisierung von Häusern, Wohnungen, Räumen und Grundstücken.', price: 'nach Absprache' },
  { title: 'Manuelle Anwendungen', text: 'Dorn-Breuß-Anwendung und bioenergetische Massage zur ganzheitlichen Unterstützung.', price: '75 € / Stunde' },
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
      <header className="nav wrap">
        <a className="brand" href="#start">Ulis Zuversicht</a>
        <nav>
          <a href="#angebote">Angebote</a>
          <a href="#ueber-mich">Über mich</a>
          <a href="#qualifikationen">Qualifikationen</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section id="start" className="hero">
        <div className="wrap heroGrid">
          <div>
            <p className="eyebrow">Spirituelle Lebensberatung · Energiearbeit · Raumklärung</p>
            <h1>Neue Zuversicht für Menschen, Räume und Lebenssituationen.</h1>
            <p className="lead">Mit Intuition, Erfahrung und viel Verständnis begleite ich Sie bei wichtigen Entscheidungen, inneren Blockaden und persönlichen Veränderungsprozessen.</p>
            <div className="actions">
              <a className="button primary" href="mailto:zuversicht@mein.gmx">Termin anfragen</a>
              <a className="button secondary" href="#angebote">Angebote ansehen</a>
            </div>
          </div>
          <div className="heroCard" aria-label="Dekorative Darstellung">
            <div className="orb orb1" /><div className="orb orb2" />
            <p>„Welchen Weg Sie wählen, liegt in Ihrer Entscheidung. Ich helfe Ihnen dabei, neue Möglichkeiten zu erkennen.“</p>
          </div>
        </div>
      </section>

      <section className="intro wrap">
        <p className="eyebrow">Wobei ich Sie begleiten kann</p>
        <h2>Wenn Sie Klarheit, Entlastung oder einen neuen Blickwinkel suchen.</h2>
        <div className="chips">
          {['Entscheidungen treffen', 'Selbstzweifel und Unsicherheit', 'Aussprache und Orientierung', 'Blockaden lösen', 'Räume energetisch klären', 'Entspannung und Ausgleich'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="angebote" className="section soft">
        <div className="wrap">
          <p className="eyebrow">Meine Angebote</p>
          <h2>Individuelle Begleitung mit unterschiedlichen Methoden.</h2>
          <div className="cards">
            {offers.map((offer) => (
              <article className="card" key={offer.title}>
                <h3>{offer.title}</h3><p>{offer.text}</p><strong>{offer.price}</strong>
              </article>
            ))}
          </div>
          <p className="notice">Hinweis: Die Angebote ersetzen keine ärztliche Diagnose oder Behandlung. Es werden keine Heilversprechen gegeben.</p>
        </div>
      </section>

      <section id="ueber-mich" className="section wrap split">
        <div>
          <p className="eyebrow">Über mich</p>
          <h2>Seit meiner Kindheit begleitet mich die Welt der Karten und der Intuition.</h2>
        </div>
        <div>
          <p>Ich bin in einer Familie aufgewachsen, in der spirituelle Themen kein Tabu waren. Meine Mutter gab mir ihr Wissen über das Kartenlegen bereits spielerisch in meiner Kindheit weiter. So konnten sich meine Fähigkeiten über viele Jahre entwickeln und reifen.</p>
          <p>Heute begleite ich Menschen mit Karten, Pendel und weiteren medialen Hilfsmitteln. Dabei geht es nicht darum, Entscheidungen abzunehmen. Gemeinsam betrachten wir mögliche Wege – welchen Sie wählen, bleibt immer Ihre eigene Entscheidung.</p>
          <p>Ergänzend biete ich Energiearbeit, energetische Fern- und Raumreinigung sowie manuelle Anwendungen an.</p>
        </div>
      </section>

      <section id="qualifikationen" className="section dark">
        <div className="wrap split">
          <div><p className="eyebrow light">Erfahrung & Qualifikationen</p><h2>Jahrzehntelange Weiterbildung und praktische Erfahrung.</h2></div>
          <ul className="timeline">{qualifications.map((q) => <li key={q}>{q}</li>)}</ul>
        </div>
      </section>

      <section id="kontakt" className="section wrap contact">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2>Lernen wir uns kennen.</h2>
          <p>Für Terminvereinbarungen und Fragen schreiben Sie mir bitte eine E-Mail. Behandlungen vor Ort finden in Langenau-Albeck bei Ulm statt.</p>
          <a className="button primary" href="mailto:zuversicht@mein.gmx">E-Mail schreiben</a>
        </div>
        <address>
          <strong>Ulrike Mader</strong><br />Ringstraße 83<br />89129 Langenau-Albeck<br />Deutschland<br /><br />
          <a href="mailto:zuversicht@mein.gmx">zuversicht@mein.gmx</a><br />USt-IdNr. DE 245843541
        </address>
      </section>

      <footer className="footer"><div className="wrap footerGrid"><span>© {new Date().getFullYear()} Ulrike Mader</span><span>Impressum und Datenschutz werden vor Veröffentlichung rechtlich aktualisiert.</span></div></footer>
    </main>
  );
}
