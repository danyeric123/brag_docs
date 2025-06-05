# **Goals for this year**

> List your major goals here! Sharing your goals with your manager & coworkers
> is really nice because it helps them see how they can support you in
> accomplishing those goals!

- [x] Expand my Python skills
- [x] Gain real-life experience with Golang
- [x] Read more in Professional books on Software Engineering
- [ ] Gain Software/System Design skills through either real-life experience or
      much study

# **Projects**

### PDFGen

- Transitioned the Cyber Risk Assessment (CRA) document generation process from
  legacy microservice PDFGen to a new microservice called cyber-lifecycle that
  utilized [Temporal](https://temporal.io/) in order to asynchronously and
  resiliently generate documents
  - Converted most calls made from webserver to be routed to cyber-lifecycle
  - Providing a way of generating CRAs asynchronously, the user does not need to
    stare as the webpage waits for the document to be generated
- Moved several functionalities to the new and preferred microservices docgen
  and docstore. For example:
  - Expanded how docstore responds to events by adding the ability to emit a
    DocumentStored and DocumentFailed event, depending on the situation
  - Add the ability to extract individual pages from PDFs to expand the
    functionality for docstore

### Fiduciary and Crime Documents

- Added crime and fiduciary to the possible coverages that can be added in
  docgen, the documents team new and preferred microservice for generating
  documents
- Ran a script to add fiduciary and crime coverages to newly created (and some
  older) template and variant documents to make sure the launch of said
  coverages went off without a hitch

### **Templates synchronization observability across environments**

- Made the results of the observability script the culled data across different
  environments more human-readable by adding a step in the script to convert the
  results into an HTML table

### **Quote Creation Automation Document Validation**

1. Took ownership of full epic for the creation of a script that automates the
   creation of quotes
   1. Led other devs (Kenny and Rushabh) in coordinating the work that needs to
      be done
   2. Spoke with Junior PM (Divya) and users (Support Engineers) about their
      needs and requirements
      1. Created cards around said requirements
   3. Coordinated with other teams (Dave Koston) about the information we would
      need to implement the requirements fully
1. Created
   [a spike document](https://fiasco.atlassian.net/wiki/spaces/ENG/pages/2986312123/Script+GUI+for+Quote+Creation+Script)
   and led team discussion over design decisions
1. Disambiguated what was needed to make the script
   1. I went a step further and created a GUI all by myself, despite not
      committing to that originally in the Spike doc 🥳
      1. It seemed best to have a GUI as opposed to a simple script since
         members outside our team, for example, Jonathan Tighe, would be using
         the script.
      2. The possible cost would have been the amount of time spent trying to
         get the GUI working, but by selecting PySimpleGUI, I cut the time to
         edit and create a GUI to within a day.

### **Move all context generation into doc-context**

1. Executed a new process for creating new services that had several parts that
   needed to be clarified
   1. Worked with Mohnish on the platform team to learn and implement the new
      terragrunt way of creating infrastructure in AWS
2. Learned a lot in the process about how the infrastructure team works
3. Had to coordinate and clarify what the requirements were from a senior
   engineer (Lara Shores)
   1. Then had to figure out how to implement them with the help of Mohnish
4. This led to my drafting a proposal for the infrastructure team on ways of
   bidirectionally improving their relationship with other developer teams since
   I saw some inefficiencies in how other developers understood, used, and
   consumed their tools

### Doc-Management

- Made several UI improvements to an internal tool called doc-management to
  improve how the Support Engineers work and created a better user experience
  for them

# **Collaboration & mentorship**

- Helped a lot in improving our teams' processes which resulted in my writing up
  **_several_** documents
- Have become the go-to person for many questions about our system
- Have become the go-to person when anyone on the doc-support team needs
  something to get done **now**
- Led meetings about:
  - Code Comments
  - PR Review Process
  - Code Quality Improvements
- Mentored three different coding bootcamp graduates simultaneously
  - Two received jobs at the end of the mentoring process

# **What you learned**

### Concepts and Books

Read several books:

| Title                                                                                                                                                                                                                                                                                                                                                                               | Key Takeaways                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [Pragmatic Programmer](https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X)                                                                                                                                                                                                                                                                                 | Provided a framework for professional software engineering practices.                                                             |
| [Software Engineering at Google](https://www.amazon.com/Software-Engineering-Google-Lessons-Programming/dp/1492082791)                                                                                                                                                                                                                                                              | Offered deep insights into software engineering as a discipline distinct from programming, with valuable lessons on team culture. |
| [Building Microservices by Sam Newman](https://www.amazon.com/Building-Microservices-Designing-Fine-Grained-Systems/dp/B09RTQY7SX/ref=sr_1_1?crid=1VW0ISCF17JDT&keywords=building+microservices+by+sam+newman&qid=1673829703&s=books&sprefix=Building+Microservices+by+Sam+Newman%2Cstripbooks%2C106&sr=1-1)                                                                        | Directly applicable to my work with microservices, with many 1:1 correlations to real-world scenarios.                            |
| [Designing Data-Intensive Applications By: Martin Kleppmann](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/B08VL1BLHB/ref=sr_1_1?crid=1K9QCGVUZWVG7&keywords=Designing+Data-Intensive+Applications+By%3A+Martin+Kleppmann&qid=1673829720&s=audible&sprefix=designing+data-intensive+applications+by+martin+kleppmann%2Caudible%2C96&sr=1-1) | A dense but essential read that provided the vocabulary and mental models for reasoning about system design.                      |
| [Staff Engineer By: Will Larson](https://www.amazon.com/Staff-Engineer-Leadership-Beyond-Management/dp/B097CNXP89/ref=sr_1_1?crid=1L157UUAN18ZQ&keywords=staff+engineer+by+will+larson&qid=1673829740&s=audible&sprefix=Staff+Engineer+By%3A+Will+Larson%2Caudible%2C96&sr=1-1)                                                                                                     |                                                                                                                                   |

Cloud Computing and IaC

- Picked up and learned AWS and GCP
  - And then got certified in both with the following certifications:
    - AWS Developer Associate (January 2022)
    - GCP Cloud Engineer (February 2022)
  - Took what I learned in AWS and applied it to my job
    - Became one of the key people who managed and set up our infrastructure at
      V Studios
- Picked up Terraform in order to help the rest of my team address gaps in
  knowledge when communicating with the platform team at V! Studios (and as a
  result, also became a key person on the Documents team at Coalition)
  - Completed a full course on Terraform:
    https://courses.morethancertified.com/p/mtc-terraform (focused on real-life
    projects over memorization)

### Libraries and Tools

- Learned and deep-dived into
  [async in Python](https://www.b-list.org/weblog/2022/aug/16/async/) and
  several different libraries, like aiohttp, and went through
  [the walkthrough by Lynn Root, Staff Engineer at Spotify](https://www.roguelynn.com/words/asyncio-we-did-it-wrong/).
  - Spent a lot of time going through different libraries' documentation
  - And subscribed to a newsletter series that explained async in Python
- Picked up and learned
  - FastAPI
  - pipenv
  - Angular (for fun)
- Learned and used at my job Sphinx and reStructured Text
  - Created the rst docs for the project I was on and set up all the tools
    needed to run and maintain Spinx
- GraphQL
  - Created two different GraphQL backends in two different languages
    - Typescript: https://github.com/danyeric123/boilerplate-graphql-server
    - Python: https://github.com/danyeric123/graphene-book-api—and implemented
      in a larger personal project https://github.com/danyeric123/Ecommerce
- gRPC
  - Went through the
    [gRPC demo for Python](https://grpc.io/docs/languages/python/basics/)
  - Sam Newman's book helped a lot, especially Chapter 4 on encoding
  - Deep dive into interceptors in gRPC
  - Applied what I learned at work

### Programming Language

- Golang: made a simple Go backend,
  https://github.com/danyeric123/go-bookserver, packaging it in Docker and all
  😀 and jumped into a large Golang codebase at Coalition and starting working
  in it within a couple of days
- Bash—I have gotten really into Bash scripts 😜
  - I have created several bash scripts both for work and for my personal use
    - One key example would be my setup script—it cut my developer setup down
      from a couple of days to literal minutes

### Other

- Got a deeper knowledge of git
  - Specifically got more comfortable fixing all the different git mistakes you
    could make!
- Got introduced to and gained a better understanding of distributed traces
  - Specifically got familiarized with DataDog
    - Went through several of DataDog's tutorials and workshops (many focused on
      JS specific implementation)
- Helped a lot in improving our teams' processes which resulted in my writing up
  several documents

[GraphQL: The Good, The Bad, and The Bottomline](https://medium.com/geekculture/graphql-the-good-the-bad-and-the-bottomline-623de7dbcffb?source=your_stories_page-------------------------------------)

## Personal Life

- Relearned how to walk after reconstructive surgery on my left foot
