* {
  box-sizing: border-box;
}

:root {
  --bg: #0b1020;
  --bg-soft: #111827;
  --panel: rgba(15, 23, 42, 0.7);
  --card: rgba(15, 23, 42, 0.8);
  --card-border: rgba(148, 163, 184, 0.16);
  --text: #e5eefb;
  --muted: #a7b4c9;
  --primary: #7c9cff;
  --primary-strong: #5b7cff;
  --accent: #64d6c3;
  --shadow: 0 20px 45px rgba(15, 23, 42, 0.45);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top, rgba(124, 156, 255, 0.2), transparent 35%),
    linear-gradient(180deg, #09111d 0%, #0c1220 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  background: rgba(11, 16, 32, 0.7);
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
  z-index: 10;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
}

.brand {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.nav-links a,
.socials a,
.contact-links a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.socials a:hover,
.contact-links a:hover {
  color: var(--text);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(260px, 0.8fr);
  gap: 2rem;
  align-items: center;
  padding: 5rem 0 3rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.5rem, 6vw, 4.4rem);
  line-height: 1.02;
  letter-spacing: -0.06em;
}

.lead {
  margin-top: 1.1rem;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.7;
  max-width: 640px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.25rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.actions a:hover {
  transform: translateY(-1px);
}

.actions .primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: white;
  box-shadow: var(--shadow);
}

.actions .secondary {
  color: var(--text);
  border: 1px solid var(--card-border);
  background: rgba(15, 23, 42, 0.35);
}

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  list-style: none;
  padding: 0;
  margin-top: 2rem;
}

.socials a {
  font-weight: 600;
}

.profile-card {
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.92), rgba(17, 24, 39, 0.9));
  border: 1px solid var(--card-border);
  border-radius: 24px;
  padding: 2rem 1.5rem;
  box-shadow: var(--shadow);
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 1.6rem;
  letter-spacing: 0.06em;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  margin: 0 auto 1rem;
}

.profile-card h2 {
  margin: 0 0 1rem;
  text-align: center;
  font-size: 1.2rem;
}

.profile-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.profile-card li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0;
  border-top: 1px solid rgba(148, 163, 184, 0.12);
  color: var(--muted);
}

.profile-card li:first-child {
  border-top: 0;
}

.profile-card strong {
  color: var(--text);
  font-weight: 600;
}

.section {
  padding: 4.5rem 0;
}

.section-heading {
  margin-bottom: 1.8rem;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.05em;
}

.muted {
  background: rgba(15, 23, 42, 0.34);
  border-top: 1px solid rgba(148, 163, 184, 0.1);
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}

.about-grid p {
  margin: 0;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.8;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.chips span {
  display: inline-flex;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: rgba(124, 156, 255, 0.08);
  border: 1px solid rgba(124, 156, 255, 0.18);
  color: var(--text);
  font-weight: 600;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: 18px;
  padding: 1.35rem;
  box-shadow: var(--shadow);
}

.project-tag {
  display: inline-block;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(100, 214, 195, 0.1);
  color: var(--accent);
  border: 1px solid rgba(100, 214, 195, 0.2);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.project-card h3 {
  margin: 1rem 0 0.75rem;
  font-size: 1.4rem;
}

.project-card p,
.project-card li {
  color: var(--muted);
  line-height: 1.7;
}

.project-card ul {
  margin: 1rem 0 0;
  padding-left: 1.1rem;
}

.contact-section {
  padding-bottom: 5rem;
}

.contact-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  background: linear-gradient(135deg, rgba(124, 156, 255, 0.14), rgba(100, 214, 195, 0.08));
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 26px;
  padding: 2rem 1.5rem;
}

.contact-box h2 {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  letter-spacing: -0.05em;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.contact-links a {
  display: inline-flex;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid var(--card-border);
  color: var(--text);
  text-decoration: none;
}

.site-footer {
  border-top: 1px solid rgba(148, 163, 184, 0.1);
  padding: 1.25rem 0 2.5rem;
  color: var(--muted);
}

@media (max-width: 860px) {
  .hero,
  .about-grid,
  .project-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 3.25rem;
  }

  .contact-box {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 560px) {
  .nav {
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero-copy h1 {
    font-size: 2.5rem;
  }
}
