# DevSecOps Journal

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Repository Description

This repository hosts my DevSecOps portfolio, built with Docusaurus. It presents an "About me" landing page (hero, skills, project highlights, contact) as a set of custom React components, plus a docs section with write-ups for each featured project. The site supports rapid local development, customizable theming, and deployment to GitHub Pages or any static/Nginx host via the included Dockerfile.

## Table of Contents

- [DevSecOps Journal](#devsecops-journal)
  - [Repository Description](#repository-description)
  - [Table of Contents](#table-of-contents)
  - [Quickstart](#quickstart)
    - [Prerequisites](#prerequisites)
    - [How to Start](#how-to-start)
  - [Usage](#usage)
    - [Configuration](#configuration)
    - [Customizing Content](#customizing-content)
    - [Build](#build)
    - [Type Checking](#type-checking)
  - [Deployment](#deployment)
    - [GitHub Pages (automatic)](#github-pages-automatic)
    - [Docker / Nginx (manual)](#docker--nginx-manual)
  - [Repository Structure](#repository-structure)
  - [License](#license)

## Quickstart

### Prerequisites

- [Node.js](https://nodejs.org/) (v22 or later recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### How to Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create your local environment file from the provided example:

   ```bash
   cp example.env .env
   ```

3. Start the local development server:

   ```bash
   npm start
   ```

   This opens a browser window at `http://localhost:3000/`. Most changes are reflected live without restarting the server.

## Usage

### Configuration

The site reads its configuration from environment variables (loaded from `.env` via `dotenv`) in `docusaurus.config.ts`. Copy `example.env` to `.env` and adjust the values to point the build at your own fork/deployment:

| Variable             | Purpose                                                              |
| --------------------- | --------------------------------------------------------------------- |
| `DEPLOYMENT_URL`      | The production URL the site is served from (`siteConfig.url`)        |
| `DEPLOYMENT_BRANCH`   | The branch GitHub Pages deploys are published from                    |
| `BASE_URL`            | The path the site is served under, e.g. `/Portfolio/` for GitHub Pages project pages |
| `GITHUB_ORG`          | GitHub organization/user used for the Pages deployment config         |
| `GITHUB_PROJECT`      | GitHub repository name used for the Pages deployment config           |
| `GIT_REPOSITORY_URL`  | Repository URL, used for links back to the source                     |

If a variable is not set, `docusaurus.config.ts` falls back to sensible defaults for this repository, so a plain `npm start` works even without a `.env` file.

### Customizing Content

- **Skills** shown in the "My skills" section are defined as a typed array in [`src/components/my-skills/index.tsx`](src/components/my-skills/index.tsx). Add, remove, or edit an entry's `icon`, `label`, and `usage` bullet points to change what is displayed; icons are SVGs under [`static/img/skills`](static/img/skills). The same array feeds both the desktop grid of flip cards and the mobile carousel ([`src/components/skill-carousel`](src/components/skill-carousel)), which groups three skills per slide.
- **Projects** shown in "My project highlights" are defined the same way in [`src/components/project-highlights/index.tsx`](src/components/project-highlights/index.tsx), including tags, description, images, and links to the docs page/repository.
- **Colors, fonts, and spacing tokens** are defined once as CSS custom properties in [`src/css/custom.css`](src/css/custom.css) and reused across every component's `*.module.css` file, so retheming the site mostly means editing that one file.
- **New sections/components** should be added as their own folder under `src/components/<kebab-case-name>/`, containing an `index.tsx` (PascalCase component) and a matching `<name>.module.css` file, following the pattern of the existing components.
- **Project docs pages** live under [`docs/`](docs) as Markdown files and are wired into the sidebar via [`sidebars.ts`](sidebars.ts).

### Build

```bash
npm run build
```

This generates static content into the `build/` directory, which can be served by any static file host.

To preview the production build locally:

```bash
npm run serve
```

### Type Checking

```bash
npm run typecheck
```

Runs the TypeScript compiler in check-only mode across the project.

## Deployment

### GitHub Pages (automatic)

Deployment to GitHub Pages is fully automated via GitHub Actions:

- [`.github/workflows/main.yml`](.github/workflows/main.yml) triggers on every push to `main` or `project-setup` and on every PR to `main`, and calls the reusable [`deploy.yaml`](.github/workflows/deploy.yaml) workflow.
- That workflow installs dependencies, creates `.env` from `example.env`, runs `npm run build`, and publishes the `build/` output to GitHub Pages using `actions/deploy-pages`.
- The deploy job only runs for pushes to the default branch (`main`) or to `project-setup`. PR runs only build the site, as a check.
- `project-setup` is allowed to deploy so the site can be reviewed live while PR #1 (`project-setup` → `main`) is still open. Once it is merged, `project-setup` will be removed from both workflows and from the `github-pages` environment's deployment branch rules.

The live site is available at <https://nicomeyerdev.github.io/Portfolio/>.

### Docker / Nginx (manual)

The repository also includes a multi-stage [`Dockerfile`](Dockerfile) that builds the site with Node and serves the static output with Nginx, for deployments outside of GitHub Pages:

```bash
cp example.env .env
docker build -t devsecops-journal .
docker run -p 8080:80 devsecops-journal
```

The site is then available at `http://localhost:8080/`. Build args in the `Dockerfile` (`DEPLOYMENT_URL`, `DEPLOYMENT_BRANCH`, `GITHUB_ORG`, `GITHUB_PROJECT`) can be overridden with `--build-arg` if you need different defaults baked into the image.

## Repository Structure

The repository is organized as follows:

- `docs/`: Markdown write-ups for each featured project, shown under the site's `/docs` section.
- `src/components/`: Custom React components (one folder per component, `index.tsx` + `*.module.css`) that make up the page sections (Header, Hero, My-Skills, Project-Highlights, Contact, Footer, and their sub-components).
- `src/css/custom.css`: Shared design tokens (colors, fonts, spacing) and global style overrides.
- `src/pages/index.tsx`: Assembles all section components (Header, Hero, My-Skills, Project-Highlights, Contact, Footer) into the homepage layout.
- `src/theme/Navbar/`: Replaces Docusaurus's default navbar with the custom `Header` on all non-homepage pages (e.g. `/docs`), since the homepage renders its own `Header`.
- `static/`: Static assets (images, icons) served as-is, referenced via `useBaseUrl`.
- `sidebars.ts`: Configures the sidebar structure for the `/docs` section.
- `docusaurus.config.ts`: Main Docusaurus configuration (site metadata, plugins, theme).
- `tsconfig.json`: TypeScript compiler configuration, extending Docusaurus's base config.
- `babel.config.js`: Babel preset configuration used by Docusaurus's build tooling.
- `package.json` / `package-lock.json`: Project dependencies and npm scripts.
- `example.env`: Example environment variables; copy to `.env` to configure your local/deployment build (see [Configuration](#configuration)).
- `Dockerfile`: Multi-stage build that produces an Nginx image serving the built site (see [Docker / Nginx](#docker--nginx-manual)).
- `.dockerignore`: Files excluded from the Docker build context.
- `.github/workflows/`: CI/CD pipelines - building/deploying to GitHub Pages (`main.yml`, `deploy.yaml`) and automatically opening/checking pull requests for feature branches (`create-pr.yaml`, `check-open-pr.yaml`).
- `LICENSE`: MIT license for this repository.

## License

This project is licensed under the [MIT License](LICENSE).
