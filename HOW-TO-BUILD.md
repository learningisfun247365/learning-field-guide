# How to Build This Field Guide

A complete guide to building a professional, earth-tone learning field guide using Docusaurus, custom CSS, and modern web fonts.

## 🎯 Project Overview

**What We Built:**
- A sophisticated learning field guide website
- Earth-tone color palette with high contrast
- Inter + Lora typography pairing
- Dark sidebar navigation
- Responsive, professional design
- Ready for content and deployment

**Tech Stack:**
- **Docusaurus** (React-based static site generator)
- **Node.js & npm** (development environment)
- **Google Fonts** (Lora for headings)
- **CSS Custom Properties** (theming system)
- **GitHub** (version control and deployment)

## 📋 Prerequisites

Before starting, ensure you have:
- **Node.js** (v18 or newer)
- **npm** (comes with Node.js)
- **Git** (for version control)
- **GitHub account** (for hosting/deployment)
- **Text editor** (VS Code, Cursor, etc.)

## 🚀 Step-by-Step Build Process

### Step 1: Initial Docusaurus Setup

```bash
# Create new Docusaurus project
npx create-docusaurus@latest my-field-guide classic

# Navigate to project directory
cd my-field-guide

# Install dependencies
npm install

# Start development server
npm start
```

**What this gives you:**
- Basic Docusaurus site structure
- Default styling and navigation
- Development server at `localhost:3000`

### Step 2: Project Structure Planning

**Content Architecture Decision:**
Based on field guide concept (vs. manual), we organized content around:
- **Start Here** - Orientation and principles
- **Core Framework** - Learning methodology
- **Real Examples** - Case studies and projects
- **Library** - Resources and influences

**File Structure Created:**
```
docs/
├── intro.md                    # Welcome page
├── first-principles.md         # Core beliefs
├── about-me.md                 # Personal context
├── library.md                  # Books and resources
├── field-guide/
│   ├── _category_.json
│   ├── learning-process.md
│   └── learning-product.md
├── methodology/
│   ├── _category_.json
│   ├── thinking-models.md
│   ├── sensing-needs.md
│   └── framing-problems.md
└── projects/
    ├── _category_.json
    ├── coffee-and-t.md
    ├── learning-village.md
    └── zero-to-data.md
```

### Step 3: GitHub Repository Setup

**Repository Configuration:**
- **Name:** `learning-field-guide`
- **Visibility:** Public (for sharing knowledge)
- **Description:** "A practical field guide for anyone responsible for learning at work or interested in how to learn best. I'm practicing what I preach about learning in public by sharing thoughts and insights as I build programs when AI changes everything - because we learn better together"

**Authentication Setup:**
1. Created Personal Access Token (PAT) for secure Git operations
2. Configured remote repository
3. Set up for easy deployment

### Step 4: Design Philosophy & Color Theory

**Design Inspiration:**
- Natural, earthy minimalism
- Organic color palettes
- High contrast for readability
- Professional yet approachable

**Color Palette Development:**
- **Primary:** Rich sage green family (#5a7c5a to #3a513a)
- **Accent:** Warm honey gold (#b8954d)
- **Supporting:** Sand, cream, stone, charcoal
- **Philosophy:** Earth tones for trust, warmth, and natural wisdom

### Step 5: Typography Implementation

**Font Pairing Decision:**
- **Body Text:** Inter (clean, readable, UI-optimized)
- **Headings:** Lora (elegant serif with calligraphic influence)
- **Rationale:** Perfect contrast between modern/readable and organic/sophisticated

**Implementation:**
```css
/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

/* CSS Variables */
--ifm-font-family-base: 'Inter', 'Avenir', system-ui, -apple-system, sans-serif;
--ifm-font-family-heading: 'Lora', Georgia, serif;
```

### Step 6: Custom CSS Development

**Key Styling Decisions:**

1. **Color System:**
   - CSS custom properties for consistent theming
   - Dark and light mode support
   - Higher contrast ratios for accessibility

2. **Sidebar Design:**
   - Dark background (#3a513a) instead of default light
   - White text with proper contrast
   - Gold accents for active states
   - Improved navigation hierarchy

3. **Typography Hierarchy:**
   - Lora for all headings (H1-H6)
   - Inter for body text
   - Proper line heights and spacing
   - Responsive sizing

4. **Interactive Elements:**
   - Smooth transitions and hover effects
   - Subtle shadows and depth
   - Consistent button styling
   - Professional micro-interactions

### Step 7: Content Architecture

**Page Templates Created:**
1. **Homepage (`intro.md`):**
   - Welcome message
   - How to use the field guide
   - Navigation sections
   - Clear value proposition

2. **Category Pages:**
   - `_category_.json` files for navigation structure
   - Organized sections with clear hierarchy
   - Placeholder content ready for expansion

3. **Individual Content Pages:**
   - Consistent structure across all pages
   - Placeholder content with clear purpose
   - Internal linking strategy

### Step 8: Configuration Customization

**Key `docusaurus.config.ts` Changes:**
- Site metadata (title, tagline, URL)
- Navigation structure
- Footer customization
- GitHub integration
- Removed blog functionality
- Custom favicon and social images

**Sidebar Configuration (`sidebars.ts`):**
- Logical content grouping
- Clear navigation hierarchy
- Expandable sections
- User-friendly labels

### Step 9: Development Workflow

**Local Development:**
```bash
# Start development server
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve
```

**File Organization:**
- All styling in `src/css/custom.css`
- Content in `docs/` directory
- Configuration in root files
- Assets in `static/` directory

### Step 10: Deployment Preparation

**What's Ready for Deployment:**
- Complete Docusaurus build system
- Optimized CSS and JavaScript
- Responsive design
- SEO-friendly structure
- GitHub integration

**Deployment Options:**
- **Render** (like inspiration site)
- **Netlify** (excellent DX)
- **Vercel** (fast builds)
- **GitHub Pages** (free with repo)

## 🎨 Design Decisions Explained

### Why Earth Tones?
- **Trust & Authority:** Natural colors convey reliability
- **Warmth & Approachability:** Inviting for learners
- **Professional:** Suitable for L&D practitioners
- **Timeless:** Won't look dated in a few years

### Why Inter + Lora?
- **Contrast:** Sans-serif vs. serif creates hierarchy
- **Readability:** Inter optimized for screens and learning content
- **Personality:** Lora adds organic, sophisticated touch
- **Performance:** Both fonts load quickly and render well

### Why Dark Sidebar?
- **Contrast:** Better visual separation from content
- **Focus:** Draws attention to navigation
- **Professional:** More sophisticated than default light
- **Brand Consistency:** Matches earth-tone palette

## 🛠 Technical Implementation Notes

### CSS Architecture
- **CSS Custom Properties:** For consistent theming
- **Modular Approach:** Each component styled separately
- **Responsive Design:** Mobile-first approach
- **Performance:** Minimal CSS footprint

### Content Strategy
- **Placeholder Content:** Ready for real content
- **Internal Linking:** Cross-references between sections
- **SEO Structure:** Proper headings and meta information
- **Accessibility:** High contrast and readable fonts

### Development Best Practices
- **Version Control:** Git for all changes
- **Documentation:** Comments in code and config
- **Testing:** Regular local testing during development
- **Cleanup:** Removed unused files and dependencies

## 🚀 Next Steps for Content Creation

### Priority Content Areas:
1. **First Principles** - Your core beliefs and approach
2. **About Me** - Personal context and credibility
3. **Thinking Models** - Frameworks for L&D work
4. **Project Case Studies** - Real examples with lessons learned
5. **Library** - Resources and influences

### Content Writing Tips:
- **Field Guide Style:** Focus on recognition and navigation vs. step-by-step instructions
- **Learning in Public:** Share process, not just outcomes
- **Practical Value:** Include real examples and actionable insights
- **Personal Voice:** Let your expertise and personality shine through

## 🎯 Success Metrics

**What Makes This Successful:**
- **Visual Appeal:** Professional, earth-tone aesthetic
- **Readability:** High contrast, excellent typography
- **Navigation:** Clear, intuitive structure
- **Performance:** Fast loading, responsive design
- **Maintainability:** Easy to update and expand
- **Deployment Ready:** One step away from going live

## 📚 Resources & References

**Design Inspiration:**
- [Figma's Best Fonts for Websites](https://www.figma.com/resource-library/best-fonts-for-websites/)
- Earth-tone color theory and organic minimalism examples
- Field guide vs. manual philosophy

**Technical Documentation:**
- [Docusaurus Documentation](https://docusaurus.io/)
- [Google Fonts](https://fonts.google.com/)
- CSS Color Theory and Accessibility Guidelines

**Tools Used:**
- Cursor (AI-assisted development)
- GitHub (version control)
- Chrome DevTools (testing and debugging)

---

**Built with ❤️ and AI assistance - practicing what we preach about learning in public!**
