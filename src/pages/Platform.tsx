import { Link } from 'react-router-dom';
import { Brain, Lightbulb, GitBranch, BarChart3, Repeat, Shield, ArrowRight, ChevronRight, Zap, Target, CheckCircle2 } from 'lucide-react';

const capabilities = [
  {
    icon: Lightbulb, title: 'Guided Idea Submission',
    desc: 'A step-by-step wizard that helps any employee articulate their improvement idea — no training required. The AI asks smart follow-up questions to capture full context.',
    details: ['Category & area selection', 'Problem description wizard', 'Impact estimation helper', 'Photo & document attachments'],
  },
  {
    icon: Brain, title: 'AI Analysis Engine',
    desc: 'GPT-4 analyzes every submission and recommends the optimal Lean Six Sigma methodology. It considers problem type, scope, data availability, and organizational context.',
    details: ['DMAIC, Kaizen, 5 Whys, FMEA, A3', 'Confidence scoring', 'Methodology justification', 'Alternative recommendations'],
  },
  {
    icon: GitBranch, title: 'Smart Approval Workflow',
    desc: 'Configurable two-level (or N-level) approval flow. Managers and CSI Heads see AI recommendations alongside the original submission.',
    details: ['Role-based routing', 'Bulk approval actions', 'Comments & feedback loop', 'Escalation rules'],
  },
  {
    icon: Target, title: 'Project Execution',
    desc: 'Approved ideas become tracked projects on Kanban boards with automatic progress calculation, milestone tracking, and team assignment.',
    details: ['Kanban boards with drag & drop', 'Milestone & phase tracking', 'Team member assignment', 'Auto progress calculation'],
  },
  {
    icon: BarChart3, title: 'ROI & Impact Tracking',
    desc: 'Measure documented savings, track cost avoidance, and validate ROI across every improvement project with real-time analytics.',
    details: ['Financial impact tracking', 'Before/after metrics', 'Savings validation workflow', 'Executive dashboards'],
  },
  {
    icon: Repeat, title: 'Multi-Site Replication',
    desc: 'When an improvement proves successful, replicate it across facilities with one click. Track adoption and impact at every site.',
    details: ['One-click replication', 'Site-specific adaptation', 'Replication success tracking', 'Cross-site benchmarking'],
  },
];

const lssTemplates = [
  { name: 'DMAIC', desc: 'Define, Measure, Analyze, Improve, Control — for complex, data-driven problems.' },
  { name: 'Kaizen', desc: 'Rapid improvement events for quick wins and team-driven solutions.' },
  { name: '5 Whys', desc: 'Root cause analysis through iterative questioning — AI builds each question on the last.' },
  { name: 'FMEA', desc: 'Failure Mode and Effects Analysis for proactive risk identification.' },
  { name: 'A3', desc: 'Structured problem-solving on a single page — the Toyota way.' },
];

export default function Platform() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-[30%] left-[15%] w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">Platform</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-gray-900 dark:text-white">
            The Complete CI Platform, <span className="gradient-text">Powered by AI</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            From idea submission to documented savings — CIFusion handles the entire continuous improvement lifecycle with AI intelligence at every step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/demo" className="btn-primary inline-flex items-center gap-2">Request a Demo <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/pricing" className="btn-secondary inline-flex items-center gap-2">View Pricing <ChevronRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* Workflow steps */}
      <section className="section-padding py-16 border-y border-gray-200/50 dark:border-purple-500/8 bg-gray-50/50 dark:bg-gray-950/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Submit', 'Analyze', 'Approve', 'Execute', 'Measure'].map((step, i) => (
              <div key={step} className="relative text-center">
                <div className="w-12 h-12 mx-auto rounded-xl gradient-bg flex items-center justify-center mb-3">
                  <span className="text-white font-heading font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="font-heading text-sm font-bold text-gray-900 dark:text-white">{step}</p>
                {i < 4 && <ChevronRight className="hidden md:block absolute top-4 -right-2 w-4 h-4 text-purple-500/30" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">Capabilities</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Every Tool You Need, <span className="gradient-text">Nothing You Don't</span>
            </h2>
          </div>
          <div className="space-y-8">
            {capabilities.map((cap, i) => (
              <div key={cap.title} className="card-glass p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-5">
                    <cap.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 text-gray-900 dark:text-white">{cap.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">{cap.desc}</p>
                  <ul className="space-y-2">
                    {cap.details.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl bg-gradient-to-br from-purple-500/5 to-orange-500/5 dark:from-purple-500/10 dark:to-orange-500/5 h-48 md:h-64 flex items-center justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <cap.icon className="w-16 h-16 text-purple-500/15" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LSS Templates */}
      <section className="section-padding py-24 bg-gray-50/50 dark:bg-gray-950/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">Built-in Methodologies</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Lean Six Sigma <span className="gradient-text">Templates</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
              Interactive, AI-powered templates that guide users through each methodology with contextual coaching.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {lssTemplates.map((t) => (
              <div key={t.name} className="card-glass p-6 hover:border-purple-500/20 transition-all group">
                <h3 className="font-heading text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{t.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
            <div className="card-glass p-6 flex items-center justify-center bg-gradient-to-br from-purple-500/5 to-orange-500/5">
              <div className="text-center">
                <Zap className="w-8 h-8 text-purple-500/30 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-400 dark:text-gray-500">Custom templates on Enterprise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section-padding py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">Enterprise-Grade Security</p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight mb-5 text-gray-900 dark:text-white">
              Built for <span className="gradient-text">Enterprise Trust</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Multi-tenant architecture with row-level security, SSO integration, and full data isolation.
            </p>
            <ul className="space-y-3">
              {['Row-level security with data isolation', 'Azure Entra, Okta, Google SSO', 'SCIM user provisioning', 'Audit logging & compliance', 'SOC 2 Type II (in progress)', '99.9% uptime SLA on Enterprise'].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400">
                  <Shield className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-purple-500/5 to-orange-500/5 dark:from-purple-500/10 dark:to-orange-500/5 h-64 md:h-80 flex items-center justify-center">
            <Shield className="w-20 h-20 text-purple-500/15" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 bg-gray-50/50 dark:bg-gray-950/30 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            Ready to See It <span className="gradient-text">Live?</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">Book a 30-minute demo and see how CIFusion transforms your CI program.</p>
          <Link to="/demo" className="btn-primary inline-flex items-center gap-2">Request a Demo <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}
