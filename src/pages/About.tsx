import { Link } from 'react-router-dom';
import { ArrowRight, Target, Lightbulb, Shield, Brain, Zap } from 'lucide-react';

const values = [
  { icon: Target, title: 'Impact-Driven', desc: 'Every feature we build must drive measurable business outcomes. If it doesn\'t improve the improvement process, it doesn\'t ship.' },
  { icon: Lightbulb, title: 'Frontline First', desc: 'We design for the people closest to the problem. If a shop floor operator can\'t use it intuitively, we haven\'t done our job.' },
  { icon: Shield, title: 'Enterprise Trust', desc: 'Data isolation, a SOC 2 Type II audit in progress, and zero-compromise security. Our customers trust us with their competitive advantage.' },
  { icon: Brain, title: 'AI With Purpose', desc: 'AI isn\'t a gimmick — it\'s the core engine. We use it to democratize Lean Six Sigma expertise that was previously locked behind expensive consultants.' },
];

const milestones = [
  { year: '2024', event: 'Founded Allegiant InfoTech with a mission to democratize CI' },
  { year: '2024', event: 'Built CIFusion MVP — AI-powered idea analysis engine goes live' },
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

      {/* Expertise */}
      <section className="section-padding py-24 bg-gray-50/50 dark:bg-gray-950/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">Our Expertise</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
              Built by a Practitioner, <span className="gradient-text">Not a Vendor</span>
            </h2>
          </div>
          <div className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              CIFusion wasn't built by a software company that discovered Lean Six Sigma along the way.
              It was built by a practitioner who has spent more than 18 years inside it — leading
              continuous improvement and quality programs where the results had to be real, measurable,
              and defensible.
            </p>
            <p>
              Our founder is a certified <strong>Lean Six Sigma Master Black Belt</strong> with deep,
              hands-on experience across manufacturing, automotive, pharmaceutical, healthcare, and
              aerospace operations. That means real fluency with the full improvement toolkit — DMAIC,
              Design for Six Sigma, Kaizen, value stream mapping, FMEA, and structured root-cause
              analysis — applied to problems on actual shop floors and in real operations, not just in
              theory.
            </p>
            <p>
              Across those years, the same gap kept showing up: the methodology works, but access to it
              doesn't scale. Structured improvement stayed locked behind six-figure consulting
              engagements and a short supply of certified experts, leaving most mid-market organizations
              on the outside. CIFusion exists to close that gap — encoding hard-won CI expertise into AI
              so a frontline operator can get the same caliber of guidance a Black Belt would give.
            </p>
            <p>
              Operated under <strong>Allegiant InfoTech</strong>, CIFusion pairs that deep continuous
              improvement domain knowledge with modern software engineering — a combination of people
              who have actually run improvement programs and people who can build the technology to
              scale them.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="card-glass p-5 text-center">
              <p className="font-heading text-lg font-extrabold gradient-text mb-1">Master Black Belt</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">Lean Six Sigma certified</p>
            </div>
            <div className="card-glass p-5 text-center">
              <p className="font-heading text-2xl font-extrabold gradient-text mb-1">18+ Years</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">in CI, quality &amp; product engineering</p>
            </div>
            <div className="card-glass p-5 text-center">
              <p className="font-heading text-2xl font-extrabold gradient-text mb-1">5+ Industries</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">manufacturing to aerospace</p>
            </div>
            <div className="card-glass p-5 text-center">
              <p className="font-heading text-lg font-extrabold gradient-text mb-1">Full LSS Toolkit</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">DMAIC, Kaizen, FMEA &amp; more</p>
            </div>
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
            See What <span className="gradient-text">CIFusion</span> Can Do
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Bring structured, AI-powered continuous improvement to your organization. Let's talk about what it could look like for your team.
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
