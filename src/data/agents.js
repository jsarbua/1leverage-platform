export const AGENTS = {
  brain: [
    { id:"brain-core", emoji:"🧠", name:"Brain-Autonomous-Core", tier:"brain", role:"Master Orchestrator", color:"#a855f7", desc:"Central intelligence coordinating all agents.", tools:["Claude API"], stats:{success:"99.8%"} }
  ],
  csuite: [
    { id:"ceo", emoji:"👑", name:"CEO Agent", tier:"csuite", role:"Strategic Brain", color:"#f59e0b", desc:"Sets strategy and company priorities.", tools:["Brain Core"], stats:{success:"97%"} },
    { id:"coo", emoji:"⚙️", name:"COO Agent", tier:"csuite", role:"Execution Brain", color:"#3b82f6", desc:"Monitors operations and execution.", tools:["Workflow Engine"], stats:{success:"96%"} },
    { id:"cfo", emoji:"💹", name:"CFO Agent", tier:"csuite", role:"Financial Brain", color:"#22d3a0", desc:"Tracks cash flow, burn rate, and runway.", tools:["Finance Agents"], stats:{success:"99%"} }
  ],
  hr: [
    { id:"recruiting", emoji:"🎯", name:"Recruiting Agent", tier:"dept", role:"Talent Acquisition", color:"#6c63ff", desc:"Screens resumes and ranks candidates.", tools:["ATS"], stats:{success:"94%"} },
    { id:"support", emoji:"💬", name:"Employee Support Bot", tier:"dept", role:"HR Self-Service", color:"#3b82f6", desc:"Answers PTO, benefits, payroll, and policy questions.", tools:["HR KB"], stats:{success:"73%"} }
  ],
  finance: [
    { id:"bookkeeping", emoji:"📒", name:"Bookkeeping Agent", tier:"dept", role:"Financial Recording", color:"#22d3a0", desc:"Categorizes transactions and reconciles accounts.", tools:["QuickBooks"], stats:{success:"99%"} }
  ],
  sales: [
    { id:"sales-agent", emoji:"💰", name:"Sales Agent", tier:"dept", role:"Pipeline Automation", color:"#f97316", desc:"Automates lead qualification and follow-ups.", tools:["CRM"], stats:{success:"82%"} }
  ],
  it: [
    { id:"helpdesk", emoji:"🖥️", name:"IT Helpdesk Agent", tier:"dept", role:"Tech Support", color:"#3b82f6", desc:"Resolves tier-1 tech issues and escalates complex problems.", tools:["Jira"], stats:{success:"78%"} }
  ],
  meta: [],
  productivity: [],
  customersuccess: [],
  marketing: [],
  legal: [],
  operations: [],
  strategy: []
};

export const ALL_AGENTS_FLAT = Object.values(AGENTS).flat();
export const DEPT_AGENTS = ALL_AGENTS_FLAT.filter(a => a.tier === "dept");
export const CSUITE_AGENTS = AGENTS.csuite;
export const BRAIN_AGENT = AGENTS.brain[0];
export const META_AGENTS = AGENTS.meta;
