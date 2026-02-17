import "./App.css";

const coreWorkflow = [
  "Upload discovery packets (reports, transcripts, body-cam logs, lab docs)",
  "Generate a clean timeline, issue map, and inconsistency report",
  "Auto-flag Brady/Giglio exposure and evidentiary weaknesses",
  "Choose a motion type and produce a jurisdiction-aware draft with citations",
];

const fivePipelines = [
  {
    title: "1) Document ingestion (ETL)",
    detail:
      "Extract, OCR, clean, chunk, embed, and load into ChromaDB while preserving encrypted originals in object storage.",
    principle: "Least privilege • determinism • auditability",
  },
  {
    title: "2) Discovery digest pipeline",
    detail:
      "Trigger on new uploads to summarize facts, surface contradictions, and store a retrieval-ready digest.",
    principle: "Automation • reproducibility • logged execution",
  },
  {
    title: "3) RAG motion pipeline",
    detail:
      "Retrieve discovery + approved precedent, apply jurisdiction filters, and draft motions with source citations.",
    principle: "No source = no claim • hallucination mitigation",
  },
  {
    title: "4) Knowledge refresh pipeline",
    detail:
      "Nightly scan changed files and re-embed only what changed for predictable, versioned updates.",
    principle: "CI/CD discipline • continuous improvement",
  },
  {
    title: "5) Audit logging pipeline",
    detail:
      "Log ingestion events, retrieval queries, and generated outputs for compliance and defensibility.",
    principle: "Security • accountability • compliance",
  },
];

const architectureChoices = [
  {
    heading: "Default deployment: on-prem GPU appliance",
    text: "Air-gapped or tightly controlled deployments preserve confidentiality and create a clear privacy moat for defense teams.",
  },
  {
    heading: "ETL-first in v1",
    text: "Deterministic transforms and tighter security boundaries make legal defensibility stronger than loose ELT-first designs.",
  },
  {
    heading: "Containerized release model",
    text: "LLM server, RAG engine, UI, auth, and logging run as versioned containers for immutable rollbacks and safer upgrades.",
  },
];

const riskControls = [
  "Citation integrity: strict RAG constraints, jurisdiction filters, and confidence scoring",
  "Model efficiency: 13B for summarization, 70B reserved for heavy motion drafting",
  "Scope discipline: fixed SKUs and quarterly release train to avoid custom-dev sprawl",
  "Licensing-safe workflow: BYO-PDF ingestion only (no mirrored Westlaw/Lexis corpus)",
];

function App() {
  return (
    <div className="site">
      <header className="hero">
        <p className="eyebrow">Ghost Staffr • Criminal Defense AI Appliance</p>
        <h1>Turn Discovery Into Draft Motions Without Risking Confidentiality</h1>
        <p className="hero-text">
          This is not generic “AI for lawyers.” Ghost Staffr is a compliance-first,
          on-prem appliance for criminal defense teams: upload discovery, surface
          Brady/Giglio issues, and generate jurisdiction-aware drafts grounded in
          source-cited records.
        </p>
        <div className="hero-cta-group">
          <a className="button primary" href="https://zcal.co/ghoststaffr/30min">
            Book a criminal defense demo
          </a>
          <a className="button secondary" href="#workflow">
            See the 4-step workflow
          </a>
        </div>
      </header>

      <main>
        <section className="section" id="workflow">
          <h2>The narrow wedge: one painful bottleneck solved extremely well</h2>
          <p className="section-note">
            Discovery overload and motion drafting bottlenecks are where defense
            teams lose time and confidence. Ghost Staffr focuses there—nothing vague,
            nothing bloated.
          </p>
          <div className="grid two">
            {coreWorkflow.map((step) => (
              <article className="card" key={step}>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section card-grid muted">
          <h2>The five production pipelines (not fifty)</h2>
          <div className="grid two">
            {fivePipelines.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <p className="principle">{item.principle}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Built as a product appliance, not a consulting project</h2>
          <div className="grid three">
            {architectureChoices.map((choice) => (
              <article className="card" key={choice.heading}>
                <h3>{choice.heading}</h3>
                <p>{choice.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split">
          <div>
            <h2>Risk controls that matter in court-facing work</h2>
            <ul>
              {riskControls.map((risk) => (
                <li key={risk}>{risk}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2>Offer structure</h2>
            <p>
              <strong>Promise:</strong> Turn discovery into draft litigation assets in
              hours, not days.
            </p>
            <p>
              <strong>Guarantee:</strong> 90 days to prove 30%+ drafting time savings
              or refund.
            </p>
            <p>
              <strong>SKUs:</strong> Lite (13B + Discovery) and Pro (13B + 70B + Motion
              Kits).
            </p>
            <p>
              <strong>Commercial model:</strong> setup + annual license + optional
              maintenance.
            </p>
          </div>
        </section>
      </main>

      <section className="section cta" id="deployment">
        <h2>A secure legal assistant in your back pocket</h2>
        <p>
          If your firm needs grounded, auditable, confidentiality-first motion
          drafting support, Ghost Staffr is designed for exactly that workflow.
        </p>
        <a className="button primary" href="https://zcal.co/ghoststaffr/30min">
          Schedule implementation planning
        </a>
      </section>
    </div>
  );
}

export default App;
