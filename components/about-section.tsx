"use client"

import { ScrollReveal } from "./scroll-reveal"

export function AboutSection() {
  const skills = [
    "Vibe Coding",
    "UI/UX Design",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Product Strategy",
    "Startup Growth",
  ]

  return (
    <section id="about" className="py-20 px-4 bg-accent/10 border-t-4 border-b-4 border-foreground">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 text-center tracking-tighter">About Me</h2>
        </ScrollReveal>

        <div className="space-y-6 text-lg leading-relaxed text-foreground font-medium">
          <ScrollReveal delay={0.1}>
            <p>
              I&apos;m a designer and developer who specializes in &ldquo;vibe coding&rdquo; — creating digital experiences that not only
              function flawlessly but feel right. With years of experience in the startup ecosystem, I&apos;ve learned that
              the best products are built at the intersection of beautiful design and thoughtful engineering.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p>
              My approach combines rapid prototyping with modern tools like v0, Cursor, and Next.js to bring ideas to
              life quickly without sacrificing quality. I believe in shipping fast, iterating based on real feedback,
              and always keeping the user experience at the forefront.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p>
              Whether you&apos;re a startup looking to build your MVP or an established company seeking to refresh your
              digital presence, I bring a unique blend of design sensibility, technical expertise, and startup hustle to
              every project.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-center">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill} delay={0.5 + index * 0.05} direction="up">
                  <span className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">
                    {skill}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
