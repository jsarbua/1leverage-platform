import { useState, useRef, useEffect } from 'react';
import { askClaude } from '../lib/claude';
import { CSUITE_AGENTS } from '../data/agents';
import { BRAIN_PROMPT } from '../lib/prompts';

export default function BrainPage() {
  const [activeAgent, setActiveAgent] = useState(null);
  const [msgs, setMsgs] = useState([{role:"assistant",content:"Good morning. I have reviewed overnight activity across all 61 agents. Revenue pipeline is healthy at $2.4M. Three enterprise accounts flagged at churn risk — I have already notified the CRO Agent and CSM team. Cash runway at 18 months. What would you like to focus on today?"}]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);
  useEffect(()=>{ endRef.current?.scrollIntoView({behavior:"smooth"}); },[msgs]);

  const send = async () => {
    if(!input.trim()||loading) return;
    const u=input.trim(); setInput(""); setLoading(true);
    const newMsgs=[...msgs,{role:"user",content:u}]; setMsgs(newMsgs);
    try {
      const reply = await askClaude(newMsgs.map(m=>({role:m.role,content:m.content})), BRAIN_PROMPT);
      setMsgs(prev=>[...prev,{role:"assistant",content:reply}]);
    } catch(e) { setMsgs(prev=>[...prev,{role:"assistant",content:"Brain connectivity error. Please try again."}]); }
    setLoading(false);
  };

  const chips = ["Company status briefing","What is at risk today?","Coordinate a board report","Show cash flow forecast","Who is underperforming?"];

  return (
    <div>
      <div className="brain-dash">
        <div style={{position:"relative",zIndex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
            <span style={{fontSize:32}}>🧠</span>
            <div>
              <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:22}}>Brain-Autonomous-Core</div>
              <div style={{fontSize:11,color:"var(--brain)",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Master Orchestrator · Always Active</div>
            </div>
            <div style={{marginLeft:"auto",fontSize:10.5,color:"var(--green)",fontWeight:700}} className="pulse">● ONLINE</div>
          </div>
          <div className="g4" style={{marginBottom:16}}>
            {[{l:"Agents Coordinated",v:"61"},{l:"Decisions Today",v:"284"},{l:"Conflicts Resolved",v:"12"},{l:"Memory Items",v:"48.2K"}].map((s,i)=>(
              <div key={i} style={{background:"rgba(168,85,247,.08)",border:"1px solid rgba(168,85,247,.15)",borderRadius:9,padding:12}}>
                <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:20,color:"var(--brain)"}}>{s.v}</div>
                <div style={{fontSize:10.5,color:"var(--text3)",marginTop:2}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:17,marginBottom:5}}>C-Suite Agent Layer</div>
      <div style={{fontSize:12,color:"var(--text2)",marginBottom:16}}>7 executive agents reporting to and coordinated by the Brain</div>
      <div className="csuite-grid" style={{marginBottom:24}}>
        {CSUITE_AGENTS.map(a=>(
          <div key={a.id} className="csuite-card" onClick={()=>setActiveAgent(activeAgent?.id===a.id?null:a)}>
            <div style={{fontSize:22,marginBottom:6}}>{a.emoji}</div>
            <div className="csuite-title">{a.name}</div>
            <div className="csuite-role">{a.role}</div>
            <div className="csuite-desc">{a.desc}</div>
            <div className="csuite-stat">{a.stats.handled} tasks · {a.stats.success} success</div>
          </div>
        ))}
      </div>
      {activeAgent&&(
        <div className="card" style={{marginBottom:24,borderColor:"rgba(168,85,247,.25)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
            <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:17}}>{activeAgent.emoji} {activeAgent.name}</div>
            <button className="btn btn-ghost btn-sm" onClick={()=>setActiveAgent(null)}>✕ Close</button>
          </div>
          <div className="g2">
            <div>{activeAgent.desc.split(". ").filter(Boolean).map((s,i)=>(
              <div key={i} style={{fontSize:12.5,color:"var(--text2)",padding:"6px 0",borderBottom:"1px solid var(--border)",display:"flex",gap:8}}>
                <span style={{color:"var(--brain)",flexShrink:0}}>›</span>{s}.
              </div>
            ))}</div>
            <div>
              <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:14}}>{activeAgent.tools.map(t=><span key={t} className="tag">{t}</span>)}</div>
              <div className="g2">
                {[{l:"Tasks Handled",v:activeAgent.stats.handled},{l:"Success Rate",v:activeAgent.stats.success},{l:"Uptime",v:"24/7"},{l:"Reports To",v:"Brain Core"}].map((s,i)=>(
                  <div key={i} style={{background:"var(--surface2)",borderRadius:7,padding:10}}>
                    <div style={{fontFamily:"var(--font-d)",fontWeight:700,fontSize:16}}>{s.v}</div>
                    <div style={{fontSize:10.5,color:"var(--text3)",marginTop:2}}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:17,marginBottom:5}}>Talk to the Brain</div>
      <div style={{fontSize:12,color:"var(--text2)",marginBottom:16}}>Powered by real Claude AI</div>
      <div className="cwrap" style={{height:420}}>
        <div className="cwin" style={{borderColor:"rgba(168,85,247,.25)"}}>
          <div style={{padding:"11px 14px",borderBottom:"1px solid rgba(168,85,247,.15)",display:"flex",alignItems:"center",gap:9}}>
            <span style={{fontSize:18}}>🧠</span><span style={{fontSize:13,fontWeight:700}}>Brain-Autonomous-Core</span>
            <span style={{marginLeft:"auto",fontSize:10.5,color:"var(--brain)",fontWeight:700}} className="pulse">● CONNECTED</span>
          </div>
          <div className="cmsgs">
            {msgs.map((m,i)=>(
              <div key={i} className={`msg msg-${m.role==="user"?"u":"a"}`}>
                <div className="mb">{m.content}</div>
              </div>
            ))}
            {loading&&<div className="msg msg-a"><div className="mb" style={{padding:"10px 13px"}}><div className="typing"><div className="td"/><div className="td"/><div className="td"/></div></div></div>}
            <div ref={endRef}/>
          </div>
          <div style={{padding:"9px 14px",borderTop:"1px solid var(--border)",display:"flex",flexWrap:"wrap",gap:5}}>
            {chips.map((s,i)=><div key={i} className="chip" onClick={()=>setInput(s)}>{s}</div>)}
          </div>
          <div className="cinput-area">
            <textarea className="cinput" rows={2} value={input} onChange={e=>setInput(e.target.value)}
              placeholder="Ask the Brain anything about your business..."
              onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}}/>
            <button className="btn btn-brain" onClick={send} disabled={loading}>{loading?"...":"Send"}</button>
          </div>
        </div>
        <div className="csb">
          <div className="cmeta">
            <div className="cmeta-title">Quick Commands</div>
            {chips.map((s,i)=><div key={i} className="chip" style={{display:"block",marginBottom:6}} onClick={()=>setInput(s)}>{s}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
