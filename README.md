# REALSPACE - Premium Interior Design Studio

A highly polished, performance-optimized, and fully responsive website for REALSPACE, a luxury interior design studio based in Thane, Mumbai, India.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Copy `.env.local.example` to `.env.local` and fill in your keys.
   ```bash
   cp .env.local.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables
The application requires the following environment variables (defined in `.env.local`):

- `NEXT_PUBLIC_WEB3FORMS_KEY`: Access key for Web3Forms (used for the contact form). Get one at https://web3forms.com/.
- `NEXT_PUBLIC_GA_ID`: Google Analytics Measurement ID (e.g., G-XXXXXXXXXX).
- `NEXT_PUBLIC_CLARITY_ID`: Microsoft Clarity Project ID.
- `NEXT_PUBLIC_SITE_URL`: The production URL (e.g., https://www.realspaceinteriors.in).

## Image Folder Structure
For best performance, place your optimized local images in the `/public/images` directory, categorizing them logically:

- `/public/images/projects/` - For project gallery images.
- `/public/images/services/` - For service featured images.
- `/public/og-image.jpg` - (1200x630) The default Open Graph image for social sharing. Place your branded dark background logo here.

## Deployment to Vercel
1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com).
3. Import the repository.
4. In the Environment Variables section, add all variables from your `.env.local` file.
5. Click **Deploy**.

## Google Analytics & Microsoft Clarity Setup
- Add your `NEXT_PUBLIC_GA_ID` to `.env.local` to enable GA tracking.
- Add your `NEXT_PUBLIC_CLARITY_ID` to `.env.local` to enable Clarity session recordings and heatmaps.
- Scripts are loaded optimally (`afterInteractive`) to prevent blocking the initial page load.
