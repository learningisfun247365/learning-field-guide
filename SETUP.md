# Learning Field Guide - Setup Instructions

## What This Is
Your Docusaurus-based field guide website. This is a clean, transferable version ready for any development environment.

## Quick Setup in New Environment

### 1. Prerequisites
- Node.js (version 18 or higher)
- Git (for version control)
- VSCode (or your preferred code editor)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```
Your site will be available at `http://localhost:3000`

### 4. Build for Production (when ready)
```bash
npm run build
```

## Project Structure
- `docs/` - Your field guide content (Markdown files)
- `src/pages/` - Custom pages (homepage, etc.)
- `docusaurus.config.ts` - Site configuration
- `sidebars.ts` - Navigation structure

## Your Content So Far
- ✅ Homepage intro set up
- ✅ First Principles page created
- ✅ Site configured for your GitHub repo
- ⏳ Ready for your field guide content

## Next Steps
1. Create your field guide sections in `docs/field-guide/`
2. Add your projects to `docs/projects/`
3. Build out your library and current learning pages
4. Set up GitHub authentication and deploy

## Deployment Options
- **Netlify**: Drag & drop the build folder
- **Vercel**: Connect your GitHub repo
- **GitHub Pages**: Use the built-in deployment
- **Render**: Connect and auto-deploy

## Need Help?
The Docusaurus documentation is excellent: https://docusaurus.io/docs

## File Structure for Your Content
```
docs/
├── intro.md (your homepage)
├── first-principles.md ✅
├── about-me.md (to create)
├── field-guide/
│   ├── learning-process.md (to create)
│   └── learning-product.md (to create)
├── projects/
│   ├── coffee-and-t.md (to create)
│   ├── mentorship.md (to create)
│   └── [other projects]
└── library.md (to create)
```

You're all set up! 🚀
