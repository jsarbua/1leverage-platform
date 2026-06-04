import { useState } from 'react';
const WFDATA=[
  {id:"wf1",name:"Lead → CRM → Notify Slack",trigger:"New form submission",apps:["HubSpot","Slack","Gmail"],runs:284,success:97,last:"2 min ago",active:true},
  {id:"wf2",name:"Invoice Email → Save → Update Sheet",trigger:"New invoice email",apps:["Gmail","Drive","Sheets"],runs:141,success:99,last:"1 hr ago",active:true},
  {id:"wf3",name:"Support Ticket → Assign → Task",trigger:"New support ticket",apps:["Zendesk","Asana","Slack"],runs:89,success:94,last:"4 hrs ago",active:true},
  {id:"wf4",name:"Meeting → Transcript → Action Items",trigger:"Meeting completed",apps:["Zoom","Notion","Slack"],runs:218,success:91,last:"Yesterday",active:false}
];
export default function WorkflowsPage() {
  const [wfs,setWfs]=useState(WFDATA);const [runningId,setRunningId]=useState(null);
  const [feed,setFeed]=useState([{msg:"Lead form submitted → CRM updated → Slack notified",t:"2 min ago",ok:true},{msg:"Invoice email processed → Sheet updated",t:"1 hr ago",ok:true},{msg:"Support ticket routed → Asana task created",t:"3 hrs ago",ok:true}]);
  const run=wf=>{
    setRunningId(wf.id);
    setTimeout(()=>{setRunningId(null);setFeed(p=>[{msg:`${wf.name} — completed successfully`,t:"Just now",ok:true},...p]);},1800);
  };
  return (<div>
    <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:20,marginBottom:5}}>Workflow Automation</div>
    <div style={{fontSize:13,color:"var(--text2)",marginBottom:20}}>Powered by Workflow Agent and COO Agent coordination</div>
    <div className="g2">
      <div>{wfs.map(wf=>(
        <div key={wf.id} className="wfc">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
            <div><div style={{fontFamily:"var(--font-d)",fontWeight:700,fontSize:14}}>{wf.name}</div><div style={{fontSize:12,color:"var(--text2)",marginTop:3}}>Trigger: {wf.trigger}</div></div>
            <div style={{display:"flex",gap:8,alignItems:"center",flexShrink:0}}>
              <span style={{fontSize:10.5,fontWeight:700,color:wf.active?"var(--green)":"var(--text3)"}}>{wf.active?"● ACTIVE":"○ PAUSED"}</span>
              <button onClick={()=>run(wf)} disabled={runningId===wf.id} style={{fontSize:11.5,padding:"4px 11px",background:"rgba(34,211,160,.09)",color:"var(--green)",border:"1px solid rgba(34,211,160,.22)",borderRadius:6,cursor:"pointer",fontWeight:700}}>{runningId===wf.id?"Running...":"▶ Run"}</button>
            </div>
          </div>
          <div style={{display:"flex",gap:5,flexWrap:"wrap",marginBottom:10}}>{wf.apps.map(a=><span key={a} className="tag">{a}</span>)}</div>
          <div style={{display:"flex",gap:18}}><span style={{fontSize:11,color:"var(--text2)"}}><b>{wf.runs}</b> runs/mo</span><span style={{fontSize:11,color:"var(--text2)"}}><b>{wf.success}%</b> success</span><span style={{fontSize:11,color:"var(--text2)"}}>Last: <b>{wf.last}</b></span></div>
        </div>
      ))}</div>
      <div>
        <div className="card" style={{marginBottom:14}}>
          <div style={{fontWeight:700,fontSize:13,marginBottom:12}}>Activity Feed</div>
          {feed.map((f,i)=>(<div key={i} className="feed-item"><div className="feed-dot" style={{background:f.ok?"var(--green)":"var(--red)"}}/><div><div style={{fontSize:12.5}}>{f.msg}</div><div style={{fontSize:11,color:"var(--text3)",marginTop:2}}>{f.t}</div></div></div>))}
        </div>
        <div className="card">
          <div style={{fontWeight:700,fontSize:13,marginBottom:12}}>Workflow Builder</div>
          {["Choose trigger app","Set conditions","Add actions","Test and deploy"].map((s,i)=>(
            <div key={i} style={{display:"flex",gap:10,alignItems:"center",padding:"9px 0",borderBottom:i<3?"1px solid var(--border)":"none"}}>
              <div style={{width:26,height:26,borderRadius:"50%",background:"rgba(108,99,255,.1)",color:"var(--accent)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11.5,fontWeight:800,flexShrink:0}}>{i+1}</div>
              <div style={{fontSize:13}}>{s}</div>
            </div>
          ))}
          <button className="btn btn-primary btn-sm" style={{marginTop:12,width:"100%"}}>+ Create Workflow</button>
        </div>
      </div>
    </div>
  </div>);
}
