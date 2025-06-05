# My Brag Documents

A collection of my personal brag documents, tracking my accomplishments, projects, and learnings over the years.

## 🌐 Live Site

The site is deployed on Netlify: [View Brag Documents](https://your-site-name.netlify.app)

## 📊 Yearly Brag Docs

- [2025 Brag Document](./_brag_docs/docs/brag_doc_2025.md)
- [2024 Brag Document](./_brag_docs/docs/brag_doc_2024.md)
- [2023 Brag Document](./_brag_docs/docs/brag_doc_2023.md)
- [2022 Brag Document](./_brag_docs/docs/brag_doc_2022.md)

## 📝 Template

I use a template to structure my brag documents:

- [Brag Document Template](./_brag_docs/docs/brag_doc_template.md)

## 🛠️ Tech Stack

- **Python CLI**: Built with `click` for document management
- **Web App**: Next.js with Tailwind CSS and dark/light mode
- **Deployment**: Netlify for reliable static site hosting
- **Package Management**: `uv` for Python, `pnpm` for Node.js
- **Styling**: Tailwind CSS with Typography plugin
- **Markdown**: GitHub-flavored markdown with task list support

## 🚀 Development Setup

### Prerequisites

- Python 3.13+
- Node.js 20+
- `uv` (Python package manager)
- `pnpm` (Node.js package manager)

### Installation

1. **Install Node.js dependencies globally**:
   ```bash
   npm install -g prettier markdownlint-cli2 netlify-cli
   ```

2. **Install Python dependencies**:
   ```bash
   make install-dev
   ```

3. **Install web app dependencies**:
   ```bash
   cd web && pnpm install
   ```

### Usage

**Python CLI tool**:
```bash
brag-docs --help
brag-docs new --year 2025
brag-docs summary
brag-docs validate
```

**Development server**:
```bash
cd web && pnpm dev
```

**Build and deploy**:
```bash
make build
make deploy
```

**Linting and formatting**:
```bash
make lint
make format
```

## 📁 Project Structure

```
brag_docs/
├── _brag_docs/docs/          # Markdown brag documents
├── web/                      # Next.js web application
│   ├── components/           # React components
│   ├── pages/               # Next.js pages
│   └── lib/                 # Utilities
├── main.py                  # Python CLI tool
├── pyproject.toml          # Python dependencies
├── netlify.toml            # Netlify deployment config
└── Makefile                # Development commands
```

## 🎨 Features

- ✅ **Dark/Light Mode**: Toggle with sun/moon icon (defaults to dark)
- ✅ **Interactive Checkboxes**: GitHub-flavored markdown task lists
- ✅ **Responsive Design**: Works on all device sizes
- ✅ **Fast Loading**: Static site generation with Next.js
- ✅ **SEO Friendly**: Proper meta tags and structure
- ✅ **CLI Management**: Create, validate, and summarize documents

## 🚀 Deployment

The site automatically deploys to Netlify when changes are pushed to the main branch. You can also deploy manually:

```bash
make deploy
```

## 📄 License

This project is for personal use. Feel free to use the structure and tooling as inspiration for your own brag documents! 