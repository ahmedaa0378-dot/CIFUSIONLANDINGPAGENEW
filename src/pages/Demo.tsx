import { useState } from 'react';
import { Send, CheckCircle2, Building2, Users, Globe, ArrowRight, Loader2 } from 'lucide-react';

const SUPABASE_URL = 'https://dtguigufwohethsajctz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0Z3VpZ3Vmd29oZXRoc2FqY3R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjQ4MDcsImV4cCI6MjA4NjYwMDgwN30.YXeipJl28C4AEtm1FEk-QMp10WSk3MJe4veswgjqmNM';

const companySizes = ['1-50', '51-200', '201-500', '501-1000', '1000+'];
const industryOptions = ['Manufacturing', 'Healthcare', 'Pharma', 'Automotive', 'Aerospace', 'Food & Beverage', 'Energy', 'Other'];
const interests = [
  'AI-powered idea analysis', 'Lean Six Sigma templates', 'Multi-site replication',
  'ROI tracking & reporting', 'SSO & enterprise security', 'Custom deployment',
];

const inputClass = "w-full px-4 py-3 rounded-lg border text-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/25 focus:border-purple-500/30";

interface DemoForm {
  firstName: string; lastName: string; email: string; phone: string;
  company: string; jobTitle: string; companySize: string; industry: string;
  interests: string[]; message: string;
}

function buildDemoNotificationHTML(form: DemoForm) {
  const interestsList = form.interests.length > 0
    ? form.interests.map(i => `<span style="display:inline-block;background:#7C3AED15;color:#7C3AED;padding:3px 10px;border-radius:6px;font-size:12px;margin:2px 4px 2px 0;">${i}</span>`).join('')
    : '<span style="color:#9ca3af;">None selected</span>';

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
      <div style="background: linear-gradient(135deg, #7C3AED, #F59E0B); padding: 24px 32px;">
        <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">🎯 New Demo Request</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 13px;">cifusion.ai/demo</p>
      </div>
      <div style="padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827; font-weight: 600;">${form.firstName} ${form.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; vertical-align: top;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;"><a href="mailto:${form.email}" style="color: #7C3AED; text-decoration: none;">${form.email}</a></td>
          </tr>
          ${form.phone ? `<tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; vertical-align: top;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${form.phone}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; vertical-align: top;">Company</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827; font-weight: 600;">${form.company}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; vertical-align: top;">Job Title</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${form.jobTitle}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; vertical-align: top;">Company Size</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${form.companySize} employees</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; vertical-align: top;">Industry</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${form.industry}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; vertical-align: top;">Interests</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${interestsList}</td>
          </tr>
          ${form.message ? `<tr>
            <td style="padding: 10px 0; font-size: 13px; color: #6b7280; vertical-align: top;">Notes</td>
            <td style="padding: 10px 0; font-size: 14px; color: #111827; line-height: 1.6;">${form.message.replace(/\n/g, '<br>')}</td>
          </tr>` : ''}
        </table>
      </div>
      <div style="background: #f9fafb; padding: 16px 32px; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; font-size: 11px; color: #9ca3af;">Sent from CIFusion.ai Demo Request Form • ${new Date().toLocaleString()}</p>
      </div>
    </div>
  `;
}

function buildDemoAutoReplyHTML(firstName: string, company: string) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
      <div style="background: linear-gradient(135deg, #7C3AED, #F59E0B); padding: 24px 32px;">
        <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">Your Demo is on the Way!</h1>
      </div>
      <div style="padding: 32px;">
        <p style="font-size: 14px; color: #374151; line-height: 1.7; margin: 0 0 16px;">Hi ${firstName},</p>
        <p style="font-size: 14px; color: #374151; line-height: 1.7; margin: 0 0 16px;">Thank you for requesting a demo of CIFusion for <strong>${company || 'your organization'}</strong>. Our team is reviewing your request and will reach out within <strong>24 hours</strong> to schedule a personalized walkthrough.</p>
        <p style="font-size: 14px; color: #374151; line-height: 1.7; margin: 0 0 16px;">Here's what to expect in your demo:</p>
        <ul style="font-size: 14px; color: #374151; line-height: 2; margin: 0 0 16px; padding-left: 20px;">
          <li>Platform configured for your industry</li>
          <li>Live AI recommendation engine walkthrough</li>
          <li>Full idea-to-impact workflow demo</li>
          <li>ROI tracking and reporting capabilities</li>
          <li>Q&A with our CI technology team</li>
        </ul>
        <p style="font-size: 14px; color: #374151; line-height: 1.7; margin: 0 0 16px;">In the meantime, explore how CIFusion works at <a href="https://cifusion.ai/platform" style="color: #7C3AED; text-decoration: none; font-weight: 600;">cifusion.ai/platform</a>.</p>
        <p style="font-size: 14px; color: #374151; line-height: 1.7; margin: 0;">Looking forward to showing you what's possible,<br><strong>The CIFusion Team</strong></p>
      </div>
      <div style="background: #f9fafb; padding: 16px 32px; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; font-size: 11px; color: #9ca3af;">CIFusion.ai — AI-Powered Continuous Improvement Platform</p>
      </div>
    </div>
  `;
}

async function sendEmail(payload: { to: string; subject: string; html: string; from_alias?: string }) {
  const res = await fetch(`${SUPABASE_URL}/functions/v1/send-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to send email');
  return res.json();
}

export default function Demo() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState<DemoForm>({
    firstName: '', lastName: '', email: '', phone: '', company: '', jobTitle: '',
    companySize: '', industry: '', interests: [], message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      // 1. Send notification to demo@cifusion.ai
      await sendEmail({
        to: 'demo@cifusion.ai',
        subject: `[Demo Request] ${form.firstName} ${form.lastName} — ${form.company} (${form.industry})`,
        html: buildDemoNotificationHTML(form),
        from_alias: 'noreply',
      });

      // 2. Send auto-reply to the requester
      await sendEmail({
        to: form.email,
        subject: "Your CIFusion demo request is confirmed!",
        html: buildDemoAutoReplyHTML(form.firstName, form.company),
        from_alias: 'demo',
      });

      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly at demo@cifusion.ai');
    } finally {
      setSending(false);
    }
  };

  const toggleInterest = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center section-padding pt-28">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-heading text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Demo Request <span className="gradient-text">Received!</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            Thank you, {form.firstName}! Our team will reach out within 24 hours to schedule a
            personalized demo of CIFusion for {form.company || 'your organization'}. Check your inbox for a confirmation email.
          </p>
          <a href="/" className="btn-primary inline-flex items-center gap-2">Back to Home <ArrowRight className="w-4 h-4" /></a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="section-padding pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
          {/* Left */}
          <div className="lg:col-span-2 pt-4">
            <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">Request a Demo</p>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-5 leading-tight text-gray-900 dark:text-white">
              See CIFusion <span className="gradient-text">In Action</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
              Get a personalized walkthrough tailored to your industry, team size, and CI goals.
            </p>

            <div className="space-y-4">
              <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">What You'll See</h3>
              {[
                { icon: Building2, text: 'Platform configured for your industry' },
                { icon: Users, text: 'Full idea-to-impact workflow walkthrough' },
                { icon: Globe, text: 'AI analysis engine in real-time' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-purple-500" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 rounded-xl bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/10">
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                <span className="font-bold text-gray-900 dark:text-white">"CIFusion paid for itself in 6 weeks.</span>{' '}
                Our teams went from 12 ideas per quarter to over 200, with AI doing the methodology selection."
              </p>
              <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-3">— Operations Director, Automotive Tier 1</p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card-glass p-8 md:p-10">
              {error && (
                <div className="mb-5 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-600 dark:text-red-400">
                  {error}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-gray-500 dark:text-gray-400">First Name *</label>
                  <input required type="text" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className={inputClass} placeholder="Ahmed" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-gray-500 dark:text-gray-400">Last Name *</label>
                  <input required type="text" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className={inputClass} placeholder="Khan" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-gray-500 dark:text-gray-400">Work Email *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="ahmed@company.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-gray-500 dark:text-gray-400">Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-gray-500 dark:text-gray-400">Company *</label>
                  <input required type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} placeholder="Acme Manufacturing" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-gray-500 dark:text-gray-400">Job Title *</label>
                  <input required type="text" value={form.jobTitle} onChange={(e) => setForm({ ...form, jobTitle: e.target.value })} className={inputClass} placeholder="VP of Operations" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-gray-500 dark:text-gray-400">Company Size *</label>
                  <select required value={form.companySize} onChange={(e) => setForm({ ...form, companySize: e.target.value })} className={inputClass}>
                    <option value="">Select size</option>
                    {companySizes.map((s) => <option key={s} value={s}>{s} employees</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-gray-500 dark:text-gray-400">Industry *</label>
                  <select required value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} className={inputClass}>
                    <option value="">Select industry</option>
                    {industryOptions.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold mb-2.5 text-gray-500 dark:text-gray-400">What interests you most?</label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all border ${
                        form.interests.includes(interest)
                          ? 'bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400'
                          : 'border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-500 hover:border-purple-500/20'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-7">
                <label className="block text-xs font-semibold mb-1.5 text-gray-500 dark:text-gray-400">Anything else?</label>
                <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about your current CI process, pain points, or goals..."
                />
              </div>

              <button type="submit" disabled={sending} className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Request Your Demo</>}
              </button>
              <p className="text-[11px] text-gray-400 dark:text-gray-600 text-center mt-4">
                We'll respond within 24 hours. No spam — just a personalized demo.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
