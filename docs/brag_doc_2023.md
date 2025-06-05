## **Goals for this year**

- [ ] Take on at least one public speaking engagement
- [x] Gain Software/System Design skills through either real-life experience or
      much study
- [ ] Build more scripts and tools
- [x] Expand my skillset to two new languages, libraries, or tools
- [x] Maintain (and possibly deepen) my lesser-used skills in the JS/TS
      ecosystem

# **Projects**

For each one, go through:

- What your contributions were (did you come up with the design? Which
  components did you build? Was there some useful insight like "wait, we can cut
  scope and do what we want by doing way less work" that you came up with?)
- The impact of the project – who was it for? Are there numbers you can attach
  to it? (saved X dollars? shipped new feature that has helped sell Y big deals?
  Improved performance by X%? Used by X internal users every day?). Did it
  support some important non-numeric company goal (required to pass an audit?
  helped retain an important user?)

Remember: don't forget to explain what the results of you work actually were!
It's often important to go back a few months later and fill in what actually
happened after you launched the project.

## PDFGen Deprecation

- Transitioned document generation from legacy microservice PDFGen to a new
  microservice called cyber-lifecycle that utilized
  [Temporal](https://temporal.io/) in order to asynchronously and resiliently
  generate documents
  - Converted most calls made from the webserver to be routed to cyber-lifecycle
- Coordinated cross-team to divide work evenly
- Implemented distributed cache for two services to bring down the number of
  calls to the auth service by a factor of ten
  - This reduced the number of 429s and brought several services back within
    their SLO
  - It made deploys an uneventful part of our process—as opposed to several
    errors popping up during deploys
  - This distributed cache influenced other teams' designs
- Transition several parts of the code from synchronous to asynchronous
  - Bringing down the latency by half
- Transitioned key business code to Python stable packages, as opposed to
  in-house code
  - This brought down the errors by several factors of ten
  - This also made debugging much easier since the package had clear error
    expectations and names
    - As opposed to diagnosing issues based on Unix error codes
- _Metrics:_ Dashboard metrics on async doc generation
  - Brought latency down by more than half
  - Reduced the number of issues/errors by a factor of ten

## Categorization and Filtering

- Initially, our document generation service 'docgen' relied on Python
  expressions for filtering and categorizing documents, resulting in confusion
  and errors.
- My task was to streamline the categorization and filtering process to improve
  clarity and reduce errors.
- **Simplified Categorization:** Instead of using Python expressions for
  document categorization, I restructured the system. I extracted critical
  information into dedicated top-level fields and made them accessible through
  the user interface. This change provided clarity to both backend developers
  and end-users, ensuring a clear understanding of which documents were intended
  for specific policies.
  - _Example:_ For instance, we could specify that only a particular agency
    should use a specific document when a particular coverage was applied,
    eliminating ambiguity.
  - _Error Reduction:_ This modification significantly reduced the occurrence of
    errors. Users of the internal tool, who were not necessarily developers,
    previously made syntax errors when using Python expressions. Moreover, their
    limited familiarity with the system often led to incorrect assumptions.
- **Front-End Pattern Creation:** I designed a front-end pattern that enabled
  other developers to replicate the implementation of additional filters or
  categorizations efficiently. This standardized approach slashed the time
  required to deliver new features or improvements by half.
- **Metrics-Based Impact:** By implementing these changes, we observed a notable
  improvement in our workflow velocity and a reduction in errors.

This project brought about a transformation in our document categorization and
filtering processes. It enhanced clarity, reduced errors, and significantly
expedited the development of new features. As a result, our team experienced
increased efficiency and a clearer understanding of the document registration
workflow. This improved visibility fostered better decision-making and smoother
collaboration among team members, ultimately benefiting both our internal
processes and our stakeholders.

## Test Runs Project

- **Architecting a Robust Testing Service:** Engineered a cutting-edge testing
  service from the ground up, utilizing a serverless architecture with Lambdas,
  SQS, cronjobs, and a series of new endpoints integrated into our `docgen`
  service.
  - _Infrastructure Mastery:_ Spearheaded the entire infrastructure setup,
    beginning with the creation of a comprehensive Design Doc. This encompassed
    defining the API structure, selecting the optimal database solution, and
    overseeing its deployment.
- **Mentorship and Collaboration:** Demonstrated leadership by guiding and
  mentoring fellow engineers throughout the project, ensuring alignment with the
  design vision and the successful execution of essential tasks.
- **Overcoming Challenges:** Navigated and resolved significant technical
  hurdles:
  - _Lambda Efficiency Enhancement:_ Addressed Lambda's 'Event loop closed'
    issue by identifying its root cause, which was a compatibility conflict with
    our asynchronous DB connection library. Implemented a pragmatic solution by
    closing the DB connection after each use.
  - _MSK Event Stream Optimization:_ Optimized event processing by mitigating
    the issue of disappearing MSK events. Simplified the architecture by
    transitioning to SQS, which, in hindsight, could have been pursued as the
    initial design choice.
  - _Adaptive Database Strategy:_ Responded to the challenge of changing the
    original database choice. Despite advocating for a low-maintenance solution
    with DocumentDB, pivoted to a traditional RDBMS. Leveraged new libraries to
    enhance query efficiency, ensure asynchronous operation, and streamline
    development.
- **Recognized Excellence:** Earned accolades from multiple senior engineers,
  who commended both the elegance of the solution and the adept handling of
  complex error scenarios.
- **Impactful Outcome:** Redefined our testing capabilities, ensuring robust and
  comprehensive testing of all document variants. The project's successful
  implementation significantly contributed to improved system reliability and
  resilience, ultimately elevating the overall quality of our document
  generation process.

## AutoAttach Logic

- The goal was to create a more flexible and understandable auto-attach logic
  - Previously the options were on two axes: Default, Allowed, and Mandatory,
    and Include, Exclude, Flag Manual
  - Now: deletable, flag manual, and AutoAttach, which it can be for new,
    renewal and reissue, each being yes, no, or copy
    - `copy`:If the endorsement is on the quote being reissued, all copies of
      the endorsement will be copied to the reissue (with all configuration
      variables entered by the underwriter). If the endorsement is not on the
      quote being reissued, it will not be auto-attached.
- This involved cross-team work

## Improve Observability

- Identified critical gaps in system understanding and complex debugging
  processes
- Advocated for enhanced observability inspired by principles from Charity
  Majors' insights at Honeycomb.
- Initiated collaboration with senior developers to create a comprehensive
  logging strategy.
- Collaborated on meticulous assessment of logging options, detail levels, and
  dimensions.
- Partnered with a Principal Engineer to architect a holistic plan for logging,
  metrics, and SLOs.
- Developed a user-friendly dashboard for on-call engineers to troubleshoot and
  navigate challenges.
- Expedited debugging, reducing resolution times from over 30 minutes to
  minutes.
- Proactively detected and addressed potential system issues, preventing
  customer complaints.
- Provided timely guidance for issue resolution, improving customer experience
  and system reliability.

## Document Generation Errors

I collaborated closely with a senior developer on a project aimed at enhancing
error handling and document generation. Our approach involved two key strategies
that had a significant impact:

1. **Preventing Unrenderable Document Generation:** We revamped our document
   generation process by prioritizing the resolution of all requested items
   before attempting to render them. If any items couldn't be resolved or if we
   lacked the necessary user-provided configuration variables, we would
   immediately trigger an error and refrain from rendering those document
   generation jobs. This proactive approach addressed issues where users
   requested variants of documents that either didn't exist or lacked essential
   data (config variables).
2. **Config Variable Validation:** In addition to resolving items, we also
   implemented a robust validation process for config variables at the outset of
   each request. If the required config variables were absent, we would promptly
   raise an error. This step ensured that we had all the necessary information
   from users before proceeding with document generation for a specific variant.

The impact of these initiatives was remarkable. Overnight, our document
generation success rate, as measured by our Service Level Objective (SLO),
soared from two 9's (99%) to an impressive four 9's (99.99%). While it was
expected that most of our failed document generations stemmed from issues with
item resolution, the rapid and visible improvement from two 9's to four 9's
demonstrated the effectiveness of our approach. This enhancement not only
bolstered the reliability of our document generation process but also
contributed to a smoother user experience, ensuring that users received accurate
and complete documents without unnecessary delays or errors.

## Policy Validator Service

- **Leadership Role in Service Creation:**
  - Collaborated with a Principal Engineer to inherit and extend a new service
    designed to validate quotes, ensuring accurate data and configuration.
  - Successfully took ownership of the service, building upon its foundation and
    enhancing its capabilities.
- **Framework Development:**
  - Pioneered the creation of a robust framework for seamlessly incorporating
    and expanding existing test cases.
  - Established a standardized approach within the service, fostering
    consistency and efficiency across teams.
- **Comprehensive Monitoring Implementation:**
  - Engineered an extensive monitoring system, incorporating logging, metrics,
    and Service Level Objectives (SLOs).
  - This meticulous monitoring framework provides a granular view of system
    performance, enhancing our ability to identify and resolve issues promptly.
- **System Understanding and Knowledge Sharing:**
  - Positioned the service as a valuable tool for understanding the intricacies
    of our system.
  - Effectively documented edge cases and unusual behaviors, providing a
    comprehensive resource for the team to navigate the complexities of our
    technology landscape.
- **Risk Mitigation and Incident Prevention:**
  - The service plays a pivotal role in safeguarding the company from
    substantial financial losses, particularly in cases of missing endorsements.
  - Proactively prevents incidents that could potentially result in significant
    financial implications for the organization.
- **Impactful Discoveries:**
  - Uncovered and addressed a critical race condition, improving the overall
    reliability and robustness of the service.
  - Identified and resolved an incident that persisted since a legacy service's
    inception several years ago, contributing to the ongoing refinement of our
    technology infrastructure.

This significantly contributed to our overall risk mitigation strategy and
system understanding. The comprehensive monitoring system and standardized
framework established during this project continue to be integral components of
our quality assurance and system reliability efforts.

# **Collaboration & Mentorship**

### **Doc Support Training**

- **Conducted numerous Doc Support Training Sessions**
  - Empowered support engineers by imparting expertise in utilizing Datadog
    dashboard and Sentry errors for effective issue debugging.
  - Facilitated comprehensive sessions, walking them through key components of
    our services to deepen their understanding of how their work integrates with
    our system.

## **Collaboration**

- **Designated Go-to Expert**
  - Positioned as a primary resource for team members seeking assistance with
    our internal service's frontend, showcasing leadership and expertise.
  - Acted as a secondary support resource for queries related to the services on
    our team, offering guidance on integration challenges and debugging.
- **Mentorship and Co-Contributor Role in Design Docs**
  - **Guided Junior Engineer Architectural Decisions**
    - Provided strategic advice to a junior engineer, influencing architectural
      decisions for optimal outcomes.
  - **Consulted Senior Engineer on Multiple Projects**
    - Offered expertise to a senior engineer across various projects,
      contributing to the success and efficiency of each endeavor.

## Foundational Code

### Categorization Frontend work

- Created a front-end pattern for other developers to replicate when adding more
  filters or categorizations
  - This reduced the time to delivery by half and set the standard for how new
    components of this type should be added

### Auth + Redis

- Transitioned our auth code in two different services to utilize Redis as a
  cache for our auth tokens
  - This set the standard for how we interact with Redis
  - Other teams adopted this code pattern for how to store auth tokens using
    Redis
- Part of this work also involved moving us away from internal hacky code to
  standard community-packages

### Refactored Key Class within Our System

- Made code more readable and concise by breaking down several functions within
  a class
- Added many docstrings and explanations for key parts of this code
- Added a suite of tests to fully test the new implementation

### Policy-Validator

- Created the foundational code for the whole service
  - This includes the structure and best practices for working within the
    codebase

# **Design & Documentation**

## Design Docs

1. **Testing System for Documents**
   - **Description**: Developed a comprehensive design document for a new
     testing system dedicated to our documents.
   - See
     [Test Runs Project](https://www.notion.so/Test-Runs-Project-7367953e49844321850b798910edb504?pvs=21)
2. **Verification Service ADR**
   - **Description**: Authored an Architecture Decision Record (ADR) for a novel
     service responsible for verifying that quotes contain accurate information,
     proper documents, and configuration details.
   - See [](https://www.notion.so/f57ed3150941402c9f94e58548065c18?pvs=21)

## Documentation

1. **Script Execution Log Wiki**
   - **Description**: Established a wiki to log the execution of one-off
     scripts, providing transparency into who ran the scripts, when, and the
     purpose behind each execution.
   - **Impact:**
     - This created a history of what scripts were ran, what the inputs were,
       and what the outputs were
     - We had better visibility into what has changed within our system as a
       result of one-off scripts
2. **PR Review Process Documentation**
   - **Description**: Documented an improved process for reviewing pull
     requests, streamlining the workflow and ensuring a more effective and
     collaborative review.
   - **Impact**:
     - Higher quality PRs
     - Faster feedback loop
     - Better communication around PRs

# **What you learned**

## Concepts and Books

Read several books:

| Title                                                                                                                                                                                                                                                                                                             | Key Takeaways                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [An Elegant Puzzle: Systems of Engineering Management](https://www.amazon.com/Elegant-Puzzle-Systems-Engineering-Management/dp/B07SH1DXXM/ref=sr_1_1?keywords=an+elegant+puzzle+systems+of+engineering+management&qid=1679240652&sprefix=An+Elegant%2Caps%2C114&sr=8-1) by Will Larson                            | A good book to reference when starting in an Engineering Management role.                                                                                                                       |
| [Accelerate: Building and Scaling High-Performing Technology Organizations](https://www.amazon.com/Accelerate-Building-Performing-Technology-Organizations/dp/B07BMBYHXL/ref=sr_1_1?keywords=accelerate+book&qid=1679240748&sprefix=accele%2Caps%2C126&sr=8-1) By Gene Kim, Jez Humble                            | Provides statistical backing for common Agile/DevOps practices, which is useful when making a case for them.                                                                                    |
| [DynamoDB Book](https://www.dynamodbbook.com/) by Alex DeBrie                                                                                                                                                                                                                                                     | A great deep-dive into DynamoDB, best used as a reference rather than read cover-to-cover.                                                                                                      |
| [Observability Engineering: Achieving Production Excellence](https://www.amazon.com/Observability-Engineering-Achieving-Production-Excellence/dp/1492076449/ref=sr_1_2?keywords=observability+engineering&qid=1679241765&sprefix=observa%2Caps%2C105&sr=8-2) by Charity Major, Liz Fong-Jones, and George Miranda | Offers an important mindset shift for debugging on-call issues, moving from reactive to proactive.                                                                                              |
| [Understanding Distributed Systems](https://understandingdistributed.systems/) By Roberto Vitillo                                                                                                                                                                                                                 | A clear and down-to-earth explanation of distributed systems.                                                                                                                                   |
| [System Design Interview - An Insider's Guide Vol 1](https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF) and [Vol 2](https://www.amazon.com/System-Design-Interview-Insiders-Guide/dp/1736049119) By Alex Xu                                                                            | Volume 1 is a great introduction, while Volume 2 delves into more serious system design topics.                                                                                                 |
| [The Software Engineer's Guidebook](https://www.amazon.com/Software-Engineers-Guidebook-Navigating-positions/dp/908338182X/ref=sr_1_1?crid=29AQD618WX3ZB&keywords=software+engineers+guidebook&qid=1700522758&sprefix=%2Caps%2C107&sr=8-1) by Gergely Orosz                                                       | A great resource with fantastic advice to return to throughout a software engineering career.                                                                                                   |
| [Architecture Patterns with Python](https://www.cosmicpython.com/) by Harry Percival and Bob Gregory                                                                                                                                                                                                              | A worthwhile read on applying architecture patterns from Clean Code and Domain-Driven Design in Python, though some patterns may feel less "Pythonic" and more like their Java/C# counterparts. |

## Libraries and Tools

- Further deep-dived into async in Python
  - Learned a lot about
    [httpx](https://www.python-httpx.org/advanced/#customizing-authentication)
- Learned a lot about and implemented Redis in two services
- Created several mini-apps with
  [Serverless Framework](https://www.serverless.com/)
  - One of which involved Stepfunctions
  - **Highly recommend using Serverless Framework!**
- Played around with **CockroachDB** and **CassandraDB**
  - Found both had advantages, but especially loved CockroachDB for its metrics
    dashboard and ease of use
- Created an app that uses **MongoDB** and **Beanie-ODM** (link to frontend
  here: https://nag-media.netlify.app/)
  - Implemented the backend with **Serverless Framework** and a bunch of Lambdas
  - In the process, I learned how to use **New Relic** for log aggregation and
    monitoring
  - Frontend was Bootstrap for styling, TypeScript with React
- Deep-dived in Terraform and terragrunt
  - Found terragrunt a great and simple tool that really solves common issues
    with infra management in different environments

# **Outside of work**

## Blog posts

[gRPC Interceptors: A Way to Do Auth in Python](https://medium.com/@david-nagarpowers/grpc-interceptors-a-way-to-do-auth-in-python-42e8ba83abe5)
