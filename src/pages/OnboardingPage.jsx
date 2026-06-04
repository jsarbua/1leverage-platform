import { useState } from 'react';
const HIRES_DATA = [
  {id:"NH001",name:"Jordan Kim",role:"Software Engineer",start:"Jan 22 2025",manager:"Sarah Chen",dept:"Engineering",progress:75,tasks:[
    {id:1,l:"Sign offer letter",done:true},{id:2,l:"Complete tax forms",done:true},{id:3,l:"Upload ID verification",done:true},
    {id:4,l:"Set up payroll",done:true},{id:5,l:"Review handbook",done:true},{id:6,l:"Create company email",done:true},
    {id:7,l:"Set up Slack",done:true},{id:8,l:"Assign laptop",done:true},{id:9,l:"Schedule manager 1-on-1",done:false},
    {id:10,l:"Complete security training",done:false},{id:11,l:"Role-specific training",done:false},{id:12,l:"Confirm benefits enrollment",done:false}
  ]},
  {id:"NH002",name:"Daniela Cruz",role:"Account Executive",start:"Jan 29 2025",manager:"Mike Torres",dept:"Sales",progress:40,tasks:[
    {id:1,l:"Sign offer letter",done:true},{id:2,l:"Complete tax forms",done:true},{id:3,l:"Upload ID verification",done:false},
    {id:4,l:"Set up payroll",done:false},{id:5,l:"Review handbook",done:false}
  ]}
];
export default function OnboardingPage() {
  const [hires,setHires]=useState(HIRES_DATA);const [sel,setSel]=useState(HIRES_DATA[0]);
  const toggle=(hireId,taskId)=>{
    setHires(prev=>prev.map(h=>{
      if(h.id!==hireId) return h;
      const tasks=h.tasks.map(t=>t.id===taskId?{...t,done:!t.done}:t);
      const progress=Math.round((tasks.filter(t=>t.done).length/tasks.length)*100);
      const updated={...h,tasks,progress};
      if(sel?.id===h.id) setSel(updated);
      return updated;
    }));
  };
  return (<div>
    <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:20,marginBottom:5}}>Onboarding</div>
    <div style={{fontSize:13,color:"var(--text2)",marginBottom:20}}>AI-powered new hire onboarding tracker</div>
    <div className="g2">
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        {hires.map(h=>(
          <div key={h.id} className="card card-sm" onClick={()=>setSel(h)} style={{cursor:"pointer",borderColor:sel?.id===h.id?"rgba(108,99,255,.35)":"var(--border)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
              <div><div style={{fontWeight:700}}>{h.name}</div><div style={{fontSize:11,color:"var(--text2)"}}>{h.role} · {h.dept}</div></div>
              <div style={{textAlign:"right"}}><div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:20,color:h.progress===100?"var(--green)":"var(--text)"}}>{h.progress}%</div><div style={{fontSize:10,color:"var(--text3)"}}>complete</div></div>
            </div>
            <div className="prog-bar"><div className="prog-fill" style={{width:`${h.progress}%`,background:h.progress===100?"var(--green)":"var(--accent)"}}/></div>
            <div style={{fontSize:11,color:"var(--text3)",marginTop:7}}>Start: {h.start} · Manager: {h.manager}</div>
          </div>
        ))}
      </div>
      {sel&&(<div className="card">
        <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:17,marginBottom:3}}>{sel.name}</div>
        <div style={{fontSize:12,color:"var(--text2)",marginBottom:14}}>{sel.role} · Starts {sel.start}</div>
        <div style={{borderTop:"1px solid var(--border)"}}>
          {sel.tasks.map(t=>(
            <div key={t.id} className="cli" onClick={()=>toggle(sel.id,t.id)}>
              <div className={`chk ${t.done?"on":""}`}>{t.done?"✓":""}</div>
              <div style={{fontSize:13,color:t.done?"var(--text3)":"var(--text)",textDecoration:t.done?"line-through":"none"}}>{t.l}</div>
            </div>
          ))}
        </div>
      </div>)}
    </div>
  </div>);
}
