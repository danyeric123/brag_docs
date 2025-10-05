## **Goals for this year**

- [ ] Take on at least one public speaking engagement
- [x] Gain Software/System Design skills through either real-life experience or
      much study
- [x] Build more scripts and tools
- [x] Expand my skillset to two new languages, libraries, or tools
- [x] Maintain (and possibly deepen) my lesser-used skills in the JS/TS
      ecosystem

<!-- company: CoalitionInc -->

# **Projects**

## Tech E&O Dynamic Applications Project

- **Spearheaded a strategic initiative** to transition insurance application questions from static to dynamic, starting with Tech E&O. This project was critical to enabling customized insurance products, directly impacting business agility and the ability to enter new markets faster.
- **Drove the architectural vision** by creating the initial design, facilitating cross-team architectural discussions, and presenting multiple options with clear trade-offs to leadership. My ability to build consensus and "disagree and commit" ensured the project moved forward with full business alignment, even when the final direction differed from my initial proposal.
- **Led the technical execution**, integrating our document services with the `exec-risks-backend` under tight deadlines. This involved navigating a complex and unfamiliar codebase and personally implementing a significant portion of the core logic, ensuring we delivered a high-quality solution on time.
- **Championed and executed a critical cross-team refactor** to centralize Protobuf definitions. I identified inconsistencies in the `exec-risks-backend` and led the effort to centralize protos across several services, reducing code duplication and simplifying future integrations. This has become the new best practice for services in our domain.

## Policy Validator Service

- **Leadership Role in Service Creation:**
  - Successfully took ownership of the service, building upon its foundation and
    enhancing its capabilities, demonstrating initiative and problem-solving
    skills.
  - Demonstrated initiative and problem-solving skills by optimizing and
    extending the service beyond its initial scope.
- **Expanding the Work and Reducing Noise:**
  - Collaborated with key stakeholders and product teams to deliver meaningful
    metrics and safeguards, showcasing strong collaboration and communication
    skills.
  - Achieved higher coverage than promised within the quarter (60% promised, 70%
    delivered), showcasing dependability and over-delivering on objectives,
    illustrating dependability and an ability to exceed expectations.
- **Identifying and Addressing System Issues:**
  - Exposed several key issues, bugs, and gaps, leading to the creation of a
    multi-team project to address these problems, highlighting strong analytical
    and teamwork skills.
    - Worked through adversity to actually still deliver key goals
  - Gathered data and worked with a senior developer to better categorize and
    address these issues, illustrating strong analytical and teamwork skills.
    - (Naming is one of the two hardest things in SWE 😉)

### **Impact**

- Increased system reliability and performance by identifying and resolving
  critical issues.
- Fostered cross-team collaboration and improved overall service quality.
- Enhanced project leadership and strategic problem-solving abilities.

## **Template Management Refactor**

- **Refactoring and Renaming:**
  - Heavily refactored the template management logic, renaming the
    "dynamoregistry" to "template management" to provide a new framework for
    grouping related functionality, showcasing initiative and strategic
    thinking.
  - Split out logic for the local cache and DynamoDB (DDB) calls into separate
    providers by creating an abstract class, demonstrating strong design skills
    and modularity.
- **Efficiency and Performance Improvements:**
  - Improved DDB queries and scans by avoiding full table scans and introducing
    direct item queries, significantly enhancing the tool's performance and
    efficiency.
  - Developed a concept of a `search_key` for more refined scans, increasing the
    system's responsiveness and search functionality.
  - Extended search capabilities to include fuzzy search and filtering by
    various attributes such as market, line, and other configurable fields,
    paving the way for future performance enhancements.
- **Real-Time Updates and Synchronization:**
  - Ensured updates or creations in DDB are immediately saved and synced across
    instances, maintaining the health of the document management tool during
    deployments.
  - Improved system scalability by transitioning from a single instance to
    multiple instances, allowing as many instances as needed.
  - Enhanced system stability by eliminating the dependency on full table scans
    and improving cache reliability.

### **Impact**

- **Enhanced Performance:**
  - Reduced the need for full table scans, significantly speeding up the doc
    management tool.
- **Scalability:**
  - Successfully transitioned from a single instance to multiple instances,
    providing the ability to scale out as needed.
- **Improved System Health:**
  - Ensured real-time synchronization across instances, reducing system downtime
    during deployments.
- **Increased Modularity and Maintainability:**
  - Made the logic more modular and easier to maintain by separating concerns
    into different providers.
- **New Framework Implementation:**
  - Provided a new paradigm for thinking about and grouping functionality,
    enhancing the clarity and strategic direction of the system.
- **Advanced Search Capabilities:**
  - Enabled fuzzy search and customizable filtering, increasing search
    efficiency and flexibility.

## Replay Service

- **Implementation and Testing:**
  - Implemented a smoke/regression testing system with PE, improving the
    system's reliability and robustness through technical expertise.
  - Took significant ownership of infrastructure work, system debugging, and
    codebase contributions, demonstrating a deep technical expertise.
- **Process Design and Training:**
  - Designed an effective testing process and successfully trained other team
    members, showing strong teaching and leadership abilities.
  - Ensured minimal introduction of new bugs and improved testing
    comprehensiveness.
- **Frontend Modernization:**
  - Successfully migrated frontend from Jinja to React
  - Established new repository following company best practices
  - Implemented modern development tools and practices:
    - Integrated pnpm for significantly improved local development speed
    - Adopted tanstack-query for efficient data management
    - Developed custom hooks and optimized React Context usage
  - Created foundation for modernizing older frontend applications
  - Enhanced developer experience through improved tooling

### **Impact**

- Increased system reliability with thorough smoke and regression testing.
- Elevated team productivity and code quality through structured training and
  robust testing frameworks.
- Demonstrated leadership and mentorship by guiding teammates through complex
  technical processes.

## Document Management Tool Improvements

- **User Experience Enhancements:**
  - Improved the user interface by allowing users to customize which subsections
    they see in the conditions section, enhancing ease of use and user
    satisfaction.
  - Introduced customizable preferences for the conditions and main templates
    page. Users can now select and order columns based on their needs.
  - Expanded the variety of columns available, including market, line, and
    assignment status, improving the visibility of critical information.
- **Collaboration and Feedback:**
  - Actively collaborated with doc-support users to gather and understand their
    needs and preferences, ensuring the tool improvements were user-centric.
  - Responded promptly to user feedback and bugs during the rollout, addressing
    issues within minutes, and showcasing responsiveness and customer focus.
- **Enhanced Document Version Control:**
  - Implemented rollback endpoint for files, enabling version control in S3
  - Created endpoint for retrieving file versions and visual diff capabilities
  - Navigated S3 versioning constraints to implement a robust solution
  - Added critical document management features that improved service
    capabilities
  - Assisted doc support engineers with large PRs during company logo rollout

### **Impact**

- Enhanced usability and user satisfaction by facilitating quicker and easier
  access to important information.
- Improved user efficiency and customization options, leading to a more
  productive workflow for doc-support users.
- Demonstrated strong collaboration, communication, and responsiveness skills,
  ensuring ongoing user engagement and improvement.

## **Docgen Service Latency Improvement**

- **Problem Identification and Collaboration:**
  - Noticed significant latency issues in the main service, Docgen, which caused
    us to be way out of our SLO and significantly increased our burn rate.
  - Collaborated with a senior engineer who initially provided possible sources
    of the latency problem.
- **Investigation and Analysis:**
  - Took ownership of the issue while the senior engineer was away,
    investigating the suggested issues using logs and traces in Datadog.
  - Maintained ongoing communication with two Principal Engineers (PEs), sharing
    insights and collaborating on potential solutions.
- **Solution Implementation:**
  - Identified that reloading the local cache every minute was causing the
    latency.
  - Proposed and implemented a quick solution to update the cache only on
    changes, leveraging my recent work on the caching mechanism and the new
    system for capturing snapshots of our database.
  - Implemented a mechanism where the cache would check the snapshot ID and
    reload only if it had changed.

### **Impact**

- Successfully restored our SLOs and significantly reduced latency, as evidenced
  by several graphs:
  - Reload time was reduced from several seconds to mostly 0s, with mere
    milliseconds on actual reloads.
  - The percentage of calls over 1s dropped from 30% to 10%, improving overall
    performance.
- Also fixed a longstanding memory issue, leading to a dramatic drop in memory
  usage.

## **TRIA Free Offering Project**

- **Leadership and Coordination:**
  - Led a high-profile, customer-facing project to offer TRIA for free in a
    specific market for our internal carrier.
  - Coordinated with multiple teams and stakeholders, managing several setbacks,
    including requirements clarifications and carrier approvals.
- **Handling Legacy Policies:**
  - Managed the complexity of older policies and determined required behavior,
    leading to the identification and resolution of several bugs.
  - Collaborated closely with different teams to get engineering questions
    answered and disseminated information effectively.
- **Cross-Team Collaboration:**
  - Facilitated inter-team communication, ensuring that developers from various
    teams were aligned.
  - Specifically addressed a front-end issue where older policies were not
    accounted for, and worked with the front-end team to resolve it.
  - Quickly directed the resolution of bugs and ensured that customer issues
    were promptly handled.
- **Process Improvement:**
  - Introduced new processes for more effective project management, such as
    clear launch documents with specified dates and sign-offs, inspired by best
    practices from senior developers.

### **Impact**

- **Simplified User Experience:**
  - Eliminated the need for policyholders to accept or reject TRIA with a
    signature, reducing hassle and streamlining the onboarding experience.
  - Updated internal tools to remove prompts for TRIA acceptance or rejection,
    speeding up the policy issuance workflow.
- **Benefits for Brokers:**
  - Enabled a smoother and simpler policy setup for brokers by removing the need
    for an additional onboarding discussion point.
  - Promoted consistent TRIA offerings across all US Cyber policies, enhancing
    the user experience.
- **Improved Policy Documentation:**
  - Updated policy documents (Quotation, Binder, Declarations) to no longer show
    TRIA charges, and revised marketing jackets to reflect this change.
- **Operational Efficiency:**
  - Simplified policy issuance workflows, allowing the servicing team to avoid
    TRIA-specific handling processes.

# **Collaboration & Mentorship**

## **Collaboration**

### **Designated Go-to Expert**

- The Documents and doc-support teams regularly seek my expertise on
  Golang-related issues and questions.
- As the subject matter expert (SME) for infrastructure within the Documents
  team, I guide engineers of all levels—from P2 to senior—on setting up
  Terraform and Terragrunt files.
- Demonstrated strong mentorship and knowledge sharing:
  - Helped doc support engineers with large PRs during logo rollout
  - Provided rapid response to bug reports and feature requests
  - Assisted with giant PRs for the docx_formatter project
  - Provided mentoring support to doc-support engineers, fostering their growth
    and development
  - Shared React and modern frontend development best practices
  - Led by example in improving documentation and developer workflows

### **Mentorship and Co-Contributor Role in Design Docs**

- **Consulted PE and Senior Engineer on Multiple Projects**
  - Mentored other developers, including guiding P3 engineers through a downturn
    and helping them relate to other team members.
  - Co-contributed to design docs and consulted with PE and a Senior Engineer on
    multiple projects.
- Push for more documentation and formalization of design decisions

### Cross-Team Technical Leadership

- Tech E&O Project Leadership:
  - Created a comprehensive initial design document
  - Demonstrated adaptability by pivoting based on senior principal engineer
    feedback
  - Developed and presented multiple architectural options with clear trade-offs
  - Successfully integrated with exec-risks-backend despite architectural
    differences
  - Led proto file centralization initiative across multiple services
  - Completed complex refactoring work in external team repositories
  - Facilitated smooth handoff to exec-risks team under tight deadlines

### **Document Management Tool Collaboration**

- Worked closely with doc-support users to understand their requirements, gather
  feedback, and implement improvements.
- Maintained rapid response times to user feedback and bug reports during the
  rollout phase.

### **General Recognition**

- Consistently recognized by a Principal Engineer for exceptional responsiveness
  and quick fixes for any and all bugs:
  - "Thanks for always being so quick to make fixes and investigate things!"
    (Jim Kelly)
  - Multiple instances where the PE has been impressed by the speed and quality
    of the fixes delivered, underscoring my reliability and dedication to
    quality.
- Actively collaborated with teammates and stakeholders across projects,
  ensuring timely communication and effective problem-solving.

### **Docgen Service Latency Improvement**

- Collaborated closely with a senior engineer and two Principal Engineers to
  diagnose and resolve significant latency issues in the Docgen service.
- Maintained clear and ongoing communication throughout the process, ensuring
  alignment and timely updates.

### **TRIA Coverage Offering Project**

- Led cross-functional collaboration involving multiple teams to successfully
  launch the TRIA coverage offering.
- Managed and resolved issues related to older policies, coordinating with
  various teams to ensure engineering questions were answered and solutions were
  disseminated.
- Promoted better communication and project management practices, such as clear
  launch documents with specified dates and sign-offs.
- Addressed frontend issues regarding older policies and worked with the
  frontend team to resolve them, ensuring a seamless user experience.

## Foundational Code

### **Refactoring and Documentation**

- Refactored the main service code to improve readability and functionality,
  introduced better testing, and added comprehensive docstrings.
- Created foundational code for the Policy-Validator service, including
  structure and best practices.
- Improved several CI systems and developer workflows.

### Infrastructure and Developer Experience

- Improved repository documentation and developer onboarding:
  - Enhanced READMEs with comprehensive documentation
  - Optimized makefile commands for better workflow efficiency
  - Improved docker compose configuration with network additions
  - Streamlined and accelerated CI processes

# **Design & Documentation**

## Design Docs

1. Wrote design docs for Tech E&O project—how the new integrations can work with
   tradeoffs for each

## Documentation

1. Heavily improved READMEs in all repos owned

# **What you learned**

## Concepts and Books

Read several books:

| Title                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Key Takeaways                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [Software Architecture: The Hard Parts](https://www.amazon.com/Software-Architecture-Trade-Off-Distributed-Architectures/dp/B0CFVZTP97/ref=sr_1_1?crid=3VJVFOSGY0TYC&dib=eyJ2IjoiMSJ9.nqwcn_XNPa_qE3lv1ItCHuquH-d-we8afmACcFRM2iVPGLrXG8pabq3AK0WcAKNLKeqffIIoQ8uatP9joAkMmi8U6Hd0FGowSStBZy8JEXoTbiLthPBGhkPYFwtXQvsFoPd7dS7DsxJ2cSbwqY2vxhv2gQ_qi2JJWiwrqugwS7Khwsi8zBG2_yq1X0M1mhBh3JS1sA8pJ8jK2Xk_KT_8rTqlIfM_gzVddqa8ZmVflPs.S_xkGKjKMp23PPHiOQ1OUG42zPDY1CvuipoyDPNIXOE&dib_tag=se&keywords=software+architecture+the+hard+parts&qid=1717343103&sprefix=software+ar%2Caps%2C127&sr=8-1)                        | Does a great job explaining complex issues, though the narrative tone falls short.       |
| [Fundamentals of Software Architecture: An Engineering Approach](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach/dp/B08X8H15BW/ref=sr_1_4?crid=3VJVFOSGY0TYC&dib=eyJ2IjoiMSJ9.nqwcn_XNPa_qE3lv1ItCHuquH-d-we8afmACcFRM2iVPGLrXG8pabq3AK0WcAKNLKeqffIIoQ8uatP9joAkMmi8U6Hd0FGowSStBZy8JEXoTbiLthPBGhkPYFwtXQvsFoPd7dS7DsxJ2cSbwqY2vxhv2gQ_qi2JJWiwrqugwS7Khwsi8zBG2_yq1X0M1mhBh3JS1sA8pJ8jK2Xk_KT_8rTqlIfM_gzVddqa8ZmVflPs.S_xkGKjKMp23PPHiOQ1OUG42zPDY1CvuipoyDPNIXOE&dib_tag=se&keywords=software+architecture+the+hard+parts&qid=1717343103&sprefix=software+ar%2Caps%2C127&sr=8-4) | More approachable than Kleppmann's DDIA, and very detailed and clear about key concepts. |
| [The Staff Engineer's Path](https://www.amazon.com/Staff-Engineers-Path-Individual-Contributors/dp/B0C7SFBXW3/ref=sr_1_1?crid=1KQ7WS2D9IWSU&dib=eyJ2IjoiMSJ9.Ce1SzKnc3Sb5-pmrQqWRASiiHSwXA7JkAQ0a6fSin5nsDUeqEBWEeSrOgPb_xP8qU2E_9cVqn6tOyn1U_MGMxGYQ1ijcPoJmUylpoNHIR7ObUvrtfG65sJjtDSSnF_-yvDzw5iyxcSG8qIoBYeuXFrlr9ZNh7ne2mUAZtnKl4zpsUUWkqgBvOe5XWnABPV6H.q3XxM5qPSY1XnAzS8yB7fNdDozhNHCJhp2Fz1NnKsc8&dib_tag=se&keywords=the+staff+engineer%27s+path&qid=1717343263&sprefix=the+staff+%2Caps%2C134&sr=8-1) by Tanya Reilly                                                                                      | Provides helpful advice and practical ways to think and act like a staff engineer.       |
| [Good Strategy / Bad Strategy: The Difference and Why it Matters](https://www.amazon.com/Good-Strategy-Bad-Strategy-audiobook/dp/B07R6XQ8YP/ref=sr_1_1?crid=MFOSN0MFEAFU&dib=eyJ2IjoiMSJ9.pu2RnrPwHBgFS3mog_UaLTtW-J5n87Z9rEo70pFbaq9KYMwU-Jbrn0sGopVEGFO2MufHMw6fyx00rqCw3DnS8S3KEG0zXjhxfLRf6qcWpynj_FLape5cWHbp7kxEd0cp7eJH6xc0JKshrm8K50d0-CuvPJf59bo1X5U2JWtq4J9uJN9y60i6fS1sYdxK4RCFY0X7p9pchQiOttCWwA2qHmk0ltLXdQEZHmPOoVK5i3U.0o5FvlAfrAgjj2kzrz78j6_JRV-SWj5i3ed0KSjnCeI&dib_tag=se&keywords=good+strategy+bad+strategy&qid=1717343422&sprefix=good+str%2Caps%2C116&sr=8-1)                                 | A simple but mind-blowing idea that changed my perspective on a fundamental concept.     |

Concepts:

- Deep dive into TDD
- Deep dive into programming paradigms
- Dependency Injection (DI).

## Libraries and Tools

- Gained expertise in modern frontend development tools:
  - Implemented pnpm for significantly improved local development speed
  - Mastered tanstack-query for efficient data management
  - Developed custom React hooks and context patterns
  - Learned advanced S3 versioning and management
- Deep dived into Bash
  - Moved beyond basic features of bash to more advanced features
  - Created several more user-friendly bash scripts
  - Practiced better error handling and responses in bash scripts
  - I learned a lot of cool tricks from
    https://www.youtube.com/@yousuckatprogramming

# **Outside of work**

## Blog posts

[Programming Paradigms](https://medium.com/@david-nagarpowers/programming-paradigms-82b14ebe9c5f?source=your_stories_page-------------------------------------)
