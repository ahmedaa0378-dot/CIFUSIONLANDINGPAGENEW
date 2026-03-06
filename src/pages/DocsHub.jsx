import { useState } from "react";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { key: "hub", label: "Overview", icon: "📚", desc: "All guides" },
  { key: "admin", label: "Admin Guide", icon: "⚙️", desc: "Tenant setup & config" },
  { key: "csi", label: "CSI Head Guide", icon: "🎯", desc: "Approvals & projects" },
  { key: "manager", label: "Manager Guide", icon: "✅", desc: "Idea review process" },
  { key: "employee", label: "Employee Guide", icon: "💡", desc: "Submit & track ideas" },
  { key: "lss", label: "LSS Reference", icon: "📐", desc: "Methodologies deep-dive" },
  { key: "ai", label: "AI Features", icon: "🤖", desc: "How the AI works" },
];

function Badge({ children, variant = "purple" }) {
  const s = { purple: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/15 dark:text-purple-400 dark:border-purple-500/25", amber: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/15 dark:text-amber-400 dark:border-amber-500/25", cyan: "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-500/15 dark:text-cyan-400 dark:border-cyan-500/25", green: "bg-green-100 text-green-700 border-green-200 dark:bg-green-500/15 dark:text-green-400 dark:border-green-500/25", pink: "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-500/15 dark:text-pink-400 dark:border-pink-500/25" };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${s[variant]}`}>{children}</span>;
}

function Screenshot({ alt, caption }) {
  return (
    <div className="my-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-purple-50 to-amber-50 dark:from-purple-900/20 dark:to-amber-900/10 flex items-center justify-center">
        <div className="text-center"><div className="text-3xl mb-2">📸</div><p className="text-sm text-gray-400 dark:text-gray-500 font-medium">[Screenshot: {alt}]</p></div>
      </div>
      {caption && <div className="px-4 py-2.5 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/30"><p className="text-xs text-gray-500 dark:text-gray-400 italic">{caption}</p></div>}
    </div>
  );
}

function Step({ number, title, children }) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-amber-500 flex items-center justify-center text-white text-sm font-bold shadow-md">{number}</div>
      <div className="flex-1 pt-0.5"><h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">{title}</h4><div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">{children}</div></div>
    </div>
  );
}

function InfoCard({ icon, title, children, variant = "purple" }) {
  const bc = { purple: "border-purple-200 dark:border-purple-500/25 bg-purple-50/50 dark:bg-purple-500/5", amber: "border-amber-200 dark:border-amber-500/25 bg-amber-50/50 dark:bg-amber-500/5", cyan: "border-cyan-200 dark:border-cyan-500/25 bg-cyan-50/50 dark:bg-cyan-500/5", green: "border-green-200 dark:border-green-500/25 bg-green-50/50 dark:bg-green-500/5" };
  return <div className={`rounded-xl border ${bc[variant]} p-5 mb-4`}><div className="flex items-center gap-2 mb-3"><span className="text-lg">{icon}</span><h4 className="text-sm font-bold text-gray-900 dark:text-white">{title}</h4></div><div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{children}</div></div>;
}

function SH({ n, t }) { return <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 mt-10 first:mt-0"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-500 font-extrabold">{n}</span>{t}</h2>; }
function Hi({ children }) { return <span className="text-purple-600 dark:text-purple-400 font-medium">{children}</span>; }

function HubPage({ onNavigate }) {
  const guides = [
    { key: "admin", icon: "⚙️", title: "Admin Guide", desc: "Set up tenants, manage users, configure sites and departments, customize branding", color: "from-purple-600 to-purple-700", badge: "Admin" },
    { key: "csi", icon: "🎯", title: "CSI Head Guide", desc: "Final approvals, project creation, LSS methodology selection, replication tracking", color: "from-blue-600 to-blue-700", badge: "CSI Head" },
    { key: "manager", icon: "✅", title: "Manager Guide", desc: "Review submitted ideas, approve or request changes, monitor team progress", color: "from-green-600 to-green-700", badge: "Manager" },
    { key: "employee", icon: "💡", title: "Employee Guide", desc: "Submit improvement ideas, track status, respond to feedback, use LSS templates", color: "from-amber-500 to-amber-600", badge: "Employee" },
    { key: "lss", icon: "📐", title: "LSS Methodology Reference", desc: "Complete guide to DMAIC, Kaizen, PDCA, 5 Whys, FMEA, A3, and Value Stream Mapping", color: "from-pink-600 to-pink-700", badge: "Reference" },
    { key: "ai", icon: "🤖", title: "AI Features Guide", desc: "How GPT-4o analyzes ideas, recommends methodologies, and processes operational data", color: "from-cyan-600 to-cyan-700", badge: "AI" },
  ];
  return (
    <div>
      <div className="mb-10"><Badge variant="amber">Documentation</Badge><h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mt-3 tracking-tight">CIFusion.ai Documentation</h1><p className="text-gray-500 dark:text-gray-400 mt-3 text-base leading-relaxed max-w-2xl">Everything you need to set up, manage, and get the most out of CIFusion.ai. Choose a guide below based on your role, or explore the methodology reference.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {guides.map(g => (
          <div key={g.key} onClick={() => onNavigate(g.key)} className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500/40 transition-all cursor-pointer">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${g.color} flex items-center justify-center text-xl flex-shrink-0 shadow-md`}>{g.icon}</div>
              <div className="flex-1"><div className="flex items-center gap-2 mb-1"><h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{g.title}</h3><Badge>{g.badge}</Badge></div><p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{g.desc}</p></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-xl border border-amber-200 dark:border-amber-500/25 bg-amber-50 dark:bg-amber-500/5 p-6"><div className="flex items-start gap-3"><span className="text-xl">💡</span><div><h3 className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-1">New to Lean Six Sigma?</h3><p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Start with the <button onClick={() => onNavigate("lss")} className="text-purple-600 dark:text-purple-400 underline underline-offset-2 hover:text-purple-700 dark:hover:text-purple-300 font-medium">LSS Methodology Reference</button> — it explains each methodology with practical examples, even if you've never used LSS before.</p></div></div></div>
    </div>
  );
}

function AdminPage() {
  return (<div><Badge variant="purple">Admin Guide</Badge><h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-3 mb-2 tracking-tight">Tenant Admin Guide</h1><p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">Complete guide for tenant administrators — setting up your organization, managing users, configuring sites and departments, and customizing your CIFusion experience.</p>
    <SH n="01" t="Initial Setup" /><p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">After your organization is onboarded by Allegiant InfoTech, you'll receive admin access:</p>
    <Step number={1} title="Sign In via Microsoft SSO"><p>Go to <Hi>app.cifusion.ai</Hi> and click "Sign in with Microsoft." Your admin role is pre-configured.</p><Screenshot alt="Login page with Microsoft SSO button" caption="The login page with Microsoft SSO sign-in" /></Step>
    <Step number={2} title="Configure Sites"><p>Navigate to <Hi>Settings → Sites</Hi>. Add each physical location with name, code, city, and state.</p><Screenshot alt="Sites configuration tab" caption="Adding sites in tenant settings" /></Step>
    <Step number={3} title="Set Up Departments"><p>Go to <Hi>Settings → Departments</Hi>. Add manually or use industry-specific presets (Production, Quality, Maintenance, etc.).</p><Screenshot alt="Department presets modal" caption="Adding departments from industry presets" /></Step>
    <Step number={4} title="Invite Users"><p>Navigate to <Hi>Settings → Users → Invite User</Hi>. Enter email, assign role, site, and department.</p><Screenshot alt="User invite form" caption="Inviting a new user with role assignment" /></Step>
    <SH n="02" t="User Management" />
    <InfoCard icon="👥" title="Role Overview" variant="purple"><div className="grid grid-cols-2 gap-3 mt-2">{[{r:"Employee",d:"Submit ideas, view own progress"},{r:"Manager",d:"L1 approval, team oversight"},{r:"CSI Head",d:"Final approval, project creation"},{r:"Admin",d:"Full settings and user management"}].map(x=><div key={x.r} className="rounded-lg bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 p-3"><p className="text-xs font-bold text-gray-900 dark:text-white">{x.r}</p><p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{x.d}</p></div>)}</div></InfoCard>
    <InfoCard icon="🔄" title="Changing Roles" variant="amber"><p>Click any user's role badge in the Users table to change it. Upgrading to Manager/CSI Head/Admin counts against your seat limit.</p></InfoCard>
    <SH n="03" t="Manager Assignments" /><p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Configure which managers see which ideas in <Hi>Settings → Manager Assignments</Hi>.</p>
    <InfoCard icon="🗺️" title="How Routing Works"><p>When an employee submits an idea, CIFusion matches their department + site to a manager. No match routes to CSI Head directly. No action in 72hrs auto-escalates.</p></InfoCard>
    <SH n="04" t="Branding & Settings" />
    <InfoCard icon="🎨" title="Available Customizations" variant="cyan"><p>Company logo, idea/project number prefixes, and general tenant info. Additional branding on higher-tier plans.</p></InfoCard>
  </div>);
}

function CSIPage() {
  return (<div><Badge variant="cyan">CSI Head Guide</Badge><h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-3 mb-2 tracking-tight">CSI Head Guide</h1><p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">Final approval authority, project creation, LSS methodology selection, and replication tracking.</p>
    <SH n="01" t="Approval Queue" /><p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Ideas arrive after manager (L1) approval. You see ideas across all sites.</p>
    <InfoCard icon="✅" title="Available Actions" variant="green"><div className="space-y-2 mt-2"><p><span className="text-green-600 dark:text-green-400 font-semibold">Approve & Create Project</span> — Converts to tracked project. Set priority.</p><p><span className="text-red-600 dark:text-red-400 font-semibold">Reject</span> — Returns with feedback. Submitter notified.</p><p><span className="text-amber-600 dark:text-amber-400 font-semibold">Request More Info</span> — Asks submitter for clarification.</p><p><span className="text-gray-600 dark:text-gray-400 font-semibold">Park</span> — Holds for future consideration.</p></div></InfoCard>
    <Screenshot alt="CSI approval queue" caption="CSI approval queue showing pending ideas with action buttons" />
    <SH n="02" t="Project Management" />
    <InfoCard icon="📊" title="Project Stages" variant="purple"><div className="flex gap-2 mt-2 flex-wrap">{["Planning","In Progress","Pilot","Validated","Closed"].map((s,i)=><div key={s} className="flex items-center gap-1.5"><div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${i===0?"bg-purple-600 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"}`}>{i+1}</div><span className="text-xs text-gray-600 dark:text-gray-400">{s}</span>{i<4&&<span className="text-gray-300 dark:text-gray-600 mx-1">→</span>}</div>)}</div><p className="mt-3">Advance stages with the "Advance" button. Each transition is logged.</p></InfoCard>
    <SH n="03" t="LSS Methodology Templates" /><p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Each project has an auto-selected LSS template. Access via the <Hi>Methodology</Hi> tab. Templates include AI coaching prompts.</p><Screenshot alt="DMAIC template" caption="DMAIC template with AI coaching prompts" />
    <SH n="04" t="Replication Tracking" /><p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Track replicable improvements across sites in <Hi>Replication</Hi>. Assign owners and record savings per site.</p><Screenshot alt="Replication tracker" caption="Tracking replication across sites" />
  </div>);
}

function ManagerPage() {
  return (<div><Badge variant="green">Manager Guide</Badge><h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-3 mb-2 tracking-tight">Manager Guide</h1><p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">First level of idea review. Your approval sends ideas to the CSI Head for final evaluation.</p>
    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Approval Workflow</h2>
    <Step number={1} title="Review Incoming Ideas"><p>Navigate to <Hi>Approvals</Hi>. See pending ideas sorted by longest waiting with title, submitter, category, savings, and AI recommendation.</p></Step>
    <Step number={2} title="Expand Details"><p>Click "View details" for full problem statement and proposed solution.</p></Step>
    <Step number={3} title="Take Action"><p>Choose:</p><div className="mt-2 space-y-1.5"><p>• <span className="text-green-600 dark:text-green-400 font-medium">Approve</span> — Sends to CSI Head</p><p>• <span className="text-red-600 dark:text-red-400 font-medium">Reject</span> — Returns with reason</p><p>• <span className="text-amber-600 dark:text-amber-400 font-medium">Request More Info</span> — Asks for clarification</p></div></Step>
    <Screenshot alt="Manager approval queue" caption="Manager's view of pending ideas" />
    <InfoCard icon="📧" title="Email Notifications" variant="amber"><p>Submitter receives email on approval/rejection. CSI Heads notified on escalation.</p></InfoCard>
  </div>);
}

function EmployeePage() {
  return (<div><Badge variant="amber">Employee Guide</Badge><h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-3 mb-2 tracking-tight">Employee Guide</h1><p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">Every great improvement starts with a single idea. Here's how to submit, track, and follow up.</p>
    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Submitting an Idea</h2><p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Click <Hi>Submit Idea</Hi> in the sidebar. The 5-step wizard guides you:</p>
    <Step number={1} title="Define the Problem"><p>Title, problem description, category, site/department.</p></Step>
    <Step number={2} title="Propose a Solution"><p>Describe your proposed solution and desired future state.</p></Step>
    <Step number={3} title="Estimate the Impact"><p>Hours saved/week, annual cost savings, quality/safety improvements.</p></Step>
    <Step number={4} title="Add Attachments"><p>Upload supporting photos, documents, or data (optional).</p></Step>
    <Step number={5} title="AI Analysis & Submit"><p>AI recommends the best LSS approach. Review, confirm, and submit.</p><Screenshot alt="AI recommendation screen" caption="AI analysis showing methodology recommendation" /></Step>
    <SH n="02" t="Tracking Your Ideas" />
    <InfoCard icon="📋" title="My Ideas Page" variant="amber"><p>Navigate to <Hi>My Ideas</Hi> to see all submitted ideas with status. Filter and search.</p></InfoCard>
    <InfoCard icon="🔔" title="Stay Informed" variant="cyan"><p>Email notifications on approval, rejection, or info requests. Check the notification bell for in-app updates.</p></InfoCard>
  </div>);
}

function LSSPage() {
  const [ex, setEx] = useState(null);
  const methods = [
    { key:"dmaic",name:"DMAIC",badge:"Six Sigma",icon:"📊",desc:"Structured, data-driven methodology: Define, Measure, Analyze, Improve, Control.",bestFor:"Complex problems requiring statistical analysis",phases:[{n:"Define",d:"State problem, scope, goals, business impact."},{n:"Measure",d:"Collect baseline data. Identify CTQ metrics."},{n:"Analyze",d:"Root cause analysis with statistical tools."},{n:"Improve",d:"Develop, test, implement solutions."},{n:"Control",d:"Sustain with control plans, SOPs, monitoring."}],example:"Manufacturing plant at 5% defect rate. DMAIC finds oven temperature variation causes 72% of defects. Control system reduces defects to 0.8%."},
    { key:"kaizen",name:"Kaizen",badge:"Rapid Improvement",icon:"⚡",desc:"Continuous incremental improvement. Events are focused 3-5 day sprints.",bestFor:"Quick wins, team-driven improvements, CI culture building",phases:[{n:"Current State",d:"Document process, problems, waste. Gemba walk."},{n:"Root Cause",d:"5 Whys or fishbone diagrams."},{n:"Countermeasures",d:"Brainstorm and select impactful solutions."},{n:"Implementation",d:"Make changes during the event. Test and refine."},{n:"Results",d:"Measure impact. Present results. Assign follow-ups."}],example:"Warehouse Kaizen on picking process. Reorganizing items + visual guides reduces pick time from 4.2 to 2.1 minutes."},
    { key:"pdca",name:"PDCA",badge:"Deming Cycle",icon:"🔄",desc:"Plan-Do-Check-Act — iterative hypothesis testing cycle.",bestFor:"Iterative problem solving, testing before full implementation",phases:[{n:"Plan",d:"Hypothesis: 'If we change X, Y improves by Z.'"},{n:"Do",d:"Small-scale implementation. Document everything."},{n:"Check",d:"Compare results to prediction."},{n:"Act",d:"ADOPT, ADAPT, or ABANDON."}],example:"Hospital tests written vs verbal handoffs. Hybrid approach (written + 2-min verbal) reduces info gaps by 85%."},
    { key:"fivewhys",name:"5 Whys",badge:"Root Cause",icon:"❓",desc:"Drill to root cause by asking 'Why?' repeatedly.",bestFor:"Simple-moderate problems where root cause isn't obvious",phases:[{n:"State Problem",d:"Clear, specific, factual statement."},{n:"Ask Why (×5)",d:"Each answer → ask 'Why?' until actionable root cause."},{n:"Root Cause",d:"Something you can fix directly."},{n:"Countermeasure",d:"Fix root cause, not symptoms."}],example:"Machine stopped → fuse → lubrication → pump clogged → metal debris → no oil filter. Fix: Install filter + add to PM checklist."},
    { key:"fmea",name:"FMEA",badge:"Risk Prevention",icon:"🛡️",desc:"Systematic failure identification, risk assessment, and preventive actions.",bestFor:"Risk assessment, preventive quality, design review",phases:[{n:"Process Steps",d:"List every step exhaustively."},{n:"Failure Modes",d:"How could each step fail?"},{n:"Effects & Severity",d:"Impact rated 1-10."},{n:"Occurrence & Detection",d:"Frequency and detectability, each 1-10."},{n:"RPN & Actions",d:"S×O×D. Fix highest RPNs first."}],example:"Auto parts: thermocouple drift (RPN: 560) → hardness defects. Dual thermocouples + alerts reduce RPN to 48."},
    { key:"a3",name:"A3 Problem Solving",badge:"Toyota Method",icon:"📄",desc:"Entire problem-solving story on one A3 page. Forces clarity.",bestFor:"Medium-complexity problems, leadership communication",phases:[{n:"Background",d:"Why solve this? Context and urgency."},{n:"Current Condition",d:"Data and visuals of current state."},{n:"Goal",d:"Specific measurable target."},{n:"Root Cause",d:"5 Whys, fishbone, or data analysis."},{n:"Countermeasures",d:"Who, what, when."},{n:"Plan & Follow-Up",d:"Timeline and verification."}],example:"Pharma: 12% yield loss in tablet compression. Granule moisture variability → monitoring system improves yield to 97%."},
    { key:"vsm",name:"Value Stream Mapping",badge:"End-to-End",icon:"🗺️",desc:"Map entire value stream to identify waste and design leaner future state.",bestFor:"Systemic waste, lead time reduction, cross-department optimization",phases:[{n:"Define Scope",d:"Trigger to endpoint. One product family."},{n:"Current State",d:"Every step with times, inventory, operators."},{n:"Metrics",d:"Lead time vs processing. Value-added %."},{n:"Identify Wastes",d:"8 wastes: TIMWOODS."},{n:"Future State",d:"Create flow, implement pull."},{n:"Implementation",d:"3-5 kaizen bursts on 6-12 month roadmap."}],example:"Food manufacturer: 14-day lead time but only 6 hours processing. Flow cells + pull scheduling → 3-day lead time."},
  ];
  return (<div><Badge variant="pink">Reference</Badge><h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-3 mb-2 tracking-tight">Lean Six Sigma Methodology Reference</h1><p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">Seven core methodologies. The AI recommends the best fit — understanding them helps you get the most from the platform.</p>
    <div className="space-y-3">{methods.map(m=>(
      <div key={m.key} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 overflow-hidden">
        <div onClick={()=>setEx(ex===m.key?null:m.key)} className="p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors">
          <div className="flex items-start justify-between"><div className="flex items-center gap-3"><span className="text-2xl">{m.icon}</span><div><div className="flex items-center gap-2"><h3 className="text-base font-bold text-gray-900 dark:text-white">{m.name}</h3><Badge variant="purple">{m.badge}</Badge></div><p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{m.desc}</p></div></div><span className={`text-gray-400 transition-transform text-sm ${ex===m.key?"rotate-180":""}`}>▼</span></div>
        </div>
        {ex===m.key&&<div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-700">
          <div className="mb-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 mt-4"><p className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-1">Best For</p><p className="text-sm text-gray-600 dark:text-gray-400">{m.bestFor}</p></div>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Phases</h4>
          <div className="space-y-3 mb-5">{m.phases.map((p,i)=><div key={i} className="flex gap-3"><div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-amber-500 flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0 mt-0.5">{i+1}</div><div><p className="text-sm font-semibold text-gray-900 dark:text-white">{p.n}</p><p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{p.d}</p></div></div>)}</div>
          <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20"><p className="text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">💡 Real-World Example</p><p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{m.example}</p></div>
        </div>}
      </div>
    ))}</div>
  </div>);
}

function AIPage() {
  return (<div><Badge variant="cyan">AI Features</Badge><h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-3 mb-2 tracking-tight">AI Features Guide</h1><p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">GPT-4o as an embedded LSS consultant — analyzing ideas, recommending methodologies, coaching through templates, and finding opportunities in your data.</p>
    <SH n="01" t="AI Idea Recommendation" />
    <InfoCard icon="🧠" title="How It Works" variant="purple"><p>When you submit an idea, GPT-4o evaluates:</p><div className="mt-2 space-y-1"><p>• Problem complexity and scope</p><p>• Data availability and measurement capability</p><p>• Urgency and business impact</p><p>• Team size and skill requirements</p></div><p className="mt-2">Returns optimal methodology with reasoning, complexity, duration, and alternatives.</p></InfoCard>
    <Screenshot alt="AI recommendation card" caption="AI recommendation with approach, reasoning, complexity, and confidence" />
    <SH n="02" t="AI Data Analysis" />
    <Step number={1} title="Upload Your Data"><p>Navigate to <Hi>AI Analysis</Hi>. Upload CSV or Excel operational data.</p></Step>
    <Step number={2} title="Select Columns & Goal"><p>Choose columns and goal: Reduce Defects, Improve OEE, Reduce Costs, Improve Delivery, or General.</p></Step>
    <Step number={3} title="Review AI Findings"><p>Ranked opportunities with recommended methodologies and next steps.</p><Screenshot alt="AI data analysis results" caption="AI-generated improvement opportunities from uploaded data" /></Step>
    <SH n="03" t="AI Coaching in Templates" /><p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">LSS template fields include AI coaching prompts specific to your problem — transforming forms into interactive coaching.</p>
    <InfoCard icon="🔒" title="Data Privacy & Security" variant="green"><p>Processed via OpenAI API with enterprise security. No data retained for training. All calls server-side via Supabase Edge Functions.</p></InfoCard>
  </div>);
}

const PAGES = { hub: HubPage, admin: AdminPage, csi: CSIPage, manager: ManagerPage, employee: EmployeePage, lss: LSSPage, ai: AIPage };

export default function DocsHub() {
  const [currentPage, setCurrentPage] = useState("hub");
  const nav = (key) => { setCurrentPage(key); window.scrollTo(0, 0); };
  const Page = PAGES[currentPage];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto flex">
        <div className="hidden lg:block w-64 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 min-h-screen sticky top-14 max-h-[calc(100vh-56px)] overflow-y-auto">
          <div className="py-6 px-4">
            <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4 px-3">Navigation</p>
            <div className="space-y-1">{NAV_ITEMS.map(item=>(
              <button key={item.key} onClick={()=>nav(item.key)} className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all ${currentPage===item.key?"bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/25":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent"}`}>
                <div className="flex items-center gap-2.5"><span className="text-base">{item.icon}</span><div><p className="font-semibold text-[13px]">{item.label}</p><p className={`text-[10px] mt-0.5 ${currentPage===item.key?"text-purple-500 dark:text-purple-400/60":"text-gray-400 dark:text-gray-500"}`}>{item.desc}</p></div></div>
              </button>
            ))}</div>
          </div>
        </div>
        <div className="lg:hidden w-full border-b border-gray-200 dark:border-gray-800 overflow-x-auto bg-white dark:bg-gray-900">
          <div className="flex gap-1 px-4 py-2 min-w-max">{NAV_ITEMS.map(item=>(
            <button key={item.key} onClick={()=>nav(item.key)} className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${currentPage===item.key?"bg-purple-100 dark:bg-purple-500/15 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/25":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 border border-transparent"}`}>{item.icon} {item.label}</button>
          ))}</div>
        </div>
        <div className="flex-1 min-w-0 px-6 lg:px-12 py-10 max-w-4xl">
          <Page onNavigate={nav} />
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"><div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500"><p>CIFusion.ai — Allegiant InfoTech</p><p>Need help? Contact support@cifusion.ai</p></div></div>
        </div>
      </div>
    </div>
  );
}