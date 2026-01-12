# Quick Start Guide

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - You should see your portfolio!

## Customize Your Portfolio

### 1. Update About Me Section
Edit `components/AboutMe.tsx` and replace the placeholder text with your actual bio.

### 2. Add Your Projects
Edit `components/Projects.tsx` and update the `projects` array:
- Replace placeholder projects with your actual projects
- Update titles, descriptions, images, and links
- Add or remove projects as needed
- Update the technologies array for each project

### 3. Update Social Links
Edit `components/SocialLinks.tsx` and replace:
- `https://github.com/yourusername` with your actual GitHub URL
- `https://linkedin.com/in/yourusername` with your actual LinkedIn URL

### 4. Customize Header
Edit `app/page.tsx` and update:
- The main heading text
- The subtitle text

## Build for Production

Test your production build locally:
```bash
npm run build
npm start
```

## Deploy to Vercel

See `DEPLOYMENT.md` for detailed deployment instructions.

