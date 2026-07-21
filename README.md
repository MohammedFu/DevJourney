# DevJourney — Multi-Page Digital CV & Project Showcase

**DevJourney** is a high-performance, multi-page React portfolio application and interactive digital CV created for **Mohammed Fuad Al_Sanhani**. Built strictly according to the **Stitch Digital Career Portfolio / Nocturne Professional** design system, it features a sleek dark aesthetic (`#101415`), electric blue accents (`#7bd0ff`), elegant serif headlines (`Playfair Display`), clean body typography (`Inter`), and interactive bento grids.

---

## 🌟 Key Features

- **Multi-Page View Architecture**:
  - **Overview (`HomePage.tsx`)**: Hero section with real-time status badge ("Available for Senior & Lead Roles"), headshot card with experience badge, core technical expertise bento grid, and atmospheric system stats counter (15+ Projects Shipped, 99.9% Uptime).
  - **Experience & Achievements (`ExperiencePage.tsx`)**: Career timeline featuring position roles (Sofa Company, Ministry of Civil Services, Twintech LMS, SABAFON, Lutf Optics), achievement highlights, technology stack pills, academic education cards (Twintech BIT GPA: 3.26, Al-Rowad), and verified certifications.
  - **Interactive Project Gallery (`ProjectsPage.tsx`)**: Filterable project showcase (Mobile Apps, Web Systems, Full Stack) featuring extracted public GitHub repositories (`LM-E-mart-mobile-app`, `University-Quality-Assurance`, `event-booking-system`, `LM-Coffee-Mobile-Web-Coffee-Shop`, `designer-store`, `Expense_Tracker_App`, `CrudApp`) with direct source code links.
  - **Contact & Brand (`ContactPage.tsx`)**: Interactive message form with floating labels, direct connection cards (LinkedIn, GitHub, Email, Phone), live Sana'a local time indicator (GMT+3), and "Beyond the Code" soft skills & leadership bento section.

- **CV Viewer & PDF Exporter (`CvModal.tsx`)**:
  - Full-screen interactive modal to preview and print/download Mohammed's complete resume in PDF format.

- **Responsive & Accessible**:
  - Mobile drawer navigation menu, smooth section scrolling, glassmorphism backdrop blur cards, and hover glow effects.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@theme` custom tokens
- **Typography**: Google Fonts (`Playfair Display`, `Inter`)
- **Iconography**: Google `Material Symbols Outlined`

---

## 📁 Repository Structure

```text
DevJourney/
├── public/                  # Public static assets & favicon
├── src/
│   ├── components/          # Reusable layout & UI components
│   │   ├── Navbar.tsx       # Header navigation with active tabs & mobile drawer
│   │   ├── Footer.tsx       # Dark theme footer with quick links
│   │   └── CvModal.tsx      # Print-ready CV modal dialog
│   ├── data/
│   │   └── portfolioData.ts # Structured CV dataset & extracted GitHub repos
│   ├── pages/               # Dedicated full-page views
│   │   ├── HomePage.tsx     # Overview landing page & core expertise
│   │   ├── ExperiencePage.tsx # Career journey timeline & education bento
│   │   ├── ProjectsPage.tsx # Interactive GitHub project showcase grid
│   │   └── ContactPage.tsx  # Direct message form, connections & live clock
│   ├── App.tsx              # Main state container & page tab router
│   ├── index.css            # Tailwind CSS v4 design system tokens & glows
│   └── main.tsx             # React DOM entry point
├── index.html               # Main HTML document with Google Fonts imports
├── package.json             # NPM dependencies & scripts
├── tsconfig.json            # TypeScript compiler configuration
└── vite.config.ts           # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MohammedFu/DevJourney.git
   cd DevJourney
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready output will be compiled into the `dist/` directory.

---

## 👤 Developer Profile

- **Developer**: Mohammed Fuad Al_Sanhani
- **Email**: [mohammedalsanhani2@gmail.com](mailto:mohammedalsanhani2@gmail.com)
- **Phone**: +967 770-180-062
- **Location**: Zubairy St., Sana'a, Yemen
- **LinkedIn**: [mohammed-al-sanhani](https://www.linkedin.com/in/mohammed-al-sanhani-40217a331)
- **GitHub**: [@MohammedFu](https://github.com/MohammedFu)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
