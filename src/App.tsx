import { useState } from 'react'


const teamMembers = [
  {
    name: "Mohamed Saman",
    category: "Backend",
    description: "Full-stack developer specializing in modern web technologies. Expert in React, Next.js, and backend frameworks including Laravel, Django, and Node.js. Proficient in cloud platforms and containerization.",
    image: "/saman.png",
    linkedin: "https://www.linkedin.com/in/mohamed-saman/",
    skills: [
      { name: "React / Next.js", level: 88 },
      { name: "PHP / Laravel", level: 88 },
      { name: "Wordpress", level: 88 },
      { name: "Python(Django & Fast API)", level: 88 },
      { name: "TypeScript", level: 92 },
      { name: "PostgreSQL / MongoDB / MySQL", level: 82 },
      { name: "Node.js / Express", level: 85 },
      { name: "AWS / GCP / Azure", level: 85 },
      { name: "Docker / Kubernetes", level: 85 },
      { name: "Git / GitHub", level: 85 },
      { name: "Supabase / Firebase", level: 85 },
      { name: "Tailwind / Bootstrap", level: 85 },
      { name: "html5 / css3", level: 85 },
    ]
  },

  {
    name: "Piotr Milian",
    category: "Frontend",
    description: "Senior full-stack developer with extensive expertise in React, Next.js, and Python frameworks. Proven track record in architecting and building scalable enterprise applications with modern databases and cloud services. Strong technical leadership in both frontend and backend development.",
    image: "/Mil.png",
    linkedin: "https://www.linkedin.com/in/piotr-milian/",
    skills: [
      { name: "React / Next.js", level: 88 },
      { name: "Python(Django & Fast API)", level: 88 },
      { name: "TypeScript", level: 92 },
      { name: "PostgreSQL / MongoDB / MySQL", level: 82 },
      { name: "Node.js / Express", level: 85 },
      { name: "AWS / GCP / Azure", level: 85 },
      { name: "Docker / Kubernetes", level: 85 },
      { name: "Git / GitHub", level: 85 },
      { name: "Supabase / Firebase", level: 85 },
      { name: "Tailwind / Bootstrap", level: 85 },
      { name: "html5 / css3", level: 85 },
    ]
  },
  {
    name: "Mohammed Akmal",
    category: "Frontend",
    description: "Versatile full-stack developer with expertise in React, Next.js, and Python frameworks. Skilled in building scalable applications with modern databases and cloud services. Strong foundation in both frontend and backend development.",
    image: "/akmal.png",
    linkedin: "https://www.linkedin.com/in/mohamed-akmal/?originalSubdomain=lk",
    skills: [
      { name: "React / Next.js", level: 88 },
      { name: "Python(Django & Fast API)", level: 88 },
      { name: "TypeScript", level: 92 },
      { name: "PostgreSQL / MongoDB / MySQL", level: 82 },
      { name: "Node.js / Express", level: 85 },
      { name: "AWS / GCP / Azure", level: 85 },
      { name: "Docker / Kubernetes", level: 85 },
      { name: "Git / GitHub", level: 85 },
      { name: "Supabase / Firebase", level: 85 },
      { name: "Tailwind / Bootstrap", level: 85 },
      { name: "html5 / css3", level: 85 },
    ]
  },
  {
    name: "Mohammed Minhaj",
    category: "DevOps",
    description: "Backend specialist with strong expertise in PHP/Laravel, WordPress, and .NET technologies. Experienced in building robust web applications with various database systems and modern frontend frameworks.",
    image: "/Minhaj.png",
    linkedin: "https://www.linkedin.com/in/mohammed-minhaj-a5721a29a/",
    skills: [
      { name: "PHP / Laravel", level: 88 },
      { name: "Wordpress", level: 88 },
      { name: "React js / Next js / Node js", level: 87 },
      { name: "MySQL / MongoDB / PostgreSQL", level: 89 },
      { name: ".Net / C#", level: 88 },
      { name: ".ASP.NET", level: 88 },
      { name: "Git / GitHub", level: 88 },
      { name: "Tailwind / Bootstrap", level: 85 },
      { name: "html5 / css3", level: 85 },
    ]
  },
  {
    name: "Mohamad Sahan",
    category: "DevOps",
    description: "Full-stack developer proficient in React, Next.js, Laravel, and .NET technologies. Strong database management skills with expertise in both SQL and NoSQL databases. Focused on building scalable web solutions.",
    image: "/sahan.png",
    linkedin: "https://www.linkedin.com/in/mohamad-sahan/",
    skills: [
      { name: "React / Next.js", level: 88 },
      { name: "PHP / Laravel", level: 88 },
      { name: ".Net / C#", level: 88 },
      { name: "TypeScript", level: 92 },
      { name: "MySQL / MongoDB", level: 89 },
      { name: "Node.js / Express", level: 85 },
      { name: "Git / GitHub", level: 88 },
      { name: "html5 / css3", level: 85 },
      { name: "Tailwind / Bootstrap", level: 85 },


    ]
  },
  {
    name: "Basith Ahamed",
    category: "DevOps",
    description: "Creative developer combining design and development skills. Specializes in WordPress, AI/ML technologies, and automation with N8N. Experienced in image processing, NLP, and modern web design tools.",
    image: "/basith.png",
    linkedin: "www.linkedin.com/in/basith-ahamad-59591630a",
    skills: [
      { name: "Wordpress", level: 88 },
      { name: "Figma", level: 88 },
      { name: "html5 / css3", level: 85 },
      { name: "Tailwind / Bootstrap", level: 85 },
      { name: "PHP", level: 87 },
      { name: "ML / NLP", level: 89 },
      { name: "AI", level: 88 },
      { name: "Image Processing", level: 88 },
      { name: "N8N", level: 89 },
    ]
  },
  {
    name: "Muhammed Nashan",
    category: "DevOps",
    description: "Frontend and mobile developer specializing in React and React Native. Expert in JavaScript ecosystem with strong design skills using Figma and Adobe XD. Experienced in building cross-platform applications.",
    image: "/nashan1.png",
    linkedin: "https://www.linkedin.com/in/muhammed-nashan",
    skills: [
      { name: "React js / React Native", level: 94 },
      { name: "JavaScript", level: 91 },
      { name: "Node js", level: 92 },
      { name: "html5 / css3", level: 85 },
      { name: "Tailwind / Bootstrap", level: 85 },
      { name: "Git / GitHub", level: 88 },
      { name: "MongoDB", level: 88 },
      { name: "Figma / Adobe XD", level: 88 },
      { name: "Wordpress", level: 88 },
    ]
  },
  {
    name: "Mohamed Mubassir",
    category: "DevOps",
    description: "Frontend developer focused on React and React Native development. Skilled in creating responsive user interfaces with modern CSS frameworks. Proficient in design tools and database integration.",
    image: "/mubashir.jpeg",
    linkedin: "https://www.linkedin.com/in/mohamed-mubassir1717/",
    skills: [
      { name: "React js / React Native", level: 94 },
      { name: "JavaScript", level: 91 },
      { name: "html5 / css3", level: 85 },
      { name: "Tailwind / Bootstrap", level: 85 },
      { name: "Git / GitHub", level: 88 },
      { name: "Mysql", level: 88 },
      { name: "Figma", level: 88 },
    ]
  }
  // {
  //   name: "Mohammed Minhaj",
  //   role: "Site Reliability Lead",
  //   category: "DevOps",
  //   description: "Frontend developer focused on React and React Native development. Skilled in creating responsive user interfaces with modern CSS frameworks. Proficient in design tools and database integration.",
  //   image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeiDy5eOymAwChXfg6aPFd4nfBbmlEWkJTnGXnjnDqbN-uLF2kEoTv0TJBhzQYnQT97rCx1iQf7CH-hXRVYBnYjlDK5xaJTLc4MGCtZJAfN_Nt-KwjKKjLYrAsYDTZ9LN6LTec85v8HybwcoVfV55G3uhQ2PlirYvYpFEWFq4izsBJFJVFhAwFS_iXRIxvAHHtRn-k5iilw9VsqF5PO-p1ylZrITYPB__Xo4W8nMaP7qcRg3ab5SKGAar8AOB7q0sEesRZYVAtwgM",
  //   skills: [
  //     { name: "Terraform / IaC", level: 94 },
  //     { name: "Docker / K8s", level: 91 },
  //     { name: "Python / Bash", level: 87 },
  //     { name: "Security / Auth", level: 89 },
  //   ]
  // }
]

function App() {
  const [activeTab, setActiveTab] = useState('Directory')

  return (
    <>
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2 group cursor-pointer">
                {/* Webxkey Logo */}
                <img src="/logo.png" alt="Webxkey Logo" className="h-10 sm:h-12 md:h-14 object-contain brightness-110" />
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => setActiveTab('Directory')}
                  className={`text-sm font-medium transition-colors ${activeTab === 'Directory'
                    ? 'text-primary'
                    : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary'
                    }`}
                >
                  Directory
                </button>
                <button
                  onClick={() => setActiveTab('Stack')}
                  className={`text-sm font-medium transition-colors ${activeTab === 'Stack'
                    ? 'text-primary'
                    : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary'
                    }`}
                >
                  Stack
                </button>
              </nav>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Mobile Navigation */}
              <div className="md:hidden flex gap-2">
                <button
                  onClick={() => setActiveTab('Directory')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${activeTab === 'Directory'
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-slate-400 hover:text-primary'
                    }`}
                >
                  Team
                </button>
                <button
                  onClick={() => setActiveTab('Stack')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${activeTab === 'Stack'
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-slate-400 hover:text-primary'
                    }`}
                >
                  Stack
                </button>
              </div>
              <a
                href="mailto:contact@webxkey.com"
                className="px-3 sm:px-5 py-2 rounded-lg bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-colors flex items-center gap-1 sm:gap-2"
              >
                <span className="material-symbols-outlined text-base sm:text-lg">email</span>
                <span className="hidden sm:inline">Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        {activeTab === 'Directory' ? (
          <>
            {/* Page Heading */}
            <div className="mb-8 sm:mb-12 text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                Development Team
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight px-4">
                The Minds Behind <span className="text-primary">Your Success</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
                A collective of visionary developers, designers, and engineers crafting cutting-edge digital experiences that transform ideas into reality.
              </p>
            </div>


            {/* Member Cards List */}
            <div className="space-y-4 sm:space-y-6">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="glass-card rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 neon-glow transition-all duration-300">
                  <div className="flex flex-col items-center gap-3 sm:gap-4 md:min-w-[180px]">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse opacity-50"></div>
                      <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full border-4 border-navy-muted overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('${member.image}')` }}>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <a className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-primary transition-colors text-white" href={member.linkedin || "#"} target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="text-center md:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{member.name}</h3>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center md:text-left">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
                      {member.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Stats */}
            <div className="mt-12 sm:mt-16 md:mt-20 p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-white/5 text-center">
              <div className="flex flex-wrap justify-around gap-6 sm:gap-8">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white">24</div>
                  <div className="text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-widest mt-1">Experts</div>
                </div>
                <div className="w-px bg-white/10 hidden sm:block"></div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white">20+</div>
                  <div className="text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-widest mt-1">Tech Stacks</div>
                </div>
                <div className="w-px bg-white/10 hidden sm:block"></div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white">25+</div>
                  <div className="text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-widest mt-1">Success Projects</div>
                </div>
              </div>
            </div>
            <footer className="mt-8 sm:mt-12 text-center text-slate-500 text-xs sm:text-sm pb-8 sm:pb-12 px-4">
              © 2026 Webxkey. All rights reserved. Built with precision and code.
            </footer>
          </>
        ) : (
          <>
            {/* Stack Page Heading */}
            <div className="mb-8 sm:mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                Technology Stack
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight px-4">
                Our Tech <span className="text-primary">Arsenal</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl px-4">
                Cutting-edge technologies and frameworks powering our innovative solutions.
              </p>
            </div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Frontend Frameworks */}
              <div className="glass-card rounded-xl p-6 neon-glow transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Frontend Frameworks</h3>
                <p className="text-slate-400 text-sm mb-4">Modern UI frameworks and libraries</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">React</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Next.js</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">React Native</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">TypeScript</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">JavaScript</span>
                </div>
              </div>

              {/* Backend & Server */}
              <div className="glass-card rounded-xl p-6 neon-glow transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Backend & Server</h3>
                <p className="text-slate-400 text-sm mb-4">Scalable server-side solutions</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Node.js</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Express</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Python</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Django</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Fast API</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">PHP</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Laravel</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">.NET</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">C#</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">ASP.NET</span>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="glass-card rounded-xl p-6 neon-glow transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cloud & DevOps</h3>
                <p className="text-slate-400 text-sm mb-4">Infrastructure and deployment</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">AWS</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">GCP</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Azure</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Docker</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Kubernetes</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Git</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">GitHub</span>
                </div>
              </div>

              {/* Databases */}
              <div className="glass-card rounded-xl p-6 neon-glow transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Databases</h3>
                <p className="text-slate-400 text-sm mb-4">Data storage and management</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">PostgreSQL</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">MongoDB</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">MySQL</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Supabase</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Firebase</span>
                </div>
              </div>

              {/* CMS & Tools */}
              <div className="glass-card rounded-xl p-6 neon-glow transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">CMS & UI/UX Design Tools</h3>
                <p className="text-slate-400 text-sm mb-4">Content management and design</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">WordPress</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Figma</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Adobe XD</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Bootstrap</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">HTML5</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">CSS3</span>
                </div>
              </div>

              {/* AI & Advanced */}
              <div className="glass-card rounded-xl p-6 neon-glow transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI & Advanced Tech</h3>
                <p className="text-slate-400 text-sm mb-4">Machine learning and AI solutions</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">AI</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">ML</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">NLP</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">Image Processing</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">N8N</span>

                </div>
              </div>
            </div>
          </>
        )}
      </main >
    </>
  )
}

export default App

