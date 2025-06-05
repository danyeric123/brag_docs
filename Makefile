.PHONY: help install-dev lint format

help:
	@echo "Commands:"
	@echo "  install-dev   : install development dependencies"
	@echo "  lint          : run all linters"
	@echo "  format        : format all files"

install-dev:
	uv sync --dev
	npm install -g prettier markdownlint-cli2

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