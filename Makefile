.PHONY: help install-dev lint format build deploy dev

help:
	@echo "Commands:"
	@echo "  install-dev   : install development dependencies"
	@echo "  dev           : start development server"
	@echo "  build         : build the web application"
	@echo "  deploy        : deploy to Netlify"
	@echo "  lint          : run all linters"
	@echo "  format        : format all files"

install-dev:
	uv sync --dev
	npm install -g prettier markdownlint-cli2 netlify-cli
	cd web && pnpm install

dev:
	@echo "Starting development server..."
	@cd web && pnpm dev

build:
	@echo "Building web application..."
	@cd web && pnpm build

deploy:
	@echo "Deploying to Netlify..."
	@cd web && netlify deploy --prod --dir=out
	@echo "Deployment complete!"

lint:
	@echo "Running ruff linter..."
	@uv run ruff check .
	@echo "Running yamllint..."
	@uv run yamllint .
	@echo "Running markdownlint..."
	@markdownlint-cli2 "**/*.md"

format:
	@echo "Formatting Python files with ruff..."
	@uv run ruff format .
	@echo "Formatting Markdown and YAML files with prettier..."
	@prettier --write "**/*.{md,yml,yaml}" 