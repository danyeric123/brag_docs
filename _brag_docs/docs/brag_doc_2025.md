## **Goals for this year**

- [ ] Take on at least one public speaking engagement
- [ ] Gain Software/System Design skills through either real-life experience or
      much study
- [ ] Build more scripts and tools
- [ ] Expand my skillset to two new languages, libraries, or tools
- [ ] Maintain (and possibly deepen) my lesser-used skills in the JS/TS
      ecosystem

# **Projects**

<!-- company: CoalitionInc -->

## Tech E&O Dynamic Applications Project

- **Leadership and Initiative:**
  - Led the initiative to make application questions dynamic rather than static,
    starting with Tech E&O questions as the first milestone
  - Created a comprehensive initial design document and demonstrated
    adaptability by pivoting based on senior principal engineer feedback
  - Facilitated discussions between multiple teams to understand needs and
    perspectives
  - Developed and presented multiple architectural options with clear
    trade-offs, enabling informed business decisions
  - Demonstrated ability to "disagree and commit" by supporting an option
    different from the initial preference
- **Technical Implementation:**
  - Integrated document services with Application Service within
    exec-risks-backend
  - Successfully navigated challenges of working with exec-risks' unique code
    structure and application format
  - Developed solutions within tight business deadlines while maintaining code
    quality
  - Led and implemented many of the required changes personally
- **Cross-Team Collaboration:**
  - Identified discrepancies in proto file centralization for exec-risks-backend
  - Took the initiative to refactor custom Go files and push for a centralized
    approach
  - Worked closely with exec-risks team to refactor their custom methods on
    generated Go structs
  - Led the effort to centralize proto files across several services
  - Became a core engineer advocating for proto file centralization best
    practices

## Document Templating and Management Portal Revamp (Doc-Hub)

- **Context & Problem:**  
  - The company's core revenue stream from insurance products is directly tied to the variety and extensibility of documents we can generate. The document support team, responsible for creating and maintaining these templates, was hampered by a slow, unintuitive internal UI with a limited feature set. Critical processes, like creating test quotes for document validation, were manual and took over 10 minutes per document, creating a significant bottleneck.
- **Leadership & Initiative:**
  - I spearheaded an initiative to completely revamp this internal management portal, with the primary goal of boosting the doc support team's productivity.
  - Challenged an initial proposal from product leadership for a costly ($84,000/month) AI-powered automation. I demonstrated that we could achieve over 60% of the goals by revamping the frontend and automating testing through API calls. This pragmatic approach won over the director, who became a strong supporter after seeing the results.
  - I drove the project from conception to delivery, coordinating with product, business, and cross-functional engineering teams to define clear requirements and align on project goals.
  - I established key performance indicators (KPIs) and a process for gathering continuous user feedback to ensure the new tool met user needs and delivered measurable improvements.
  - Conducted stakeholder surveys to select the name "Doc-Hub," boosting adoption and brand recognition among internal users.
  - Partnered closely with Product Managers and Engineering Managers to develop clear requirements, articulate product vision, and map user flows and design prototypes.
- **Execution & Impact:**
  - I led the design and implementation of a new, modern frontend that automated previously manual workflows and introduced a much wider feature set, reducing document validation time from 10 minutes to under 1 minute.
  - Spun up a new frontend repository from scratch using pnpm, React Context API, and custom hooks; implemented best practice patterns for toasts and user flows, and organized code in a modular, scalable structure.
  - Trained and mentored the primarily backend-focused team on modern frontend paradigms and UX/UI best practices, elevating the team's full-stack capabilities.
  - By applying best practices in UX/UI and running experiments on different user flows, the new tool provides a more intuitive and efficient experience.
  - This initiative directly addressed a major operational bottleneck, empowering the document support team to work more effectively. This, in turn, allows Coalition to increase the variety and volume of insurance products we can offer, directly supporting a key company growth objective.

## Next-Gen Document Generation & Management System

- **Context & Problem:**  
  - The legacy document platform struggled with high-impact incidents, slow generation latency, and limited scalability for new markets, creating operational risk and hindering growth.
- **Leadership & Initiative:**  
  - Collaborated with Principal Engineers and senior leadership to define the architecture for a next-gen document system covering generation, storage, fetching, and management.
  - Secured buy-in by presenting KPIs targeting near-zero high-impact incidents, reduced generation times, and global scalability.
  - Led cross-functional design workshops from end of Q1 through Q2 to refine requirements and align stakeholders.
- **Execution & Impact:**  
  - Authored the comprehensive design doc and multiple ADRs outlining service boundaries, data flows, and operational controls.
  - Advised on new service implementations, monitored performance metrics, and iteratively refined the design, resolving bottlenecks like cross environment deployments.
  - Implemented dashboards to track incident rates and generation throughput as we expanded into additional markets.

<!-- company: CapitalOne -->

## LLDS Customer Onboarding & Parity Checker System

- **Spearheaded the design of a mission-critical parity checker** for Capital One's Low Latency Data Store (LLDS), a system required to handle **2,000 requests per second**. This was the first of its kind and essential for onboarding a new, major customer.
- **Took immediate ownership within weeks of joining**, rapidly learning the internal event streaming platform to architect a novel, cost-effective, and scalable solution.
- **My proposed lambda-based, event-driven design was praised by a Distinguished Engineer and the team lead** because it significantly reduced customer implementation effort by eliminating the need for traffic mirroring.
- **Built a self-service Databricks analytics system** that enables teams across the organization to analyze parity checker differences independently. Created a GitHub repo-connected Databricks notebook with a reusable analysis package, allowing users to simply clone the repo and customize their analysis workflows.
- **Established new organizational patterns** for Databricks integration with GitHub repositories, creating a template that other teams can follow for self-service analytics solutions.
- **Became the team's Python expert and go-to person**, mentoring junior developers on best practices and elevating the overall Python knowledge across the team.

## Enterprise Security Group Migration

- **Led a time-sensitive, enterprise-wide security initiative** for my team within my first month to migrate to more granular, application-specific security groups.
- **Delivered the project in just two weeks—ahead of schedule**—by establishing a cross-team communication channel and creating a common security group with shared rules, saving other teams in my org significant time and effort.
- **Mentored a junior developer** on core AWS security concepts (Security Groups, Prefix Lists) during the migration.

## GitHub Enterprise Migration

- **Volunteered to lead my team's early migration** from a legacy source control system to GitHub Enterprise, a high-priority initiative from our director.
- **Successfully migrated several key repositories ahead of the enterprise timeline**, identifying and documenting migration patterns that streamlined the process for other teams.

## AI Support Agent Platform

- **Took ownership of a high-visibility AI support agent project** (with SVP interest) that was outside of my direct responsibilities.
- **Drove the implementation of the project's vision** to create a scalable, company-wide platform that other teams could adopt to support their own internal products, turning the initial concept into a functional reality.
- **Integrated New Relic monitoring and observability** into the platform, collaborating directly with the AIML team to ensure proper instrumentation and performance tracking across the AI support agent infrastructure.
- **Guided the team on Python best practices to improve code quality**, leading to a successful demo at an organizational all-hands meeting.

## Service Improvements & Bug Discovery

- **Discovered and resolved multiple critical bugs** in the main `consumers` service despite being new to the team, uncovering parts of the codebase that other team members were unfamiliar with.
- **Made significant improvements to service reliability and performance**, demonstrating deep technical investigation skills and contributing to overall system stability.
- **Became a key contributor to core service maintenance**, quickly establishing expertise in critical business systems.

# **Collaboration & Mentorship**

## **Collaboration**

<!-- company: CoalitionInc -->

### **Mentorship and Co-Contributor Role in Design Docs**

-

### Cross-Team Technical Leadership

- Partnered with Product Managers and Engineering Managers to define requirements, articulate vision, and design user flows for the Doc-Hub portal revamp.
- Tech E&O Project Leadership:
  - Created a comprehensive initial design document
  - Demonstrated adaptability by pivoting based on senior principal engineer feedback
  - Developed and presented multiple architectural options with clear trade-offs
  - Successfully integrated with exec-risks-backend despite architectural differences
  - Led proto file centralization initiative across multiple services
  - Completed complex refactoring work in external team repositories
  - Facilitated smooth handoff to exec-risks team under tight deadlines
- Collaborated with Principal Engineers and senior leadership on the next-gen document system architecture, defining KPIs for incident reduction, performance, and global scalability.

<!-- company: CapitalOne -->

### Technical Leadership & Mentorship

- **Became the team's go-to Python expert**, mentoring junior developers on best practices and elevating the overall Python knowledge across multiple projects including LLDS parity checker and AI Support Agent platform.
- **Established myself as the AI-assisted coding evangelist** on the team, teaching others best practices for integrating AI tools into their development workflow and helping team members improve their productivity through AI-powered development techniques.
- **Taught Databricks fundamentals** to team members, sharing knowledge gained from building the self-service analytics system and establishing patterns for future Databricks integrations.
- **Elevated team's technical skills** across multiple domains, receiving praise from my team lead for Python expertise, AWS security knowledge (Security Groups, Prefix Lists), and innovative approaches to development tooling.
- **Working to become an instructor** for the internal "Tech College," creating content to teach AWS and Lambda best practices to new hires, an initiative taken outside of assigned work to give back to the engineering community.

### Design & Documentation

- **Authored the core design for the LLDS parity checker**, praised by a Distinguished Engineer for its cost-effective and scalable architecture. This design is now a reusable pattern for future customer onboardings.
- **Improved developer onboarding and knowledge sharing** by significantly enhancing the READMEs for two of the team's key repositories, integrating KT session notes and tribal knowledge to make them accessible and permanent.
- **Documented migration patterns** for both the Security Group and GitHub Enterprise initiatives, creating durable resources that other teams can leverage.

### General Recognition

- **Praised by both my manager and team lead** for exceptionally fast onboarding and making impactful contributions within weeks of joining.

## **Mentorship**

### Direct Mentorship of Junior Developers

- **Became the team's primary Python mentor**, providing ongoing guidance on best practices, code quality, and advanced Python concepts across multiple projects
- Mentored junior developer on Python best practices during LLDS parity checker project execution, receiving praise from team lead for elevating team knowledge
- Mentored junior developer on AWS security concepts including Security Groups and Prefix Lists during enterprise security migration
- Guided team members on code quality and Python best practices for AI Support Agent platform
- **Evangelized AI-assisted coding practices**, teaching team members how to effectively integrate AI tools into their development workflow to improve productivity and code quality

### Knowledge Transfer and Teaching

- Working towards becoming an instructor in internal "Tech College" to teach new hires and new graduates about AWS and Lambda
- Would cover both general AWS/Lambda concepts and Capital One-specific implementations
- Initiative taken outside of assigned work to give back and share knowledge company-wide

### **General Recognition**

-

###

## Foundational Code

<!-- company: CoalitionInc -->

### **Refactoring and Documentation**

-

### Infrastructure and Developer Experience

<!-- company: CoalitionInc -->

- Improved repository documentation and developer onboarding:
  - Enhanced READMEs with comprehensive documentation
  - Optimized makefile commands for better workflow efficiency
- Bootstrapped a new frontend repository for the Doc-Hub portal using pnpm, React Context API, custom hooks, and modular code organization; introduced UI patterns and best practices for toasts and user flows to enhance developer experience.

<!-- company: CapitalOne -->

- Enhanced documentation for two key team repositories:
  - Integrated knowledge transfer session notes directly into READMEs for better accessibility
  - Improved onboarding experience for new team members by consolidating tribal knowledge
  - Made critical information discoverable and maintainable for long-term team success
- Made multiple code quality improvements through smaller PRs, incrementally improving codebase health

# **Design & Documentation**

<!-- company: CoalitionInc -->

## Design Docs

1. Authored a comprehensive design document for the Doc-Hub portal revamp, incorporating stakeholder naming survey results, user flow diagrams, and interactive prototypes.
2. Authored the architecture design document and ADRs for the next-gen document generation & management system, focusing on incident reduction, performance optimization, and global scalability.

## Documentation

1. Heavily improved READMEs in all repos owned
2. Authored a frontend style guide for the Doc-Hub portal, detailing code organization, Context API usage, hook patterns, and toast/user flow best practices.

<!-- company: CapitalOne -->

## Design Docs

1. Co-authored design for LLDS customer onboarding parity checker system, including:
   - Lambda-based event-driven architecture leveraging Capital One's event streaming system
   - Cost analysis and efficiency recommendations
   - Request/response translation approach
   - Scalable, reusable patterns for future customer onboarding
   - Design was praised by Distinguished Engineer and team lead for cost-effectiveness and architectural quality

## Documentation

1. Enhanced READMEs for two critical team repositories by integrating knowledge transfer session notes
2. Documented security groups migration patterns and cross-team learnings
3. Created migration guides and best practices documentation for GitHub Enterprise transition

# **What you learned**

## Concepts and Books

Read several books:

-

Concepts:

-

## Libraries and Tools

<!-- company: CoalitionInc -->

-

<!-- company: CapitalOne -->

### Concepts and Systems

- **Event-Driven Architecture at Scale:** Learned Capital One's enterprise event streaming system and how to leverage it for building scalable, loosely-coupled services. Applied this knowledge to design lambda-based event consumers for the LLDS parity checker.
- **AI/ML Platform and Tooling:** Gained deep understanding of Capital One's AI/ML system, including available tools, platform capabilities, and integration patterns for building AI-powered applications.
- **Enterprise Security Patterns:** Developed expertise in AWS Security Groups, Prefix Lists, and enterprise-scale security posture management. Learned how to balance security requirements with team autonomy.
- **Large-Scale GitHub Enterprise Migration:** Understood the challenges and best practices for migrating enterprise codebases from legacy systems to modern platforms.

### Libraries and Tools

- **Databricks**: Learned from scratch how to build self-service analytics systems, integrate GitHub repositories with Databricks notebooks, and create reusable analysis packages for organizational use
- Capital One's internal event streaming platform and its integration patterns
- AWS Lambda best practices and Capital One-specific implementation patterns
- Capital One's AI/ML tooling ecosystem and platform services
- **New Relic**: Integrated monitoring and observability solutions for AI platform infrastructure
- GitHub Enterprise (github.com) migration tools and workflows
- AWS security constructs (Security Groups, Prefix Lists) at enterprise scale

# **Outside of work**

## Blog posts
