export const personal = {
  name: "Gabriel Borges",
  role: "Desenvolvedor Back-end",
  tagline: "Especializado em C#, ASP.NET 8 e APIs RESTful. 3+ anos construindo sistemas financeiros críticos. Apaixonado por arquitetura de software e código limpo.",
  location: "São Carlos, SP",
  available: true,
  email: "gabrielborges565@gmail.com",
  linkedin: "https://www.linkedin.com/in/bielborgesc",
  github: "https://github.com/bielborgesc",
}

export const stack = {
  primary: ["C#", "ASP.NET 8", "React", "TypeScript"],
  secondary: ["Docker", "PostgreSQL", "GitHub Actions", "NestJS", "Oracle", "Entity Framework", "REST API", "Delphi"],
}

export const projects = [
  {
    name: "Piggino",
    label: "em produção",
    featured: true,
    description: "Sistema full-stack de controle financeiro pessoal com CI/CD, Docker e deploy automático na Digital Ocean.",
    tags: ["ASP.NET 8", "React 19", "TypeScript", "Docker", "GitHub Actions"],
    demo: "https://piggino.duckdns.org/",
    repo: "https://github.com/bielborgesc/piggino",
  },
]

export const experience = [
  {
    period: "2023 — presente",
    company: "LUZ Soluções Financeiras",
    role: "Desenvolvedor de Software Jr",
    location: "São Carlos, SP · Híbrido",
    bullets: [
      "Desenvolvimento e manutenção de sistemas financeiros desktop em C#, .NET e Delphi, incluindo módulos de cálculos complexos e geração de relatórios.",
      "Atuação em projetos web com Angular em arquitetura de microsserviços, integrando APIs RESTful e gerenciando bancos de dados Oracle e MongoDB.",
      "Participação em projeto com clientes internacionais da Colômbia, atuando na implementação de novas regulamentações financeiras no sistema.",
      "Colaboração em equipe ágil com metodologia Scrum.",
    ],
  },
  {
    period: "2022 — 2023",
    company: "Tokenlab",
    role: "Estágio em Desenvolvimento de Software",
    location: "São Carlos, SP · Remoto",
    bullets: [
      "Desenvolvimento front-end com React e Angular, com foco em componentização e otimização de performance.",
      "Desenvolvimento back-end com NestJS, PostgreSQL e ORMs Prisma e TypeORM.",
      "Implementação de pipelines de CI/CD utilizando Bitbucket, Jira e serviços AWS (CodeBuild, EC2, Serverless, Cognito).",
    ],
  },
  {
    period: "2021 — 2022",
    company: "Alkent Faxinaria",
    role: "Desenvolvedor de Software Jr",
    location: "São Carlos, SP · Remoto",
    bullets: [
      "Desenvolvimento e manutenção de sistema web para gestão de serviços de limpeza.",
    ],
  },
]

export const education = {
  degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  institution: "IFSP — Instituto Federal de São Paulo",
  period: "2020 — 2023",
  status: "Concluído",
}

export const curriculo = {
  about: "Desenvolvedor back-end com mais de 3 anos de experiência profissional, especializado em C#, ASP.NET 8 e APIs RESTful. Atuo com desenvolvimento e manutenção de sistemas financeiros críticos na LUZ Soluções Financeiras. Tenho experiência full-stack com React e TypeScript, boas práticas de DevOps com Docker e GitHub Actions, e interesse em arquitetura de software, Clean Architecture e soluções SaaS escaláveis. Busco oportunidade como Desenvolvedor Pleno em empresa que valorize qualidade de código e evolução técnica.",
  languages: "Português (Nativo), Inglês (Avançado)",
  technicalSkills: [
    { label: "Linguagens", value: "C#, TypeScript, Python" },
    { label: "Back-End", value: "ASP.NET 8, .NET, NestJS, APIs RESTful, Entity Framework Core, Delphi" },
    { label: "Front-End", value: "React, Angular, Vite, Tailwind CSS, Material UI" },
    { label: "Bancos de Dados", value: "PostgreSQL, Oracle, MySQL, MongoDB, SQLite" },
    { label: "DevOps & Cloud", value: "Docker, Docker Compose, GitHub Actions, CI/CD, AWS, Caddy" },
    { label: "Arquitetura", value: "Clean Architecture, DDD, Microsserviços, APIs RESTful" },
  ],
}
