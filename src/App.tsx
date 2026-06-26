import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Shield } from 'lucide-react';

const Github = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { CONTENT } from './content';
import { cn } from './utils/cn';

const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
    className={cn("py-24 md:py-32", className)}
  >
    {children}
  </motion.section>
);

const MonoLabel = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("font-mono text-[10px] uppercase tracking-widest text-secondary-text", className)}>
    {children}
  </span>
);

const EditorialLink = ({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon?: any }) => {
  const isComingSoon = href.includes('OWNER TO COMPLETE') && children?.toString().toLowerCase().includes('live');
  
  if (isComingSoon) {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-secondary-text/40 cursor-help">
        {Icon && <Icon size={12} />}
        <span className="relative">
          {children} (Coming Soon)
        </span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 font-mono text-xs text-accent-secondary hover:text-accent-primary transition-colors duration-300"
    >
      {Icon && <Icon size={12} />}
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-accent-primary transition-all duration-300 group-hover:w-full" />
      </span>
    </a>
  );
};

const App = () => {
  return (
    <div className="min-h-screen selection:bg-accent-primary/20">
      {/* Background Overlay for warmth */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,rgba(201,125,58,0.05),transparent_50%)]" />

      <main className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* HERO SECTION */}
        <Section className="min-h-[80vh] flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.9] tracking-tight mb-8"
          >
            {CONTENT.identity.fullName}
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h2 className="text-xl md:text-2xl font-serif italic text-accent-primary mb-4">
                {CONTENT.identity.title}
              </h2>
              <p className="text-lg md:text-xl text-secondary-text max-w-md leading-relaxed text-balance">
                {CONTENT.identity.positioning}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-start md:items-end gap-2"
            >
              <MonoLabel>{CONTENT.identity.location}</MonoLabel>
              <p className="font-mono text-xs text-secondary-text italic opacity-60">
                {CONTENT.identity.funFact}
              </p>
            </motion.div>
          </div>
        </Section>

        {/* FEATURED ACHIEVEMENT */}
        <Section id="achievement" className="border-t border-surface/50">
          <MonoLabel className="mb-12 block text-accent-primary">The Proof</MonoLabel>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="mb-8 space-y-4">
                <Trophy className="text-accent-primary" size={48} />
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-balance">
                  {CONTENT.flagshipProjects[0].award}
                </h3>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-primary-text/90 leading-relaxed mb-8 font-light italic">
                  &ldquo;{CONTENT.flagshipProjects[0].name}&rdquo; &mdash; {CONTENT.flagshipProjects[0].description[0]}
                </p>
                
                <div className="space-y-4 text-secondary-text">
                  {CONTENT.flagshipProjects[0].description.slice(1).map((para, i) => (
                    <p key={i} className="leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 flex flex-col justify-between py-2">
              <div className="space-y-8">
                <div>
                  <MonoLabel className="mb-3 block">Role & Team</MonoLabel>
                  <p className="text-primary-text font-serif italic text-lg">{CONTENT.flagshipProjects[0].role}</p>
                  <p className="text-secondary-text text-sm mt-1">{CONTENT.flagshipProjects[0].team}</p>
                </div>
                
                <div>
                  <MonoLabel className="mb-3 block">Technology</MonoLabel>
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {CONTENT.flagshipProjects[0].tech.map((t, i) => (
                      <span key={i} className="font-mono text-[11px] text-accent-secondary">
                        {t}{i < CONTENT.flagshipProjects[0].tech.length - 1 && " ·"}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex gap-6">
                  <EditorialLink href={CONTENT.flagshipProjects[0].links.github} icon={Github}>
                    ↗ GitHub
                  </EditorialLink>
                  <EditorialLink href={CONTENT.flagshipProjects[0].links.vercel} icon={ExternalLink}>
                    ↗ Live Demo
                  </EditorialLink>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" className="border-t border-surface/50">
          <MonoLabel className="mb-16 block">The Evidence</MonoLabel>
          
          <div className="space-y-32">
            {/* Flagship 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <MonoLabel className="text-accent-secondary mb-4 block">Flagship Project</MonoLabel>
                <h3 className="text-4xl font-serif mb-4 leading-tight">{CONTENT.flagshipProjects[1].name}</h3>
                <p className="text-secondary-text font-mono text-xs mb-8">{CONTENT.flagshipProjects[1].duration}</p>
                <p className="text-sm text-secondary-text leading-relaxed italic opacity-80">
                  {CONTENT.flagshipProjects[1].role}
                </p>
              </div>
              
              <div className="lg:col-span-8">
                <div className="space-y-6 mb-12">
                  {CONTENT.flagshipProjects[1].description.map((point, i) => (
                    <div key={i} className="flex gap-4 group">
                      <span className="text-accent-primary font-mono text-xs opacity-40 group-hover:opacity-100 transition-opacity pt-1.5">0{i+1}</span>
                      <p className="text-secondary-text leading-relaxed group-hover:text-primary-text transition-colors">{point}</p>
                    </div>
                  ))}
                </div>
                
                <div className="pt-8 border-t border-surface-elevated/50">
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
                    {CONTENT.flagshipProjects[1].tech.map((t, i) => (
                      <span key={i} className="font-mono text-[11px] text-accent-secondary">
                        {t}{i < CONTENT.flagshipProjects[1].tech.length - 1 && " ·"}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <EditorialLink href={CONTENT.flagshipProjects[1].links.github} icon={Github}>
                      ↗ GitHub
                    </EditorialLink>
                    <EditorialLink href={CONTENT.flagshipProjects[1].links.vercel} icon={ExternalLink}>
                      ↗ Live Demo
                    </EditorialLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Projects */}
            <div className="space-y-12">
              <MonoLabel className="mb-8 block">Supporting Work</MonoLabel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {CONTENT.supportingProjects.map((project, idx) => (
                  <div key={idx} className="group flex flex-col h-full">
                    <h4 className="text-2xl font-serif mb-4 group-hover:text-accent-primary transition-colors">{project.name}</h4>
                    <p className="text-sm text-secondary-text leading-relaxed mb-6 flex-grow">{project.description}</p>
                    
                    {'achievement' in project && (
                      <div className="mb-6 py-2 px-3 bg-surface-elevated/30 border-l border-accent-primary/40">
                        <p className="text-[11px] font-mono text-accent-primary uppercase tracking-tight italic">
                          {project.achievement}
                        </p>
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-x-2 gap-y-1">
                        {project.tech.map((t, i) => (
                          <span key={i} className="font-mono text-[10px] text-accent-secondary opacity-70 italic">
                            {t}{i < project.tech.length - 1 && " ·"}
                          </span>
                        ))}
                      </div>\
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* LEADERSHIP */}
        <Section id="leadership" className="border-t border-surface/50">
          <MonoLabel className="mb-16 block">Leadership</MonoLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {CONTENT.leadership.map((exp, i) => (
              <div key={i} className="space-y-4">
                <MonoLabel className="text-accent-primary/70">{exp.date}</MonoLabel>
                <h4 className="text-xl font-serif leading-tight">{exp.title}</h4>
                <ul className="space-y-3">
                  {exp.points.map((p, pi) => (
                    <li key={pi} className="text-xs text-secondary-text leading-relaxed relative pl-4">
                      <span className="absolute left-0 top-1.5 w-1 h-1 rounded-full bg-accent-secondary/50" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* SKILLS & CERTIFICATIONS */}
        <Section id="skills" className="border-t border-surface/50 bg-surface/10 -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24">
          <MonoLabel className="mb-16 block">Inventory</MonoLabel>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              {Object.entries(CONTENT.skills).map(([category, items], idx) => (
                <div key={category} className={cn("space-y-4", idx === 0 && "sm:col-span-2")}>
                  <MonoLabel className="text-accent-primary/80 border-b border-surface-elevated pb-2 block w-full">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </MonoLabel>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {items.map((skill, i) => (
                      <span key={i} className="text-sm font-light text-primary-text/80 hover:text-accent-secondary transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-6">
                <MonoLabel className="mb-6 block">05 &mdash; Credentials</MonoLabel>
                {CONTENT.certifications.map((cert, i) => (
                  <div key={i} className="p-6 border border-accent-primary/20 bg-accent-primary/5 rounded-sm group hover:border-accent-primary/40 transition-all">
                    <Shield className="text-accent-primary mb-4" size={24} />
                    <h5 className="font-serif text-xl mb-1">{cert.name}</h5>
                    <p className="text-xs text-secondary-text uppercase tracking-widest">{cert.issuer} &middot; {cert.date}</p>
                  </div>
                ))}
                <div className="pt-4 px-2">
                  <p className="text-[10px] font-mono text-secondary-text uppercase italic opacity-60">
                    Currently pursuing further Azure AI engineering credentials.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <MonoLabel className="mb-6 block">Education</MonoLabel>
                <div>
                  <h5 className="font-serif text-lg leading-tight mb-1">{CONTENT.education.degree}</h5>
                  <p className="text-sm text-accent-primary mb-1">{CONTENT.education.institution}</p>
                  <p className="text-xs text-secondary-text mb-4 italic">{CONTENT.education.duration}</p>
                  <div className="flex flex-wrap gap-2">
                    {CONTENT.education.coursework.map((course, i) => (
                      <span key={i} className="text-[10px] font-mono text-secondary-text/80 bg-surface px-1.5 py-0.5">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" className="border-t border-surface/50 mb-24">
          <div className="max-w-3xl">
            <MonoLabel className="mb-12 block">Connection</MonoLabel>
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
              Ready to build <span className="italic text-accent-primary">systems</span> that matter.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <a href={`mailto:${CONTENT.identity.email}`} className="group block">
                  <MonoLabel className="block mb-2 group-hover:text-accent-primary transition-colors">Email</MonoLabel>
                  <span className="text-xl md:text-2xl font-serif group-hover:italic transition-all">{CONTENT.identity.email}</span>
                </a>
                <a href={`tel:${CONTENT.identity.phone}`} className="group block">
                  <MonoLabel className="block mb-2 group-hover:text-accent-primary transition-colors">Phone</MonoLabel>
                  <span className="text-xl md:text-2xl font-serif group-hover:italic transition-all">{CONTENT.identity.phone}</span>
                </a>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-8">
                  <a href={CONTENT.identity.github} target="_blank" rel="noopener noreferrer" className="group flex flex-col">
                    <MonoLabel className="mb-2 group-hover:text-accent-primary transition-colors">GitHub</MonoLabel>
                    <Github className="group-hover:text-accent-primary transition-colors" size={28} />
                  </a>
                  <a href={CONTENT.identity.linkedin} target="_blank" rel="noopener noreferrer" className="group flex flex-col">
                    <MonoLabel className="mb-2 group-hover:text-accent-primary transition-colors">LinkedIn</MonoLabel>
                    <Linkedin className="group-hover:text-accent-primary transition-colors" size={28} />
                  </a>
                </div>
                <div className="pt-4">
                  <p className="text-secondary-text text-sm leading-relaxed max-w-xs italic">
                    Based in Johannesburg. Available for collaboration on exceptional projects.
                  </p>
                  <p className="mt-6 text-accent-primary font-serif italic text-lg">
                    Let's build something that lasts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Persistent Navigation / Progress */}
      <nav className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 z-50">
        {['Arrival', 'Achievement', 'Projects', 'Leadership', 'Skills', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="group flex items-center justify-end gap-3 text-right"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-accent-primary">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-surface-elevated group-hover:bg-accent-primary group-hover:scale-150 transition-all" />
          </a>
        ))}
      </nav>
    </div>
  );
};

export default App;
