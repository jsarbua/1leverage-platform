import { useState } from 'react';
import { askClaude } from '../lib/claude';
import { META_AGENTS, ALL_AGENTS_FLAT } from '../data/agents';
import { SELECTOR_PROMPT } from '../lib/prompts';

export default function MetaPage() {
  const [tab, setTab] = useState("optimizer");
  const [selectorInput, setSelectorInput] = useState("");
  const [selectorResult, setSelectorResult] = useState(null);
  const [selectorLoading, setSelectorLoading] = useState(false);
  const [optimizerRunning, setOptimizerRunning] = useState(false);
  const [results, setResults] = useState([
    {agent:"Recruiting Agent",before:"87%",after:"94%",change:"+7%",status:"deployed",detail:"Rewrote scoring rubric. Added resume gap detection."},
    {agent:"Support Ticket Agent",before:"71%",after:"84%",change:"+13%",status:"deployed",detail:"Context window optimization. Added escalation rules."},
    {agent:"Churn Prevention",before:"68%",after:"76%",change:"+8%",status:"deployed",detail:"Retuned health score thresholds. Usage drop detection."},
    {agent:"Email Marketing",before:"89%",after:"91%",change:"+2%",status:"monitoring",detail:"Tone and segmentation refinement. In A/B window."},
    {agent:"Cash Flow Agent",before:"94%",after:"96%",change:"+2%",status:"deployed",detail:"Improved forecast accuracy with data normalization."}
  ]);

  const runOptimizer = () => {
    setOptimizerRunning(true);
    setTimeout(()=>{
      setResults(prev=>[{agent:"Content Creation Agent",before:"88%",after:"93%",change:"+5%",status:"deployed",detail:"Restructured output format. Added brand voice consistency rules."},...prev]);
      setOptimizerRunning(false);
    },2400);
  };

  const runSelector = async () => {
    if(!selectorInput.trim()||selectorLoading) return;
    setSelectorLoading(true); setSelectorResult(null);
    try {
      const agentList = ALL_AGENTS_FLAT.map(a=>a.name).join(", ");
      const reply = await askClaude([{role:"user",content:"Find the best agent for this requirement: "+selectorInput}], SELECTOR_PROMPT(agentList));
      setSelectorResult(reply);
    } catch(e) { setSelectorResult("Error connecting to AI. Please try again."); }
    setSelectorLoading(false);
  };

  const chips = ["Automate my invoice follow-up","Monitor competitor pricing weekly","Handle new customer product setup","Reduce engineering meeting overhead","Manage GDPR data deletion requests"];
  const dims = [
    ["Task Type Match","25%","Does the agent primary function match the required task?"],
    ["Industry Fit","10%","Is this agent tuned for the specific industry context?"],
    ["Complexity Handling","15%","Can it handle the required complexity level?"],
    ["Volume Capacity","10%","Can it handle expected task volume without degradation?"],
    ["Speed Requirements","8%","Does it meet the latency requirements for this use case?"],
    ["Cost Efficiency","7%","Good cost-per-task for the expected ROI?"],
    ["Tool Compatibility","8%","Integrates natively with existing tech stack?"],
    ["Compliance Alignment","8%","Meets regulatory and data privacy requirements?"],
    ["Autonomy Level","5%","Right level of AI autonomy vs human oversight?"],
    ["Human-in-Loop","4%","Matches workflow oversight preferences?"],
    ["ROI Profile","5%","Good time-to-value and return on investment?"],
    ["Scalability","5%","Can it scale as the business grows without replacement?"]
  ];

  return (
    <div>
      <div style={{background:"linear-gradient(135deg,rgba(34,211,160,.07),rgba(108,99,255,.05))",border:"1px solid rgba(34,211,160,.2)",borderRadius:"var(--rl)",padding:24,marginBottom:24}}>
        <div style={{fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:1.5,color:"var(--green)",background:"rgba(34,211,160,.1)",padding:"3px 9px",borderRadius:20,display:"inline-block",marginBottom:10}}>Meta-Intelligence Layer · 2 Agents</div>
        <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:22,marginBottom:9}}>The Agents That Make All Other Agents Better</div>
        <div style={{fontSize:13,color:"var(--text2)",lineHeight:1.6}}>The Agent Optimizer ensures every agent is always the best possible version of itself. The Agent Selector determines which agent is the perfect fit for any requirement.</div>
      </div>
      <div className="tabs">
        <button className={`tab ${tab==="optimizer"?"on":""}`} onClick={()=>setTab("optimizer")}>🔬 Agent Optimizer</button>
        <button className={`tab ${tab==="selector"?"on":""}`} onClick={()=>setTab("selector")}>🧭 Agent Selector</button>
      </div>
      {tab==="optimizer"&&(
        <div className="card">
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
            <span style={{fontSize:28}}>🔬</span>
            <div>
              <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:17}}>Agent Optimizer</div>
              <div style={{fontSize:10.5,fontWeight:700,textTransform:"uppercase",color:"var(--green)"}}>Continuously Running · All 61 Agents</div>
            </div>
            <span style={{marginLeft:"auto",fontSize:10.5,color:"var(--green)",fontWeight:700}} className="pulse">● RUNNING</span>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <div style={{fontWeight:700,fontSize:13}}>Recent Optimization Results</div>
            <button onClick={runOptimizer} disabled={optimizerRunning} className="btn btn-sm" style={{background:"rgba(34,211,160,.1)",color:"var(--green)",border:"1px solid rgba(34,211,160,.25)"}}>
              {optimizerRunning?"Running audit...":"▶ Run Optimizer Now"}
            </button>
          </div>
          <div className="twrap">
            <table>
              <thead><tr><th>Agent</th><th>Before</th><th>After</th><th>Improvement</th><th>Status</th><th>What Changed</th></tr></thead>
              <tbody>
                {results.map((r,i)=>(
                  <tr key={i}>
                    <td style={{fontWeight:600}}>{r.agent}</td>
                    <td style={{color:"var(--text2)"}}>{r.before}</td>
                    <td style={{color:"var(--green)",fontWeight:700}}>{r.after}</td>
                    <td><span style={{background:"rgba(34,211,160,.1)",color:"var(--green)",padding:"2px 8px",borderRadius:6,fontSize:11.5,fontWeight:800}}>{r.change}</span></td>
                    <td><span style={{fontSize:11,fontWeight:700,color:r.status==="deployed"?"var(--green)":"var(--amber)"}}>{r.status==="deployed"?"● Deployed":"◐ Monitoring"}</span></td>
                    <td style={{fontSize:11.5,color:"var(--text2)"}}>{r.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {tab==="selector"&&(
        <div>
          <div className="g2" style={{marginBottom:18}}>
            <div className="card">
              <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:17,marginBottom:14}}>🧭 Agent Selector</div>
              <div style={{fontSize:12.5,color:"var(--text2)",lineHeight:1.6,marginBottom:14}}>Takes any plain-English requirement, scores all 61 agents across 12 dimensions, and returns the best-fit recommendation with deployment plan.</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                {[{l:"Selections Made",v:"2,840"},{l:"Match Accuracy",v:"96%"},{l:"Scoring Dimensions",v:"12"}].map((s,i)=>(
                  <div key={i} style={{background:"var(--surface2)",borderRadius:7,padding:10}}>
                    <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:17,color:"var(--accent)"}}>{s.v}</div>
                    <div style={{fontSize:10,color:"var(--text3)",marginTop:2}}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <div style={{fontWeight:700,fontSize:13,marginBottom:12}}>12 Scoring Dimensions</div>
              {dims.map((d,i)=>(
                <div key={i} style={{display:"flex",gap:8,padding:"6px 0",borderBottom:i<11?"1px solid var(--border)":"none"}}>
                  <div style={{width:20,height:20,borderRadius:5,background:"rgba(108,99,255,.1)",color:"var(--accent)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,flexShrink:0}}>{i+1}</div>
                  <div><div style={{fontSize:12,fontWeight:700}}>{d[0]} <span style={{color:"var(--text3)",fontWeight:400}}>({d[1]})</span></div><div style={{fontSize:11,color:"var(--text3)"}}>{d[2]}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="card" style={{border:"1px solid rgba(108,99,255,.25)"}}>
            <div style={{fontWeight:700,fontSize:14,marginBottom:5}}>🧭 Find the Best Agent for Your Requirement</div>
            <div style={{fontSize:12,color:"var(--text2)",marginBottom:14}}>Describe your role or task in plain English. Real Claude AI scores all 61 agents and returns the best match.</div>
            <div style={{display:"flex",gap:10,marginBottom:12}}>
              <textarea className="cinput" rows={3} value={selectorInput} onChange={e=>setSelectorInput(e.target.value)} placeholder="Example: I need an agent to handle customer complaints, route escalations, and track resolution times..."/>
              <button className="btn btn-primary" onClick={runSelector} disabled={selectorLoading} style={{alignSelf:"flex-end",whiteSpace:"nowrap"}}>{selectorLoading?"Analyzing...":"Find Best Agent →"}</button>
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:14}}>
              {chips.map((s,i)=><div key={i} className="chip" onClick={()=>setSelectorInput(s)} style={{fontSize:11}}>{s}</div>)}
            </div>
            {selectorLoading&&<div style={{padding:16,background:"var(--surface2)",borderRadius:10,marginBottom:12}}>
              <div style={{display:"flex",alignItems:"center",gap:9,marginBottom:6}}><div className="ai-dot pulse"/><span style={{fontSize:12.5,fontWeight:600}}>Analyzing your requirement across 61 agents...</span></div>
              <div style={{fontSize:12,color:"var(--text3)"}}>Scoring across 12 dimensions · Checking agent combinations · Generating deployment plan</div>
            </div>}
            {selectorResult&&!selectorLoading&&(
              <div style={{padding:18,background:"rgba(108,99,255,.05)",borderRadius:10,border:"1px solid rgba(108,99,255,.2)"}}>
                <div style={{fontWeight:700,fontSize:13,marginBottom:12}}>🧭 Agent Selector Recommendation</div>
                <div style={{fontSize:13,color:"var(--text2)",lineHeight:1.65,whiteSpace:"pre-wrap"}}>{selectorResult}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
