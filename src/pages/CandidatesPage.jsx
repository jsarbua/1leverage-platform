import { useState } from 'react';
const CANDIDATES = [
  {id:"C001",name:"Maya Johnson",role:"Customer Success Manager",loc:"Austin TX",exp:"6 yrs",score:91,stage:"Interview",src:"LinkedIn"},
  {id:"C002",name:"Daniel Lee",role:"Software Engineer",loc:"San Francisco CA",exp:"5 yrs",score:88,stage:"Recruiter Review",src:"Greenhouse"},
  {id:"C003",name:"Priya Patel",role:"Marketing Manager",loc:"New York NY",exp:"7 yrs",score:84,stage:"AI Screened",src:"LinkedIn"},
  {id:"C004",name:"Marcus Williams",role:"Account Executive",loc:"Chicago IL",exp:"4 yrs",score:79,stage:"Applied",src:"Lever"},
  {id:"C005",name:"Sofia Garcia",role:"Operations Coordinator",loc:"Miami FL",exp:"3 yrs",score:93,stage:"Offer",src:"Workable"},
  {id:"C006",name:"Ethan Brown",role:"Software Engineer",loc:"Seattle WA",exp:"2 yrs",score:72,stage:"Applied",src:"LinkedIn"},
  {id:"C007",name:"Aisha Khan",role:"HR Generalist",loc:"Boston MA",exp:"5 yrs",score:86,stage:"Recruiter Review",src:"Greenhouse"},
  {id:"C008",name:"Emma Taylor",role:"UX Designer",loc:"Austin TX",exp:"6 yrs",score:94,stage:"Offer",src:"Greenhouse"}
];
export default function CandidatesPage() {
  const [filter,setFilter]=useState("");const [sel,setSel]=useState(null);
  const shown=CANDIDATES.filter(c=>!filter||c.stage===filter);
  const sc=s=>s>=85?"sbadge sh":s>=75?"sbadge sm-badge":"sbadge sl";
  const stc=s=>({Interview:"s-int",Offer:"s-off","AI Screened":"s-scr",Applied:"s-app"}[s]||"s-app");
  return (<div>
    <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:20,marginBottom:5}}>Candidate Pipeline</div>
    <div style={{fontSize:13,color:"var(--text2)",marginBottom:20}}>AI-screened and ranked · Powered by Recruiting Agent</div>
    <div style={{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"}}>
      {["","Applied","AI Screened","Recruiter Review","Interview","Offer"].map(s=>(
        <button key={s} onClick={()=>setFilter(s)} className="btn btn-ghost btn-sm" style={filter===s?{background:"rgba(108,99,255,.12)",color:"var(--accent)"}:{}}>{s||"All"}</button>
      ))}
    </div>
    <div className="twrap"><table>
      <thead><tr><th>Candidate</th><th>Role</th><th>Location</th><th>Exp</th><th>Score</th><th>Stage</th><th>Source</th></tr></thead>
      <tbody>{shown.map(c=>(
        <tr key={c.id} onClick={()=>setSel(sel?.id===c.id?null:c)} style={{cursor:"pointer"}}>
          <td><div style={{fontWeight:600}}>{c.name}</div><div style={{fontSize:10.5,color:"var(--text3)"}}>{c.id}</div></td>
          <td style={{color:"var(--text2)"}}>{c.role}</td><td style={{color:"var(--text2)"}}>{c.loc}</td><td style={{color:"var(--text2)"}}>{c.exp}</td>
          <td><span className={sc(c.score)}>{c.score}%</span></td>
          <td><span className={`stag ${stc(c.stage)}`}>{c.stage}</span></td>
          <td style={{color:"var(--text2)"}}>{c.src}</td>
        </tr>
      ))}</tbody>
    </table></div>
    {sel&&(<div className="card" style={{marginTop:14}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
        <div><div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:18}}>{sel.name}</div><div style={{fontSize:12,color:"var(--text2)"}}>{sel.role} · {sel.loc} · {sel.exp}</div></div>
        <div style={{display:"flex",gap:7}}><button className="btn btn-ghost btn-sm">Schedule Interview</button><button className="btn btn-primary btn-sm">Advance Stage</button></div>
      </div>
      <div className="g2">
        <div>
          <div style={{fontSize:10.5,fontWeight:700,color:"var(--text3)",textTransform:"uppercase",marginBottom:8}}>AI Recommendation</div>
          <div style={{fontSize:12.5,color:"var(--text2)",lineHeight:1.6,background:"var(--surface2)",padding:13,borderRadius:9,border:"1px solid var(--border)"}}>
            {sel.score>=88?"Strong match. Recommend advancing to final round immediately.":sel.score>=78?"Good match. A few gaps worth exploring in a screen call.":"Below threshold. Does not meet minimum requirements."}
          </div>
        </div>
        <div>
          <div style={{fontSize:10.5,fontWeight:700,color:"var(--text3)",textTransform:"uppercase",marginBottom:8}}>Interview Questions</div>
          {["Walk me through your most measurable impact in a similar role.","How do you handle competing priorities with tight deadlines?","Describe the biggest cross-functional challenge you have navigated."].map((q,i)=>(
            <div key={i} style={{fontSize:12,color:"var(--text2)",background:"var(--surface2)",padding:"8px 11px",borderRadius:7,border:"1px solid var(--border)",marginBottom:7}}>{i+1}. {q}</div>
          ))}
        </div>
      </div>
    </div>)}
  </div>);
}
