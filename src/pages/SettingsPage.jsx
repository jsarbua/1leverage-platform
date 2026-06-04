import { useState } from 'react';
export default function SettingsPage() {
  const [s,setS]=useState({companyName:"1Leverage",hrEmail:"hr@1leverage.ai",recruitingEmail:"recruiting@1leverage.ai",rankingThreshold:"75",autoEscalation:true,onboardingReminders:true,autoSummarizeMeetings:true,humanApproval:false,brainAutonomy:true,csuiteBriefings:true});
  const upd=(k,v)=>setS(p=>({...p,[k]:v}));
  const inputStyle={background:"var(--surface2)",border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",color:"var(--text)",fontSize:13,fontFamily:"var(--font-b)",outline:"none",width:"100%"};
  return (<div>
    <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:20,marginBottom:5}}>Settings</div>
    <div style={{fontSize:13,color:"var(--text2)",marginBottom:20}}>Configure your platform and agent behavior</div>
    <div className="g2" style={{gap:20}}>
      <div className="card">
        <div style={{fontWeight:700,marginBottom:14}}>Company</div>
        {[{k:"companyName",l:"Company Name"},{k:"hrEmail",l:"HR Escalation Email"},{k:"recruitingEmail",l:"Recruiting Email"},{k:"rankingThreshold",l:"Min Candidate Score (%)"}].map(({k,l})=>(
          <div key={k} style={{display:"flex",flexDirection:"column",gap:5,padding:"13px 0",borderBottom:"1px solid var(--border)"}}>
            <div style={{fontSize:13,fontWeight:600}}>{l}</div>
            <input style={inputStyle} value={s[k]} onChange={e=>upd(k,e.target.value)}/>
          </div>
        ))}
      </div>
      <div className="card">
        <div style={{fontWeight:700,marginBottom:14}}>Brain and Automation</div>
        {[{k:"brainAutonomy",l:"Brain Autonomous Mode",d:"Brain makes decisions without requiring confirmation"},
          {k:"csuiteBriefings",l:"Daily C-Suite Briefings",d:"Each exec agent sends morning briefing to Brain"},
          {k:"autoEscalation",l:"Auto-escalate HR Issues",d:"Route sensitive topics immediately to human HR"},
          {k:"onboardingReminders",l:"Onboarding Reminders",d:"Automated nudges for incomplete new hire tasks"},
          {k:"autoSummarizeMeetings",l:"Auto-summarize Meetings",d:"Generate summary after every meeting completes"},
          {k:"humanApproval",l:"Require Human Approval",d:"Review agent actions before they execute"}
        ].map(({k,l,d})=>(
          <div key={k} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)"}}>
            <div style={{paddingRight:12}}><div style={{fontSize:13,fontWeight:600}}>{l}</div><div style={{fontSize:11.5,color:"var(--text3)",marginTop:2}}>{d}</div></div>
            <label className="tog"><input type="checkbox" checked={s[k]} onChange={e=>upd(k,e.target.checked)}/><span className="tog-sl"/></label>
          </div>
        ))}
        <button className="btn btn-primary btn-sm" style={{marginTop:12,width:"100%"}}>Save Settings</button>
      </div>
    </div>
  </div>);
}
