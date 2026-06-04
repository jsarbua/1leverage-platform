import { useState } from 'react';
const INTS_DATA=[
  {n:"Greenhouse",c:"ATS",s:"connected",i:"🌱"},{n:"Lever",c:"ATS",s:"connected",i:"📋"},
  {n:"LinkedIn",c:"Recruiting",s:"connected",i:"💼"},{n:"BambooHR",c:"HRIS",s:"connected",i:"🎍"},
  {n:"Workday",c:"HRIS",s:"available",i:"🏢"},{n:"Slack",c:"Comms",s:"connected",i:"💬"},
  {n:"Microsoft Teams",c:"Comms",s:"available",i:"🟦"},{n:"Google Workspace",c:"Productivity",s:"connected",i:"🔷"},
  {n:"DocuSign",c:"Legal",s:"connected",i:"✍️"},{n:"Zapier",c:"Automation",s:"connected",i:"⚡"},
  {n:"Make",c:"Automation",s:"available",i:"🔄"},{n:"Zoom",c:"Video",s:"connected",i:"🎥"},
  {n:"Asana",c:"Tasks",s:"available",i:"📌"},{n:"Jira",c:"Tasks",s:"available",i:"🔵"},
  {n:"Salesforce",c:"CRM",s:"available",i:"☁️"},{n:"HubSpot",c:"CRM",s:"connected",i:"🟠"},
  {n:"QuickBooks",c:"Finance",s:"connected",i:"💚"},{n:"Stripe",c:"Payments",s:"connected",i:"🔵"},
  {n:"Intercom",c:"Support",s:"connected",i:"💬"},{n:"Zendesk",c:"Support",s:"available",i:"🟨"},
  {n:"Google Ads",c:"Ads",s:"connected",i:"🎯"},{n:"Meta Ads",c:"Ads",s:"connected",i:"📘"},
  {n:"Okta",c:"Identity",s:"available",i:"🔐"},{n:"GitHub",c:"Dev",s:"connected",i:"⚫"},
  {n:"Claude API",c:"AI",s:"connected",i:"🤖"},{n:"OpenAI API",c:"AI",s:"available",i:"🧠"},
  {n:"Notion",c:"Docs",s:"connected",i:"📓"},{n:"Calendly",c:"Scheduling",s:"available",i:"🗓️"}
];
export default function IntegrationsPage() {
  const [ints,setInts]=useState(INTS_DATA);
  const connect=n=>setInts(p=>p.map(i=>i.n===n?{...i,s:"connected"}:i));
  const connCount=ints.filter(i=>i.s==="connected").length;
  const groups=[...new Set(ints.map(i=>i.c))];
  return (<div>
    <div style={{fontFamily:"var(--font-d)",fontWeight:800,fontSize:20,marginBottom:5}}>Integrations</div>
    <div style={{fontSize:13,color:"var(--text2)",marginBottom:20}}>{connCount} of {ints.length} connected · Used by 61 agents</div>
    {groups.map(cat=>(<div key={cat} style={{marginBottom:20}}>
      <div style={{fontSize:10.5,fontWeight:700,textTransform:"uppercase",letterSpacing:1,color:"var(--text3)",marginBottom:10}}>{cat}</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(190px,1fr))",gap:10}}>
        {ints.filter(i=>i.c===cat).map(i=>(<div key={i.n} className="card card-sm" style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{fontSize:22,flexShrink:0}}>{i.i}</div>
          <div style={{flex:1,minWidth:0}}><div style={{fontWeight:700,fontSize:12.5}}>{i.n}</div><div style={{fontSize:10.5,color:"var(--text3)",marginTop:1}}>{i.c}</div></div>
          {i.s==="connected"
            ?<span style={{fontSize:9.5,fontWeight:800,color:"var(--green)",background:"rgba(34,211,160,.08)",padding:"2px 6px",borderRadius:5,flexShrink:0}}>●ON</span>
            :<button className="btn btn-ghost btn-xs" style={{flexShrink:0}} onClick={()=>connect(i.n)}>Connect</button>}
        </div>))}
      </div>
    </div>))}
  </div>);
}
