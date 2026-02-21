# Enio Maiale — Personal Website

Personal website of [Enio Maiale](https://www.linkedin.com/in/eniomaiale), Senior Director of Software Engineering at the Miami HEAT.

## Stack

- **Framework** — [Next.js 14](https://nextjs.org) (App Router)
- **Language** — TypeScript
- **Styling** — [Tailwind CSS 3](https://tailwindcss.com)
- **Animations** — [Framer Motion 11](https://www.framer.com/motion)
- **Deployment** — Azure App Service (Linux, Node 20 LTS) via Azure Pipelines

## Project Structure

```
├── app/
│   ├── globals.css       # Tailwind base, component classes, custom styles
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Home page (composes all sections)
├── components/
│   ├── Navbar.tsx        # Fixed navbar with scroll detection + mobile menu
│   ├── Hero.tsx          # Full-screen hero with typewriter effect
│   ├── About.tsx         # Summary + key metrics grid
│   ├── Experience.tsx    # Animated timeline
│   ├── Skills.tsx        # Skill tags grouped by category
│   ├── Education.tsx     # Education cards
│   ├── Contact.tsx       # Email + LinkedIn contact links
│   └── Footer.tsx        # Footer
├── hooks/
│   └── useTypewriter.ts  # Typewriter animation hook
├── lib/
│   └── data.ts           # All resume/profile content (single source of truth)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── azure-pipelines.yml   # CI/CD pipeline for Azure App Service
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

The project is deployed automatically to **Azure App Service** (`personal-website-fe`) via Azure Pipelines on every push to `master`.

The pipeline:
1. Installs Node 20 on the build agent
2. Runs `npm ci` and `npm run build`
3. Prunes dev dependencies
4. Packages and uploads the artifact
5. Deploys to Azure App Service with `npm run start` as the startup command

## Updating Content

All profile content lives in a single file: `lib/data.ts`.  
Edit that file to update experience, skills, education, or contact details — no component changes needed.
