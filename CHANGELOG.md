# Changelog

All notable changes to this project will be documented in this file.
## [2.2.0] - 2026-03-30  
**Milestone 4 (M4) – Polishing, Legal and Testing**

### Added
- Cookie Consent component with persistent user preferences  
- Legal pages:
  - Privacy Policy
  - Terms and Conditions  
- Theme preference persistence using localStorage  
- Language preference persistence for improved UX  

### Changed
- Improved routing setup for GitHub Pages compatibility  
- Refined animations and transitions across components  
- Minor UI/UX improvements for consistency and accessibility  
- Updated navigation and footer to include legal pages  

### Fixed
- Resolved SPA routing issues on refresh (GitHub Pages compatibility)  
- Fixed translation inconsistencies between English and Bulgarian  
- Addressed minor layout bugs across multiple screen sizes  
- Improved stability of theme toggle and state persistence  

### Notes
- User testing across different age groups is still pending and will be included in a future update  

## [2.1.0] - 2026-03-14  
**Milestone 3 (M3) – Pages**

### Added
- About Page with reusable sections and structured layout  
- Services and Pricing Page with responsive cards and pricing tiers  
- Previous Work / Clients Page with featured projects and client showcase  
- Contact Page with functional contact form and responsive layout  

### Changed
- Minor layout and spacing adjustments across pages for consistency  
- Improved navigation to include all newly added pages  
- Updated Section and PageHero components to accommodate multiple page layouts  

### Fixed
- Resolved responsive issues on FeaturedProject components on smaller screens  
- Adjusted font sizes and spacing for readability across pages  

## [2.0.0] - 2026-03-08
**Milestone 2 (M2) – Landing Page**

### Added
- Storybook setup with theme switcher and accessibility addon
- Button component with variants (default, secondary, outline, ghost, link, icon, navigation), sizes, and effects (shineHover, hoverUnderline)
- CardGrid component with responsive grid and carousel (shadcn Carousel) modes
- Roadmap component with accordion steps, responsive vertical (mobile) and horizontal (desktop) layouts
- FeaturedProject component with picture element, imagetools optimization, and alternating reverse layout
- PageHero component for reuse across secondary pages
- Section component for consistent section layout
- Navbar component with language switcher (flag-icons, react-i18next) and dark mode toggle
- Footer component with navigation, contact, social links, and legal links
- Logo component
- Landing page assembly with Hero, Stats bar, Services, Featured Work, and Process sections
- Language switching support (English and Bulgarian) via react-i18next
- Custom SVG icons for services (Consultation, Audit, Development)
- Font configuration with Montserrat Alternates, Ubuntu, and Exo 2
- Hero section with circular profile image and optimized responsive images via vite-imagetools
- Dark/light mode theming via context

### Changed
- Migrated inline SVGs to lucide-react throughout
- Refactored App.tsx to use extracted components and Section wrapper

## [1.0.0] - 2026-03-03  
**Milestone 1 (M1) – Documentation & Initial Setup**

### Added
- Initial project structure and README with project overview (Fervor Web concept)
- MIT LICENSE
- Documentation in `docs/` folder:
  - Visual style guide
  - Technical design document (TDD)
  - Configuration management plan (CMP)
- Project wiki/documentation setup (hosted via Jekyll or similar)
- Moodboard and visual style guide
- Basic site scaffold with Tailwind CSS + TypeScript
- Development workflow (npm scripts: dev/build)

### Fixed
- Building/rendering issues in workflow and formatting

See [README](https://milkeles.github.io/FervorWeb/docs/) for installation and project details.