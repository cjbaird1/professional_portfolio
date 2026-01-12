# Deployment Guide - Vercel

This guide will walk you through deploying your portfolio to Vercel, which provides free hosting with a public URL perfect for sharing on LinkedIn and your resume.

## Prerequisites

- A GitHub account
- Your portfolio code ready to push to GitHub

## Step-by-Step Deployment

### Step 1: Push Your Code to GitHub

1. **Create a new repository on GitHub:**
   - Go to [github.com](https://github.com) and sign in
   - Click the "+" icon in the top right, then "New repository"
   - Name it something like `professional-portfolio` or `my-portfolio`
   - Choose "Public" (required for free Vercel hosting)
   - **Don't** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
   
   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub" to connect your GitHub account
   - Authorize Vercel to access your repositories

2. **Import Your Project:**
   - After logging in, you'll see the Vercel dashboard
   - Click "Add New..." → "Project"
   - You'll see a list of your GitHub repositories
   - Find your portfolio repository and click "Import"

3. **Configure Your Project:**
   - Vercel will automatically detect it's a Next.js project
   - The default settings should work perfectly:
     - **Framework Preset**: Next.js (auto-detected)
     - **Root Directory**: `./` (default)
     - **Build Command**: `npm run build` (default)
     - **Output Directory**: `.next` (default)
     - **Install Command**: `npm install` (default)
   - You can leave everything as default and click "Deploy"

4. **Wait for Deployment:**
   - Vercel will build and deploy your site (takes 1-2 minutes)
   - You'll see a progress log in real-time
   - Once complete, you'll see "Congratulations! Your project has been deployed"

### Step 3: Get Your Public URL

1. **Copy Your Deployment URL:**
   - After deployment, you'll see a success page
   - Your site is live at: `https://your-project-name.vercel.app`
   - Click the URL to view your live portfolio
   - Copy this URL - this is what you'll share on LinkedIn and your resume!

2. **Future Updates:**
   - Every time you push code to your GitHub repository's `main` branch, Vercel will automatically redeploy your site
   - No manual deployment needed!

## Customizing Your URL (Optional)

If you want a custom domain instead of `your-project-name.vercel.app`:

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain (you'll need to own the domain)
3. Follow Vercel's instructions to configure DNS

## Troubleshooting

### Build Errors
- Make sure all dependencies are in `package.json`
- Check that your code has no TypeScript errors: `npm run build` locally
- Review the build logs in Vercel dashboard for specific errors

### Images Not Loading
- Ensure image URLs in your projects are publicly accessible
- For local images, place them in the `public` folder and reference as `/image-name.jpg`

### Environment Variables
- If you need environment variables, add them in Vercel dashboard: Settings → Environment Variables

## Next Steps

1. ✅ Customize your portfolio content (About Me, Projects, Social Links)
2. ✅ Test your live site thoroughly
3. ✅ Add the Vercel URL to your LinkedIn profile
4. ✅ Add the URL to your resume
5. ✅ Share with potential employers!

Your portfolio is now live and accessible to anyone with the link - no accounts, downloads, or dependencies required!

