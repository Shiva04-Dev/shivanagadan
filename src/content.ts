export const CONTENT = {
  identity: {
    fullName: "Shiva Ganesh Nagadan",
    title: "Full-Stack Engineer · AI Engineer",
    location: "Johannesburg, South Africa",
    github: "https://github.com/Shiva04-Dev",
    linkedin: "https://www.linkedin.com/in/shiva-ganesh-nagadan/",
    email: "ganeshshiva772@gmail.com",
    phone: "(+27)833005651",
    positioning: "Final-year Honours Software Engineering student. Award-winning AI engineer. Building production systems that work in the real world.",
    funFact: "Former field hockey player and chef turned software engineer."
  },
  flagshipProjects: [
    {
      name: "Impilo — AI Mental Wellbeing WhatsApp Chatbot",
      award: "1st Place — Naspers \"AI for Good\" Challenge · June 2026",
      role: "Lead Architect & Full-Stack Engineer",
      duration: "June 2026",
      team: "Sole engineer across a five-person cross-functional hackathon team",
      tech: ["Node.js", "Express", "Azure OpenAI (GPT-4o-mini)", "Azure Cosmos DB", "Azure App Service", "WhatsApp Cloud API", "Git"],
      description: [
        "Generative AI conversation engine using Azure OpenAI GPT-4o-mini, with a clinically-informed multilingual system prompt guiding mood screening, breathing exercises, and cognitive reframing.",
        "Deterministic crisis safety layer that intercepts keywords before the LLM is invoked, ensuring mental health crisis and GBV referrals are delivered verbatim.",
        "Per-user conversation memory via Azure Cosmos DB, with automated 48-hour follow-up check-ins.",
        "Production deployment to Azure App Service with secure environment variable management.",
        "Resolved OAuth token failures, API misconfigurations, and tunnel interference under live hackathon pressure."
      ],
      links: {
        github: "https://github.com/Shiva04-Dev/Impilo-Fallback",
        vercel: "https://im-pilo.vercel.app/"
      }
    },
    {
      name: "Internship Management System",
      role: "Full-Stack Developer",
      duration: "November 2025 – February 2026",
      tech: ["C#", "ASP.NET Core", "SQL Server", "PostgreSQL", "Entity Framework Core", "React", "RESTful APIs"],
      description: [
        "End-to-end platform connecting students, companies, and administrators through a workflow-based internship application and approval process.",
        "Role-based authentication and permissions management using JWT and RBAC for multiple user types.",
        "RESTful APIs for internship postings, applications, and approval workflows with proper error handling.",
        "Normalised relational database schema supporting complex queries across multiple user roles.",
        "Unit testing of code components and full application, with systematic debugging and root cause analysis."
      ],
      links: {
        github: "https://github.com/Shiva04-Dev/C-Internship-Management-System",
        vercel: "https://imsinternships.vercel.app/"
      }
    }
  ],
  supportingProjects: [
    {
      name: "Java E-Commerce Platform",
      role: "Backend Developer",
      duration: "December 2025 – Present",
      tech: ["Java", "Spring Boot", "PostgreSQL", "Hibernate"],
      description: "Scalable e-commerce backend featuring shopping cart logic, inventory management, product catalogue APIs, and secure user authentication."
    },
    {
      name: "Student Management System",
      role: "Project Lead & Software Engineer",
      duration: "April 2024 – November 2024",
      tech: ["C#", "Windows Forms", ".NET Framework", "MySQL", "Git"],
      description: "Led a team of 4 developers building a desktop application for student records management. Resolved data-mapping issues and mediated team conflicts.",
      achievement: "98% final score — highest in cohort"
    },
    {
      name: "SQL Portfolio",
      role: "Database Engineer",
      duration: "Ongoing",
      tech: ["SQL Server", "PostgreSQL", "T-SQL"],
      description: "Multiple production-style database solutions (LibraryDB, HRDB, SalesDB) featuring ETL design, data normalisation, and query optimisation."
    }
  ],
  leadership: [
    {
      title: "Hackathon Project Lead — Impilo",
      date: "June 2026",
      points: [
        "Coordinated daily check-ins across five roles, keeping workstreams aligned under tight deadline.",
        "Delegated deliverables and made real-time scope decisions when blockers emerged.",
        "Translated engineering constraints into actionable direction for non-technical roles."
      ]
    },
    {
      title: "Project Lead — Student Management System",
      date: "April 2024 – November 2024",
      points: [
        "Oversaw 8-month team project developing a C# Windows Forms application with a team of 4.",
        "Resolved exception handling issues and data-mapping bugs between UI and database.",
        "Mediated team conflicts and maintained productivity through clear communication."
      ]
    },
    {
      title: "Co-Lead — AI-Assisted Generator Monitoring",
      date: "January 2025 – December 2025",
      points: [
        "Co-led a year-long industry-collaborative project on real-time generator monitoring.",
        "Organised progress meetings and resolved technical and interpersonal challenges.",
        "Contributed to system and security architecture; led data storage design."
      ]
    }
  ],
  skills: {
    languages: ["C#", "Java", "Python", "JavaScript", "PHP", "SQL", "Delphi", "XML"],
    frontend: ["HTML5", "CSS3", "JavaScript", "React", "EJS"],
    backend: ["ASP.NET Core", "Node.js", "Express.js", "Spring Boot", ".NET Framework", "RESTful APIs"],
    aiCloud: ["Azure OpenAI (GPT-4o-mini)", "Azure Cosmos DB", "Azure App Service", "Azure AI Foundry"],
    databases: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB"],
    security: ["JWT", "Role-Based Access Control (RBAC)", "OAuth"],
    tools: ["Git", "Postman", "VS Code", "IntelliJ IDEA", "Maven", "Apache NetBeans"],
    concepts: ["OOP", "MVC", "SDLC", "Agile", "AI Agents", "System Design", "Software Testing", "Database Design"]
  },
  certifications: [
    { name: "AI-900: Microsoft Azure AI Fundamentals", issuer: "Microsoft", date: "April 2026" }
  ],
  education: {
    degree: "Bachelor of Computing in Software Engineering with Honours",
    institution: "Belgium Campus University, Pretoria, South Africa",
    duration: "2023 – Present",
    coursework: ["Software Engineering", "SDLC", "Database Development", "Web Programming", "Software Testing", "Software Analysis & Design", "Project Management", "Linear Programming", "Machine Learning"]
  }
};
