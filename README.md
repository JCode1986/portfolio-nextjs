# Joseph Hangarter Portfolio

Personal portfolio for Joseph Hangarter, positioned around full-stack product development with React and Next.js.

Live site: https://joseph-hangarter-portfolio.vercel.app/

## Focus

- Product-focused full-stack engineering
- React and Next.js specialization
- Responsive interface design
- Case-study driven project presentation
- Accessible, SEO-friendly, static App Router pages

## Featured Projects

The public portfolio currently highlights two projects:

- **WhereKeep** - full-stack household inventory SaaS product
- **Leah Naidoo** - professional client website for an emerging legal professional

Each project is powered by the shared data model in `lib/content.js` and renders through the reusable `/work/[slug]` case-study route.

## Tech Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- JavaScript / JSX
- Vercel deployment
- ESLint flat config

## Project Structure

```txt
app/
  page.jsx              Homepage
  layout.jsx            Global metadata and layout
  work/[slug]/page.jsx  Case-study route
  sitemap.js            Generated sitemap
  robots.js             Robots configuration
components/
  HeroSection.jsx
  ProjectSection.jsx
  ExperienceSection.jsx
  AboutSection.jsx
  HowIWorkSection.jsx
  SkillsSection.jsx
  ContactSection.jsx
  CaseStudyPage.jsx
  Footer.jsx
lib/
  content.js            Shared site, project, skill, and experience data
public/
  project-previews/     Optimized project screenshots
  resume.pdf
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
npm audit
```

## Deployment Notes

The project targets Node `>=20.9.0` for Next.js 16 compatibility.

Set `NEXT_PUBLIC_SITE_URL` in production if the canonical site URL changes. The default is:

```txt
https://joseph-hangarter-portfolio.vercel.app
```

## Project Screenshot Assets

The homepage and case-study pages use optimized screenshots from:

- `public/project-previews/wherekeep.jpg`
- `public/project-previews/leahnaidoo.jpg`

Future optional additions:

- WhereKeep dashboard and inventory workflow screenshots
- Leah Naidoo mobile homepage and contact section screenshots
