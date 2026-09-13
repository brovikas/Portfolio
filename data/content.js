
export const profile = {
  name: "Vikas Sharma",
  alias: "Brovikas",
  role: "Full-Stack MERN Developer",
  tagline: "I build fast, real-time web apps and disappear before the bugs show up.",
  location: "Jammu, J&K, India",
  email: "brovikassss@gmail.com", 
  github: "https://github.com/brovikas",
  linkedin: "https://linkedin.com/in/itzvikas",
  resumeUrl: "/resume.pdf",
};

export const about = {
  paragraphs: [
    "A Final-year BCA student at Maulana Azad Memorial College, Jammu, with a strong foundation in computer science and a hands-on approach to building software that.",

    "Full-stack engineer working across modern web architectures, AI-powered applications, real-time systems, and developer tooling—turning complex technical requirements into reliable, scalable products.",

    "Experienced with backend architecture, APIs, databases, authentication, real-time communication, AI/LLM integrations, containerized environments, Linux, Git, CI/CD, and production-oriented development workflows.",
  ],
};

export const skills = [
  { name: "JavaScript", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
//  { name: "Socket.io", category: "Realtime" },
  { name: "IP/MAC", category: "Networking" },
  { name: "OSI/TCP/UDP", category: "Networking" },
  { name: "ARP/DHCP/SubNet", category: "Networking" },
  { name: "AWS", category: "DevOps" },
  { name: "Linux", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "Nginx", category: "DevOps" },
  { name: "Git / GitHub", category: "Tooling" },
  { name: "Postman", category: "Tooling" },
  { name: "VS Code", category: "Tooling" },
];


export const projects = [
  {
    codename: "CollabBoard",
    objective: "Real-time collaborative whiteboard for teams to sketch and plan together live.",
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://collab-board-six-chi.vercel.app", 
    repoUrl: "https://github.com/brovikas/collabboard",
  },
  {
    codename: "Retroleaf",
    objective: "Digital journal with JWT authentication and daily mood tracking.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://retro-leaf.vercel.app", 
    repoUrl: "https://github.com/brovikas/retroleaf", 
  },
  {
    codename: "CodeSync",
    objective: "Collaborative code editor with Monaco Editor and multi-language execution.",
    stack: ["React", "Node.js", "Socket.io", "Monaco Editor"],
    liveUrl: "https://real-time-collaborative-editor-seven.vercel.app/", // TODO
    repoUrl: "https://github.com/brovikas/codesync", 
  },
];

export const experience = [
  {
    title: "Full-Stack Development Intern",
    org: "CodTech IT Solutions",
    period: "June 2026 — July 2026",
    rank: "Green Belt",
    description: "Worked on MERN-stack features in a live codebase, shipping real functionality under real deadlines.",
  },
  {
    title: "BCA — Computer Applications",
    org: "Maulana Azad Memorial College, Jammu",
    period: "August 2024 — August 2027",
    rank: "White Belt",
    description: "Third-year student, building the foundation while shipping side projects in parallel.",
  },
];

export const stats = {
  leetcode: "200+",
  githubHandle: "brovikas",
};

// Commands available in the CLI terminal easter-egg feature.
// Keep 'output' as an array of strings (each = one line).
export const cliCommands = {
  help: [
    "available commands:",
    "  whoami        - who is this ninja?",
    "  skills        - list the arsenal",
    "  projects      - list completed missions",
    "  contact       - how to reach the dojo",
    "  sensei        - a word of wisdom",
    "  sudo hire-me  - special access",
    "  clear         - clear the terminal",
  ],
  whoami: [`${profile.alias} — ${profile.role}, based in ${profile.location}.`],
  contact: [
    `email: ${profile.email}`,
    `github: ${profile.github}`,
    `linkedin: ${profile.linkedin}`,
  ],
};
