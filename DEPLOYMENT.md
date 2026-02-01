# Portfolio Deployment Guide

## Quick Deploy Options

### 🚀 Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Portfolio deployment"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Visit https://vercel.com
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy" (auto-detects Vite)
   - Your site: `your-portfolio.vercel.app`

**Pros:** Free, fast, automatic HTTPS, custom domain support

---

### 🌐 Option 2: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify:**
   - Visit https://netlify.com
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"
   - Your site: `your-portfolio.netlify.app`

**Pros:** Free, easy, great for static sites

---

### 📦 Option 3: GitHub Pages

1. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Source: GitHub Actions
   - The workflow file is already created (`.github/workflows/deploy.yml`)

2. **Update vite.config.js** if repo name is not "portfolio":
   ```js
   base: '/your-repo-name/'
   ```

3. **Push to main branch:**
   ```bash
   git push origin main
   ```

4. **Your site:** `https://yourusername.github.io/your-repo-name/`

**Pros:** Free, integrated with GitHub

---

### ☁️ Option 4: Cloudflare Pages

1. **Push to GitHub** (same as above)

2. **Deploy on Cloudflare:**
   - Visit https://pages.cloudflare.com
   - Sign up/Login
   - Click "Create a project"
   - Connect GitHub repository
   - Build settings:
     - Framework preset: Vite
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click "Save and Deploy"

**Pros:** Free, very fast, global CDN

---

## Custom Domain Setup

All platforms support custom domains:
- **Vercel:** Settings → Domains → Add your domain
- **Netlify:** Site settings → Domain management
- **GitHub Pages:** Settings → Pages → Custom domain
- **Cloudflare:** Custom domains → Add domain

---

## Build Commands Reference

- **Build:** `npm run build`
- **Preview locally:** `npm run preview`
- **Dev server:** `npm run dev`

---

## Recommended: Vercel

For your CV, I recommend **Vercel** because:
- ✅ Easiest setup (2 clicks)
- ✅ Free custom domain
- ✅ Automatic HTTPS
- ✅ Fast global CDN
- ✅ Perfect for React/Vite projects

Your portfolio URL will be: `https://your-name.vercel.app` or your custom domain!

