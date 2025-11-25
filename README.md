# Alab Design Co. — Website Scripts Bundle

This repository contains the source code, build system, and versioned bundles used for the Alab Design Co. website.  
The site is hosted in Webflow, while all JavaScript is authored, organized, and bundled here using Vite.

The final output is delivered to Webflow via jsDelivr CDN, enabling clean versioning, safe updates, and zero need to re-export the site.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

---

## 📋 Commands

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (outputs to `dist/bundle.min.js`)
- `npm run preview` - Preview production build locally

---

## 📁 Project Structure

```
src/
├── main.js                    # Entry point - initializes all modules
├── animations/
│   └── pages/
│       └── home/              # Home page specific animations
│           ├── index.js       # Exports all home page animations
│           ├── loader.js
│           ├── portfolio.js
│           ├── testimonials.js
│           ├── manifesto.js
│           ├── services.js
│           ├── footer.js
│           └── faq.js
├── utils/                     # Reusable utility functions
│   ├── dom.js                 # DOM utility exports
│   ├── lightbeams.js
│   └── text-scramble.js
└── config/                    # Configuration files
    └── (empty - ready for settings)
```

**Important:** All source code lives inside `/src`.  
Never manually edit `/dist` — it's generated automatically.

---

## ⚡ Build System

This project uses **Vite** to compile and bundle all scripts into a single production file.

### Build Configuration
- **Entry Point:** `src/main.js`
- **Output:** `dist/bundle.min.js`
- **Format:** IIFE (Immediately Invoked Function Expression)
- **Minification:** esbuild
- **Global Name:** `WebflowBundle`

### Path Aliases
The project uses path aliases for cleaner imports:

```javascript
import { initLoader } from "@animations/pages/home/index.js";
import { initLightBeams } from "@utils/dom.js";
import { settings } from "@config/settings.js";
```

Available aliases:
- `@animations` → `src/animations`
- `@utils` → `src/utils`
- `@config` → `src/config`

---

## 🔧 Development Workflow

1. **Development:** Run `npm run dev` to start the Vite dev server
2. **Testing:** Make changes in `/src` and test locally
3. **Build:** Run `npm run build` to generate production bundle
4. **Deploy:** Upload `dist/bundle.min.js` to your CDN (jsDelivr) or version control
5. **Webflow:** Update the script reference in Webflow to point to the new bundle URL

---

## 🌐 Webflow Integration

### Adding the Bundle to Webflow

1. Build the production bundle:
   ```bash
   npm run build
   ```

2. Upload `dist/bundle.min.js` to your CDN or version control system

3. In Webflow, add a custom code embed in the site settings or page settings:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/your-org/adc-website@main/dist/bundle.min.js"></script>
   ```

4. The bundle will automatically initialize on `DOMContentLoaded`

### Versioning
When updating the bundle:
- Tag releases in git for version control
- Update the jsDelivr URL with the new version/tag
- No need to re-export the Webflow site

---

## 📝 Code Organization

### Module Structure
- Each animation/feature is a self-contained module
- Modules export default initialization functions
- Main entry point (`main.js`) orchestrates all initializations

### Adding New Features

1. **Page-specific animations:** Add to `src/animations/pages/[page-name]/`
2. **Reusable utilities:** Add to `src/utils/`
3. **Configuration:** Add to `src/config/`
4. **Export:** Update the relevant index file to export your new module
5. **Initialize:** Add initialization call to `src/main.js` if needed

### Best Practices
- Use vanilla JavaScript (ES6+) — no jQuery or frameworks
- Follow Webflow integration patterns
- Use `DOMContentLoaded` or `Webflow.push()` for initialization
- Keep modules focused and single-purpose
- Leverage path aliases for cleaner imports

---

## 📦 Dependencies

- **Vite** (^7.2.4) - Build tool and dev server

---

## 🔄 Version History

See git tags for versioned releases of the bundle.
