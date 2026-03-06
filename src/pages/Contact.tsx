import { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Phone, ArrowRight, Loader2 } from 'lucide-react';

const SUPABASE_URL = 'https://dtguigufwohethsajctz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0Z3VpZ3Vmd29oZXRoc2FqY3R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjQ4MDcsImV4cCI6MjA4NjYwMDgwN30.YXeipJl28C4AEtm1FEk-QMp10WSk3MJe4veswgjqmNM';

const inputClass = "w-full px-4 py-3 rounded-lg border text-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/25 focus:border-purple-500/30";

function buildContactEmailHTML(form: { name: string; email: string; subject: string; message: string }) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
      <div style="background: linear-gradient(135deg, #7C3AED, #F59E0B); padding: 24px 32px;">
        <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">New Contact Form Submission</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 13px;">cifusion.ai/contact</p>
      </div>
      <div style="padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827; font-weight: 600;">${form.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; vertical-align: top;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;"><a href="mailto:${form.email}" style="color: #7C3AED; text-decoration: none;">${form.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; vertical-align: top;">Subject</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111827;">${form.subject}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-size: 13px; color: #6b7280; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; font-size: 14px; color: #111827; line-height: 1.6;">${form.message.replace(/\n/g, '<br>')}</td>
          </tr>
        </table>
      </div>
      <div style="background: #f9fafb; padding: 16px 32px; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; font-size: 11px; color: #9ca3af;">Sent from CIFusion.ai Contact Form • ${new Date().toLocaleString()}</p>
      </div>
    </div>
  `;
}

function buildAutoReplyHTML(name: string) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
      <div style="background: linear-gradient(135deg, #7C3AED, #F59E0B); padding: 24px 32px;">
        <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">Thanks for reaching out!</h1>
      </div>
      <div style="padding: 32px;">
        <p style="font-size: 14px; color: #374151; line-height: 1.7; margin: 0 0 16px;">Hi ${name},</p>
        <p style="font-size: 14px; color: #374151; line-height: 1.7; margin: 0 0 16px;">Thank you for contacting CIFusion. We've received your message and our team will get back to you within 24 hours.</p>
        <p style="font-size: 14px; color: #374151; line-height: 1.7; margin: 0 0 16px;">In the meantime, feel free to explore our platform at <a href="https://cifusion.ai/platform" style="color: #7C3AED; text-decoration: none; font-weight: 600;">cifusion.ai/platform</a>.</p>
        <p style="font-size: 14px; color: #374151; line-height: 1.7; margin: 0;">Best regards,<br><strong>The CIFusion Team</strong></p>
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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      // 1. Send notification to hello@cifusion.ai
      await sendEmail({
        to: 'hello@cifusion.ai',
        subject: `[Contact] ${form.subject} — from ${form.name}`,
        html: buildContactEmailHTML(form),
        from_alias: 'noreply',
      });

      // 2. Send auto-reply to the user
      await sendEmail({
        to: form.email,
        subject: "We've received your message — CIFusion",
        html: buildAutoReplyHTML(form.name),
        from_alias: 'hello',
      });

      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly at hello@cifusion.ai');
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center section-padding pt-28">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-heading text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Message <span className="gradient-text">Sent!</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">We'll get back to you within 24 hours. Check your inbox for a confirmation email.</p>
          <a href="/" className="btn-primary inline-flex items-center gap-2">Back to Home <ArrowRight className="w-4 h-4" /></a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="section-padding pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
          {/* Left */}
          <div className="lg:col-span-2 pt-4">
            <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">Contact Us</p>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-5 leading-tight text-gray-900 dark:text-white">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
              Whether you have questions about the platform, need pricing details, or want to explore a partnership — we're here to help.
            </p>
            <div className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'hello@cifusion.ai' },
                { icon: Phone, label: 'Phone', value: '+1 (650) 450-8149' },
                { icon: MapPin, label: 'Office', value: 'Allegiant InfoTech, Global Operations' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm text-gray-900 dark:text-gray-200 mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
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
                  <label className="block text-xs font-semibold mb-1.5 text-gray-500 dark:text-gray-400">Full Name *</label>
                  <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-gray-500 dark:text-gray-400">Email *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="you@company.com" />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-xs font-semibold mb-1.5 text-gray-500 dark:text-gray-400">Subject *</label>
                <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass}>
                  <option value="">Select a topic</option>
                  <option>Product inquiry</option>
                  <option>Pricing question</option>
                  <option>Partnership opportunity</option>
                  <option>Technical support</option>
                  <option>Media / Press</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-7">
                <label className="block text-xs font-semibold mb-1.5 text-gray-500 dark:text-gray-400">Message *</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`} placeholder="How can we help?"
                />
              </div>
              <button type="submit" disabled={sending} className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
