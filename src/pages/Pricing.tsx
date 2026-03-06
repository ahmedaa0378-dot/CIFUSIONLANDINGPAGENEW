import { Link } from 'react-router-dom';
import { Check, ArrowRight, Shield, Crown, Sparkles, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

function useInView(ref: React.RefObject<Element | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.6s ease ${delay}s` }}>
      {children}
    </div>
  );
}

const tiers = [
  {
    name: 'Enterprise SSO',
    icon: Shield,
    description: 'For organizations requiring single sign-on and enterprise identity management.',
    highlight: true,
    badge: 'MOST POPULAR',
    cta: 'Request a Demo',
    isCustom: true,
    features: [
      'Dedicated tenant with row-level security',
      'Unlimited employee self-registration',
      'Up to 10 Manager / CSI Head accounts',
      '5 AI analysis credits per month',
      'AI-powered CI recommendations (GPT-4)',
      'Two-level approval workflow',
      'Full project tracking & ROI validation',
      'Cross-site replication engine',
      'SSO (Azure Entra / Okta / Google Workspace)',
      'Automated user provisioning & directory sync',
      'Priority support (4hr response SLA)',
      'Quarterly business review',
      'Dedicated customer success manager',
      'Custom onboarding & training',
    ],
  },
  {
    name: 'Dedicated',
    icon: Crown,
    description: 'Full isolation for regulated industries — pharma, healthcare, aerospace, and defense.',
    highlight: false,
    cta: 'Request a Demo',
    isCustom: true,
    features: [
      'Everything in Enterprise SSO, plus:',
      'Dedicated database instance',
      'Custom data residency (region-specific)',
      'Up to 10 Manager / CSI Head accounts',
      '5 AI analysis credits per month',
      'Annual security audit report',
      'Custom SLA & uptime guarantees',
      '24/7 premium support',
      'White-label branding options',
    ],
  },
  {
    name: 'Custom',
    icon: Sparkles,
    description: 'Fully tailored solution with dedicated infrastructure, custom development, and bespoke integrations.',
    highlight: false,
    cta: 'Contact for Quote',
    isCustom: true,
    features: [
      'Everything in Dedicated, plus:',
      'Custom code & feature development',
      'On-premise or private cloud deployment',
      'Custom AI model training on your data',
      'Bespoke integrations (ERP, MES, QMS)',
      'White-label / full rebrand',
      'Dedicated engineering support team',
      'Executive QBR reviews',
      'Penetration testing & security audit',
      'Custom SLA & uptime guarantees',
      'Data residency controls',
      'Unlimited AI analysis credits',
    ],
  },
];

const faqs = [
  { q: 'What industries does CIFusion support?', a: 'CIFusion is built for any industry practicing continuous improvement — manufacturing, healthcare, pharma, automotive, aerospace, energy, financial services, construction, and more. The AI adapts its methodology recommendations based on your industry context, problem type, and organizational maturity.' },
  { q: 'Do employees need Lean Six Sigma training to use it?', a: "Not at all. Submitting an idea takes 2 minutes — describe the problem, select a category, done. The AI handles methodology selection, complexity estimation, and approach reasoning. Managers and CSI Heads get recommendations with full context to make informed approval decisions." },
  { q: 'What AI model powers the recommendations?', a: "CIFusion uses OpenAI's GPT-4 for deep analysis and GPT-4o-mini for quick recommendations. The AI is configured with domain expertise across Lean Six Sigma methodologies including DMAIC, Kaizen, PDCA, 5 Whys, FMEA, A3 Problem Solving, Value Stream Mapping, Poka-Yoke, SMED, and TPM." },
  { q: 'How is our data protected?', a: 'Every tenant has row-level security isolation — your data is completely invisible to other tenants. Data is never shared across organizations or used to train AI models. Enterprise plans include SSO integration. Dedicated plans offer a completely separate database instance with custom data residency.' },
  { q: 'Is there a free pilot program?', a: 'Yes! We offer a 30-day guided pilot for qualified organizations. This includes full platform setup for one department, AI configuration, seed data from your operations, and dedicated support from our CI technology team.' },
  { q: 'What does the $1,250 additional seat cover?', a: 'Employee accounts (idea submitters) are completely unlimited at no extra cost. The $1,250 applies only to Manager and CSI Head roles who need approval authority, project management access, advanced analytics, and AI analysis capabilities.' },
  { q: 'How long does implementation take?', a: 'Enterprise SSO: 3-4 weeks including identity provider integration. Dedicated: 4-6 weeks for database provisioning and security review. Custom: Scoped per project. We handle all the technical configuration.' },
  { q: 'Can we migrate from existing CI tools or spreadsheets?', a: "Absolutely. We provide data migration support to import your existing ideas, projects, and historical data from spreadsheets, SharePoint, or other CI platforms. Our team will map your existing workflows to CIFusion's approval structure." },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Header */}
      <section className="section-padding pt-32 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">Pricing</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-gray-900 dark:text-white">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            No hidden fees. Unlimited employee accounts at every tier. Scale your CI program without scaling your costs.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="section-padding pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <AnimatedSection key={tier.name} delay={idx * 0.1}>
              <div className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                tier.highlight
                  ? 'border-purple-500/30 bg-purple-500/[0.02] dark:bg-purple-500/[0.05] shadow-xl shadow-purple-500/5 scale-[1.03] z-10'
                  : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50'
              }`}>
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full gradient-bg text-white text-[11px] font-extrabold tracking-wider whitespace-nowrap">
                    {tier.badge}
                  </div>
                )}

                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tier.highlight ? 'gradient-bg' : 'bg-purple-500/10'}`}>
                    <tier.icon className={`w-5 h-5 ${tier.highlight ? 'text-white' : 'text-purple-500'}`} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">{tier.name}</h3>
                </div>

                <div className="mb-5">
                  <div>
                    <span className="font-heading text-2xl font-extrabold gradient-text">Custom Pricing</span>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Tailored to your requirements</p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed mb-6">{tier.description}</p>

                <Link
                  to="/demo"
                  className={`block text-center py-3.5 rounded-xl text-sm font-bold transition-all mb-6 ${
                    tier.highlight
                      ? 'gradient-bg text-white hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5'
                      : 'border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-200 hover:border-purple-500/30 hover:bg-purple-500/5'
                  }`}
                >
                  {tier.cta} →
                </Link>

                <div className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding py-24 bg-gray-50/50 dark:bg-gray-950/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-200/60 dark:border-gray-800 bg-white dark:bg-gray-900/50 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 flex items-center justify-between text-left">
                  <span className="font-heading text-sm font-bold text-gray-900 dark:text-white">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-purple-500 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            Not Sure Which Plan Is Right?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">Our team will help you find the perfect fit based on your organization's size, goals, and CI maturity.</p>
          <Link to="/demo" className="btn-primary inline-flex items-center gap-2">Talk to Sales <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}
