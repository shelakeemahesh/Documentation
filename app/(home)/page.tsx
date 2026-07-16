import Link from 'next/link';
import { ArrowRight, BookOpen, Cpu, Database, Layout, Server, Terminal, GitBranch, GitPullRequest } from 'lucide-react';
import React from 'react';

const categories = [
  {
    title: 'Frontend Fundamentals',
    description: 'Master HTML5, semantic tags, modern CSS layout (Flexbox/Grid), responsive design, and core JS engines.',
    icon: Layout,
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    href: '/docs/html/introduction-to-html',
  },
  {
    title: 'Modern React Frameworks',
    description: 'Deep dive into hooks lifecycle, context state, custom hooks, and architectural scaling patterns.',
    icon: Cpu,
    color: 'text-sky-500 bg-sky-500/10 border-sky-500/20',
    href: '/docs/react/introduction-setup',
  },
  {
    title: 'Git Version Control',
    description: 'Track code history, manage staging area, stash, rebase, reset, and resolve complex merge conflicts.',
    icon: GitBranch,
    color: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
    href: '/docs/git/introduction-to-git',
  },
  {
    title: 'GitHub Collaboration',
    description: 'SSH key authorization, manage pull requests, organize code reviews, and automate with GitHub Actions CI/CD.',
    icon: GitPullRequest,
    color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    href: '/docs/github/introduction-to-github',
  },
  {
    title: 'Java Backend Stack',
    description: 'Core OOP, Collections, Concurrency framework, Spring Boot DI/IoC, and JPA/Hibernate mapping.',
    icon: Server,
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    href: '/docs/java/introduction-setup',
  },
  {
    title: 'Relational Databases',
    description: 'ACID, indexing mechanisms, normalization, sharding, window functions, and scaling MySQL & PostgreSQL.',
    icon: Database,
    color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    href: '/docs/mysql/introduction-setup',
  },
  {
    title: 'Containers & DevOps',
    description: 'Dockerize services, optimize multi-stage builds, container networks, volumes, and orchestration.',
    icon: Terminal,
    color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
    href: '/docs/docker/introduction-to-containers',
  },
  {
    title: 'System Design',
    description: 'Scalability, load balancers, caching, message queues, rate limiting, and microservices architecture.',
    icon: BookOpen,
    color: 'text-violet-500 bg-violet-500/10 border-violet-500/20',
    href: '/docs/system-design/fundamentals',
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] bg-zinc-950 text-zinc-50 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 py-20 md:py-32 max-w-6xl relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-sm font-semibold tracking-wide shadow-inner">
            ⚡ Full Stack Developer Roadmap
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-50 via-zinc-100 to-amber-500 leading-none">
            Developer Documentation Hub
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
            A production-grade, highly structured learning hub covering the entire engineering cycle: Frontend layouts, Backend frameworks, Databases, DevOps pipelines, and System Architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/docs/getting-started/introduction"
              className="inline-flex items-center h-12 justify-center rounded-xl bg-amber-500 px-8 font-semibold text-zinc-950 transition-all hover:bg-amber-400 hover:scale-[1.02] shadow-lg shadow-amber-500/15"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/docs/system-design/fundamentals"
              className="inline-flex items-center h-12 justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 px-8 font-semibold text-zinc-300 transition-all hover:bg-zinc-800 hover:text-zinc-50"
            >
              Browse System Design
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-24 md:mt-32 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Link
                key={index}
                href={cat.href}
                className="group relative flex flex-col justify-between p-6 rounded-2xl border border-zinc-900 bg-zinc-900/20 backdrop-blur-sm transition-all duration-300 hover:border-zinc-800 hover:bg-zinc-900/50 hover:shadow-xl hover:translate-y-[-2px]"
              >
                <div>
                  <div className={`inline-flex items-center justify-center p-3 rounded-xl border ${cat.color} mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-100 group-hover:text-amber-500 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-2.5 text-zinc-400 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-xs font-semibold text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity gap-1">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
