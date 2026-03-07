import { useState } from 'react';
import { Link } from 'react-router-dom';

// ============================================
// CIFusion.ai Blog — Landing Site
// Clean light/dark design matching existing pages
// Place at: src/pages/Blog.tsx
// Add route: <Route path="/blog" element={<Blog />} />
// ============================================

const ARTICLES = [
  {
    id: 'ai-data-analysis',
    title: 'AI Data Analysis: Stop Guessing, Start Knowing',
    subtitle: 'How to turn your operational data into actionable improvement opportunities in minutes — not months',
    category: 'AI & Technology',
    categoryColor: 'purple',
    readTime: '6 min read',
    date: 'March 2026',
    featured: true,
    excerpt: 'Every operations leader is hearing "use AI" but has no idea where to start. Here\'s the practical answer: upload your data, let AI find the opportunities.',
    content: `
      <p>Every operations leader in 2026 is hearing the same thing: <strong>"You need to use AI."</strong> From boardroom presentations to industry conferences, artificial intelligence is the topic everyone's talking about — but very few are actually doing anything meaningful with it.</p>
      <p>The problem isn't a lack of interest. It's a lack of clarity. Where do you start? What data do you need? Do you need a data science team? The answer is simpler than most people think.</p>

      <h2>The Data You Already Have Is Enough</h2>
      <p>Here's what most manufacturers don't realize: <strong>the data sitting in your Excel spreadsheets and CSV exports is a goldmine of improvement opportunities.</strong> You don't need a data lake, a machine learning team, or a six-month AI strategy. You need a way to ask the right questions of the data you already collect.</p>
      <p>Think about what's already in your systems:</p>
      <ul>
        <li>Defect and rejection logs from your quality department</li>
        <li>Production output records with cycle times and throughput</li>
        <li>Equipment downtime logs from your maintenance team</li>
        <li>Customer complaint records</li>
        <li>Inspection and audit results</li>
      </ul>
      <p>Each of these datasets contains patterns that point to specific, actionable improvements. The challenge has always been finding those patterns — until now.</p>

      <h2>How AI Data Analysis Actually Works</h2>
      <p>Modern AI (specifically large language models like GPT-4o) can analyze operational data in a way that was previously only possible with experienced Six Sigma Black Belts. Here's the practical workflow:</p>
      <ol>
        <li><strong>Upload your file</strong> — CSV or Excel, straight from your existing systems. No data transformation needed.</li>
        <li><strong>Select relevant columns</strong> — Tell the AI which columns matter (defect type, machine ID, shift, date, etc.).</li>
        <li><strong>Choose your goal</strong> — What are you trying to improve? Reduce defects? Improve OEE? Cut costs? Reduce lead time?</li>
        <li><strong>Get actionable results</strong> — The AI identifies specific opportunities, ranked by impact, with recommended Lean Six Sigma methodologies for each.</li>
      </ol>
      <p>The entire process takes about 2 minutes. Not 2 weeks. Not 2 months. <strong>Two minutes.</strong></p>

      <h2>What the AI Actually Finds</h2>
      <p>Let's use a real example. A manufacturer uploads 6 months of defect data from their injection molding line. The AI identifies:</p>
      <ul>
        <li><strong>Pareto pattern:</strong> 3 defect types account for 78% of all rejections — flash, short shots, and sink marks</li>
        <li><strong>Shift correlation:</strong> Night shift has 2.3x the defect rate of day shift, suggesting training or supervision gaps</li>
        <li><strong>Machine variation:</strong> Machine #7 produces 40% more defects than the line average, pointing to a maintenance issue</li>
        <li><strong>Seasonal trend:</strong> Defect rates spike every Monday, suggesting a weekend cooldown/startup issue</li>
      </ul>
      <p>For each finding, the AI recommends a specific action: "Apply DMAIC to investigate Machine #7 variation" or "Conduct a Kaizen event on night shift changeover procedures."</p>
      <p>A Six Sigma Black Belt would eventually find the same patterns — but it would take days of analysis, not minutes.</p>

      <h2>Why This Matters Now</h2>
      <p>The companies that will win in the next 5 years aren't the ones with the most data — they're the ones that <strong>act on their data fastest</strong>. AI doesn't replace your team's expertise; it accelerates it. Your quality engineer still makes the decisions. Your CI lead still prioritizes the projects. The AI just eliminates the weeks of analysis between "we have a problem" and "we know exactly what to fix."</p>
      <p>If you're sitting on operational data and wondering where to start with AI — start here. Upload a file. See what it finds. The results will speak for themselves.</p>

      <h2>Getting Started</h2>
      <p>CIFusion.ai includes AI Data Analysis as a core feature. Upload your CSV or Excel file, select your goal, and get ranked improvement opportunities in minutes. No data science team required.</p>
    `,
  },
  {
    id: 'dmaic-vs-kaizen',
    title: 'DMAIC vs Kaizen: How AI Picks the Right Methodology',
    subtitle: 'The age-old Lean Six Sigma debate, solved by artificial intelligence',
    category: 'Methodology',
    categoryColor: 'amber',
    readTime: '5 min read',
    date: 'March 2026',
    featured: true,
    excerpt: 'Should you run a DMAIC project or a Kaizen event? The answer depends on complexity, data availability, and urgency. Here\'s how AI makes the call.',
    content: `
      <p>If you've spent any time in the continuous improvement world, you've faced this question: <strong>"Should this be a DMAIC project or a Kaizen event?"</strong></p>
      <p>Get it right, and you solve the problem efficiently. Get it wrong, and you either over-engineer a simple fix (spending 12 weeks on DMAIC when a 3-day Kaizen would do) or under-resource a complex problem (running a Kaizen when you really need statistical analysis).</p>

      <h2>The Traditional Decision</h2>
      <p>Experienced CI leaders develop intuition over years of practice. They consider:</p>
      <ul>
        <li><strong>Problem complexity:</strong> Is the root cause obvious or hidden?</li>
        <li><strong>Data availability:</strong> Do we have data, or are we starting from scratch?</li>
        <li><strong>Scope:</strong> One process step or an end-to-end value stream?</li>
        <li><strong>Urgency:</strong> Do we need results this week or this quarter?</li>
        <li><strong>Team capability:</strong> Does the team have statistical analysis skills?</li>
      </ul>
      <p>The problem is that this decision-making is locked in the heads of a few experienced practitioners. When a frontline employee submits an idea, they don't know whether it's a Kaizen or a DMAIC — and they shouldn't have to.</p>

      <h2>How AI Makes the Decision</h2>
      <p>When an improvement idea is submitted in CIFusion.ai, GPT-4o evaluates it against the same criteria an experienced Black Belt would consider — but consistently and instantly.</p>
      <p>The AI analyzes the problem statement, proposed solution, category, estimated impact, and available context. It then maps these factors against the strengths of each methodology:</p>
      <ul>
        <li><strong>High complexity + data available → DMAIC</strong> — The problem needs statistical analysis and a structured approach</li>
        <li><strong>Simple problem + clear solution → Kaizen</strong> — Quick team-driven implementation</li>
        <li><strong>Unknown solution + need to test → PDCA</strong> — Iterative hypothesis testing</li>
        <li><strong>Risk-focused + prevention → FMEA</strong> — Failure mode analysis before problems occur</li>
        <li><strong>Root cause unclear + moderate complexity → 5 Whys or A3</strong> — Structured investigation</li>
      </ul>

      <h2>A Real Example</h2>
      <p>An operator submits: "Line 3 has been producing 5% more rejects this month compared to last month. The defects are mostly dimensional — parts are coming out slightly oversized."</p>
      <p>The AI recommends <strong>DMAIC</strong> with this reasoning: "The problem involves measurable variation (dimensional defects) with a quantifiable baseline (5% increase). Root cause is not immediately obvious and could involve multiple factors (tooling wear, material variation, temperature). DMAIC's Measure and Analyze phases will identify the true driver through data analysis."</p>
      <p>Confidence: 87%. Alternative: A3 Problem Solving. Estimated duration: 4-6 weeks.</p>
      <p>The CSI Head reviews, agrees, approves the idea, and a DMAIC project is automatically created with the template ready to go.</p>

      <h2>The Human Still Decides</h2>
      <p>The AI recommends — it doesn't dictate. The CSI Head or CI leader always has final authority. They can override the recommendation based on factors the AI might not know: team availability, upcoming audit, political considerations, or simply a different read on the situation.</p>
      <p>Think of it as having a virtual Black Belt consultant who reviews every idea and offers a recommendation. Your team makes the call.</p>

      <h2>Why This Changes Everything</h2>
      <p>Most organizations don't have enough Black Belts to review every improvement idea. Ideas sit in queues for weeks, or the wrong methodology is chosen because the reviewer was rushed. AI analysis ensures that every single idea — whether it's the first or the five-hundredth — gets the same quality of evaluation.</p>
    `,
  },
  {
    id: 'hidden-cost-excel',
    title: 'The Hidden Cost of Managing CI with Excel',
    subtitle: 'Spreadsheets aren\'t free when you count what they\'re costing you in lost improvements',
    category: 'Industry Insights',
    categoryColor: 'pink',
    readTime: '4 min read',
    date: 'March 2026',
    featured: false,
    excerpt: 'Excel feels free. But when 60-70% of improvement ideas disappear into spreadsheets never to be seen again, the cost is enormous.',
    content: `
      <p>When you ask most manufacturing companies how they manage continuous improvement, the answer is usually one of three things: Excel, SharePoint, or "we don't really have a formal system." And on the surface, that seems fine. Excel is free, everyone knows how to use it, and it gets the job done — right?</p>
      <p>Not really. Here's what Excel is actually costing you.</p>

      <h2>The Idea Graveyard</h2>
      <p>Research across hundreds of manufacturing companies shows that <strong>60-70% of improvement ideas submitted via email or spreadsheet are never acted on</strong>. They disappear. Not because they're bad ideas — but because there's no workflow to move them forward.</p>
      <p>An operator emails their supervisor about a recurring quality issue. The supervisor reads it, intends to follow up, but gets pulled into a production crisis. The email slides down the inbox. Two weeks later, it's forgotten. The defect keeps happening. The operator stops submitting ideas because "nothing ever changes."</p>
      <p>That one lost idea might have saved $50,000 per year in scrap. Multiply that across 100 employees, and you're looking at millions in unrealized savings sitting in dead email threads and abandoned spreadsheets.</p>

      <h2>No Accountability, No Tracking</h2>
      <p>Excel has no concept of workflow. There's no "pending approval" status. No automatic escalation after 72 hours. No notification when a decision is made. The spreadsheet just... sits there. Someone has to manually check it, manually update it, and manually notify people. In practice, this means:</p>
      <ul>
        <li>Ideas wait weeks or months for review</li>
        <li>Submitters don't know the status of their idea</li>
        <li>Approvers forget to review</li>
        <li>No audit trail of who decided what and when</li>
        <li>ROI is never tracked or validated</li>
      </ul>

      <h2>The Replication Problem</h2>
      <p>When a team at Plant A figures out how to reduce changeover time by 40%, how does Plant B find out? In an Excel world, they don't. Improvements stay siloed because there's no mechanism to flag successful changes, track which sites could benefit, and manage the rollout.</p>
      <p>Companies with 3+ sites lose an average of 2-3x the value of each improvement because they fail to replicate it across locations.</p>

      <h2>What "Free" Actually Costs</h2>
      <p>A conservative estimate for a mid-market manufacturer (500 employees, 3 sites):</p>
      <ul>
        <li><strong>Lost ideas:</strong> 60% of 200 ideas/year × $15,000 average value = $1.8M/year in unrealized savings</li>
        <li><strong>Manager time:</strong> 5 hours/week manually managing CI spreadsheets × $75/hour = $19,500/year</li>
        <li><strong>Missed replication:</strong> 10 successful improvements × 2 additional sites × $25,000 average = $500K/year</li>
        <li><strong>Employee disengagement:</strong> When ideas go nowhere, people stop trying. The cost of disengagement is incalculable.</li>
      </ul>
      <p>Total: over $2.3 million per year. For a tool that costs $499-$3,499/month. The ROI math isn't even close.</p>

      <h2>The Alternative</h2>
      <p>A purpose-built CI platform gives you what Excel can't: structured workflow, automatic notifications, AI-powered analysis, accountability tracking, ROI validation, and cross-site replication. Your ideas go from submission to action — not from inbox to oblivion.</p>
    `,
  },
  {
    id: 'fishbone-ai-generator',
    title: 'Fishbone Diagrams: Now With AI-Generated Root Causes',
    subtitle: 'How artificial intelligence is transforming the classic Ishikawa diagram',
    category: 'Tools & Templates',
    categoryColor: 'cyan',
    readTime: '5 min read',
    date: 'March 2026',
    featured: false,
    excerpt: 'The fishbone diagram hasn\'t changed since 1968. Until now. AI can generate comprehensive root cause hypotheses across all 6M categories in seconds.',
    content: `
      <p>The fishbone diagram (also known as the Ishikawa or cause-and-effect diagram) has been a cornerstone of root cause analysis since Kaoru Ishikawa introduced it in the 1960s. It's elegant, intuitive, and universally understood. But it has one significant weakness: <strong>it's only as good as the team brainstorming the causes.</strong></p>

      <h2>The Brainstorming Bottleneck</h2>
      <p>In a traditional fishbone session, a team gathers around a whiteboard and brainstorms potential causes across the 6M categories: Man, Machine, Material, Method, Measurement, and Environment (sometimes called Mother Nature). The facilitator writes down suggestions, the team discusses, and eventually you have a diagram full of hypotheses to investigate.</p>
      <p>The problem? This process is limited by:</p>
      <ul>
        <li><strong>Who's in the room</strong> — If the maintenance expert is absent, equipment-related causes get missed</li>
        <li><strong>Group dynamics</strong> — Dominant voices can steer the discussion while quieter team members hold back</li>
        <li><strong>Experience bias</strong> — Teams tend to identify causes they've seen before, missing novel failure modes</li>
        <li><strong>Time pressure</strong> — A 60-minute session barely scratches the surface of complex problems</li>
      </ul>

      <h2>AI as Your Virtual Black Belt</h2>
      <p>Now imagine starting your fishbone session with a comprehensive set of AI-generated cause hypotheses. You describe the problem — "High defect rate on injection molding Line 3" — and within seconds, the AI generates 3-4 specific potential causes for each of the 6M categories.</p>
      <p>Not generic placeholders like "operator error" — specific, contextual causes like "Inconsistent barrel temperature profile during startup" or "Mold cavity venting insufficient for current material viscosity."</p>
      <p>The AI draws on knowledge spanning manufacturing, quality engineering, and Lean Six Sigma principles to generate causes that an experienced Black Belt might identify — plus some that even experts might miss because they're outside their specific domain expertise.</p>

      <h2>How It Works in Practice</h2>
      <ol>
        <li><strong>Type your problem</strong> — Describe the effect you're investigating</li>
        <li><strong>Click AI Generate</strong> — GPT-4o analyzes the problem and generates causes across all 6M categories</li>
        <li><strong>Review and refine</strong> — Your team reviews the suggestions, removes irrelevant ones, adds their own knowledge</li>
        <li><strong>Investigate</strong> — Use the refined fishbone to prioritize which causes to verify with data</li>
      </ol>
      <p>The AI doesn't replace your team's expertise — it jumpstarts the conversation and ensures blind spots are covered. Think of it as having a consultant who's seen 10,000 similar problems prepare the initial analysis before your team refines it.</p>

      <h2>From Diagram to Action</h2>
      <p>The real power comes when the fishbone connects to your improvement workflow. In CIFusion.ai, the fishbone is part of the project's LSS methodology template. Identified root causes feed directly into countermeasure planning, with the AI suggesting appropriate tools for verification (e.g., "Use a Gauge R&R study to verify measurement system capability" or "Run a designed experiment to test the temperature-pressure interaction").</p>
    `,
  },
  {
    id: 'five-whys-guide',
    title: '5 Whys Root Cause Analysis: The Complete Guide',
    subtitle: 'Simple enough for the shop floor, powerful enough for complex problems — with real-world examples',
    category: 'Methodology',
    categoryColor: 'amber',
    readTime: '6 min read',
    date: 'March 2026',
    featured: false,
    excerpt: 'The 5 Whys technique is deceptively simple. Ask "Why?" five times and you reach the root cause. Here\'s how to do it right — with examples.',
    content: `
      <p>The 5 Whys technique is one of the most powerful and accessible tools in the Lean Six Sigma toolkit. Developed by Sakichi Toyoda and used within Toyota Motor Corporation, it's deceptively simple: <strong>ask "Why?" repeatedly until you reach the root cause of a problem.</strong></p>

      <h2>The Classic Example</h2>
      <p><strong>Problem:</strong> The machine stopped.</p>
      <ol>
        <li><strong>Why?</strong> The fuse blew due to an overload.</li>
        <li><strong>Why?</strong> The bearing wasn't sufficiently lubricated.</li>
        <li><strong>Why?</strong> The lubrication pump wasn't circulating enough oil.</li>
        <li><strong>Why?</strong> The pump intake was clogged with metal debris.</li>
        <li><strong>Why?</strong> There was no strainer (filter) on the pump intake.</li>
      </ol>
      <p><strong>Root cause:</strong> No filter on the oil pump intake.</p>
      <p><strong>Countermeasure:</strong> Install a strainer on the pump intake. Add to the preventive maintenance checklist.</p>
      <p>Without the 5 Whys, the maintenance team would have replaced the fuse and moved on. The machine would have stopped again next week. With 5 Whys, they fixed the actual root cause.</p>

      <h2>Rules for Effective 5 Whys</h2>
      <h3>1. Start With a Clear Problem Statement</h3>
      <p>Bad: "Quality is bad." Good: "Dimensional defects on Part #4521 increased from 2% to 7% in the last two weeks." Be specific about what, where, when, and how much.</p>

      <h3>2. Stay on One Causal Chain</h3>
      <p>At each "Why," there might be multiple possible answers. Pick the most likely one and follow it. If it dead-ends, come back and try a different branch. Don't try to follow all branches simultaneously — that's what a fishbone diagram is for.</p>

      <h3>3. Stop When You Reach Something You Can Fix</h3>
      <p>The goal isn't literally 5 levels — it might be 3, it might be 7. Stop when you reach a cause that: (a) you can directly control, (b) fixing it would prevent the problem from recurring, and (c) isn't so broad that it's meaningless ("management doesn't care" is not a root cause).</p>

      <h3>4. Verify With Data</h3>
      <p>The 5 Whys generates a hypothesis, not a proven root cause. Verify each "Why" with evidence before implementing countermeasures. "The pump was clogged" — did you actually inspect it? "The bearing wasn't lubricated" — did you check the oil level?</p>

      <h3>5. Implement and Monitor</h3>
      <p>A root cause without a countermeasure is just an interesting finding. Implement the fix, monitor to confirm the problem doesn't recur, and standardize the solution.</p>

      <h2>When to Use 5 Whys vs Other Tools</h2>
      <ul>
        <li><strong>Use 5 Whys</strong> when: the problem is relatively straightforward, the team has process knowledge, and you need a quick root cause investigation</li>
        <li><strong>Use Fishbone + 5 Whys</strong> when: multiple potential cause categories exist — use fishbone to brainstorm, then 5 Whys on the most likely causes</li>
        <li><strong>Use DMAIC</strong> when: the problem is complex, data-driven analysis is needed, and statistical tools are required</li>
      </ul>

      <h2>AI-Enhanced 5 Whys</h2>
      <p>One limitation of traditional 5 Whys is that the quality depends on who's asking the questions. AI coaching can improve this by generating contextually relevant "Why?" questions based on the previous answer, drawing on a broader knowledge base than any single team member. Each "Why?" builds on your answer and probes deeper, mimicking how an experienced sensei would coach the investigation.</p>
    `,
  },
  {
    id: 'ci-culture',
    title: 'How to Build a CI Culture That Actually Sticks',
    subtitle: 'Most continuous improvement programs fail within 2 years. Here\'s why — and how to be different.',
    category: 'Leadership',
    categoryColor: 'green',
    readTime: '5 min read',
    date: 'March 2026',
    featured: false,
    excerpt: 'The difference between companies where CI thrives and where it dies isn\'t methodology — it\'s culture. Here\'s how to build one that lasts.',
    content: `
      <p>Here's an uncomfortable truth about continuous improvement: <strong>most CI programs fail.</strong> Not because the methodologies don't work — DMAIC, Kaizen, and Lean are proven. They fail because the culture doesn't support them.</p>
      <p>A study by McKinsey found that 70% of transformation programs fail to achieve their goals. The primary reason? Lack of employee engagement and resistance to change. Sound familiar?</p>

      <h2>Why CI Programs Die</h2>
      <h3>1. Ideas Go Into a Black Hole</h3>
      <p>An employee submits an improvement idea. Nothing happens for two weeks. Then a month. They submit another one — same result. After the third time, they stop trying. Word spreads: "Don't bother, nothing happens." Your CI program is dead.</p>

      <h3>2. Only Experts Can Participate</h3>
      <p>If submitting an idea requires filling out a complex form with LSS terminology, only trained practitioners will do it. That excludes 90% of your workforce — the people closest to the problems.</p>

      <h3>3. No Visible Impact</h3>
      <p>When improvements happen but nobody knows about it, there's no momentum. Success stories need to be shared widely to inspire more participation.</p>

      <h3>4. Top-Down Only</h3>
      <p>When only management decides what to improve, frontline workers feel like CI is something done to them, not by them. True CI culture is bottom-up.</p>

      <h2>What Works: The 4 Pillars</h2>

      <h3>Pillar 1: Make It Easy</h3>
      <p>Submitting an idea should take less than 3 minutes. No LSS jargon required. A guided wizard that asks simple questions: "What's the problem? What do you think could fix it? How much time could it save?" Let the AI handle the methodology recommendation — the employee just describes the problem in their own words.</p>

      <h3>Pillar 2: Respond Fast</h3>
      <p>Every idea should get a response within 72 hours. Not a solution — just an acknowledgment. "We received your idea, it's being reviewed by [Manager Name]." Automated notifications make this effortless. If no one acts within 72 hours, auto-escalate.</p>

      <h3>Pillar 3: Show the Impact</h3>
      <p>Track and display results visibly. When an improvement saves $50,000/year, everyone should know about it. When an operator's idea becomes a company-wide improvement replicated across 5 sites, celebrate that publicly. Dashboards, reports, and recognition programs turn individual improvements into organizational momentum.</p>

      <h3>Pillar 4: Coach, Don't Gatekeep</h3>
      <p>Instead of rejecting ideas that aren't "good enough," coach the submitter. "Your idea has potential. Can you tell us more about how often this problem occurs?" AI coaching embedded in the submission process helps ideas get better before they're even reviewed. Every interaction is a learning opportunity.</p>

      <h2>Technology's Role</h2>
      <p>The right technology doesn't create culture — but the wrong technology (or no technology) can certainly kill it. A CI platform should make good behavior easy and bad behavior hard. Easy to submit ideas, hard to ignore them. Easy to track progress, hard to lose accountability. Easy to replicate successes, hard to keep improvements siloed.</p>
    `,
  },
  {
    id: 'mid-market-enterprise-tools',
    title: 'Why Mid-Market Companies Deserve Enterprise CI Tools',
    subtitle: 'The $50K-$200K CI platforms weren\'t built for you. But that doesn\'t mean you should settle for Excel.',
    category: 'Industry Insights',
    categoryColor: 'pink',
    readTime: '4 min read',
    date: 'March 2026',
    featured: false,
    excerpt: 'Enterprise CI software costs $50K-$200K/year and takes months to implement. Mid-market companies deserve the same capabilities at a realistic price.',
    content: `
      <p>If you run operations at a company with 100-2,000 employees, you've probably looked at continuous improvement software and hit the same wall: <strong>enterprise tools are built for Fortune 500 budgets.</strong></p>
      <p>KaiNexus, iObeya, Planview — these platforms charge $50,000 to $200,000 per year, require months of implementation, and assume you have a dedicated CI department to manage them. For a mid-market manufacturer doing $50M-$500M in revenue, that's a hard sell to the CFO.</p>

      <h2>The Current Options</h2>
      <ul>
        <li><strong>Enterprise platforms ($50K-$200K/year):</strong> Powerful but overpriced and over-engineered for your needs. 6-month implementation. Requires dedicated admin.</li>
        <li><strong>Excel and email (free):</strong> Familiar but ineffective. Ideas get lost, no workflow, no AI, no accountability, no replication.</li>
        <li><strong>Generic project management tools ($10-50/user/month):</strong> Not built for CI. No LSS templates, no AI analysis, no two-level approval workflow, no improvement-specific metrics.</li>
      </ul>
      <p>There's a massive gap in the middle. And that's exactly where mid-market companies live.</p>

      <h2>What Mid-Market Actually Needs</h2>
      <p>Based on conversations with hundreds of operations leaders, mid-market companies need:</p>
      <ul>
        <li><strong>Quick setup</strong> — Days, not months. SSO login, configure sites and departments, invite users, go.</li>
        <li><strong>Guided experience</strong> — Employees who've never heard of Six Sigma should be able to submit ideas. AI handles the methodology.</li>
        <li><strong>Structured workflow</strong> — From idea to approval to project to validated savings. With accountability at every step.</li>
        <li><strong>Multi-site capability</strong> — Most mid-market manufacturers have 2-5 plants. Improvements that work at one should replicate to others.</li>
        <li><strong>ROI tracking</strong> — The CFO wants to see projected vs actual savings. Make it automatic.</li>
        <li><strong>Affordable pricing</strong> — Per-site monthly subscriptions, not enterprise annual contracts. Start at $499/month, not $50K/year.</li>
      </ul>

      <h2>The AI Advantage</h2>
      <p>Here's something that was impossible even 2 years ago: AI-powered methodology recommendation. Enterprise companies have Black Belt consultants who review every idea and recommend the right approach. Mid-market companies typically don't have that depth of LSS expertise.</p>
      <p>With AI, every improvement idea gets the same quality of analysis that a Black Belt would provide. The playing field is leveled. A 200-person manufacturer with CIFusion.ai gets better AI analysis than a Fortune 500 company using a legacy CI platform built in 2013.</p>

      <h2>The Bottom Line</h2>
      <p>Mid-market companies generate the majority of employment and economic output globally. They deserve tools that match their ambition, not their budget constraints. The technology exists to give every company — regardless of size — enterprise-grade continuous improvement capabilities powered by AI.</p>
    `,
  },
  {
    id: 'idea-to-impact',
    title: 'From Idea to Impact: The 2-Level Approval That Works',
    subtitle: 'How a structured review process turns scattered suggestions into tracked improvement projects',
    category: 'Best Practices',
    categoryColor: 'green',
    readTime: '5 min read',
    date: 'March 2026',
    featured: false,
    excerpt: 'Single-level approvals miss too much. No approval at all creates chaos. The 2-level workflow hits the sweet spot.',
    content: `
      <p>Every organization that tries to capture improvement ideas faces the same dilemma: <strong>how do you review and prioritize them without creating a bureaucratic bottleneck?</strong></p>
      <p>Too little structure, and you get chaos — hundreds of unreviewed ideas, no prioritization, no accountability. Too much structure, and you kill participation — nobody wants to fill out a 20-field form and wait 3 months for a committee to review it.</p>

      <h2>Why Single-Level Approval Fails</h2>
      <p>Many organizations use a simple model: employee submits idea → one person reviews → approved or rejected. The problem is that this single reviewer either:</p>
      <ul>
        <li><strong>Doesn't have enough context</strong> — A plant manager reviewing an idea about a specific machine in a specific department may not understand the technical nuance</li>
        <li><strong>Becomes a bottleneck</strong> — One person reviewing all ideas for the entire organization gets overwhelmed</li>
        <li><strong>Lacks strategic perspective</strong> — A department manager might approve an idea that conflicts with a cross-site initiative</li>
      </ul>

      <h2>The 2-Level Model</h2>
      <p>The solution is a two-level review that balances local knowledge with strategic oversight:</p>

      <h3>Level 1: Manager Review</h3>
      <p>The submitter's direct manager (or department manager) performs the first review. They know the local context — the people, the process, the constraints. Their job is to answer: "Does this idea make sense for our area? Is the problem real? Is the proposed solution feasible?"</p>
      <p>Options: Approve (escalate to L2), Reject (with feedback), or Request More Info.</p>

      <h3>Level 2: CSI Head Review</h3>
      <p>The Continuous Improvement leader reviews manager-approved ideas with a strategic lens. They see ideas across all sites and departments. Their job is to answer: "Does this align with our CI priorities? What's the right methodology? What priority should it get? Could this be replicated at other sites?"</p>
      <p>Options: Approve & Create Project (with priority and methodology), Reject, Park (hold for later), or Request More Info.</p>

      <h2>Why This Works</h2>
      <ul>
        <li><strong>Speed:</strong> Managers review quickly because they know the context. Ideas don't wait weeks.</li>
        <li><strong>Quality:</strong> Two perspectives catch issues that one might miss.</li>
        <li><strong>Scalability:</strong> Manager review is distributed (each manager handles their area). Only approved ideas reach the CSI Head.</li>
        <li><strong>Accountability:</strong> Both levels have clear ownership and time expectations.</li>
        <li><strong>Auto-escalation:</strong> If no action is taken within 72 hours, the idea automatically escalates. Nothing gets stuck.</li>
      </ul>

      <h2>What Happens After Approval</h2>
      <p>When the CSI Head approves an idea, the magic happens: a project is automatically created with the right LSS methodology template, assigned priority, and tracked timeline. No manual setup. The idea transforms from a suggestion into a structured improvement project with tasks, milestones, and measurable outcomes.</p>
      <p>The submitter gets notified that their idea is now an active project. That feedback loop — from submission to project creation — is what keeps employees engaged and submitting ideas.</p>

      <h2>Email Notifications at Every Step</h2>
      <p>No one should have to check a dashboard to find out what happened to their idea. Automatic email notifications at every stage ensure that submitters, reviewers, and stakeholders are always informed:</p>
      <ul>
        <li>Idea submitted → Manager notified</li>
        <li>Manager approves → Submitter notified + CSI Head notified</li>
        <li>CSI approves → Submitter notified, project created</li>
        <li>Rejected → Submitter notified with feedback</li>
      </ul>
      <p>Transparency builds trust. Trust drives participation. Participation drives results.</p>
    `,
  },
];

// ============================================
// Category colors
// ============================================
const CATEGORY_STYLES = {
  purple: 'bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
  pink: 'bg-pink-100 text-pink-700 dark:bg-pink-500/15 dark:text-pink-400',
  cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-400',
  green: 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400',
};

// ============================================
// Blog Hub Page
// ============================================
function BlogHub({ onReadArticle }) {
  const featured = ARTICLES.filter(a => a.featured);
  const rest = ARTICLES.filter(a => !a.featured);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400 border border-purple-200 dark:border-purple-500/25 mb-4">
          Blog & Insights
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Continuous Improvement,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-500">Reimagined with AI</span>
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Practical insights on Lean Six Sigma, AI in operations, and building improvement cultures that deliver real results.
        </p>
      </div>

      {/* Featured Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {featured.map(article => (
          <div
            key={article.id}
            onClick={() => onReadArticle(article.id)}
            className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 overflow-hidden hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-500/40 transition-all cursor-pointer"
          >
            {/* Image placeholder */}
            <div className="h-48 bg-gradient-to-br from-purple-100 to-amber-50 dark:from-purple-900/30 dark:to-amber-900/15 flex items-center justify-center relative">
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${CATEGORY_STYLES[article.categoryColor]}`}>
                  {article.category}
                </span>
              </div>
              <span className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity">📝</span>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400">
                  ★ Featured
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mb-3">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2 leading-snug">
                {article.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">{article.excerpt}</p>
              <div className="mt-4 text-sm font-semibold text-purple-600 dark:text-purple-400 group-hover:underline">
                Read article →
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rest of articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map(article => (
          <div
            key={article.id}
            onClick={() => onReadArticle(article.id)}
            className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500/40 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${CATEGORY_STYLES[article.categoryColor]}`}>
                {article.category}
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">{article.readTime}</span>
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2 leading-snug">
              {article.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 mb-3">{article.excerpt}</p>
            <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 group-hover:underline">
              Read article →
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-2xl bg-gradient-to-r from-purple-600 to-amber-500 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Ready to See AI-Powered CI in Action?</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          CIFusion.ai captures frontline ideas, analyzes them with GPT-4o, and tracks projects to proven ROI. Request a demo and bring your own improvement challenges.
        </p>
        <Link
          to="/demo"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-purple-700 font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all text-sm"
        >
          Request a Demo →
        </Link>
      </div>
    </div>
  );
}

// ============================================
// Article Detail Page
// ============================================
function ArticlePage({ article, onBack }) {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Back */}
      <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 mb-8 font-medium">
        ← Back to Blog
      </button>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${CATEGORY_STYLES[article.categoryColor]}`}>
            {article.category}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">{article.date}</span>
          <span className="text-xs text-gray-400 dark:text-gray-500">·</span>
          <span className="text-xs text-gray-400 dark:text-gray-500">{article.readTime}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-3">
          {article.title}
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
          {article.subtitle}
        </p>
      </div>

      {/* Featured image placeholder */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-purple-50 to-amber-50 dark:from-purple-900/20 dark:to-amber-900/10 h-56 flex items-center justify-center mb-10">
        <div className="text-center">
          <span className="text-4xl opacity-30">📝</span>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">[Featured image placeholder]</p>
        </div>
      </div>

      {/* Article body */}
      <div
        className="prose prose-slate dark:prose-invert max-w-none
          prose-headings:font-extrabold prose-headings:tracking-tight
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-gray-900 dark:prose-h2:text-white
          prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-gray-800 dark:prose-h3:text-gray-200
          prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed prose-p:mb-4
          prose-li:text-gray-600 dark:prose-li:text-gray-400 prose-li:leading-relaxed
          prose-strong:text-gray-900 dark:prose-strong:text-white
          prose-ul:my-4 prose-ol:my-4
          prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* CTA at bottom */}
      <div className="mt-12 rounded-xl border border-purple-200 dark:border-purple-500/25 bg-purple-50 dark:bg-purple-500/5 p-6 md:p-8">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">See CIFusion.ai in Action</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          Ready to transform how your organization captures and acts on improvement ideas? Request a live demo using your own real-world challenges.
        </p>
        <Link
          to="/demo"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-amber-500 text-white font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all text-sm"
        >
          Request a Demo →
        </Link>
      </div>

      {/* Related articles */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5">More Articles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ARTICLES.filter(a => a.id !== article.id).slice(0, 2).map(a => (
            <div
              key={a.id}
              onClick={() => { onBack(); setTimeout(() => document.querySelector(`[data-article="${a.id}"]`)?.scrollIntoView(), 100); }}
              className="group rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-4 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all cursor-pointer"
            >
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold mb-2 ${CATEGORY_STYLES[a.categoryColor]}`}>
                {a.category}
              </span>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                {a.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// Main Blog Component
// ============================================
export default function Blog() {
  const [activeArticle, setActiveArticle] = useState(null);

  const article = activeArticle ? ARTICLES.find(a => a.id === activeArticle) : null;

  const handleRead = (id) => {
    setActiveArticle(id);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveArticle(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <div className="section-padding py-16 md:py-24">
        {article ? (
          <ArticlePage article={article} onBack={handleBack} />
        ) : (
          <BlogHub onReadArticle={handleRead} />
        )}
      </div>
    </div>
  );
}
