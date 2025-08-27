# Learning Field Guide

A personal learning and knowledge management system built with [Docusaurus](https://docusaurus.io/).

## Project Structure

```
learning-field-guide/
├── docs/                    # Content files (markdown)
│   ├── about-me.md
│   ├── field-guide/        # Main learning content
│   └── projects/           # Project documentation
├── src/                    # React components and custom code
│   ├── components/
│   ├── css/
│   └── pages/
├── static/                 # Static assets (images, etc.)
├── build/                  # Generated site (ignored in git)
├── node_modules/           # Dependencies (ignored in git)
├── docusaurus.config.ts    # Main configuration
├── sidebars.ts            # Navigation structure
└── package.json           # Dependencies and scripts
```

## Quick Start

### Installation

```bash
npm install
# or
yarn install
```

### Local Development

```bash
npm start
# or
yarn start
```

This starts a local development server at `http://localhost:3000` and opens your browser. Changes are reflected live.

### Build for Production

```bash
npm run build
# or
yarn build
```

Generates static content in the `build/` directory ready for deployment.

### Preview Production Build

```bash
npm run serve
# or
yarn serve
```

Serves the production build locally for testing.

## Content Management

- **Pages**: Edit markdown files in `docs/`
- **Navigation**: Update `sidebars.ts` to change menu structure
- **Site Config**: Modify `docusaurus.config.ts` for site-wide settings
- **Styling**: Add custom CSS in `src/css/`
- **Components**: Create React components in `src/components/`

## Deployment

The site can be deployed to any static hosting service:

### GitHub Pages

```bash
GIT_USER=<Your GitHub username> npm run deploy
# or
GIT_USER=<Your GitHub username> yarn deploy
```

### Other Platforms

Deploy the contents of the `build/` directory to:
- Netlify
- Vercel  
- AWS S3
- Any web server

## Development Tips

1. **Content Organization**: Keep related content grouped in folders
2. **Images**: Store in `static/img/` and reference with `/img/filename.jpg`
3. **Links**: Use relative paths for internal links between docs
4. **Live Reload**: The dev server automatically refreshes on file changes

## Repository Best Practices

This repository follows clean git practices:
- ✅ Source code and content are tracked
- ❌ Build artifacts (`build/`) are ignored
- ❌ Dependencies (`node_modules/`) are ignored
- ❌ Temporary files are ignored

Always run `npm install` or `yarn install` after cloning to restore dependencies.
