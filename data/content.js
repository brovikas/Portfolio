// ============================================================
// ALL SITE CONTENT LIVES HERE. Edit this file to update the site.
// Anything marked TODO needs your real info before deploying.
// ============================================================

export const profile = {
  name: "Vikas Sharma",
  alias: "Brovikas",
  role: "Full-Stack MERN Developer",
  tagline: "I build fast, real-time web apps and disappear before the bugs show up.",
  location: "Jammu, J&K, India",
  email: "TODO@example.com", // TODO: your real email
  github: "https://github.com/brovikas",
  linkedin: "https://linkedin.com/in/itzvikas",
  resumeUrl: "/resume.pdf", // TODO: drop your resume PDF into /public/resume.pdf
};

export const about = {
  paragraphs: [
    "3rd-year BCA student at Maulana Azad Memorial College, Jammu — trained in the fundamentals, sharpened on the job.",
    "MERN full-stack developer who builds real-time, production-shaped apps: live collaboration tools, journaling platforms, and multi-language code execution environments.",
    "Completed an internship at CodTech IT Solutions, and has cleared 100+ DSA problems on LeetCode — the katas behind the craft.",
  ],
};

export const skills = [
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "Socket.io", category: "Realtime" },
  { name: "AWS", category: "Cloud" },
  { name: "Postman", category: "Tooling" },
  { name: "Git / GitHub", category: "Tooling" },
];

// TODO: replace liveUrl / repoUrl with your real links
export const projects = [
  {
    codename: "CollabBoard",
    objective: "Real-time collaborative whiteboard for teams to sketch and plan together live.",
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com/collabboard", // TODO
    repoUrl: "https://github.com/brovikas/collabboard", // TODO
  },
  {
    codename: "Retroleaf",
    objective: "Digital journal with JWT authentication and daily mood tracking.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://example.com/retroleaf", // TODO
    repoUrl: "https://github.com/brovikas/retroleaf", // TODO
  },
  {
    codename: "CodeSync",
    objective: "Collaborative code editor with Monaco Editor and multi-language execution.",
    stack: ["React", "Node.js", "Socket.io", "Monaco Editor"],
    liveUrl: "https://example.com/codesync", // TODO
    repoUrl: "https://github.com/brovikas/codesync", // TODO
  },
];

export const experience = [
  {
    title: "Full-Stack Development Intern",
    org: "CodTech IT Solutions",
    period: "TODO — add dates", // TODO
    rank: "Green Belt",
    description: "Worked on MERN-stack features in a live codebase, shipping real functionality under real deadlines.",
  },
  {
    title: "BCA — Computer Applications",
    org: "Maulana Azad Memorial College, Jammu",
    period: "TODO — add dates", // TODO
    rank: "White Belt",
    description: "Third-year student, building the foundation while shipping side projects in parallel.",
  },
];

export const stats = {
  leetcode: "100+",
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
