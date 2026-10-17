import PrismNavigation from "./PrismNavigation";

const honorsAndAwards = [
  "Academician Chen Yazhu Scholarship (2025).",
  "National 3rd Prize in the National Undergraduate Biomedical Engineering Innovation Design Competition (2025).",
  "2nd Prize in the Contemporary Undergraduate Mathematical Contest in Modeling (Shanghai Region) (2024).",
  "Class C Excellent Undergraduate Scholarship (2024).",
];

const publications = [
  {
    venue: "arXiv preprint · 2026",
    badge: "arXiv 2026",
    title: "RewardExplainer: Learning Reward Model Explanations from Counterfactual Preference Feedback",
    authors: ["Jingyi He", "Nier Wu", "Shuang Liu", "Xin Wang", "Mengnan Du", "Xia Hu"],
    equalContribution: [],
    correspondingAuthors: ["Mengnan Du"],
    image: "/papers/rewardexplainer-framework.png",
    imageAlt: "Overall framework of RewardExplainer",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2609.33989" }],
  },
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

const education = [
  {
    period: "2023–Now",
    degree: "B.Eng. in Biomedical Engineering",
    institution: "Shanghai Jiao Tong University",
    abbreviation: "SJTU",
    institutionUrl: "https://www.sjtu.edu.cn/",
    localName: "上海交通大学",
    program: "Biomedical Engineering",
    location: "Shanghai, China",
    logo: "/sjtu-logo.svg",
    logoAlt: "Shanghai Jiao Tong University emblem",
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
            <nav className="profile-links" aria-label="Academic and social profiles">
              <a
                className="profile-link"
                href="https://scholar.google.com/citations?hl=zh-CN&user=fLiiflgAAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3 2 8l10 5 8-4v6h2V8L12 3Zm-6 8.6V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.4l-6 3-6-3Z" />
                </svg>
                <span>Google Scholar</span>
              </a>
              <a
                className="profile-link"
                href="https://github.com/he-jingyi"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.88c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.82c.85 0 1.71.12 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
                <span>GitHub</span>
              </a>
            </nav>
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
                large language models (LLMs), LLM agents, and post-training alignment.
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
              <span>4 papers</span>
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

          <section className="content-block" id="education" aria-labelledby="education-heading">
            <h2 id="education-heading">Education</h2>
            <div className="education-list">
              {education.map((item) => (
                <article className="education-row" key={`${item.period}-${item.institution}`}>
                  <img
                    className="education-logo"
                    src={item.logo}
                    alt={item.logoAlt}
                    width="56"
                    height="56"
                    loading="lazy"
                  />
                  <div className="education-copy">
                    <h3>
                      <a href={item.institutionUrl} target="_blank" rel="noreferrer">
                        {item.institution}
                      </a>
                      <span className="education-abbreviation">({item.abbreviation})</span>
                    </h3>
                    <p className="education-subtitle">{item.localName} · {item.program}</p>
                    <p className="education-degree">{item.degree}</p>
                  </div>
                  <div className="education-meta">
                    <p className="education-period">{item.period}</p>
                    <p className="education-location">{item.location}</p>
                  </div>
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
        <p>© 2026 Jingyi He · Last updated October 2026</p>
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
