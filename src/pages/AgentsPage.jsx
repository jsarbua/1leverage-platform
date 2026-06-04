import { useState } from 'react';
import { AGENTS } from '../data/agents';
import AgentCard from '../components/AgentCard';
const DEPT_LABELS = {
  brain:"🧠 Brain Tier",csuite:"👑 C-Suite Agents",meta:"⚗️ Meta-Intelligence",
  hr:"👥 HR Operations",productivity:"⚡ Productivity",finance:"💹 Finance",
  customersuccess:"🤝 Customer Success",marketing:"📣 Marketing",
  sales:"💰 Sales",legal:"⚖️ Legal",operations:"🏢 Operations",
  it:"🖥️ IT and Security",strategy:"🎯 Strategy"
};
const FILTERS = [
  {id:"all",label:"All (61)"},{id:"brain",label:"🧠 Brain"},{id:"csuite",label:"👑 C-Suite"},
  {id:"meta",label:"⚗️ Meta"},{id:"hr",label:"👥 HR"},{id:"productivity",label:"⚡ Productivity"},
  {id:"finance",label:"💹 Finance"},{id:"customersuccess",label:"🤝 Cust. Success"},
  {id:"marketing",label:"📣 Marketing"},{id:"sales",label:"💰 Sales"},
  {id:"legal",label:"⚖️ Legal"},{id:"operations",label:"🏢 Operations"},
  {id:"it",label:"🖥️ IT"},{id:"strategy",label:"🎯 Strategy"}
];
export default function AgentsPage() {
  const [filter,setFilter]=useState("all");
  return (<div>
    <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:20,marginBottom:5}}>Agent Fleet</div>
    <div style={{fontSize:13,color:"var(--text2)",marginBottom:20}}>61 agents across Brain, C-Suite, Meta-Intelligence, and 10 departments</div>
    <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:20}}>
      {FILTERS.map(f=>(<button key={f.id} onClick={()=>setFilter(f.id)} className="btn btn-ghost btn-sm" style={filter===f.id?{background:"rgba(108,99,255,.12)",color:"var(--accent)",borderColor:"rgba(108,99,255,.25)"}:{}}>{f.label}</button>))}
    </div>
    {filter==="all"?Object.entries(AGENTS).map(([dept,agents])=>(
      <div key={dept}>
        <div className="dept-label">{DEPT_LABELS[dept]} · {agents.length} agents</div>
        <div className="agrid" style={{marginBottom:20}}>{agents.map(a=><AgentCard key={a.id} agent={a}/>)}</div>
      </div>
    )):(
      <div className="agrid">{(AGENTS[filter]||[]).map(a=><AgentCard key={a.id} agent={a}/>)}</div>
    )}
  </div>);
}
