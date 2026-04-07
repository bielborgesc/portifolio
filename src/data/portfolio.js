// ─── Non-translatable ────────────────────────────────────────────────────────
export const meta = {
  name: "Gabriel Borges",
  location: "São Carlos, SP",
  available: true,
  phone: "+55 (16) 99296-4877",
  email: "gabrielborges565@gmail.com",
  linkedin: "https://www.linkedin.com/in/bielborgesc",
  github: "https://github.com/bielborgesc",
  portfolio: "piggino.duckdns.org",
}

export const stack = {
  primary: ["C#", "ASP.NET 9", "React", "TypeScript"],
  secondary: ["Docker", "PostgreSQL", "GitHub Actions", "NestJS", "Oracle", "Entity Framework", "REST API", "Delphi"],
}

// ─── Translations ─────────────────────────────────────────────────────────────
export const portfolioData = {
  pt: {
    personal: {
      role: "Desenvolvedor de Software",
      subtitle: "Desenvolvedor de Software | .NET | C# | React",
      tagline: "Especializado em C#, ASP.NET 8 e APIs RESTful. {years}+ anos construindo sistemas financeiros críticos. Apaixonado por arquitetura de software e código limpo.",
      about: "Desenvolvedor de software com {years}+ anos construindo sistemas financeiros críticos. Sou curioso por natureza — quando encontro um problema, preciso entender a causa raiz, não apenas resolver o sintoma. Tenho aversão a soluções improvisadas: prefiro fazer certo do que refatorar o que foi feito com pressa.\n\nMeu diferencial não é a stack — é a busca constante pelo conhecimento e pela melhor solução arquitetural possível. Inglês avançado. Busco equipe colaborativa com trabalho híbrido ou remoto.",
    },
    projects: [
      {
        name: "Piggino",
        label: "em produção",
        featured: true,
        description: "Assistente financeiro pessoal full-stack em produção. Back-end com Clean Architecture e DDD em ASP.NET 9, front-end em React 19 + TypeScript instalável como PWA. Deploy automatizado via GitHub Actions → Docker Hub → Digital Ocean. Integra com a API do BACEN para projeção de rendimentos com cálculo de IR/IOF.",
        tags: ["ASP.NET 9", "React 19", "TypeScript", "Clean Architecture", "Docker", "GitHub Actions"],
        image: "https://github.com/user-attachments/assets/c84cb398-f8ee-46cc-b215-e4399e4c18e7",
        demo: "https://piggino.duckdns.org/",
        repo: "https://github.com/bielborgesc/piggino",
      },
    ],
    experience: [
      {
        period: "Abr. 2023 — Presente",
        company: "LUZ Soluções Financeiras",
        role: "Desenvolvedor de Software Jr",
        location: "São Carlos, SP · Híbrido",
        bullets: [
          "Desenvolveu e manteve módulos de cálculos financeiros complexos e geração de relatórios em sistemas desktop críticos (C#, .NET e Delphi).",
          "Refatorou rotina crítica de importação de dados, reduzindo o tempo de processamento de 1 hora para 10 minutos — ganho de performance de 83%.",
          "Implementou pré-processamento com filas e entrega por buckets em cenário de alto volume, eliminando risco de estouro de memória em produção.",
          "Implementou novas regulamentações financeiras para clientes internacionais da Colômbia, adaptando o sistema às exigências legais locais.",
          "Atuou em projetos web com Angular em arquitetura de microsserviços, integrando APIs RESTful com bancos de dados Oracle e MongoDB.",
        ],
      },
      {
        period: "Ago. 2022 — Abr. 2023",
        company: "Tokenlab",
        role: "Estágio em Desenvolvimento de Software",
        location: "São Carlos, SP · Remoto",
        bullets: [
          "Desenvolveu front-end com React e Angular, com foco em componentização e otimização de performance.",
          "Construiu APIs back-end com NestJS, PostgreSQL e ORMs Prisma e TypeORM.",
          "Implementou pipelines de CI/CD com Bitbucket e serviços AWS (CodeBuild, EC2, Serverless, Cognito).",
        ],
      },
      {
        period: "Jan. 2022 — Ago. 2022",
        company: "Alkent Faxinaria",
        role: "Desenvolvedor de Software Jr",
        location: "São Carlos, SP · Remoto",
        bullets: [
          "Desenvolveu e manteve sistema web para gestão de serviços de limpeza.",
        ],
      },
    ],
    education: {
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "IFSP — Instituto Federal de São Paulo",
      period: "Jan. 2020 — Jun. 2023",
      status: "Concluído",
    },
    curriculo: {
      about: "Desenvolvedor back-end com mais de {years} anos de experiência profissional, especializado em C#, ASP.NET 8 e APIs RESTful. Atuo com desenvolvimento e manutenção de sistemas financeiros críticos na LUZ Soluções Financeiras, com experiência em ambientes de alta complexidade, integração com clientes internacionais e trabalho em equipes ágeis. Tenho experiência full-stack com React e TypeScript, boas práticas de DevOps com Docker e GitHub Actions, e interesse em arquitetura de software, Clean Architecture e soluções SaaS escaláveis. Busco oportunidade como Desenvolvedor Pleno em empresa que valorize qualidade de código e evolução técnica.",
      languages: "Português (Nativo), Inglês (Avançado)",
      technicalSkills: [
        { label: "Linguagens", value: "C#, TypeScript" },
        { label: "Back-End", value: "ASP.NET 8, .NET, NestJS, APIs RESTful, Entity Framework Core, Delphi" },
        { label: "Front-End", value: "React, Angular, Vite, Tailwind CSS, Material UI" },
        { label: "Bancos de Dados", value: "PostgreSQL, Oracle, MySQL, MongoDB, SQLite" },
        { label: "DevOps & Cloud", value: "Docker, Docker Compose, GitHub Actions, CI/CD, AWS (EC2, CodeBuild, Serverless, Cognito), Caddy" },
        { label: "Ferramentas", value: "Git, Bitbucket, Jira, Scrum, Kanban" },
        { label: "Arquitetura", value: "Clean Architecture, DDD, Microsserviços, APIs RESTful" },
      ],
    },
    ui: {
      available: "disponível para oportunidades",
      nav: {
        about: "sobre",
        projects: "projetos",
        experience: "experiência",
        education: "formação",
        contact: "contato",
      },
      sections: {
        about: "sobre",
        stack: "stack principal",
        languages: "idiomas",
        projects: "projetos",
        experience: "experiência",
        education: "formação",
        contact: "contato",
      },
      hero: {
        role1: "Desenvolvedor",
        role2: "de Software",
        cta_projects: "Ver projetos",
        cta_resume: "Ver currículo",
      },
      contact: {
        heading: "Vamos conversar?",
        body: "Estou aberto a novas oportunidades — seja uma posição pleno, um projeto interessante ou só uma troca de ideia sobre arquitetura de software.",
      },
      footer: { resume: "ver currículo" },
      notFound: {
        title: "Página não encontrada",
        body: "Essa rota não existe. Mas o portfólio existe.",
        cta: "Voltar ao início",
      },
      curriculo: {
        title: "Currículo",
        back: "Voltar",
        download: "Baixar currículo",
        pdfUrl: "/Curriculo_Gabriel_Borges.pdf",
        sections: {
          about: "Sobre",
          skills: "Habilidades Técnicas",
          experience: "Experiência Profissional",
          education: "Formação Acadêmica",
          languages: "Idiomas",
          projects: "Projetos",
        },
      },
    },
  },

  en: {
    personal: {
      role: "Software Developer",
      subtitle: "Software Developer | .NET | C# | React",
      tagline: "Specialized in C#, ASP.NET 8, and RESTful APIs. {years}+ years building critical financial systems. Passionate about software architecture and clean code.",
      about: "Software developer with {years}+ years building critical financial systems. I'm naturally curious — when I encounter a problem, I need to understand the root cause, not just fix the symptom. I have a strong aversion to quick fixes: I'd rather take the time to do it right than refactor something rushed.\n\nMy differentiator isn't the stack — it's the constant pursuit of knowledge and the best possible architectural solution. Advanced English. Looking for a collaborative team with hybrid or remote work.",
    },
    projects: [
      {
        name: "Piggino",
        label: "in production",
        featured: true,
        description: "Full-stack personal finance assistant in production. Back-end with Clean Architecture and DDD in ASP.NET 9, front-end in React 19 + TypeScript installable as a PWA. Automated deployment via GitHub Actions → Docker Hub → Digital Ocean. Integrates with the BACEN API for yield projections with IR/IOF calculation.",
        tags: ["ASP.NET 9", "React 19", "TypeScript", "Clean Architecture", "Docker", "GitHub Actions"],
        image: "https://github.com/user-attachments/assets/c84cb398-f8ee-46cc-b215-e4399e4c18e7",
        demo: "https://piggino.duckdns.org/",
        repo: "https://github.com/bielborgesc/piggino",
      },
    ],
    experience: [
      {
        period: "Apr. 2023 — Present",
        company: "LUZ Soluções Financeiras",
        role: "Software Developer Jr",
        location: "São Carlos, SP · Hybrid",
        bullets: [
          "Developed and maintained complex financial calculation modules and report generation in critical desktop systems (C#, .NET, and Delphi).",
          "Refactored a critical data import routine, reducing processing time from 1 hour to 10 minutes — an 83% performance improvement.",
          "Implemented queue-based pre-processing with bucket delivery for high-volume scenarios, eliminating memory overflow risk in production.",
          "Implemented new financial regulations for international clients from Colombia, adapting the system to local legal requirements.",
          "Worked on web projects with Angular in a microservices architecture, integrating RESTful APIs with Oracle and MongoDB databases.",
        ],
      },
      {
        period: "Aug. 2022 — Apr. 2023",
        company: "Tokenlab",
        role: "Software Development Intern",
        location: "São Carlos, SP · Remote",
        bullets: [
          "Developed front-end interfaces with React and Angular, focusing on componentization and performance optimization.",
          "Built back-end APIs with NestJS, PostgreSQL, and ORMs Prisma and TypeORM.",
          "Implemented CI/CD pipelines with Bitbucket and AWS services (CodeBuild, EC2, Serverless, Cognito).",
        ],
      },
      {
        period: "Jan. 2022 — Aug. 2022",
        company: "Alkent Faxinaria",
        role: "Software Developer Jr",
        location: "São Carlos, SP · Remote",
        bullets: [
          "Developed and maintained a web system for cleaning services management.",
        ],
      },
    ],
    education: {
      degree: "Technology Degree in Systems Analysis and Development",
      institution: "IFSP — Instituto Federal de São Paulo",
      period: "Jan. 2020 — Jun. 2023",
      status: "Completed",
    },
    curriculo: {
      about: "Back-end software developer with {years}+ years of professional experience, specialized in C#, ASP.NET 8, and RESTful APIs. I work on the development and maintenance of mission-critical financial systems at LUZ Soluções Financeiras, with experience in high-complexity environments, international client integrations, and agile teams. I also have full-stack experience with React and TypeScript, solid DevOps practices using Docker and GitHub Actions, and a strong interest in software architecture, Clean Architecture, and scalable SaaS solutions. I am looking for a Mid-Level Developer position at a company that values code quality and technical growth.",
      languages: "Portuguese (Native), English (Advanced)",
      technicalSkills: [
        { label: "Languages", value: "C#, TypeScript, Python" },
        { label: "Back-End", value: "ASP.NET 8, .NET, NestJS, RESTful APIs, Entity Framework Core, Delphi" },
        { label: "Front-End", value: "React, Angular, Vite, Tailwind CSS, Material UI" },
        { label: "Databases", value: "PostgreSQL, Oracle, MySQL, MongoDB, SQLite" },
        { label: "DevOps & Cloud", value: "Docker, Docker Compose, GitHub Actions, CI/CD, AWS (EC2, CodeBuild, Serverless, Cognito), Caddy" },
        { label: "Tools & Methods", value: "Git, Bitbucket, Jira, Scrum, Kanban" },
        { label: "Architecture", value: "Clean Architecture, DDD, Microservices, RESTful APIs" },
      ],
    },
    ui: {
      available: "available for opportunities",
      nav: {
        about: "about",
        projects: "projects",
        experience: "experience",
        education: "education",
        contact: "contact",
      },
      sections: {
        about: "about",
        stack: "main stack",
        languages: "languages",
        projects: "projects",
        experience: "experience",
        education: "education",
        contact: "contact",
      },
      hero: {
        role1: "Software",
        role2: "Developer",
        cta_projects: "View projects",
        cta_resume: "View resume",
      },
      contact: {
        heading: "Let's talk?",
        body: "I'm open to new opportunities — whether a mid-level position, an interesting project, or just a conversation about software architecture.",
      },
      footer: { resume: "view resume" },
      notFound: {
        title: "Page not found",
        body: "This route doesn't exist. But the portfolio does.",
        cta: "Back to home",
      },
      curriculo: {
        title: "Resume",
        back: "Back",
        download: "Download resume",
        pdfUrl: "/Gabriel_Borges_Resume.pdf",
        sections: {
          about: "About",
          skills: "Technical Skills",
          experience: "Professional Experience",
          education: "Academic Background",
          languages: "Languages",
          projects: "Projects",
        },
      },
    },
  },
}
