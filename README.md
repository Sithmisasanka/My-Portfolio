# Sithmi Sasanka - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features stunning animations, particle effects, and a beautiful dark mode design.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌙 **Dark Mode** - Beautiful dark theme optimized for readability
- 📱 **Fully Responsive** - Looks great on all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎭 **Particle Effects** - Interactive particle background using tsParticles
- 🎬 **Framer Motion** - Smooth, professional animations throughout
- 🎯 **3D Graphics** - Three.js integration for stunning visual effects
- 📧 **Contact Form** - Functional contact form with validation
- 🚀 **Optimized Build** - Production-ready with code splitting and optimization

## 🛠️ Technology Stack

### Core

- **React 18.3.1** - UI library
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Vite 5.0.0** - Next-generation build tool

### Styling & UI

- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Framer Motion 12.23.24** - Animation library
- **React Icons 5.5.0** - Icon library

### Effects & Graphics

- **Three.js 0.181.2** - 3D graphics library
- **tsParticles 3.9.1** - Particle effects
- **@tsparticles/react 3.0.0** - React wrapper for tsParticles

### Other Libraries

- **Axios 1.13.2** - HTTP client for API requests

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.x or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

To check if you have Node.js and npm installed, run:

```bash
node --version
npm --version
```

## 🚀 Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd "Portfolio - Sithmi"
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

## 💻 Local Development

### Start Development Server

```bash
npm run dev
```

This will start the Vite development server. The application will open automatically in your default browser at:

```
http://localhost:3000
```

The development server includes:

- ⚡ Hot Module Replacement (HMR) - Changes reflect instantly
- 🔍 Source maps - Easy debugging
- 🎯 Fast refresh - Preserves component state

### Available Scripts

- **`npm run dev`** - Start development server on port 3000
- **`npm run build`** - Create production build in `dist/` folder
- **`npm run preview`** - Preview production build locally
- **`npm start`** - Alias for `npm run dev`

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

This will:

1. Run TypeScript compiler to check for type errors
2. Bundle and minify all assets
3. Generate optimized output in the `dist/` folder
4. Create source maps for debugging

The build output will be in the `dist/` directory, ready for deployment.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your portfolio with zero configuration.

#### Method 1: Deploy via Vercel Dashboard

1. **Sign up/Login** to [Vercel](https://vercel.com)
2. Click **"Add New Project"**
3. **Import** your Git repository (GitHub, GitLab, or Bitbucket)
4. Vercel will auto-detect Vite configuration
5. Click **"Deploy"**

That's it! Vercel will automatically:

- Build your project
- Deploy to a production URL
- Set up automatic deployments for every push to your main branch

#### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel
```

Follow the prompts to complete deployment.

#### Custom Domain on Vercel

1. Go to your project settings on Vercel
2. Navigate to **"Domains"**
3. Add your custom domain
4. Update your domain's DNS settings as instructed

---

### Deploy to GitHub Pages

#### 1. Update Configuration

The `package.json` already includes the homepage configuration:

```json
"homepage": "https://SithmiSasanka.github.io/SithmiSasankaPortfolio/"
```

Make sure this matches your GitHub username and repository name.

#### 2. Install gh-pages (Already included)

The `gh-pages` package is already in dependencies.

#### 3. Add Deployment Scripts

Add these scripts to your `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

#### 4. Deploy

```bash
npm run deploy
```

This will:

1. Build your project
2. Push the `dist/` folder to the `gh-pages` branch
3. Make it available at your GitHub Pages URL

#### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select the `gh-pages` branch
4. Click **Save**

Your site will be live at: `https://kavindi03.github.io/SithmiSasankaPortfolio/`

---

### Deploy to Netlify

#### Via Netlify Dashboard

1. **Sign up/Login** to [Netlify](https://www.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your Git repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**

#### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

---

### Other Deployment Options

- **AWS Amplify** - [Guide](https://docs.aws.amazon.com/amplify/latest/userguide/getting-started.html)
- **Firebase Hosting** - [Guide](https://firebase.google.com/docs/hosting)
- **Cloudflare Pages** - [Guide](https://developers.cloudflare.com/pages/)

## 📁 Project Structure

```
Portfolio - Sithmi/
├── public/                 # Static assets
│   ├── Sithmi-Sasanka-CV.pdf
│   └── vite.svg
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── scripts/           # Utility scripts
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎨 Customization Guide

### Update Personal Information

1. **Hero Section** - Edit `src/components/Hero.tsx`
   - Update name, title, description
   - Change CV download link

2. **About Section** - Edit `src/components/About.tsx`
   - Update bio and personal information

3. **Skills Section** - Edit `src/components/Skills.tsx`
   - Add/remove skills
   - Update skill categories

4. **Projects Section** - Edit `src/components/Projects.tsx`
   - Add your projects
   - Update project links and descriptions

5. **Contact Information** - Edit `src/components/Contact.tsx`
   - Update email, phone, social links

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // Add more custom colors
    }
  }
}
```

### Update Fonts

Fonts are loaded from Google Fonts in `index.html`. To change fonts:

1. Update the Google Fonts link in `index.html`
2. Update font families in `tailwind.config.js`

### Modify Particle Effects

Edit particle configuration in the component using tsParticles (usually in `Hero.tsx` or `App.tsx`).

## 🐛 Troubleshooting

### Build Errors

**Issue:** TypeScript errors during build

```bash
# Check for type errors
npm run build
```

**Solution:** Fix any TypeScript errors shown in the console

**Issue:** Module not found errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Development Server Issues

**Issue:** Port 3000 already in use

```bash
# Kill the process using port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9
```

**Issue:** Changes not reflecting

- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Restart the development server

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sithmi Sasanka**

- Portfolio: [Your Portfolio URL]
- GitHub: [@your-github-username](https://github.com/your-github-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- React team for the amazing library
- Vite team for the blazing-fast build tool
- Tailwind CSS for the utility-first CSS framework
- All open-source contributors

---

**Made with ❤️ by Sithmi Sasanka**
