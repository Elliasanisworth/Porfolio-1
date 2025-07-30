
# Portfolio Website

A modern, interactive portfolio website built with React and Vite, showcasing projects, skills, and experience with stunning visual effects and animations.

## 🚀 Live Demo

This project is developed on [Click Here](https://porfolio-liard-ten.vercel.app/) 

## 📋 Project Overview

This is a personal portfolio website featuring:
- Interactive 3D globe and animations
- Parallax scrolling effects
- Project showcase with hover previews
- Skills visualization with orbiting icons
- Contact form integration
- Responsive design for all devices

## 🛠️ Technologies & Tools Used

### Core Framework & Build Tools
- **[React](https://reactjs.org/)** - Frontend JavaScript library
- **[Vite](https://vitejs.dev/)** - Fast build tool and development server
- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Utility for merging Tailwind classes
- **[Magic UI](https://magicui.design/)** - Beautiful React components

### 3D Graphics & Animations
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)** - React renderer for Three.js
- **[React Three Drei](https://github.com/pmndrs/drei)** - Useful helpers for React Three Fiber
- **[Cobe](https://github.com/shuding/cobe)** - Interactive 3D globe component
- **[Motion (Framer Motion)](https://motion.dev/)** - Animation library for React
- **[Maath](https://github.com/pmndrs/maath)** - Math utilities for 3D applications

### Routing & Navigation
- **[React Router DOM](https://reactrouter.com/)** - Declarative routing for React

### Responsive Design
- **[React Responsive](https://github.com/yocontra/react-responsive)** - Media queries in React

### Email Integration
- **[EmailJS](https://www.emailjs.com/)** - Send emails directly from JavaScript

### Development Tools
- **[ESLint](https://eslint.org/)** - JavaScript linting utility
- **[Replit](https://replit.com/)** - Online IDE and development platform

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Alert.jsx       # Alert notifications
│   ├── Astronauts.jsx  # 3D astronaut model
│   ├── Card.jsx        # Card components
│   ├── CopyEmailBotton.jsx # Email copy functionality
│   ├── FlipWord.jsx    # Text flip animations
│   ├── HeroText.jsx    # Hero section text
│   ├── Loader.jsx      # Loading components
│   ├── Marquee.jsx     # Scrolling text effect
│   ├── OrbitCircle.jsx # Orbiting elements
│   ├── ParallaxBackground.jsx # Parallax effects
│   ├── Particles.jsx   # Particle system
│   ├── Project.jsx     # Individual project cards
│   ├── ProjectDetails.jsx # Project detail views
│   ├── Timeline.jsx    # Experience timeline
│   ├── framWorks.jsx   # Skills orbiting animation
│   └── globe.jsx       # Interactive 3D globe
├── constants/
│   └── index.js        # Project data and constants
├── sections/           # Main page sections
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form
│   ├── Experiences.jsx # Work experience
│   ├── Footer.jsx      # Footer component
│   ├── Hero.jsx        # Landing section
│   ├── Navbar.jsx      # Navigation bar
│   ├── Projects.jsx    # Projects showcase
│   └── Testimonial.jsx # Testimonials section
├── App.jsx             # Main application component
├── index.css           # Global styles
└── main.jsx            # Application entry point
```

## 🎨 Features

### Interactive Elements
- **3D Globe**: Interactive globe showing timezone information
- **Parallax Background**: Mountain layers with parallax scrolling effect
- **Orbiting Skills**: Animated skill icons orbiting in circles
- **Project Previews**: Hover effects showing project images
- **Flip Text Animation**: Dynamic text transitions in hero section

### Responsive Design
- Mobile-first approach using Tailwind CSS
- Responsive grid layouts
- Adaptive typography and spacing
- Cross-device compatibility

### Projects Showcase
- E-commerce platform (Snatch)
- Model Context Protocol implementation
- 2D Java adventure game (Blue Boy Adventure)
- AI-powered collaboration platform
- WordPress custom theme

## 🚀 Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm or yarn package manager

### Installation

1. **Fork this Repl** on [Replit](https://replit.com/)
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

## 📱 Development

This project is configured for development on Replit:
- The `.replit` file contains the run configuration
- Development server runs on `npm run dev`
- Production build uses Vite's optimized bundling

## 🎯 Key Components

### Globe Component
Interactive 3D globe built with Cobe library, showing global connectivity and timezone information.

### Parallax Background
Multi-layer mountain background with parallax scrolling effects using Framer Motion.

### Skills Visualization
Orbiting circles showcasing technical skills with smooth animations and hover effects.

### Project Gallery
Dynamic project showcase with hover previews and detailed project information.

## 📧 Contact Integration

The contact form uses EmailJS for direct email sending without a backend server, making it perfect for static deployments.

## 🎨 Design Philosophy

This portfolio emphasizes:
- **Visual Impact**: Stunning 3D effects and animations
- **User Experience**: Smooth transitions and intuitive navigation
- **Performance**: Optimized loading and rendering
- **Accessibility**: Semantic HTML and keyboard navigation
- **Responsiveness**: Seamless experience across all devices

## 🎨 Design Resources & Assets

Special thanks to these amazing resources that made this project visually stunning:

### Icons & Graphics
- **[SVG Repo](https://www.svgrepo.com/)** - High-quality SVG icons and graphics
- **[Vecteezy](https://www.vecteezy.com/)** - Vector graphics and illustrations
- **[Magic UI](https://magicui.design/)** - Beautiful React component library

### Images & Assets
- Background images and visual elements from various open-source contributors
- 3D models and textures from the Three.js community
- Custom graphics created specifically for this portfolio

*If you contributed assets to this project and weren't mentioned, please let me know so I can give proper credit!*


## 🙏 Acknowledgments

Special thanks to:
- **[Replit](https://replit.com/)** for providing the development platform and IDE
- **[EmailJS](https://www.emailjs.com/)** for email integration services
- **[PMND](https://pmnd.rs/)** for the amazing Three.js ecosystem
- **[Tailwind CSS](https://tailwindcss.com/)** for the utility-first styling approach
- **[SVG Repo](https://www.svgrepo.com/)** for the extensive icon library
- **[Vecteezy](https://www.vecteezy.com/)** for beautiful vector graphics
- **[Magic UI](https://magicui.design/)** for elegant React components
- **[vercel](https://vercel.com)** for helping deploye my porfolio
- The open-source community for all the incredible tools and libraries

*If you've contributed to this project in any way and I've missed acknowledging you, please reach out so I can give you proper credit!*

---

