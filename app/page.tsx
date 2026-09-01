import PrismNavigation from "./PrismNavigation";

const honorsAndAwards = [
  "Academician Chen Yazhu Scholarship (Top 10%, 2025).",
  "National 3rd Prize in the National Undergraduate Biomedical Engineering Innovation Design Competition (2025).",
  "2nd Prize in the Contemporary Undergraduate Mathematical Contest in Modeling (Shanghai Region) (2024).",
  "Class C Excellent Undergraduate Scholarship (2024).",
];

const publications = [
  {
    venue: "EMNLP · 2026",
    badge: "EMNLP 2026",
    title: "SAEExplainer: Interpreting SAE Features with Activation-Guided Preference Optimization",
    authors: ["Jingyi He", "Haiyan Zhao", "Ruxue Shi", "Yanguang Liu", "Xin Wang", "Fei Sun", "Mengnan Du"],
    equalContribution: [],
    correspondingAuthors: ["Mengnan Du"],
    image: "/papers/saeexplainer-overview.png",
    imageAlt: "Overview of the SAEExplainer construction and training pipeline",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.08496" }],
  },
  {
    venue: "Findings of ACL · 2026",
    badge: "ACL 2026",
    title: "HiGMem: A Hierarchical and LLM-Guided Memory System for Long-Term Conversational Agents",
    authors: ["Shuqi Cao", "Jingyi He", "Fei Tan"],
    equalContribution: ["Shuqi Cao", "Jingyi He"],
    correspondingAuthors: ["Fei Tan"],
    image: "/papers/higmem-framework.png",
    imageAlt: "Overview of the HiGMem hierarchical memory architecture and retrieval process",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2604.18349" }],
  },
  {
    venue: "Quantitative Imaging in Medicine and Surgery · 2026",
    badge: "QIMS 2026",
    title: "Clinical Evaluation of Free-Breathing Cardiac Multi-Parametric Mapping Using Dictionary-Based Motion Correction",
    authors: ["Tianshu Zhao", "Haiyang Chen", "Lan Lan", "Juan Gao", "Zhuo Chen", "Jingyi He", "Lizhi Xu", "Haibo Xu", "Chenxi Hu"],
    equalContribution: ["Tianshu Zhao", "Haiyang Chen", "Lan Lan"],
    correspondingAuthors: ["Haibo Xu", "Chenxi Hu"],
    image: "/papers/cardiac-mapping-framework.jpg",
    imageAlt: "Dictionary-based motion correction pipeline for cardiac multi-parametric mapping",
    links: [{ label: "PMC", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12971358/" }],
  },
];

const academicService = [
  "Reviewer of NeurIPS 2026.",
  "Reviewer of TMLR 2026.",
];

const experience = [
  {
    period: "2023–Now",
    degree: "B.Eng. at",
    institution: "Shanghai Jiao Tong University",
    institutionUrl: "https://www.sjtu.edu.cn/",
    location: "Shanghai, China.",
  },
];

const news = [
  { date: "2026-08", text: "🎉 Our SAEExplainer was accepted to EMNLP 2026!!" },
  { date: "2026-04", text: "🎉 Our HiGMem was accepted to Findings of ACL 2026!!" },
  { date: "2026-02", text: "🎉 Our clinical study on free-breathing cardiac mapping was published in QIMS!!" },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#about">Skip to content</a>
      <PrismNavigation />

      <div className="prism-shell" id="top">
        <aside className="profile-column" aria-label="Profile">
          <div className="portrait">
            <img
              src="/jingyi-he.jpg"
              alt="Portrait of Jingyi He"
              width="900"
              height="1200"
            />
          </div>

          <div className="identity">
            <h1>Jingyi He</h1>
            <p className="role">Undergraduate</p>
            <p className="institution">Shanghai Jiao Tong University</p>
          </div>
        </aside>

        <div className="main-column">
          <section className="content-block" id="about" aria-labelledby="about-heading">
            <h2 id="about-heading">About</h2>
            <div className="prose">
              <p>Welcome to my website, I am Jingyi He（何净仪）！</p>
              <p>
                I&apos;m a senior undergraduate at
                {" "}<a href="https://en.sjtu.edu.cn/" target="_blank" rel="noreferrer">Shanghai Jiao Tong University</a>,
                majoring in biomedical engineering. I am advised by Prof. Mengnan Du.
              </p>
              <p>
                My research interests include, but are not limited to, the interpretability of
                large language models (LLMs) and LLM agents.
              </p>
              <p>
                I&apos;m always open to discussions. Feel free to reach out via email at
                {" "}<a href="mailto:sunrain-H@sjtu.edu.cn">sunrain-H@sjtu.edu.cn</a> if you&apos;d like to connect!
              </p>
            </div>
          </section>

          <section className="content-block" id="news" aria-labelledby="news-heading">
            <h2 id="news-heading">News</h2>
            <div className="news-list">
              {news.map((item) => (
                <article className="news-row" key={`${item.date}-${item.text}`}>
                  <time>{item.date}</time>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="content-block" id="publications" aria-labelledby="publications-heading">
            <div className="section-title-row">
              <h2 id="publications-heading">Selected Publications</h2>
              <span>3 papers</span>
            </div>
            <div className="publication-stack">
              {publications.map((publication) => (
                <article className="publication-card" key={publication.title}>
                  <a
                    className="publication-visual"
                    href={publication.links[0].href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${publication.title}`}
                  >
                    <img src={publication.image} alt={publication.imageAlt} loading="lazy" />
                    <span className="publication-badge">{publication.badge}</span>
                  </a>

                  <div className="publication-copy">
                    <h3>
                      <a href={publication.links[0].href} target="_blank" rel="noreferrer">
                        {publication.title}
                      </a>
                    </h3>
                    <p className="authors">
                      {publication.authors.map((author, index) => (
                        <span key={author}>
                          {author === "Jingyi He" ? <strong>{author}</strong> : author}
                          {publication.equalContribution.includes(author) ? <sup>*</sup> : null}
                          {publication.correspondingAuthors.includes(author) ? <sup>†</sup> : null}
                          {index < publication.authors.length - 1 ? ", " : ""}
                        </span>
                      ))}
                      {publication.equalContribution.length > 0 || publication.correspondingAuthors.length > 0 ? (
                        <span className="contribution-note">
                          {" ("}
                          {publication.equalContribution.length > 0 ? "* Equal contribution" : null}
                          {publication.equalContribution.length > 0 && publication.correspondingAuthors.length > 0 ? "; " : null}
                          {publication.correspondingAuthors.length > 0
                            ? `† Corresponding author${publication.correspondingAuthors.length > 1 ? "s" : ""}`
                            : null}
                          {`)`}
                        </span>
                      ) : null}
                    </p>
                    <p className="venue">{publication.venue}</p>
                    <div className="publication-actions" aria-label="Publication links">
                      {publication.links.map((link) => (
                        <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="content-block" id="academic-service" aria-labelledby="academic-service-heading">
            <h2 id="academic-service-heading">Academic Service</h2>
            <ul className="service-list">
              {academicService.map((service) => <li key={service}>{service}</li>)}
            </ul>
          </section>

          <section className="content-block" id="experience" aria-labelledby="experience-heading">
            <h2 id="experience-heading">Experience</h2>
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-row" key={`${item.period}-${item.institution}`}>
                  <p className="period">{item.period}</p>
                  <h3>
                    {item.degree}{" "}
                    <a href={item.institutionUrl} target="_blank" rel="noreferrer">
                      {item.institution}
                    </a>
                    , {item.location}
                  </h3>
                </article>
              ))}
            </div>
          </section>

          <section className="content-block" id="honors-awards" aria-labelledby="honors-awards-heading">
            <h2 id="honors-awards-heading">Honors &amp; Awards</h2>
            <ul className="honors-list">
              {honorsAndAwards.map((honor) => <li key={honor}>{honor}</li>)}
            </ul>
          </section>
        </div>
      </div>

      <footer className="prism-footer">
        <p>© 2026 Jingyi He · Last updated August 2026</p>
        <p>
          <a href="https://github.com/xyjoey/PRISM" target="_blank" rel="noreferrer">
            Built with PRISM
          </a>
          {" "}· adapted for this homepage
        </p>
      </footer>
    </main>
  );
}
