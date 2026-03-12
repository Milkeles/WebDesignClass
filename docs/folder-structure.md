# Folder Structure

## Root
```
.
├── docs/       # Project documentation 
│   └── assets/ # Images and assets used in documentation
└── site/       # The React(Vite) application
```

## Site
```
site/
├── public/     # Static files copied as-is to dist (404.html, favicon, etc.)
└── src/        # Application source code
```

## Source (`site/src/`)
```
src/
├── assets/     # Images and assets used in the application
│   ├── fonts/  # Self-hosted WOFF2 font files (Montserrat Alternates, Ubuntu, Exo 2)
│   └── icons/  # Custom SVG icons imported as React components via vite-plugin-svgr
│
├── components/ # Reusable UI components shared across pages
│   └── ui/     # shadcn/ui primitives (Button, Card, Carousel, etc.)
│
├── context/    # React context providers (ThemeContext for dark/light mode)
│
├── lib/        # Utility modules (cookie helpers, etc.)
│
├── locales/    # Translation JSONs for available languages
│   └── ...
│
├── pages/      # Page-level components (About, Services, Work, Contact)
│
└── stories/    # Storybook stories for component development and documentation
```