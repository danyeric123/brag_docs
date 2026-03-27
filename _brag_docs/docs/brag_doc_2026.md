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

## Mend Vulnerability Remediation at Scale

- **Built a Claude Code skill that automates Mend vulnerability remediation across repos in parallel**, using an orchestrator + subagent pattern. Instead of manually working through each repo and JIRA ticket one at a time, the skill spins up parallel subagents that clone repos, update vulnerable packages, create PRs, and comment back on tickets — reducing the time from hours of manual work to near-constant regardless of repo count.
- **Remediated vulnerabilities across 15 repos in a single session** (~23 minutes for 16 PRs), covering `metadata-publisher`, `email-service`, `scan-sdk-wrapper-lambda`, `s3-event-handler`, `policy-exception-handler`, `talos-api`, `data-movement-lambda`, `p2p-ui`, `exchangeui`, `tasks-python`, `P2P-OneStream`, `PathToProduction`, `chrgbck-lambda`, `bulk-migration-lambda`, and `processes`.
- **The skill was contributed to the edata-ai-coe repository** and is available for other teams to use, with support for Python, npm, and Maven ecosystems.

## Userspaces 2.0 — Search with OpenSearch

- **Context & Problem:**
  - Userspaces stores one row per S3 object in an Aurora database — 2.43 billion objects and growing. The platform grew from 200 to 2,000 users in a single year driven by AI/ML workloads, a scale the original system was not built for. Search relied on SQL LIKE queries causing full table scans on billions of rows, resulting in multi-second latency or timeouts. Aurora was also falling behind on ingestion with a 3.3 billion message backlog (15M/day capacity vs 94M/day actual load).
- **Leadership & Initiative:**
  - Owned the full search initiative end-to-end: architecture design, infrastructure provisioning, CLI tooling, real-time ingestion pipeline, bulk backfill strategy, cross-region replication, compliance, and production deployment — across three separate repositories and three AWS environments.
  - Delivered a working proof of concept within one week of starting the project, demonstrating sub-200ms search latency against millions of objects.
  - Right-sized the production cluster from 27 nodes down to 6 based on measured data rather than estimates, reducing projected costs down to ~$4,350/month per environment (~$800K/year savings).
  - Pivoted the bulk backfill approach through three iterations — first Databricks (too slow: workers couldn't reach OpenSearch's VPC, and driver-only indexing was ~1,670 docs/sec), then EMR at the lead's suggestion (weeks of blockers: inventory data only in prod, every change requiring a 10pm Change Order, finicky datalake connectivity configs that were extremely hard to debug). After weeks of research, limited testing, and blocker after blocker, went back to Databricks and figured out how to solve the original speed problem — instead of trying to make Spark workers reach OpenSearch, kept all indexing on the driver but parallelized at the job level using the Databricks CLI and parameterized notebooks, so dozens of independent runs each handle a different date chunk concurrently. This ended up cheaper and more flexible than EMR.
- **Execution & Impact:**
  - **OpenSearch Cluster & Tooling:** Built `ospoc`, a 6,251-line Python CLI tool for search, ingestion, diagnostics, and cluster administration — necessary because OpenSearch Dashboards is inaccessible in Capital One's production environment. Designed custom analyzers for filename tokenization and hierarchical path search. Achieved <500ms p99 search latency through query optimization.
  - **Real-Time Ingestion Pipeline:** Built a serverless Lambda pipeline (S3 Events → SNS → SQS → Lambda → OpenSearch) replacing heavyweight ECS Fargate containers. Designed cross-message batching and idempotent document IDs to maximize throughput and eliminate the need for distributed deduplication. Validated peak throughput of 617K docs/min (23% above the 500K target) with zero errors during capacity testing.
  - **Bulk Backfill:** After the pivot back to Databricks, designed a parallel job system using the Databricks CLI and parameterized notebooks that splits 6 years of inventory data into chunks submitted as concurrent runs. Each notebook indexes at ~140K docs/min, but with 20+ notebooks running simultaneously the approach indexed all 2.7 billion documents into OpenSearch within ~24 hours. Ran 285 jobs across 3 clusters, with sub-day hourly chunking for high-density periods. Built operational tooling for job orchestration, gap detection, and automated retries. The notebook also serves as a reusable operational toolkit — with built-in sections for targeted gap-fill queries, snapshot diffing to mark deleted objects, orphan cleanup, and background task polling.
  - **API Integration & Search Performance:** Built the OpenSearch search endpoint in the Userspaces API with database enrichment, then optimized search by replacing wildcard queries with `match_phrase_prefix` for a 60x speedup. Integrated OpenSearch search into the portal behind a feature flag.
  - **Production Readiness:** Deployed across dev, QA, and production with dual-region ingestion (us-east-1 + us-west-2) leveraging synced S3 buckets for cross-region resilience. Produced 10+ design and operations documents totaling hundreds of pages.

## AI Assisted Coding — Community of Experts (CoE)

- **Contributing as the only senior developer** in the department's Community of Experts (CoE) on AI assisted coding — a group otherwise composed of directors, senior directors, senior managers, and lead developers. Actively guiding conversations and decisions at this level.
- **The CoE has executive visibility**, with the EVP of the department backing the initiative. The stated goal is to save $10M in developer time and double team feature output through AI-assisted coding adoption.
- **Drove adoption of AI coding tools from an initial 3 teams to department-wide** (20+ teams) through evangelization, talks, best practices documentation, and hands-on workshops.
- **Led a successful Windsurf training workshop** for developers, receiving positive feedback. Followed up by creating and leading an **advanced Claude Code training** attended by the VP of the area, which received significant positive feedback according to the director.
- **Created and maintain the edata-ai-coe repository**, the department's central hub for AI-assisted coding best practices, reusable Claude Code skills, and Windsurf workflows. Top contributor (20 commits, ~18.5% of all commits) and code owner with PR approval authority.
  - Authored 6 comprehensive best-practice guides (~5,700 KB) covering context management, prompting strategies, testing, git conventions, and advanced patterns.
  - Built production-grade Claude Code skills used across teams: JIRA integration (full CRUD via REST API), Mend vulnerability remediation (parallel subagent orchestration across repos), and Capital One development workflows (Bogiefile, pipeline flavors, Gatekeeper secrets, Artemis/PAR readiness). The JIRA skill became foundational code that other contributors built on top of for their own skills.
  - **Established and enforce code review standards** for the repository, including mandatory testing sections in PRs, DRY overlap checks against existing skills, and documentation requirements. Created the code review rotation and guidelines that all contributors follow.

# **Collaboration & Mentorship**

<!-- company: CapitalOne -->

## Technical Leadership & Knowledge Sharing

- **Led two developer training workshops on AI-assisted coding**: a Windsurf workshop that received positive feedback, and an advanced Claude Code training attended by the VP of the area. According to the director, both generated significant positive feedback across the department.
- **Contributing as the only senior developer to the department's AI Assisted Coding CoE**, guiding conversations and decisions alongside directors and senior leadership.
- **Drove AI coding tool adoption from 3 teams to department-wide** (20+ teams), expanding through documentation, tooling, and hands-on training.
- **Created and maintain the edata-ai-coe repository** as the top contributor and code owner — establishing the code review rotation and guidelines, enforcing quality standards (mandatory testing, DRY checks, documentation requirements), and building reusable skills used across teams.
- Received digital kudos and thanks from an EM on a sister team following an AI assisted coding talk.

## Code Review & Day-to-Day Contribution

- **Reviewing ~5 PRs per day** using an AI-assisted code review process: pulling in code changes and git diffs, then reviewing against personal standards before writing comments directly on GitHub. The human-in-the-loop approach maintains review quality while significantly increasing review throughput — a direct application of the AI coding practices evangelized through the CoE.

## General Recognition

- Received feedback from the EM noting significant contributions since joining the team.
- PM expressed being "extremely appreciative" after the swift resolution of a high-visibility production bug within ~24 hours, with no data loss.
- Developers from other teams sought out Claude Code skills from the edata-ai-coe repo and adopted them to reduce tech debt and improve maintenance on their own teams.
- Design lead on the OpenSearch work: "What you're building is actually really great and fast too, I'm impressed!"
- VP of another area (leading the CoE): "Appreciate all the participation in the eData AI COE."
- CoE contributor after a PR review and design call: "Thanks for approving and merging my PR! Really appreciate all the feedback that you provided me!"
- Senior manager on a different team reached out for help with Mend vulnerability remediation using AI tools, then followed up: "Thanks for your time today!"
- Senior manager on a sister team invited a Windsurf demo after hearing about it, then followed up: "Thank you so much for demoing some Windsurf capabilities for our team. It was well presented and we found the content to be really helpful in opening our minds to the potential of using Windsurf."
- Director of the area: "I wanted to share my huge appreciation for conducting the first Claude Code training for Data Storage and Consumption Tools. Thank YOU. I truly appreciate the hard work that went in to make the training so successful."
- Lead developer on a sister team: "You've put in so much work building useful Claude skills, managing contributions to the edata-ai-coe repo, and preparing educational materials. In the past few weeks alone you've created so much value for other teams!"
- Senior director leading the CoE: "Appreciate your help in launching the COE home page and your contributions to the standards and best practices. Let us keep this going as we bring in more value to our eData organization through your contributions."

# **Design & Documentation**

<!-- company: CapitalOne -->

## Design Docs

1. Designed the OpenSearch-based search architecture for Userspaces 2.0, including multi-tiered ingestion (real-time Lambda + batch Databricks backfill) and production cluster sizing.
2. Authored a 97KB comprehensive architecture guide covering cluster configuration, indexing strategies, query optimization, and operational runbooks.
3. Documented the production sizing analysis with real metrics — proving actual per-document size (0.76 KB) was 26x smaller than initial estimates, driving the decision to right-size from 27 to 6 nodes.
4. Wrote a Tier 1 bulk ingestion strategy document evaluating EMR vs Databricks approaches, including the rationale for pivoting to Databricks.

## Documentation

1. Created 6 comprehensive best-practice guides for the edata-ai-coe repository covering context management, prompting strategies, testing and verification, git/PR conventions, advanced patterns (context rot, token efficiency), and artifact workflows — totaling ~5,700 KB of educational content used across the department.
2. Developed Claude Code skills and Windsurf workflows tailored to Capital One's coding practices and internal tools/libraries. These tools use techniques like lazy loading documentation and targeted grep searches to keep AI tool context focused and effective, mitigating context rot and bloat.
3. Established code review guidelines and rotation for the edata-ai-coe repository, defining standards for testing, DRY overlap checks, and documentation quality.

# **What you learned**

<!-- company: CapitalOne -->

## Concepts and Systems

- **Context Engineering:** Learned about context rot and bloat in AI coding tools — how context becomes polluted or too large, degrading tool effectiveness. Designed solutions that use lazy loading of documentation and targeted grep searches rather than loading entire docs, keeping AI context focused and accurate.
- **OpenSearch at Scale:** Came in with minimal prior experience and learned the technology deeply enough to design and deploy a production-grade search system for 2.43 billion objects within weeks — covering cluster management, custom analyzers, query optimization (filter context, cursor pagination, hit count limiting), indexing strategies, and bulk indexing. Leaned heavily on Claude Opus to accelerate the learning curve, using it as a teaching tool to ramp up on OpenSearch internals and architecture patterns.
- **Event-Driven Bulk Indexing:** Designed and built an SQS-based Lambda pipeline with cross-message batching and idempotent document IDs, validated at 617K docs/min — replacing heavyweight ECS Fargate containers with serverless functions.
- **Large-Scale Data Processing — EMR to Databricks Pivot:** Evaluated EMR and Databricks for bulk-indexing 2.43B objects into OpenSearch. Databricks workers couldn't reach the OpenSearch VPC, and driver-only was too slow. EMR was architecturally sound (same VPC) but operationally painful — inventory data only existed in prod, every change required a 10pm Change Order, and datalake connectivity configs were extremely finicky. After weeks of blockers, went back to Databricks and solved the speed problem by parallelizing at the job level rather than the worker level — using the Databricks CLI, parameterized notebooks with widgets, and the Jobs API to run dozens of concurrent date-chunk runs. Ultimately cheaper, more flexible, and more productive than EMR.
- **Spark Memory Management:** Learned to work around Spark driver OOM, Arrow serialization limits, and cumulative `maxResultSize` issues by implementing paginated `toPandas()` streaming, partition coalescing, and explicit cache/unpersist lifecycle management.
- **Production Cluster Right-Sizing:** Learned the discipline of measuring before committing — initial estimates led to 27-node over-provisioning, but real metrics (0.76 KB/doc vs 20 KB estimate) enabled reducing to 6 nodes with 67% headroom, saving ~$131K/year.

## Libraries and Tools

- **AWS OpenSearch:** Designed and deployed search from POC to production across 3 environments, including custom analyzers, query optimization, and cluster right-sizing for 2.43B objects.
- **Databricks Jobs API & CLI:** Built a parallel job orchestration system for bulk backfill — launcher scripts, gap analysis tooling, dynamic chunking, and threaded bulk indexing. Learned notebook parameterization with widgets for reusable, targeted runs.
- **AWS EMR:** Set up full EMR infrastructure (clusters, bootstrap scripts, IAM, 7PS testing) across dev/QA/prod before pivoting — gained deep experience with Spark on YARN and production deployment processes.
- **opensearch-py:** Production use of the Python OpenSearch client for bulk indexing, search, and cluster administration.
- **Polars (lazy evaluation):** Used for streaming large Delta Lake datasets with constant memory usage via chunked iteration.
- **Windsurf:** Learned workflow creation and customization for AI-assisted coding, including tailoring AI tools to company-specific conventions.
- **Claude Skills:** Developed custom skills to encode Capital One-specific coding practices and internal tool knowledge for AI coding assistants.

# **Outside of work**

## Blog posts

