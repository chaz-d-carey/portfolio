# Portfolio Website

A modern, responsive portfolio website showcasing professional experience, projects, and expertise. Built with React and Vite for optimal performance and developer experience.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Interactive Components**: 
  - Animated typing effect in hero section
  - Interactive service cards with hover effects
  - Skills marquee display
  - Project showcase carousel
- **Performance Optimized**: Built with Vite for lightning-fast development and production builds
- **Component-Based Architecture**: Modular React components for easy maintenance and scalability

## 🛠️ Technologies

### Core
- **[React](https://reactjs.org/)** (v18.3.1) - UI library
- **[Vite](https://vitejs.dev/)** (v6.0.5) - Build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** (v3.4.17) - Utility-first CSS framework

### Libraries
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[React Slick](https://react-slick.neostack.com/)** - Carousel component
- **[React Type Animation](https://www.npmjs.com/package/react-type-animation)** - Typing animation effects
- **[Slick Carousel](https://kenwheeler.github.io/slick/)** - Carousel styling

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **[Node.js](https://nodejs.org/)** (v16 or higher recommended)
- **[npm](https://www.npmjs.com/)** (comes with Node.js) or **[yarn](https://yarnpkg.com/)**
- **[Git](https://git-scm.com/)** for version control

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies listed in `package.json`.

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

## 📜 Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Build the project for production (outputs to `dist/` folder)
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check for code quality issues

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # React components
│   │   ├── sections/   # Page sections (Hero, Services, Projects, etc.)
│   │   └── Navbar.jsx  # Navigation component
│   ├── App.jsx         # Main application component
│   ├── App.css         # Application styles
│   ├── index.css       # Global styles and Tailwind imports
│   └── main.jsx        # Application entry point
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
└── eslint.config.js    # ESLint configuration
```

## 🎨 Customization

### Updating Content

- **Hero Section**: Edit `src/components/sections/Hero.jsx` to update your introduction and profile image
- **Services**: Modify `src/components/sections/Services.jsx` to showcase your expertise
- **Projects**: Update `src/components/sections/Projects.jsx` with your portfolio projects
- **Contact**: Customize `src/components/sections/Contact.jsx` with your contact information

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Global Styles**: Update `src/index.css` for global styling changes
- **Component Styles**: Each component uses Tailwind utility classes for styling

### Profile Image

Replace `src/assets/my-cover-image.jpg` with your own profile image.

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory. You can deploy these files to any static hosting service such as:

- **Vercel**
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- Any other static hosting provider

### Preview Production Build

Before deploying, preview the production build locally:

```bash
npm run build
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### Deploy to Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run `netlify deploy` for draft deployment or `netlify deploy --prod` for production
3. Or connect your GitHub repository to Netlify for automatic deployments

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts: `"deploy": "npm run build && gh-pages -d dist"`
3. Run `npm run deploy`

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the actual port number.

### Build Errors

- Ensure all dependencies are installed: `npm install`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility

### Styling Issues

- Ensure Tailwind CSS is properly configured in `tailwind.config.js`
- Verify PostCSS configuration in `postcss.config.js`
- Check that `src/index.css` imports Tailwind directives

## 👤 Author

**Chaz Carey**

Senior Software Engineer with 12+ years of experience building scalable SaaS platforms and AI-enabled applications.
