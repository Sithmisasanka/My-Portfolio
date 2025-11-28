# Sithmi Sasanka - Portfolio Website
![Portfolio Preview](https://github.com/Sithmisasanka/My-Portfolio/blob/master/src/assets/MyPortfolio.png?raw=1)

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features stunning animations, particle effects, and a beautiful dark mode design.

**Live Demo:** https://sithmi-sasanka.vercel.app/#

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🎨 **Modern UI/UX** with smooth animations  
- 🌙 **Dark mode** optimized for readability  
- 📱 **Fully responsive** across all devices  
- ⚡ **Vite-powered performance**  
- 🎭 **tsParticles** for dynamic particle effects  
- 🎬 **Framer Motion** animations  
- 🎯 **Three.js** 3D effects  
- 📧 **Contact form** with validation  
- 🚀 **Optimized production build**  

## 🛠️ Technology Stack

### Core
- **React 18.3.1**
- **TypeScript 5.9.3**
- **Vite 5.0.0**

### UI & Styling
- **Tailwind CSS 3.4.0**
- **Framer Motion 12.23.24**
- **React Icons 5.5.0**

### Graphics & Effects
- **Three.js 0.181.2**
- **tsParticles 3.9.1**
- **@tsparticles/react 3.0.0**

### Utilities
- **Axios 1.13.2**

## 📋 Prerequisites

- **Node.js 16+**
- **npm** or **yarn**

Check your versions:

```bash
node --version
npm --version
```

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd "Portfolio - Sithmi"
```

### 2. Install Dependencies
```bash
npm install
```

## 💻 Local Development

Start development server:

```bash
npm run dev
```

Access locally:

```
http://localhost:3000
```

Useful scripts:

- `npm run dev` — Start development  
- `npm run build` — Build for production  
- `npm run preview` — Preview production build  

## 🏗️ Building for Production

```bash
npm run build
```

This will:
- Compile TypeScript  
- Bundle + minify assets  
- Output to `dist/`  
- Generate source maps  

## 🌐 Deployment

### ▶ Deploy on Vercel (Recommended)

1. Go to **https://vercel.com**
2. Click **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Vite settings
5. Click **Deploy**

### ▶ Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

### Custom Domain
- Go to **Vercel → Project Settings → Domains**
- Add your domain  
- Update DNS  

## 📁 Project Structure

```
Portfolio - Sithmi/
├── public/
│   ├── Sithmi-Sasanka-CV.pdf
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── scripts/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization Guide

### Hero Section
Modify in `Hero.tsx`:
- Name  
- Title  
- Description  
- CV link  

### About Section
Modify in `About.tsx`  
- Personal bio  
- Skills summary  

### Skills
Edit `Skills.tsx`  
- Add or remove skills  

### Projects
Edit `Projects.tsx`  
- Project images  
- Live links  
- GitHub links  

### Contact
Edit `Contact.tsx`  
- Email  
- Social links  

## 🐛 Troubleshooting

### TypeScript Build Errors
```bash
npm run build
```

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
lsof -ti:3000 | xargs kill -9
```

## 📄 License

This project is open source under the **MIT License**.

## 👤 Author

**Sithmi Sasanka**

- Portfolio: https://sithmi-sasanka.vercel.app/#  
- GitHub: https://github.com/Sithmisasanka  
- LinkedIn: https://www.linkedin.com/in/sithmi-sasanka-964751256

---

**Made with ❤️ by Sithmi Sasanka**
