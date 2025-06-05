# My Brag Documents

This repository contains my personal brag documents, tracking my
accomplishments, projects, and learnings over the years.

## Yearly Brag Docs

- [2025 Brag Document](./docs/brag_doc_2025.md)
- [2024 Brag Document](./docs/brag_doc_2024.md)
- [2023 Brag Document](./docs/brag_doc_2023.md)
- [2022 Brag Document](./docs/brag_doc_2022.md)

## Template

I use a template to structure my brag documents. You can find it here:

- [Brag Document Template](./docs/brag_doc_template.md)

## Tooling

This repository also includes Python-based tooling to help manage these
documents. See `main.py` for the implementation.

### Setup

To get started with the tooling and development environment, you'll need Python,
`uv`, and Node.js with `npm` installed.

1. **Install Node.js dependencies globally**:

   ```bash
   npm install -g prettier markdownlint-cli2
   ```

2. **Install Python dependencies**:

   ```bash
   make install-dev
   ```

### Usage

Once installed, you can use the CLI tool and the `Makefile` commands.

- **Run the CLI tool**:

  ```bash
  brag-docs --help
  ```

- **Lint and format your code**:

  ```bash
  make lint
  make format
  ```
