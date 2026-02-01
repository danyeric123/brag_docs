## **Goals for this year**

- [ ]

# **Projects**

<!-- company: CapitalOne -->

## Userspaces Portal

- **Cut Largest Contentful Paint (LCP) from >7s to ~4s** as part of meeting Lighthouse compliance requirements, directly improving page load performance. The change was noticed and complimented by the EM, lead developer, and PM.
- **Got ahead of frontend compliance requirements within a week of rollout**, proactively addressing Lighthouse performance targets, user feedback form integration, and Clickhouse event logging — with no hard deadline driving the work. This positioned the team ahead of the curve rather than reacting to requirements after the fact.
- **Implemented a userflow tracking system as part of Clickhouse compliance logging**, enabling the team to track user flows and identify friction points. The system is architected for flexibility — new userflows can be instrumented in under 50 lines of code. Results are pending as the system collects data.
- **Continued the Zustand and React Query migration** initiated in December, systematically replacing legacy state patterns across the application.
- **Partnering with the lead developer on a plan to recreate the frontend.** The current codebase has proven difficult to iterate on effectively due to systemic issues in state management and code organization. Rather than continuing to patch around the existing structure, the team is exploring a ground-up rebuild to get on a more sustainable foundation.

## Userspaces 2.0 — Search with OpenSearch

- **Architecting search for a platform handling 92M writes per day.** Userspaces currently stores one row per object in an Aurora database with billions of objects. The platform grew from 200 to 2,000 users in a single year driven by AI/ML workloads — a scale the original system was not built for. Previous search relied on SQL LIKE queries that caused full table scans.
- **Delivered a working OpenSearch proof of concept within one week**, enabling search within folders, for folders, and for files. Preliminary benchmarks show a maximum latency of 200ms even within folders containing millions of objects — a 10x improvement over the previous SQL LIKE queries, which took 2 seconds or more.
- **Designed cross-region replication for resilience.** AWS OpenSearch does not support automatic cross-region failover, so the architecture reuses a cross-region replication lambda from another team to ensure availability if a region goes down.
- **Designed a bulk indexing pipeline** to keep the OpenSearch cluster in sync with S3 activity. The pipeline reuses the existing SQS-based S3 event ingestion, with a new lambda that bulk indexes events — necessary because Databricks jobs can generate up to 40 add/delete events per second.
- This project is in its early stages and will continue to grow.

## AI Assisted Coding — Community of Experts (CoE)

- **Contributing as the only senior developer** in the department's Community of Experts (CoE) on AI assisted coding — a group otherwise composed of directors, senior directors, senior managers, and lead developers. Actively guiding conversations and decisions at this level.
- **The CoE has executive visibility**, with the EVP of the department backing the initiative. The stated goal is to save $10M in developer time and double team feature output through AI-assisted coding adoption.
- **Drove adoption of AI coding tools from an initial 3 teams to department-wide** (5+ teams) through evangelization, talks, best practices documentation, and a hands-on workshop.
<!-- TODO: revisit workshop outcomes -->
- **Developed Claude Skills and Windsurf workflows** tailored to Capital One's coding practices and internal tools/libraries, enabling AI coding tools to work with company-specific context without manual configuration.
- **Created department-wide best practices documentation** for AI assisted coding, including tips and tricks guides.

# **Collaboration & Mentorship**

<!-- company: CapitalOne -->

## Technical Leadership & Knowledge Sharing

- **Evangelized AI assisted coding across multiple teams**, delivering talks on best practices and tips and tricks, and leading a hands-on Windsurf workshop for a select group of developers. Received digital kudos and thanks from an EM on a sister team.
- **Contributing as the only senior developer to the department's AI Assisted Coding CoE**, guiding conversations and decisions alongside directors and senior leadership.
- **Drove AI coding tool adoption from 3 teams to department-wide** (5+ teams), expanding through documentation, tooling, and hands-on training.

## Code Review & Day-to-Day Contribution

- **Reviewing ~5 PRs per day** using an AI-assisted code review process: pulling in code changes and git diffs, then reviewing against personal standards before writing comments directly on GitHub. The human-in-the-loop approach maintains review quality while significantly increasing review throughput — a direct application of the AI coding practices evangelized through the CoE.

## General Recognition

- Received feedback from the EM noting significant contributions since joining the team.
- PM expressed being "extremely appreciative" after the swift resolution of a high-visibility production bug within ~24 hours, with no data loss.
- Received digital kudos from an EM on a sister team following an AI assisted coding talk.

# **Design & Documentation**

<!-- company: CapitalOne -->

## Design Docs

1. Designed the OpenSearch-based search architecture for Userspaces 2.0, including cross-region replication strategy and bulk indexing pipeline.

## Documentation

1. Created department-wide best practices and tips and tricks documentation for AI assisted coding.
2. Developed Claude Skills and Windsurf workflows tailored to Capital One's coding practices and internal tools/libraries. These tools use techniques like lazy loading documentation and targeted grep searches to keep AI tool context focused and effective, mitigating context rot and bloat.

# **What you learned**

<!-- company: CapitalOne -->

## Concepts and Systems

- **Context Engineering:** Learned about context rot and bloat in AI coding tools — how context becomes polluted or too large, degrading tool effectiveness. Designed solutions that use lazy loading of documentation and targeted grep searches rather than loading entire docs, keeping AI context focused and accurate.
- **OpenSearch:** Came in with minimal prior experience and learned the technology deeply enough to design a production-grade search architecture within weeks — covering cluster management, indexing strategies, cross-region replication, and bulk indexing at scale. Leaned heavily on Claude Opus to accelerate the learning curve, using it as a teaching tool to ramp up quickly on OpenSearch internals and architecture patterns.
- **Event-Driven Bulk Indexing:** Applied SQS-based event pipelines and bulk indexing strategies to keep a search index synchronized with high-throughput S3 workloads generating up to 40 events per second.

## Libraries and Tools

- **AWS OpenSearch:** Designed and built search from POC to preliminary production benchmarks, including cross-region replication architecture and bulk indexing pipelines.
- **Windsurf:** Learned workflow creation and customization for AI-assisted coding, including tailoring AI tools to company-specific conventions.
- **Claude Skills:** Developed custom skills to encode Capital One-specific coding practices and internal tool knowledge for AI coding assistants.

# **Outside of work**

## Blog posts

