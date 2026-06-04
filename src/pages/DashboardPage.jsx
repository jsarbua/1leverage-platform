import MetricCard from '../components/MetricCard';
import AgentCard from '../components/AgentCard';
import { BRAIN_AGENT, CSUITE_AGENTS, META_AGENTS } from '../data/agents';

const METRICS = [
  {ico:"🧠",label:"Brain Status",val:"Online",trend:null},
  {ico:"🤖",label:"Total Agents",val:"61",trend:8},
  {ico:"⚡",label:"Automations/mo",val:"28.4K",trend:21},
  {ico:"💰",label:"Revenue Protected",val:"$1.8M",trend:14},
  {ico:"⏱️",label:"Hours Saved/mo",val:"1,240",trend:18},
  {ico:"🎯",label:"Candidates Screened",val:"847",trend:12},
  {ico:"💬",label:"Tickets Deflected",val:"3,621",trend:15},
  {ico:"📊",label:"Monthly Savings",val:"$42K",trend:24},
  {ico:"🛡️",label:"Churn Prevented",val:"$420K",trend:9},
  {ico:"📈",label:"Productivity Score",val:"94",trend:8}
];
const DEPTS = [
  {d:"Brain & C-Suite",n:8,c:"var(--brain)"},{d:"Meta-Intelligence",n:2,c:"var(--green)"},
  {d:"HR Operations",n:4,c:"var(--green)"},{d:"Productivity",n:4,c:"var(--amber)"},
  {d:"Finance",n:5,c:"var(--cyan)"},{d:"Customer Success",n:5,c:"var(--blue)"},
  {d:"Marketing",n:5,c:"var(--pink)"},{d:"Sales & Revenue",n:3,c:"var(--orange)"},
  {d:"Legal & Compliance",n:4,c:"var(--accent)"},{d:"Operations",n:4,c:"var(--lime)"},
  {d:"IT & Security",n:4,c:"var(--red)"},{d:"Strategy",n:4,c:"var(--amber)"}
];

export default function DashboardPage() {
  const featured = [BRAIN_AGENT, ...META_AGENTS, ...CSUITE_AGENTS].slice(0,6);
  return (
    <div>
      <div className="hero">
        <div style={{position:"relative",zIndex:1}}>
          <div className="hero-tag">1Leverage AI Platform · 61 Agents Active</div>
          <div className="hero-h">Your Autonomous Company<br/>Command Center</div>
          <div className="hero-s">One Brain. Seven C-Suite agents. Two meta-intelligence agents. 51 departmental agents. All coordinated. All learning. 24/7.</div>
          <div style={{marginTop:18,display:"flex",gap:9}}>
            <button className="btn btn-brain">🧠 Open Brain Console</button>
            <button className="btn btn-ghost">View All Agents →</button>
          </div>
        </div>
      </div>
      <div className="mgrid">{METRICS.map((m,i)=><MetricCard key={i} {...m}/>)}</div>
      <div style={{fontWeight:700,fontSize:13,marginBottom:12,color:"var(--text2)"}}>Agent Fleet by Department — 61 Total</div>
      <div className="g3" style={{marginBottom:24}}>
        {DEPTS.map((d,i)=>(
          <div key={i} className="card card-sm" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div>
              <div style={{fontSize:12.5,fontWeight:700}}>{d.d}</div>
              <div style={{fontSize:11,color:"var(--text3)",marginTop:2}}>{d.n} agents deployed</div>
            </div>
            <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:22,color:d.c}}>{d.n}</div>
          </div>
        ))}
      </div>
      <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:17,marginBottom:14}}>Top Performing Agents</div>
      <div className="agrid">{featured.map(a=><AgentCard key={a.id} agent={a}/>)}</div>
    </div>
  );
}
