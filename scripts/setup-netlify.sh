#!/bin/bash

# Setup script for Netlify deployment
# This script helps you get started with deploying to Netlify

echo "🚀 Setting up Netlify deployment..."

# Check if netlify-cli is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

echo "✅ Netlify CLI is installed"

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ This directory is not a git repository. Please initialize git first."
    exit 1
fi

echo "✅ Git repository detected"

# Build the project
echo "📦 Building the project..."
cd web && pnpm build && cd ..

echo "🌐 Now you can deploy to Netlify in two ways:"
echo ""
echo "1. AUTOMATIC (Recommended):"
echo "   • Go to https://app.netlify.com"
echo "   • Click 'Add new site' → 'Import an existing project'"
echo "   • Connect your GitHub repository"
echo "   • Settings will be auto-detected from netlify.toml"
echo ""
echo "2. MANUAL:"
echo "   • Run: netlify login"
echo "   • Run: cd web && netlify init"
echo "   • Follow the prompts to connect your site"
echo "   • Run: make deploy"
echo ""
echo "🎉 Your site will be live at: https://[your-site-name].netlify.app" 