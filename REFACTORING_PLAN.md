# Bonyan Group - Codebase Refactoring Plan

## Current Structure Analysis

- ✅ Good: Separation of layout, sections, and UI components
- ❌ Issue: 48 unused UI components from shadcn/ui
- ❌ Issue: Figma folder with single component
- ❌ Issue: No clear shared/common components structure
- ❌ Issue: Styles folder not being used effectively

## Proposed New Structure

```
bonyan-group/
├── app/
│   └── [locale]/
│       ├── layout.jsx              # Root layout
│       ├── page.jsx                # Home page
│       ├── about/
│       │   └── page.jsx            # About page
│       ├── products/
│       │   └── page.jsx            # Products page
│       ├── industries/
│       │   └── page.jsx            # Industries page
│       ├── contact/
│       │   └── page.jsx            # Contact page
│       └── globals.css
│
├── components/
│   ├── common/                     # Shared components across pages
│   │   ├── ImageWithFallback.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── PageHero.jsx
│   │   └── CTAButton.jsx
│   │
│   ├── layout/                     # Layout components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   └── MobileMenu.jsx
│   │
│   ├── home/                       # Home page specific sections
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── WhatWeDoSection.jsx
│   │   ├── IndustriesSection.jsx
│   │   └── CommitmentSection.jsx
│   │
│   ├── contact/                    # Contact page components
│   │   ├── ContactForm.jsx
│   │   └── ContactInfo.jsx
│   │
│   └── ui/                         # Only used UI components
│       ├── button.jsx
│       ├── input.jsx
│       ├── textarea.jsx
│       └── select.jsx
│
├── lib/
│   ├── utils.js                    # Utility functions
│   └── constants.js                # App constants
│
├── i18n/
│   ├── request.js
│   └── routing.js
│
├── messages/
│   ├── en.json
│   └── ar.json
│
└── public/
    └── images/                     # Static images
```

## Refactoring Steps

### Phase 1: Cleanup (Remove Unused)

1. Remove unused shadcn/ui components (keep only: button, input, textarea, select)
2. Remove empty/unused folders
3. Clean up imports

### Phase 2: Reorganize

1. Rename `sections/` to `home/` (home-specific components)
2. Move `ImageWithFallback` to `common/`
3. Create `common/` folder for shared components
4. Create `lib/` folder for utilities

### Phase 3: Extract Reusable Components

1. Create `SectionHeader` component (used in multiple sections)
2. Create `CTAButton` component (used in multiple places)
3. Create `PageHero` component (for future pages)

### Phase 4: Prepare for New Pages

1. Create page structure for:
   - About page (detailed company info)
   - Products page (detailed product catalog)
   - Industries page (detailed industry solutions)
   - Contact page (full contact form)

### Phase 5: Optimize

1. Create constants file for repeated values
2. Add proper TypeScript types (if needed)
3. Optimize imports

## Benefits

- ✅ Clear separation of concerns
- ✅ Easy to add new pages
- ✅ Reusable components
- ✅ Smaller bundle size (removed unused components)
- ✅ Better maintainability
- ✅ Scalable architecture
