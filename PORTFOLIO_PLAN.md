# Portfolio Project Plan

## 1. Folder Structure

```
portfolio/
├── public/
│   ├── vite.svg
│   └── (other static assets)
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Container.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Badge.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   └── Contact.jsx
│   │   └── widgets/
│   │       ├── VantaBackground.jsx
│   │       └── AnimatedCounter.jsx
│   ├── data/
│   │   ├── index.js
│   │   ├── personalInfo.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── experience.js
│   ├── styles/
│   │   └── tailwind.css
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 2. Component Architecture

### Layout Components
- **Header**: Navigation bar with logo, menu links (for mobile: hamburger menu)
- **Footer**: Copyright, social links, maybe a brief note
- **Container**: Centered content wrapper with max-width and padding

### UI Primitives (Reusable)
- **Button**: Primary, secondary, outline variants with hover/focus states
- **Input**: Text, email, textarea with label and error state
- **Card**: For project/service items with hover lift effect
- **Badge**: For skill tags or status indicators

### Section Components (Pages/Sections)
- **Hero**: Main heading, subheading, call-to-action buttons, animated background
- **About**: Brief bio, profile image, key metrics (years experience, etc.)
- **Skills**: Categorized skill display (Frontend, Backend, Data Science, Tools) with progress bars or badges
- **Projects**: Grid/Card showcase of featured projects with images, tech stack, links
- **Experience**: Timeline or card-based work history
- **Contact**: Form for reaching out (Name, Email, Message) with validation

### Widgets
- **VantaBackground**: Wrapper for Vanta.js effects (e.g., waves, dots) behind sections
- **AnimatedCounter**: For displaying stats like projects completed, years of experience, etc.

## 3. Data Architecture

All data will be static JavaScript objects in the `src/data/` directory for easy maintenance and type safety (if we were using TypeScript, but we're using JavaScript with JSDoc for clarity).

### Data Files:
- `personalInfo.js`: Name, title, bio, contact info, social links
- `skills.js`: Object with categories (frontend, backend, dataScience, tools) each containing array of skill objects (name, level/icon)
- `projects.js`: Array of project objects (title, description, image, techStack, liveUrl, repoUrl, featured)
- `experience.js`: Array of experience objects (company, role, duration, location, responsibilities, technologies)
- `index.js`: Export all data as a single object for easy import

Example structure for a project:
```javascript
{
  id: 1,
  title: "Personal Portfolio",
  description: "A full-stack dashboard for monitoring ML models with real-time analytics.",
  image: "/images/projects/dashboard.jpg",
  techStack: ["React", "Node.js", "TensorFlow", "PostgreSQL"],
  liveUrl: "https://example.com",
  repoUrl: "https://github.com/example/dashboard",
  featured: true
}
```

## 4. Styling Architecture

### Tailwind CSS Configuration
- **Custom Colors**: Extend with premium dark theme colors (e.g., deep blues, purples, accent gradients)
- **Dark Mode**: Enabled via class strategy (using `dark:` variant)
- **Custom Utilities**: For glassmorphism (background-blur, border-opacity, etc.)
- **Typography**: Custom font sizes, weights, and line ratios for hierarchy
- **Transitions**: Default transition properties for hover/focus states
- **Breakpoints**: Customize for mobile-first responsive design (sm, md, lg, xl, 2xl)

### Glassmorphism Effects
- Achieved with Tailwind's `bg-white/10 backdrop-blur` in dark mode, and `bg-black/10 backdrop-blur` in light mode (though we're focusing on dark)
- Used on cards, modals, and sections

### Gradients
- Custom gradient definitions in `tailwind.config.js` for brand consistency
- Used in headers, buttons, and hero sections

### Spacing and Layout
- Consistent 4px or 8px grid system using Tailwind's spacing scale
- Max-width containers for readability on large screens

## 5. Dependency Requirements

### Core
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `vite`: ^4.4.0
- `@vitejs/plugin-react`: ^4.0.0

### Styling
- `tailwindcss`: ^3.3.0
- `postcss`: ^8.4.0
- `autoprefixer`: ^10.4.0

### Animations & Effects
- `framer-motion`: ^10.0.0
- `vanta`: ^0.5.0 (or latest)
- `lucide-react`: ^0.200.0 (for icons)

### Optional (but recommended)
- `clsx`: ^2.0.0 (for conditional classNames)
- `tailwind-merge`: ^1.0.0 (to merge Tailwind classes without conflicts)

### Dev Dependencies
- `eslint`: ^8.0.0
- `eslint-plugin-react`: ^7.0.0
- `eslint-plugin-react-hooks`: ^4.0.0

### Note:
We will avoid unnecessary dependencies to keep the bundle size small. All components will be built with the above stack.

## Development Rules Reminder
1. Build phase-by-phase (we are in planning phase only).
2. Do not implement future phases.
3. Keep components modular and reusable.
4. Do not put entire application in App.jsx.
5. Use actual content, no lorem ipsum.
6. Prioritize performance and mobile responsiveness.
7. Ensure project remains runnable after every phase (we'll test after each phase when we implement).

This plan outlines the foundation. Next steps would be to set up the project with Vite, install dependencies, configure Tailwind, and then begin implementing sections one by one.