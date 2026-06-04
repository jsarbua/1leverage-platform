import { useState, useRef, useEffect } from 'react';
import { askClaude } from '../lib/claude';
import { HR_SUPPORT_PROMPT } from '../lib/prompts';
export default function HRChatPage() {
  const [msgs,setMsgs]=useState([{role:"assistant",content:"Hi! I am your AI HR Support Agent. Ask me anything about PTO, benefits, payroll, remote work policy, or performance reviews. Powered by real Claude AI."}]);
  const [input,setInput]=useState("");const [loading,setLoading]=useState(false);
  const [meta,setMeta]=useState({topic:"—",confidence:"—",policy:"—",escalate:false});
  const endRef=useRef(null);
  useEffect(()=>{endRef.current?.scrollIntoView({behavior:"smooth"});},[msgs]);
  const detectMeta=m=>{
    const t=m.toLowerCase();
    if(t.includes("pto")||t.includes("vacation")) return {topic:"PTO",confidence:"95%",policy:"PTO Policy",escalate:false};
    if(t.includes("benefit")||t.includes("insurance")) return {topic:"Benefits",confidence:"90%",policy:"Benefits Policy",escalate:false};
    if(t.includes("remote")||t.includes("home")) return {topic:"Remote Work",confidence:"92%",policy:"Remote Policy",escalate:false};
    if(t.includes("payroll")||t.includes("pay")) return {topic:"Payroll",confidence:"88%",policy:"Payroll Policy",escalate:false};
    if(t.includes("harass")||t.includes("discrim")||t.includes("complaint")) return {topic:"Escalation",confidence:"99%",policy:"Code of Conduct",escalate:true};
    return {topic:"General HR",confidence:"75%",policy:"Employee Handbook",escalate:false};
  };
  const send=async()=>{
    if(!input.trim()||loading) return;
    const u=input.trim();setInput("");setLoading(true);
    const newMsgs=[...msgs,{role:"user",content:u}];setMsgs(newMsgs);setMeta(detectMeta(u));
    try {
      const reply=await askClaude(newMsgs.map(m=>({role:m.role,content:m.content})),HR_SUPPORT_PROMPT);
      setMsgs(p=>[...p,{role:"assistant",content:reply}]);
    } catch(e){setMsgs(p=>[...p,{role:"assistant",content:"Connection error. Please try again."}]);}
    setLoading(false);
  };
  const chips=["How many PTO days do I have?","What is the remote work policy?","How do I update my benefits?","When is my performance review?"];
  return (<div>
    <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:20,marginBottom:5}}>HR Support Chat</div>
    <div style={{fontSize:13,color:"var(--text2)",marginBottom:20}}>Real Claude AI · Powered by Employee Support Agent</div>
    <div className="cwrap">
      <div className="cwin">
        <div style={{padding:"11px 14px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:9}}>
          <div className="ai-dot pulse"/><span style={{fontSize:13,fontWeight:600}}>HR Support Agent</span>
          <span style={{marginLeft:"auto",fontSize:10.5,color:"var(--green)",fontWeight:700}}>● Claude AI Online</span>
        </div>
        <div className="cmsgs">
          {msgs.map((m,i)=>(<div key={i} className={`msg msg-${m.role==="user"?"u":"a"}`}><div className="mb">{m.content}</div></div>))}
          {loading&&<div className="msg msg-a"><div className="mb" style={{padding:"9px 13px"}}><div className="typing"><div className="td"/><div className="td"/><div className="td"/></div></div></div>}
          <div ref={endRef}/>
        </div>
        <div style={{padding:"9px 14px",borderTop:"1px solid var(--border)",display:"flex",flexWrap:"wrap",gap:5}}>
          {chips.map((s,i)=><div key={i} className="chip" onClick={()=>setInput(s)}>{s}</div>)}
        </div>
        <div className="cinput-area">
          <textarea className="cinput" rows={2} value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask an HR question..." onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}}/>
          <button className="btn btn-primary" onClick={send} disabled={loading}>{loading?"...":"Send"}</button>
        </div>
      </div>
      <div className="csb">
        <div className="cmeta">
          <div className="cmeta-title">AI Analysis</div>
          <div className="cmeta-row"><span style={{color:"var(--text2)"}}>Topic</span><span style={{fontWeight:600}}>{meta.topic}</span></div>
          <div className="cmeta-row"><span style={{color:"var(--text2)"}}>Confidence</span><span style={{fontWeight:600,color:"var(--green)"}}>{meta.confidence}</span></div>
          <div className="cmeta-row"><span style={{color:"var(--text2)"}}>Policy</span><span style={{fontWeight:600,fontSize:11}}>{meta.policy}</span></div>
          <div className="cmeta-row"><span style={{color:"var(--text2)"}}>Escalation</span><span style={{fontWeight:700,fontSize:11,color:meta.escalate?"var(--red)":"var(--green)"}}>{meta.escalate?"⚠️ Required":"✅ Not needed"}</span></div>
        </div>
        <div className="cmeta">
          <div className="cmeta-title">This Month</div>
          <div className="cmeta-row"><span style={{color:"var(--text2)"}}>Answered</span><span style={{fontWeight:600}}>3,621</span></div>
          <div className="cmeta-row"><span style={{color:"var(--text2)"}}>Deflected</span><span style={{fontWeight:600,color:"var(--green)"}}>73%</span></div>
          <div className="cmeta-row"><span style={{color:"var(--text2)"}}>Avg Response</span><span style={{fontWeight:600}}>1.4 min</span></div>
        </div>
      </div>
    </div>
  </div>);
}
