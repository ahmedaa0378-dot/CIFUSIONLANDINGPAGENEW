import { Link } from 'react-router-dom';
import { Factory, Heart, Pill, Car, Plane, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

const industries = [
  {
    icon: Factory, name: 'Manufacturing', tagline: 'From shop floor to documented savings',
    desc: 'Empower production teams to identify waste, reduce defects, and optimize processes. CIFusion\'s AI maps every idea to the right LSS methodology.',
    metrics: ['40% reduction in defect rates', '3x increase in ideas submitted', '$1.2M avg annual savings'],
    useCases: ['Defect reduction (DMAIC)', 'Line efficiency (Kaizen)', 'Equipment failure analysis (FMEA)', 'Root cause for downtime (5 Whys)'],
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Heart, name: 'Healthcare', tagline: 'Better processes, better patient outcomes',
    desc: 'Structured improvement for hospitals, clinics, and health systems. Reduce wait times, eliminate errors, and standardize care pathways.',
    metrics: ['25% reduction in patient wait times', '60% faster root cause resolution', '92% staff adoption rate'],
    useCases: ['Patient flow optimization (A3)', 'Medication error reduction (FMEA)', 'Discharge process improvement (Kaizen)', 'Readmission root cause (5 Whys)'],
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    icon: Pill, name: 'Pharma', tagline: 'Compliance-ready continuous improvement',
    desc: 'Drive process improvements while maintaining GxP compliance. Full documentation trail, approval workflows, and validated templates.',
    metrics: ['Audit-ready documentation', '50% faster CAPA resolution', 'Full traceability on every change'],
    useCases: ['CAPA management (DMAIC)', 'Batch failure investigation (5 Whys)', 'Process validation improvements (FMEA)', 'Yield optimization (Kaizen)'],
    gradient: 'from-orange-500 to-pink-500',
  },
  {
    icon: Car, name: 'Automotive', tagline: 'IATF 16949 aligned improvement',
    desc: 'Built for automotive OEMs and tier suppliers. Integrates with your quality management approach and supports IATF requirements.',
    metrics: ['PPM reduction tracked per line', 'IATF audit evidence built-in', '12x ROI in pilot programs'],
    useCases: ['PPM reduction programs (DMAIC)', 'New model launch issues (A3)', 'Supplier quality (FMEA)', 'Gemba improvements (Kaizen)'],
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    icon: Plane, name: 'Aerospace', tagline: 'Zero-defect culture, AI-enabled',
    desc: 'Support AS9100 quality requirements with structured improvement tracking. The rigor aerospace demands with the simplicity teams need.',
    metrics: ['100% traceability on improvements', 'AS9100-aligned workflows', 'Cross-facility replication'],
    useCases: ['Non-conformance reduction (DMAIC)', 'FOD prevention (FMEA)', 'Assembly efficiency (Kaizen)', 'Supply chain improvements (A3)'],
    gradient: 'from-indigo-500 to-blue-500',
  },
];

export default function Solutions() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-[25%] right-[10%] w-[500px] h-[500px] bg-orange-500/5 dark:bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">Solutions</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-gray-900 dark:text-white">
            Purpose-Built for <span className="gradient-text">Your Industry</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            CIFusion adapts to the specific challenges, compliance requirements, and improvement culture of your sector.
          </p>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="section-padding pb-24">
        <div className="max-w-6xl mx-auto space-y-12">
          {industries.map((ind) => (
            <div key={ind.name} id={ind.name.toLowerCase()} className="card-glass p-8 md:p-10 scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${ind.gradient} flex items-center justify-center`}>
                      <ind.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-white">{ind.name}</h2>
                      <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">{ind.tagline}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">{ind.desc}</p>
                  <h4 className="text-xs font-mono font-medium text-gray-400 dark:text-gray-600 uppercase tracking-wider mb-3">Key Use Cases</h4>
                  <ul className="space-y-2 mb-6">
                    {ind.useCases.map((uc) => (
                      <li key={uc} className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        {uc}
                      </li>
                    ))}
                  </ul>
                  <Link to="/demo" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-orange-500 transition-colors">
                    See {ind.name} Demo <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-medium text-gray-400 dark:text-gray-600 uppercase tracking-wider mb-4">Impact Metrics</h4>
                  <div className="space-y-3">
                    {ind.metrics.map((metric) => (
                      <div key={metric} className="flex items-center gap-3 p-4 rounded-xl bg-purple-500/[0.03] dark:bg-purple-500/[0.06] border border-purple-500/10">
                        <TrendingUp className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-200">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 bg-gray-50/50 dark:bg-gray-950/30 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            Don't See Your Industry?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">CIFusion adapts to any sector where continuous improvement matters.</p>
          <Link to="/demo" className="btn-primary inline-flex items-center gap-2">Let's Talk <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}
