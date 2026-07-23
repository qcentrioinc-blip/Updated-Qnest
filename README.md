# ProductX - Multi-Industry Solutions Platform

ProductX is a modern, comprehensive web application designed to showcase and provide solutions across various industries including Banking & Finance, High Tech, Healthcare (EHR & PMS), and AI Optimization. Built with the latest web technologies, it offers a dynamic and responsive user experience.

## 🚀 Features

- **Multi-Industry Support**: Dedicated sections and routing for:
  - Banking & Finance
  - High Tech
  - Healthcare (EHR & PMS)
  - AI Optimization
- **Modern UI/UX**:
  - Responsive design using **Tailwind CSS**.
  - Smooth animations powered by **Framer Motion** and **GSAP**.
  - Interactive 3D elements using **Three.js** and **React Three Fiber**.
- **Global Components**: Reusable components for consistent branding across the platform.
- **Dynamic Routing**: Robust routing system managing complex industry-specific paths using `react-router-dom`.

## 🛠 Tech Stack

- **Frontend Framework**: React 19 (via Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Emotion
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Lucide React, React Icons, MUI Icons
- **Routing**: React Router DOM

## 📂 Folder Structure

```
productx/
├── public/                 # Static assets
├── server/                 # Backend server logic
│   ├── index.ts            # Server entry point
│   ├── .env                # Server environment variables
│   └── package.json        # Server dependencies
├── src/
│   ├── assets/             # Project assets (images, fonts, etc.)
│   ├── components/         # React components organized by module
│   │   ├── AIOptimization/ # Components for AI Optimization industry
│   │   ├── Banking&Finance/# Components for Banking & Finance industry
│   │   ├── EHR&PMS/        # Components for Healthcare industry
│   │   ├── Global/         # Shared global components (Navbar, Footer, etc.)
│   │   ├── HighTech/       # Components for High Tech industry
│   │   ├── HomePage/       # Homepage specific components
│   │   └── LandingPage/    # Landing page components
│   ├── context/            # React Context providers (e.g., ScrollContext)
│   ├── routes/             # Route definitions and page wrappers
│   ├── styles/             # Global styles and theme configurations
│   ├── App.tsx             # Main application component with routing logic
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global CSS imports (Tailwind directives)
├── package.json            # Project dependencies and scripts
└── vite.config.ts          # Vite configuration
```

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (Node Package Manager)

### Installation

1.  **Clone the repository** (if applicable):
    ```bash
    git clone <repository-url>
    cd productx
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Compiles TypeScript and builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the built application.

---

© 2024 ProductX. All rights reserved.
