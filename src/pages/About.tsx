import { Link } from 'react-router-dom';
import { ArrowRight, Target, Lightbulb, Shield, Brain, Zap } from 'lucide-react';

const values = [
  { icon: Target, title: 'Impact-Driven', desc: 'Every feature we build must drive measurable business outcomes. If it doesn\'t improve the improvement process, it doesn\'t ship.' },
  { icon: Lightbulb, title: 'Frontline First', desc: 'We design for the people closest to the problem. If a shop floor operator can\'t use it intuitively, we haven\'t done our job.' },
  { icon: Shield, title: 'Enterprise Trust', desc: 'Data isolation, SOC 2 compliance, and zero-compromise security. Our customers trust us with their competitive advantage.' },
  { icon: Brain, title: 'AI With Purpose', desc: 'AI isn\'t a gimmick — it\'s the core engine. We use it to democratize Lean Six Sigma expertise that was previously locked behind expensive consultants.' },
];

const team = [
  { name: 'Ahmed Khan', role: 'Founder & CEO', expertise: 'AI Strategy • Enterprise Architecture', bio: 'Visionary behind CIFusion\'s AI-first approach to continuous improvement. Deep expertise in enterprise software and manufacturing operations.', gradient: 'from-purple-500 to-indigo-500' },
  { name: 'Dr. Sarah Mitchell', role: 'Head of Lean Six Sigma', expertise: 'Master Black Belt • DMAIC • DFSS', bio: '20+ years leading CI transformation programs across Fortune 500 manufacturing and healthcare organizations.', gradient: 'from-pink-500 to-purple-500' },
  { name: 'Raj Patel', role: 'VP of Engineering', expertise: 'Full Stack • Cloud Architecture • DevOps', bio: 'Architected the multi-tenant platform from the ground up. Previously built scalable SaaS platforms serving 10M+ users.', gradient: 'from-orange-500 to-pink-500' },
  { name: 'Maria Gonzalez', role: 'AI/ML Lead', expertise: 'NLP • LLMs • Recommendation Systems', bio: 'Designed CIFusion\'s intelligent analysis engine. Former AI researcher with published work in industrial process optimization.', gradient: 'from-blue-500 to-purple-500' },
  { name: 'James O\'Brien', role: 'Head of Customer Success', expertise: 'Black Belt • Change Management • Training', bio: 'Ensures every customer achieves measurable ROI. Led CI programs at 3 automotive OEMs before joining CIFusion.', gradient: 'from-indigo-500 to-blue-500' },
  { name: 'Priya Sharma', role: 'Product Manager', expertise: 'SaaS Product • UX Research • CI Workflows', bio: 'Bridges the gap between frontline users and technology. Obsessed with making complex CI processes feel effortless.', gradient: 'from-purple-500 to-orange-500' },
];

const milestones = [
  { year: '2023', event: 'Founded Allegiant InfoTech with a mission to democratize CI' },
  { year: '2024', event: 'Built CIFusion MVP — AI-powered idea analysis engine goes live' },
  { year: '2024', event: 'First pilot customer achieves $2.4M in documented savings' },
  { year: '2025', event: 'Enterprise launch with Azure SSO, multi-tenant, and replication' },
  { year: '2025', event: 'Expansion into healthcare, pharma, and aerospace verticals' },
  { year: '2026', event: 'AI coaching engine and interactive LSS templates launch' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">About CIFusion</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-gray-900 dark:text-white">
            We Believe Every Frontline Worker <span className="gradient-text">Has a Million-Dollar Idea</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            CIFusion exists because continuous improvement shouldn't require a Black Belt certification
            or a six-figure consulting engagement. We built the AI that makes Lean Six Sigma accessible to everyone.
          </p>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="section-padding py-20 bg-gray-50/50 dark:bg-gray-950/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="card-glass p-8 md:p-10">
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-heading text-xl font-extrabold mb-3 text-gray-900 dark:text-white">Our Vision</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              A world where every organization — from a 50-person plant in Pune to a global
              automotive OEM — has access to the same caliber of continuous improvement intelligence
              that today only the Fortune 100 can afford. We're building the infrastructure for a
              global improvement culture powered by AI.
            </p>
          </div>
          <div className="card-glass p-8 md:p-10">
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-heading text-xl font-extrabold mb-3 text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              To put an AI-powered Lean Six Sigma consultant in the pocket of every frontline
              worker. We eliminate the barriers of cost, expertise, and complexity that have kept
              structured improvement programs out of reach for mid-market organizations.
              Every idea deserves a chance to become impact.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">What Drives Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-glass p-6 group hover:border-purple-500/20 transition-all">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <v.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-base font-bold mb-2 text-gray-900 dark:text-white">{v.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding py-24 bg-gray-50/50 dark:bg-gray-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">The Team</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
              Black Belts, AI Engineers & <span className="gradient-text">Industry Veterans</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Our team combines decades of Lean Six Sigma expertise with cutting-edge AI engineering.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card-glass p-6 group hover:border-purple-500/20 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-heading font-bold text-sm`}>
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-gray-900 dark:text-white">{member.name}</h3>
                    <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-[11px] font-mono text-gray-400 dark:text-gray-600 mb-3 tracking-wide">{member.expertise}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">Our Journey</p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              From Idea to <span className="gradient-text">Impact</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-orange-500/20 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 relative z-10">
                    <span className="text-[10px] font-bold text-white">{m.year.slice(-2)}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-xs font-mono text-purple-600 dark:text-purple-400 font-medium">{m.year}</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 bg-gray-50/50 dark:bg-gray-950/30 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            Join the <span className="gradient-text">CIFusion Team</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            We're hiring Black Belts, AI engineers, and product builders who want to transform how the world improves.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">Get in Touch <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/demo" className="btn-secondary">Request a Demo</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
