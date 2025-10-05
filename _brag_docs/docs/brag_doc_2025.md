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

- **Context & Problem:**
  - First-time onboarding of a new customer to Capital One's Low Latency Data Store (LLDS) required a scalable, reusable parity checking system to validate that latency would be equivalent or better and data integrity would be maintained during migration
  - System needed to handle 2,000 requests per second (~172.8 million requests per day) while maintaining low latency
  - System needed to handle request/response structure translation between customer format and internal system expectations
  - Solution needed to be cost-efficient, maintainable, and minimize customer implementation burden
- **Leadership & Initiative:**
  - Within weeks of joining Capital One, proactively jumped into the project without being asked and made significant design contributions
  - Quickly learned Capital One's event streaming system and leveraged it to create an elegant solution
  - Collaborated with team lead, Distinguished Engineer, and customers to refine design approach
  - Proposed a lambda-based event-driven architecture that eliminated the need for customers to mirror traffic—they only needed to register, and the system handled the rest
  - Design was praised by both team lead and Distinguished Engineer for being cost-effective and well-architected
- **Execution & Impact:**
  - Delivered the first scalable, reusable parity checking system for LLDS customer onboarding
  - Achieved significant cost savings through efficient architecture design
  - Reduced customer onboarding friction by minimizing their implementation requirements
  - Mentored a junior developer on Python best practices during project execution
  - Recognized by team lead for Python expertise—team lead explicitly stated I had taught them new Python concepts

## Enterprise Security Groups Migration

- **Context & Problem:**
  - Enterprise initiative to transition from legacy security groups to more granular, application-specific security groups for improved security posture
  - Required coordination across multiple teams to identify common ingress/egress rules
  - Needed to understand service-specific security requirements for each team service
- **Leadership & Initiative:**
  - Within one month of starting, led this enterprise initiative for my team
  - Created and coordinated a dedicated Slack channel for cross-team knowledge sharing and collaboration
  - Researched and documented security requirements for each service within my team
  - Identified opportunities to share common security group rules across teams to reduce duplication and save time
- **Execution & Impact:**
  - Delivered project within two weeks of assignment, ahead of schedule
  - Mentored junior developer on AWS security concepts including Security Groups and Prefix Lists
  - Contributed to enterprise-wide security improvement initiative
  - Established reusable patterns that other teams could leverage

## GitHub Enterprise Migration

- **Context & Problem:**
  - Company initiative to migrate from legacy internal GitHub system to GitHub Enterprise (github.com)
  - Director prioritized early migration to get ahead of enterprise timeline
- **Leadership & Initiative:**
  - Volunteered to lead the migration effort for my team
  - Proactively engaged with other teams to understand potential pitfalls and manual work requirements
  - Migrated multiple repositories to new GitHub Enterprise system
  - Monitored for issues post-migration and coordinated with stakeholders
- **Execution & Impact:**
  - Successfully completed early migration ahead of planned timeline
  - Positioned team to lead by example for other teams in the organization
  - Identified and documented migration patterns to help future migrations

## AI Support Agent Platform

- **Context & Problem:**
  - Project started by previous engineers to create an AI-powered support agent for internal tooling
  - Needed senior engineering ownership to clean up codebase, establish best practices, and expand vision
  - High visibility project with Senior Vice President interest
- **Leadership & Initiative:**
  - Within weeks of starting, onboarded to project (outside assigned work) and quickly took senior engineering ownership
  - Learned Capital One's AI/ML system, tooling ecosystem, and available platform capabilities
  - Elevated project vision from single-team tool to company-wide platform that any team could adopt by providing their documentation
  - Guided team on Python best practices and code quality improvements
  - Project was demoed during organizational all-hands, showcasing its potential impact
- **Execution & Impact:**
  - Transformed project into a scalable platform approach rather than single-use tool
  - Positioned solution as reusable asset for the entire company
  - Gained Senior Vice President sponsorship and visibility
  - Enabled other teams to create their own support agents for internal products

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

### Cross-Team Coordination and Knowledge Sharing

- Created and facilitated dedicated Slack channel for cross-team collaboration on security groups migration, enabling teams to share learnings and identify common patterns
- Collaborated with team lead (Distinguished Engineer level) and external customers on LLDS parity checker design, incorporating feedback from multiple stakeholders
- Proactively engaged with other teams during GitHub migration to understand challenges and document best practices for future migrations

### Python Expertise and Technical Leadership

- Recognized by team lead for Python expertise—explicitly told that I had taught them new Python concepts
- Praised by both manager and team lead for quick onboarding and early contributions
- Guided team on Python best practices and code quality improvements for AI Support Agent platform
- Demonstrated technical depth in lambda-based event-driven architectures and AWS security concepts

## **Mentorship**

### Direct Mentorship of Junior Developers

- Mentored junior developer on Python best practices during LLDS parity checker project execution
- Mentored junior developer on AWS security concepts including Security Groups and Prefix Lists during enterprise security migration
- Guided team members on code quality and Python best practices for AI Support Agent platform

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

- Capital One's internal event streaming platform and its integration patterns
- AWS Lambda best practices and Capital One-specific implementation patterns
- Capital One's AI/ML tooling ecosystem and platform services
- GitHub Enterprise (github.com) migration tools and workflows
- AWS security constructs (Security Groups, Prefix Lists) at enterprise scale

# **Outside of work**

## Blog posts
