import { useState } from 'react';
import MetricCard from '../components/MetricCard';
const BARS={
  overview:[{l:"Workflow Automation Rate",v:96,c:"var(--amber)"},{l:"Meeting Summary Accuracy",v:89,c:"var(--pink)"},{l:"HR Ticket Deflection",v:73,c:"var(--blue)"},{l:"Candidate Match Accuracy",v:92,c:"var(--accent)"},{l:"Churn Prevention Rate",v:76,c:"var(--red)"},{l:"Onboarding Completion",v:86,c:"var(--green)"},{l:"Revenue Forecast Accuracy",v:91,c:"var(--orange)"},{l:"Security Detection Rate",v:99,c:"var(--cyan)"}],
  revenue:[{l:"Sales Pipeline Managed",v:82,c:"var(--orange)"},{l:"Lead Qualification Rate",v:79,c:"var(--lime)"},{l:"Proposal Win Rate",v:74,c:"var(--accent)"},{l:"Renewal Capture Rate",v:91,c:"var(--green)"},{l:"Upsell Conversion",v:68,c:"var(--amber)"},{l:"Churn Prevention",v:76,c:"var(--red)"}],
  operations:[{l:"Vendor SLA Compliance",v:91,c:"var(--amber)"},{l:"IT Helpdesk Resolution",v:78,c:"var(--blue)"},{l:"Procurement Speed",v:93,c:"var(--green)"},{l:"Facilities Resolution",v:90,c:"var(--cyan)"},{l:"Access Management",v:100,c:"var(--accent)"},{l:"License Optimization",v:95,c:"var(--lime)"}]
};
export default function AnalyticsPage() {
  const [tab,setTab]=useState("overview");
  return (<div>
    <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:20,marginBottom:5}}>Analytics</div>
    <div style={{fontSize:13,color:"var(--text2)",marginBottom:20}}>Unified metrics across all 61 agents and 11 departments</div>
    <div className="mgrid" style={{gridTemplateColumns:"repeat(4,1fr)",marginBottom:22}}>
      {[{ico:"🤖",label:"Total Agents",val:"61",trend:8},{ico:"⚡",label:"Automations/Mo",val:"28.4K",trend:21},{ico:"💰",label:"Revenue Protected",val:"$1.8M",trend:14},{ico:"⏱️",label:"Hours Saved/Mo",val:"1,240",trend:18}].map((m,i)=><MetricCard key={i} {...m}/>)}
    </div>
    <div className="card">
      <div className="tabs">
        {[["overview","📊 Overview"],["revenue","💰 Revenue"],["operations","🏢 Operations"]].map(([v,l])=>(
          <button key={v} className={`tab ${tab===v?"on":""}`} onClick={()=>setTab(v)}>{l}</button>
        ))}
      </div>
      <div style={{fontWeight:700,fontSize:13,marginBottom:12}}>Agent Performance Metrics</div>
      {BARS[tab].map((d,i)=>(<div key={i} className="bar-row"><div className="bar-lbl">{d.l}</div><div className="bar-track"><div className="bar-fill" style={{width:`${d.v}%`,background:d.c}}/></div><div className="bar-v" style={{color:d.c}}>{d.v}%</div></div>))}
    </div>
  </div>);
}
