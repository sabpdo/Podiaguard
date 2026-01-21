# Podiaguard

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/sabrina-dos-projects/v0-foot-ulcer)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/RZ7JYb16AaA)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/sabrina-dos-projects/v0-foot-ulcer](https://vercel.com/sabrina-dos-projects/v0-foot-ulcer)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/RZ7JYb16AaA](https://v0.app/chat/RZ7JYb16AaA)**

## Local Development

### Prerequisites

- Node.js (v18 or higher)
- pnpm (package manager)

### Setup

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```
   
   The app will be available at `http://localhost:3000`

### Production Build

To build and run a production version locally:

```bash
# Build the app
pnpm build

# Start the production server
pnpm start
```

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository