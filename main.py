import re
import shutil
from datetime import datetime
from pathlib import Path

import click


@click.group()
def cli():
    """A CLI tool to manage your brag docs."""
    pass


@cli.command()
@click.option("--year", default=None, type=int, help="The year for the new brag doc.")
def new(year):
    """Creates a new brag doc for the given year from the template."""
    if year is None:
        year = datetime.now().year

    docs_path = Path("_brag_docs/docs")
    template_path = docs_path / "brag_doc_template.md"
    new_doc_path = docs_path / f"brag_doc_{year}.md"

    if not docs_path.is_dir():
        click.echo("Error: 'docs' directory not found.", err=True)
        raise click.Abort()

    if not template_path.is_file():
        click.echo(f"Error: Template file not found at '{template_path}'", err=True)
        raise click.Abort()

    if new_doc_path.exists():
        click.echo(
            f"Error: Brag doc for year {year} already exists at '{new_doc_path}'",
            err=True,
        )
        raise click.Abort()

    shutil.copy(template_path, new_doc_path)
    click.echo(f"Successfully created new brag doc for {year} at '{new_doc_path}'")


@cli.command()
def summary():
    """Generates a summary of all projects from the brag docs."""
    docs_path = Path("_brag_docs/docs")
    project_pattern = re.compile(r"^(##|###) (.*)")

    brag_docs = sorted(docs_path.glob("brag_doc_20*.md"))

    if not brag_docs:
        click.echo("No brag docs found to summarize.", err=True)
        raise click.Abort()

    click.echo("# Project Summary")

    for doc_path in brag_docs:
        year = doc_path.stem.split("_")[-1]
        click.echo(f"\n## {year}")

        with open(doc_path, "r", encoding="utf-8") as f:
            content = f.read()

        in_projects_section = False
        projects_found = False
        for line in content.splitlines():
            if line.startswith("# **Projects**"):
                in_projects_section = True
                continue

            if in_projects_section:
                if line.startswith("# **"):
                    # New top-level section, stop parsing for projects
                    break

                match = project_pattern.match(line)
                if match:
                    # Remove markdown bolding and strip whitespace
                    project_title = match.group(2).replace("*", "").strip()
                    if project_title:
                        click.echo(f"- {project_title}")
                        projects_found = True

        if not projects_found:
            click.echo("  _No projects listed._")


@cli.command()
@click.argument("files", nargs=-1, type=click.Path(exists=True))
def validate(files):
    """Validates that the brag docs contain all sections from the template."""
    docs_path = Path("_brag_docs/docs")
    template_path = docs_path / "brag_doc_template.md"

    if not template_path.is_file():
        click.echo(f"Error: Template file not found at '{template_path}'", err=True)
        raise click.Abort()

    with open(template_path, "r", encoding="utf-8") as f:
        template_content = f.read()

    template_headings = set(re.findall(r"^#+ (.*)", template_content, re.MULTILINE))

    if not files:
        files = sorted(docs_path.glob("brag_doc_20*.md"))

    all_valid = True
    for file_path_str in files:
        file_path = Path(file_path_str)
        with open(file_path, "r", encoding="utf-8") as f:
            doc_content = f.read()

        doc_headings = set(re.findall(r"^#+ (.*)", doc_content, re.MULTILINE))
        # We remove the title of the brag doc from the set of headings
        doc_headings.discard("**Goals for this year**")

        missing_headings = template_headings - doc_headings
        # These are sections that are not required to be in the brag doc
        missing_headings.discard(
            "[B**rag Document Template**](https://jvns.ca/blog/brag-documents/#template)"
        )
        missing_headings.discard("Goals for next year")

        if missing_headings:
            all_valid = False
            click.echo(f"\n❌ Validation failed for: {file_path}")
            for heading in sorted(missing_headings):
                click.echo(f"   - Missing section: '{heading}'")
        else:
            click.echo(f"\n✅ Validation passed for: {file_path}")

    if not all_valid:
        raise click.Abort()


if __name__ == "__main__":
    cli()
