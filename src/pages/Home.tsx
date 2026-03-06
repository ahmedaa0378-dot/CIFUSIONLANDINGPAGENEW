import { Link } from 'react-router-dom';
import { useRef, useEffect, useState, useCallback } from 'react';
import {
  Brain, Zap, ArrowRight, Lightbulb, GitBranch, CheckCircle2,
  Target, Layers, Globe, ChevronRight, Star, Factory, Heart, Pill, Car, Plane, Building2,
  AlertTriangle, TrendingUp, Shield, BarChart3, Repeat, Quote,
} from 'lucide-react';

/* ============================================================
   HOOKS
   ============================================================ */
function useInView(ref: React.RefObject<Element | null>, opts = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3, ...opts });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

/* ============================================================
   ROLLING COUNTER (Slot-machine style)
   ============================================================ */
function RollingDigit({ target, delay = 0 }: { target: string; delay?: number }) {
  const [display, setDisplay] = useState(target);
  const [rolling, setRolling] = useState(false);
  const isNum = /\d/.test(target);
  const startRoll = useCallback(() => {
    if (!isNum) { setDisplay(target); return; }
    setRolling(true);
    const digits = '0123456789';
    let count = 0;
    const total = 12 + Math.floor(Math.random() * 6);
    const iv = setInterval(() => {
      setDisplay(digits[Math.floor(Math.random() * 10)]);
      count++;
      if (count >= total) { clearInterval(iv); setDisplay(target); setRolling(false); }
    }, 50);
  }, [target, isNum]);
  useEffect(() => { const t = setTimeout(startRoll, delay); return () => clearTimeout(t); }, [startRoll, delay]);
  return <span className={`inline-block transition-all duration-100 ${rolling ? 'blur-[1px] scale-y-110' : ''}`}>{display}</span>;
}

function RollingCounter({ value, label, color }: { value: string; label: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [triggered, setTriggered] = useState(false);
  useEffect(() => { if (inView && !triggered) setTriggered(true); }, [inView, triggered]);
  return (
    <div ref={ref} className="text-center">
      <div className={`font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold ${color}`}>
        {triggered ? value.split('').map((ch, i) => <RollingDigit key={`${ch}-${i}`} target={ch} delay={i * 80} />) : <span className="opacity-0">{value}</span>}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">{label}</p>
    </div>
  );
}

/* ============================================================
   ANIMATED SECTION WRAPPER
   ============================================================ */
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.6s ease ${delay}s` }}>
      {children}
    </div>
  );
}

/* ============================================================
   DATA
   ============================================================ */
const stats = [
  { value: '73%', label: 'Reduction in manual ticket volume', color: 'text-purple-500' },
  { value: '12x', label: 'Average ROI for pilot customers', color: 'text-orange-500' },
  { value: '94%', label: 'User adoption rate in 90 days', color: 'text-pink-500' },
  { value: '$2.4M', label: 'Average documented savings per year', color: 'text-emerald-500' },
];

const problemStats = [
  { big: '70%', desc: 'of improvement ideas from frontline workers are never captured or documented' },
  { big: '$8T', desc: 'lost annually to operational inefficiency across global industries' },
  { big: '83%', desc: "of companies can't prove ROI on their continuous improvement initiatives" },
  { big: '6mo', desc: 'average time from idea to implementation without a structured system' },
];

const howItWorks = [
  { step: '01', title: 'Submit', desc: 'Any employee submits an improvement idea — quality issue, safety risk, process waste. Takes 2 minutes from their phone or desktop.', emoji: '💡' },
  { step: '02', title: 'AI Analyzes', desc: 'GPT-4 recommends the right Lean Six Sigma approach — DMAIC, Kaizen, 5 Whys, FMEA — with confidence scores and reasoning.', emoji: '🤖' },
  { step: '03', title: 'Track & Execute', desc: 'Managers approve, CSI Heads prioritize. Projects tracked through milestones, tasks, and progress with full team visibility.', emoji: '📊' },
  { step: '04', title: 'Prove ROI', desc: 'Hard and soft savings documented, validated by leadership, and replicated across sites. Real numbers for the boardroom.', emoji: '💰' },
];

const features = [
  { icon: Brain, title: 'AI-Powered Recommendations', desc: 'GPT-4 analyzes each idea and recommends the optimal CI methodology — Kaizen, DMAIC, 5 Whys, FMEA, A3 — with confidence scoring, complexity estimates, and alternative suggestions.' },
  { icon: BarChart3, title: 'Data Analysis Engine', desc: 'Upload CSV datasets, generate Pareto charts, control charts, and scatter plots instantly. AI identifies patterns, root causes, and improvement opportunities hidden in your operational data.' },
  { icon: GitBranch, title: 'Smart Approval Workflows', desc: 'Two-level approval: Manager → CSI Head. Request more info, park ideas, fast-track urgent ones. Automated notifications keep everyone in the loop with full audit trail.' },
  { icon: Target, title: 'Project Tracking & ROI', desc: 'Kanban boards, milestones, tasks, and savings tracking. From approved idea to validated results — every step documented with hard and soft dollar impact.' },
  { icon: Repeat, title: 'Cross-Site Replication', desc: "Proven improvements replicated across all your sites automatically. What works in Plant A gets deployed to Plant B, C, and D — with full tracking and site-specific savings." },
  { icon: Shield, title: 'Enterprise Security', desc: 'Row-level tenant isolation, SSO via Azure Entra / Okta, role-based access, custom branding, and dedicated database options for compliance-heavy industries.' },
];

const caseStudies = [
  {
    tab: '🤖 AI Recommendations', title: 'How AI Recommendations Eliminated Guesswork at a Pharma Plant',
    metrics: [
      { val: '92%', label: 'AI Recommendation Accuracy', color: 'text-amber-400' },
      { val: '3x', label: 'Faster Methodology Selection', color: 'text-cyan-400' },
      { val: '78%', label: 'First-Time Right Approach', color: 'text-emerald-400' },
      { val: '$340K', label: 'Savings from Correct CI Match', color: 'text-pink-400' },
    ],
    story: "A pharmaceutical manufacturer was running 5S projects for problems that needed DMAIC, and Kaizen events for issues requiring FMEA. After deploying CIFusion's AI recommendation engine, every idea submission receives an instant GPT-4 analysis. Within 6 months, the plant achieved 92% accuracy in methodology matching and documented $340K in savings.",
    quote: '"We used to spend two weeks debating which methodology to use. Now the AI recommends in seconds, and it\'s right 9 out of 10 times."',
    author: '— CI Director, Global Pharmaceuticals',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=220&fit=crop&q=80',
  },
  {
    tab: '📊 Data Analysis', title: 'Turning Raw Production Data into $520K of Savings',
    metrics: [
      { val: '47', label: 'Hidden Patterns Identified', color: 'text-amber-400' },
      { val: '85%', label: 'Faster Root Cause Analysis', color: 'text-cyan-400' },
      { val: '$520K', label: 'Annual Savings from Insights', color: 'text-emerald-400' },
      { val: '12', label: 'Pareto Charts Auto-Generated', color: 'text-pink-400' },
    ],
    story: "An automotive parts supplier had years of quality data sitting in spreadsheets. With CIFusion's data analysis engine, the quality team uploaded their CSV datasets and the AI identified 47 hidden patterns including a correlation between shift changeover timing and defect spikes. Within one year, they documented $520K in savings.",
    quote: '"We were sitting on a goldmine of data and didn\'t know it. CIFusion\'s analysis engine found patterns our quality team had been looking for years."',
    author: '— VP Quality, Automotive Parts Supplier',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=220&fit=crop&q=80',
  },
  {
    tab: '🔄 Approval Workflows', title: 'From 3-Week Bottleneck to 72-Hour Approvals',
    metrics: [
      { val: '72hrs', label: 'Average Approval Time (was 3 weeks)', color: 'text-amber-400' },
      { val: '4.2x', label: 'More Ideas Submitted', color: 'text-cyan-400' },
      { val: '94%', label: 'Employee Satisfaction Score', color: 'text-emerald-400' },
      { val: 'Zero', label: 'Ideas Lost in Email Chains', color: 'text-pink-400' },
    ],
    story: "A healthcare system with 1,000+ employees had a suggestion box program that averaged 3-week response times. CIFusion's two-level approval workflow transformed the process. Idea submissions increased 4.2x in the first quarter. Average approval time dropped to 72 hours. Employee satisfaction jumped from 41% to 94%.",
    quote: '"Our nurses and techs finally feel heard. When they submit an idea, they get a response in days, not weeks."',
    author: '— COO, Regional Healthcare System',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=220&fit=crop&q=80',
  },
  {
    tab: '📈 Project Tracking', title: '$950K in Validated Savings — Every Dollar Tracked',
    metrics: [
      { val: '$950K', label: 'Validated Savings in 12 Months', color: 'text-amber-400' },
      { val: '89%', label: 'Project Completion Rate', color: 'text-cyan-400' },
      { val: '52%', label: 'Reduction in Manual Effort', color: 'text-emerald-400' },
      { val: '14', label: 'Active CI Projects Tracked', color: 'text-pink-400' },
    ],
    story: "A mid-size manufacturer running 14 simultaneous CI projects had no visibility into progress or actual savings. CIFusion's project tracking gave every project a Kanban board, milestones, and savings tracker. Within 12 months, the company tracked $950K in validated savings with an 89% project completion rate.",
    quote: '"For the first time, I can walk into a board meeting and show exactly how much our CI program has saved — with validated numbers, not estimates."',
    author: '— VP Operations, Global Manufacturing',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=220&fit=crop&q=80',
  },
  {
    tab: '🌐 Cross-Site Replication', title: 'One Improvement, Five Sites, $1.8M in Total Impact',
    metrics: [
      { val: '5', label: 'Sites Replicated To', color: 'text-amber-400' },
      { val: '3.2x', label: 'ROI Multiplier via Replication', color: 'text-cyan-400' },
      { val: '$1.8M', label: 'Total Savings Across Sites', color: 'text-emerald-400' },
      { val: '60%', label: 'Faster Deployment at New Sites', color: 'text-pink-400' },
    ],
    story: "An energy company with facilities across 5 states found proven improvements at one site were never shared with others. CIFusion's replication module flagged validated projects automatically. A single torque calibration improvement was replicated across all 5 facilities in just 8 weeks — delivering $1.8M in total impact from a $12K investment.",
    quote: '"We used to reinvent the wheel at every plant. Now when something works, it spreads across the company in weeks, not years."',
    author: '— SVP Operations, National Energy Company',
    img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=220&fit=crop&q=80',
  },
];

const whyNow = [
  { num: '01', icon: '🎯', title: 'AI Without the Guesswork', desc: "Boards are demanding AI strategies yesterday. CIFusion is a tangible, measurable AI deployment that proves value in weeks — not a science project that takes years. Your first \"AI win\" starts with listening to your people and letting GPT-4 do what it does best." },
  { num: '02', icon: '📡', title: 'Data-Driven, Not Data-Drowned', desc: "You don't need a data lake or a team of data scientists. CIFusion turns everyday observations from your frontline workers into structured data, then uses AI to extract actionable insights. Your workforce IS your most valuable data source." },
  { num: '03', icon: '👂', title: 'Listen to Win', desc: 'Companies that systematically listen to their workforce outperform competitors by 4.6x. CIFusion gives every employee a voice and every leader the data to act on it. Engagement goes up. Turnover goes down. Improvements compound.' },
];

const industries = [
  { icon: Factory, name: 'Manufacturing' },
  { icon: Heart, name: 'Healthcare' },
  { icon: Pill, name: 'Pharma' },
  { icon: Car, name: 'Automotive' },
  { icon: Plane, name: 'Aerospace' },
  { icon: Building2, name: 'Energy' },
];

const bars = [
  { name: 'DMAIC', w: 78 },
  { name: 'Kaizen', w: 62 },
  { name: '5 Whys', w: 45 },
  { name: 'FMEA', w: 34 },
  { name: 'A3', w: 28 },
];

/* ============================================================
   COMPONENT
   ============================================================ */
export default function Home() {
  const [activeCase, setActiveCase] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setActiveCase((p) => (p + 1) % caseStudies.length), 6000);
    return () => clearInterval(iv);
  }, [activeCase]);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center section-padding pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-orange-500/5 dark:bg-orange-500/5 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 dark:bg-purple-500/10 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-purple-600 dark:text-purple-400 tracking-wide">AI-Powered Continuous Improvement Platform</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight mb-6 text-gray-900 dark:text-white">
              Your Workforce Already Knows What's Broken.{' '}
              <span className="gradient-text">We Give Them AI to Fix It.</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-lg">
              CIFusion captures frontline ideas, uses GPT-4 to recommend Lean Six Sigma methodologies, tracks projects to completion, and proves ROI with hard data — all in one platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/demo" className="btn-primary inline-flex items-center gap-2">Request a Demo <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/platform" className="btn-secondary inline-flex items-center gap-2">See How It Works <ChevronRight className="w-4 h-4" /></Link>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {['A', 'M', 'S', 'K'].map((letter, i) => (
                  <div key={i} className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-[10px] font-bold text-white border-2 border-white dark:border-gray-950">{letter}</div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />)}</div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Trusted by industry leaders</p>
              </div>
            </div>
          </div>
          {/* Dashboard Card */}
          <div className="flex-1 max-w-lg w-full">
            <div className="card-glass p-7">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-[11px] font-mono text-gray-400 dark:text-gray-600">improvement_dashboard.app</span>
              </div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-heading text-4xl font-extrabold gradient-text">847</span>
                <span className="text-sm text-gray-400 dark:text-gray-500">ideas this quarter</span>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-600 mb-5">AI methodology distribution</p>
              {bars.map((bar) => (
                <div key={bar.name} className="flex items-center gap-3 mb-2.5">
                  <span className="w-16 text-[11px] font-mono text-gray-400 dark:text-gray-600">{bar.name}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-purple-500/10 dark:bg-purple-500/15 overflow-hidden">
                    <div className="h-full rounded-full gradient-bg" style={{ width: `${bar.w}%` }} />
                  </div>
                </div>
              ))}
              <div className="flex gap-5 mt-5 pt-5 border-t border-gray-200/40 dark:border-purple-500/10">
                {[{ v: '$2.4M', l: 'SAVINGS' }, { v: '94%', l: 'ADOPTION' }, { v: '12x', l: 'ROI' }].map((s) => (
                  <div key={s.l} className="flex-1 text-center">
                    <div className="font-heading text-lg font-extrabold text-gray-900 dark:text-white">{s.v}</div>
                    <div className="text-[10px] font-mono text-gray-400 dark:text-gray-600 tracking-wider mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="section-padding py-10 border-y border-gray-200/50 dark:border-purple-500/8 bg-gray-50/50 dark:bg-gray-950/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[11px] font-semibold tracking-[2px] uppercase text-gray-400 dark:text-gray-600 mb-5">Built for industries that demand excellence</p>
          <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
            {industries.map((ind) => (
              <div key={ind.name} className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                <ind.icon className="w-4 h-4" /><span className="text-sm font-medium">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ROLLING STATS ===== */}
      <section className="section-padding py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => <RollingCounter key={stat.label} value={stat.value} label={stat.label} color={stat.color} />)}
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="section-padding py-24 bg-gray-50/50 dark:bg-gray-950/30 relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-500/3 dark:bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-extrabold tracking-[2px] uppercase bg-red-500/8 text-red-500 mb-4">The Problem</span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-gray-900 dark:text-white">Billions in Waste. <span className="gradient-text">Hidden in Plain Sight.</span></h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg mb-12">Your employees see problems every day. Most of it never gets reported, tracked, or solved.</p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="grid grid-cols-2 gap-4">
              {problemStats.map((ps, i) => (
                <AnimatedSection key={ps.big} delay={i * 0.1}>
                  <div className="rounded-2xl border border-gray-200/60 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5">
                    <div className="font-heading text-3xl md:text-4xl font-extrabold gradient-text mb-2">{ps.big}</div>
                    <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">{ps.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={0.3}>
              <div>
                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">The Real Problem Isn't Ideas — It's the Gap Between Seeing and Doing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">Your workforce spots defects, safety risks, and process waste every shift. But without a system to capture, analyze, and act on these insights, they disappear into thin air.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">Traditional CI programs rely on consultants, spreadsheets, and gut feeling. They're slow, expensive, and can't scale across sites.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">Meanwhile, every executive is asking: <strong className="text-gray-900 dark:text-white">"Where do we even start with AI?"</strong></p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">CIFusion is the answer. Start with your people. Amplify with AI. Prove with data.</p>
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=250&fit=crop&q=80" alt="Manufacturing floor" className="w-full h-48 object-cover rounded-xl mt-6 opacity-85" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section-padding py-24 text-white relative overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-extrabold tracking-[2px] uppercase bg-amber-500/12 text-amber-400 mb-4">How It Works</span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-3">From Idea to Impact in <span className="gradient-text">Four Steps</span></h2>
            <p className="text-white/50 max-w-lg mx-auto mb-14">No consultants. No spreadsheets. Just your workforce, AI, and measurable results.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-0">
            {howItWorks.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="relative text-center px-5 py-8">
                  {i < 3 && <span className="hidden md:block absolute right-[-8px] top-[52px] text-xl text-white/10 font-bold">→</span>}
                  <div className={`w-[72px] h-[72px] rounded-2xl mx-auto mb-5 flex items-center justify-center text-3xl ${i === 0 ? 'bg-gradient-to-br from-purple-500 to-purple-400' : i === 1 ? 'bg-gradient-to-br from-amber-500 to-orange-500' : i === 2 ? 'bg-gradient-to-br from-cyan-500 to-blue-500' : 'bg-gradient-to-br from-emerald-500 to-green-400'}`}>
                    {item.emoji}
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section-padding py-24">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-extrabold tracking-[2px] uppercase bg-purple-500/7 text-purple-600 dark:text-purple-400 mb-4">Platform</span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-gray-900 dark:text-white">Everything You Need. <span className="gradient-text">Nothing You Don't.</span></h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-14">Built for manufacturing, healthcare, and enterprise — not another generic project tool.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="group relative rounded-2xl border border-gray-200/60 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 p-7 text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-500/5 hover:border-transparent overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity gradient-bg" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/8 dark:bg-purple-500/12 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <f.icon className="w-5 h-5 text-purple-500" />
                    </div>
                    <h3 className="font-heading text-base font-bold mb-2 text-gray-900 dark:text-white">{f.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="section-padding py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #15103a 40%, #0d1f35 70%, #0A1628 100%)' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-extrabold tracking-[2px] uppercase bg-emerald-500/12 text-emerald-400 mb-4">Case Studies</span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white">Real Results Across <span className="gradient-text">Every Capability</span></h2>
            <p className="text-white/50 max-w-lg mb-10">See how CIFusion's AI-powered features deliver measurable impact across industries.</p>
          </AnimatedSection>
          <div className="flex gap-2 mb-8 flex-wrap">
            {caseStudies.map((cs, i) => (
              <button key={i} onClick={() => setActiveCase(i)} className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${activeCase === i ? 'gradient-bg text-white border-transparent shadow-lg shadow-purple-500/20' : 'bg-white/4 border-white/10 text-white/55 hover:bg-white/8 hover:text-white'}`}>{cs.tab}</button>
            ))}
          </div>
          {caseStudies.map((cs, i) => (
            activeCase === i && (
              <div key={i} className="grid lg:grid-cols-2 gap-10 items-start" style={{ animation: 'caseFade 0.5s ease' }}>
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="p-5 rounded-2xl bg-white/4 border border-white/6 backdrop-blur-sm">
                        <div className={`font-heading text-2xl md:text-3xl font-extrabold ${m.color}`}>{m.val}</div>
                        <div className="text-[11px] text-white/40 mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <img src={cs.img} alt={cs.title} className="w-full h-48 object-cover rounded-xl border border-white/6 opacity-85" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-4 leading-snug">{cs.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-6">{cs.story}</p>
                  <div className="p-5 border-l-[3px] border-amber-500 bg-white/3 rounded-r-xl">
                    <p className="text-sm italic text-white/70 leading-relaxed">{cs.quote}</p>
                    <p className="text-xs text-amber-400 font-bold mt-3">{cs.author}</p>
                  </div>
                </div>
              </div>
            )
          ))}
          <div className="flex gap-1.5 mt-8">
            {caseStudies.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all duration-300 ${activeCase === i ? 'w-10 gradient-bg' : 'w-6 bg-white/10'}`} />
            ))}
          </div>
        </div>
        <style>{`@keyframes caseFade { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }`}</style>
      </section>

      {/* ===== WHY NOW ===== */}
      <section className="section-padding py-24 bg-gray-50/50 dark:bg-gray-950/30">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-extrabold tracking-[2px] uppercase bg-pink-500/7 text-pink-500 dark:text-pink-400 mb-4">Why Now</span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-gray-900 dark:text-white">Every Company Wants AI. <span className="gradient-text">Few Know Where to Start.</span></h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-14">The AI race is on. But the smartest companies aren't starting with chatbots — they're starting with their workforce.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {whyNow.map((w, i) => (
              <AnimatedSection key={w.num} delay={i * 0.15}>
                <div className="relative rounded-2xl border border-gray-200/60 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-8 text-left hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 overflow-hidden group">
                  <div className="absolute top-[-16px] right-3 font-heading text-[80px] font-extrabold opacity-[0.03] dark:opacity-[0.06] text-gray-900 dark:text-white select-none leading-none">{w.num}</div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/8 dark:bg-purple-500/12 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">{w.icon}</div>
                    <h3 className="font-heading text-lg font-bold mb-2 text-gray-900 dark:text-white">{w.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1628, #1a1145, #0d1f35)' }}>
        <div className="absolute w-[600px] h-[600px] rounded-full top-[-200px] right-[-100px] blur-[40px]" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full bottom-[-100px] left-[-50px] blur-[40px]" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.15), transparent 70%)' }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">Ready to Turn Your Workforce Into Your <span className="gradient-text">Competitive Advantage?</span></h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">See CIFusion in action with a personalized 30-minute demo. No commitment, no pressure — just real results.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/demo" className="btn-primary inline-flex items-center gap-2">Request a Demo <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/15 text-white bg-white/5 hover:bg-white/10 transition-all">View Pricing <ChevronRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
