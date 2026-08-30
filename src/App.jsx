
import React from 'react';
import {
  ArrowUpRight, Github, Mail, Phone, MapPin, FileText,
  ExternalLink, Menu, Code2, MessageCircle
} from 'lucide-react';

const projects = [
  {
    number: '01',
    name: 'NotaryPro',
    type: 'Notary Office Management',
    description: 'A digital notary management platform designed to improve office workflows and document management.',
    tags: ['Django', 'PostgreSQL', 'React'],
    image: '/images/notarypro.png',
    link: 'https://github.com/Libanabdiqadir/notary-archive'
  },
  {
    number: '02',
    name: 'Sharci Same',
    type: 'Offline Public Notary System',
    description: 'An offline public notary management system for handling documents and daily notary operations.',
    tags: ['PHP', 'MySQL', 'Management System'],
    image: '/images/sharcisame.png',
    link: 'https://github.com/Abdirahman-cell/OFFLINE-PUBLIC-NOTARY-MS'
  },
  {
    number: '03',
    name: 'Golden City',
    type: 'Hotel Management System',
    description: 'A hotel management system developed to support hotel operations and administrative tasks.',
    tags: ['PHP', 'MySQL', 'Web Development'],
    image: '/images/dashboard.png',
    link: 'https://github.com/Abdirahman-cell/hotel-management-system'
  },
  {
    number: '04',
    name: 'Yahye Bakery MS',
    type: 'Bakery Web Project',
    description: 'A web project developed for bakery-related business operations.',
    tags: ['PHP', 'MySQL', 'Web Development'],
    image: '/images/yahye.jpg'
  }
];

const skills = [
  'C#', 'PHP', 'HTML', 'CSS', 'JavaScript',
  'SQL Server', 'Database Design', 'CRUD',
  'Computer Networking', 'Prompt Engineering'
];

const documents = [
  {
    title: 'Curriculum Vitae',
    subtitle: 'CV · PDF document',
    url: '/documents/My%20Cur.vitae.pdf'
  },
  {
    title: 'Recommendation Letters',
    subtitle: 'Professional references · PDF',
    url: '/documents/recommendation%20letters.pdf'
  },
  {
    title: 'Certificates and ID Cards',
    subtitle: 'Certificates · PDF document',
    url: '/documents/certificates%20and%20id%20cards.pdf'
  }
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">A.</span>
          <span>ABDIRAHMAN<span className="brand-dot">.</span></span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#documents">Documents</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let's talk <ArrowUpRight size={15} />
        </a>

        <a className="mobile-menu" href="#contact" aria-label="Go to contact">
          <Menu />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span></span> AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="hero-kicker">
              COMPUTER SCIENCE STUDENT <i>·</i> SOFTWARE DEVELOPER
            </p>

            <h1>
              Building digital<br />
              <span>experiences</span><br />
              with purpose.
            </h1>

            <p className="hero-description">
              I'm Abdirahman Hussein Abdi. I enjoy turning ideas into useful,
              thoughtful software and practical digital solutions.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button button-ghost" href="#contact">
                Get in touch <Mail size={16} />
              </a>
            </div>

            <div className="hero-meta">
              <span><MapPin size={14} /> Hargeisa, Somaliland</span>
              <span><Code2 size={14} /> Software & Web Development</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>

            <div className="visual-card">
              <div className="visual-card-top">
                <span>PORTFOLIO / 2026</span>
                <span className="gold-line"></span>
              </div>

              <img
                src="/images/profile.jpeg"
                alt="Abdirahman Hussein Abdi"
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  objectPosition: 'center 25%',
                  borderRadius: '8px'
                }}
              />

              <div className="visual-card-bottom">
                <span>ABDIRAHMAN<br />HUSSEIN</span>
                <span>CS<br />DEVELOPER</span>
              </div>
            </div>

            <div className="floating-tag tag-top">01 / THINK</div>
            <div className="floating-tag tag-bottom">02 / BUILD</div>
            <div className="hero-index">01 — 03</div>
          </div>

          <a className="scroll-cue" href="#about">
            SCROLL TO EXPLORE <span></span>
          </a>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <SectionHeading
            eyebrow="01 / ABOUT"
            title="A little about me."
          />

          <div className="about-grid">
            <div className="about-statement">
              Curiosity drives me.<br />
              <span>Problem-solving</span> keeps me building.
            </div>

            <div className="about-copy">
              <h3 className="about-name">
                Abdirahman <span>Hussein Abdi</span>
              </h3>

              <p>
                I'm a Computer Science student at Admas University in
                Hargeisa, Somaliland, with a growing focus on software
                development, web technologies, and practical IT solutions.
              </p>

              <p>
                I value clear thinking, continuous learning, and building
                technology that solves real problems.
              </p>

              <div className="about-facts">
                <div>
                  <span>EDUCATION</span>
                  <strong>Computer Science</strong>
                  <small>Admas University</small>
                </div>

                <div>
                  <span>CURRENT GPA</span>
                  <strong>4.00 / 4.00</strong>
                  <small>Computer Science</small>
                </div>

                <div>
                  <span>LOCATION</span>
                  <strong>Hargeisa</strong>
                  <small>Somaliland</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-pad">
          <SectionHeading
            eyebrow="02 / CAPABILITIES"
            title="Tools in my toolkit."
            text="Technologies and areas I have worked with or am developing."
          />

          <div className="skills-list">
            {skills.map((skill, i) => (
              <div className="skill" key={skill}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <strong>{skill}</strong>
                <ArrowUpRight size={16} />
              </div>
            ))}
          </div>
        </section>

        <section className="work section-wrap section-pad" id="work">
          <div className="work-heading">
            <SectionHeading
              eyebrow="03 / SELECTED WORK"
              title="Projects & explorations."
              text="Selected software and web development projects."
            />
            <span className="project-count">
              03 <small>PROJECTS</small>
            </span>
          </div>

          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number} / PROJECT</span>
                  <span className="project-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className="project-art">
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>

                <div className="project-info">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="tag-row">
                    {project.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View repository <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="documents section-wrap section-pad" id="documents">
          <SectionHeading
            eyebrow="04 / DOCUMENTS"
            title="Professional documents."
            text="Access my CV, recommendation letters, and certificates."
          />

          <div className="document-panel">
            <div className="document-intro">
              <FileText size={25} />
              <h3>Documents library</h3>
              <p>View or download my professional documents.</p>
            </div>

            {documents.map(document => (
              <div className="document-item" key={document.title}>
                <div className="pdf-icon">PDF</div>

                <div className="doc-text">
                  <strong>{document.title}</strong>
                  <span>{document.subtitle}</span>
                </div>

                <a
                  className="project-link"
                  href={document.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View PDF <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="contact section-wrap section-pad" id="contact">
          <SectionHeading
            eyebrow="05 / CONTACT"
            title="Have a project in mind?"
            text="For opportunities, collaborations, or professional inquiries, feel free to reach out."
          />

          <div className="contact-grid">
            <div className="contact-main">
              <h3>
                Let's make<br />
                <span>something useful.</span>
              </h3>

              <a
                className="email-link"
                href="mailto:aapdirahmanhusen@gmail.com"
              >
                aapdirahmanhusen@gmail.com <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="contact-details">
              <a href="mailto:aapdirahmanhusen@gmail.com">
                <Mail />
                <span>
                  <small>EMAIL</small>
                  aapdirahmanhusen@gmail.com
                </span>
                <ArrowUpRight />
              </a>

              <a href="tel:+252636315157">
                <Phone />
                <span>
                  <small>PHONE</small>
                  +252 63 6315157
                </span>
                <ArrowUpRight />
              </a>

              <a
                href="https://github.com/Abdirahman-cell"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
                <span>
                  <small>GITHUB</small>
                  Abdirahman-cell
                </span>
                <ArrowUpRight />
              </a>

              <div className="discord-contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.7 5.3a18.4 18.4 0 0 0-4.6-1.4l-.6 1.2a17 17 0 0 0-5 0l-.6-1.2a18.4 18.4 0 0 0-4.6 1.4C1.4 9.6.6 13.8 1 18a18.5 18.5 0 0 0 5.7 2.9l1.2-2a11.8 11.8 0 0 1-1.9-.9l.5-.4a13.2 13.2 0 0 0 11 0l.5.4a11.8 11.8 0 0 1-1.9.9l1.2 2A18.5 18.5 0 0 0 23 18c.5-4.9-.8-9-3.3-12.7ZM8.5 15.2c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm7 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
                </svg>

                <span>
                  <small>DISCORD DISPLAY NAME</small>
                  Rixo...coolcatalyst
                  <br />
                  <small>USERNAME: riho20</small>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">A.</span>
          <span>ABDIRAHMAN<span className="brand-dot">.</span></span>
        </a>

        <span>Designed with intent. © 2026 Abdirahman Hussein Abdi.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}

export default App;