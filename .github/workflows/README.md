# Deployment

This project is deployed using [Netlify](https://netlify.com) instead of GitHub Pages for better Next.js support.

## Why Netlify?

- Better support for Next.js static exports
- Proper handling of client-side JavaScript and hydration
- More reliable build process for modern web apps
- Better support for features like dark mode toggles

## Setup

1. Connect your GitHub repository to Netlify
2. Use the following build settings:
   - **Base directory**: `web`
   - **Build command**: `pnpm build`
   - **Publish directory**: `web/out`
3. Set the environment variable: `PNPM_VERSION = 9`
4. Deploy!

The `netlify.toml` file in the root directory contains the deployment configuration. 