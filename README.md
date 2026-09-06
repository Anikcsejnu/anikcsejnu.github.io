# anikcsejnu.github.io

Personal portfolio site, built with React + Vite, following Atomic Design.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  atoms/        # Button, Icon, Logo, Tag, SkillChip, Reveal, ...
  molecules/     # NavList, SocialLinks, ExperienceCard, ProjectItem, ...
  organisms/     # Header, Hero, About, Skills, Experience, Projects, Contact, Footer
  templates/     # MainLayout
  pages/         # HomePage
  hooks/         # useScrollHeader, useTypedText, useActiveSection, useInView, ...
  data/          # Content (nav, socials, skills, experience, projects, contact)
  styles/        # tokens.css (design vars), reset.css, shared.module.css
```

Content lives in `src/data/` — update those files to change copy without touching components.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the app and publishes
`dist/` to GitHub Pages via the native Pages Actions integration. No manual build/commit step
needed — just merge to `master`.
