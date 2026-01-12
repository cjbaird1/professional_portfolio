# Professional Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **About Me Section**: Showcase your background and skills
- **Projects Section**: Display your projects with images, descriptions, and links
- **Social Links**: Easy access to your GitHub and LinkedIn profiles
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Fast Loading**: Optimized for performance with Next.js
- **Modern UI**: Clean, professional design with dark mode support

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Customization

1. **Update About Me**: Edit `components/AboutMe.tsx` with your bio
2. **Add Projects**: Modify the `projects` array in `components/Projects.tsx`
3. **Update Social Links**: Change the URLs in `components/SocialLinks.tsx`
4. **Change Colors/Theme**: Modify `tailwind.config.ts` and `app/globals.css`

## Deployment to Vercel

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Vercel will automatically detect Next.js and configure the build
5. Click "Deploy" - your site will be live in minutes!

Your portfolio will be available at `your-project-name.vercel.app` and you can add a custom domain if desired.

## License

MIT

