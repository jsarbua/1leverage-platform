const TITLES = {
  dashboard:"Dashboard",brain:"Brain Console",meta:"Meta-Intelligence",
  candidates:"Candidate Pipeline",onboarding:"Onboarding",hrchat:"HR Support Chat",
  workflows:"Workflow Automation",agents:"Agent Fleet (61)",
  analytics:"Analytics",integrations:"Integrations",settings:"Settings"
};
export default function Topbar({ currentPage, onNavigate }) {
  return (
    <div className="topbar">
      <div className="topbar-title">{TITLES[currentPage]||"Dashboard"}</div>
      <div style={{display:"flex",alignItems:"center",gap:9}}>
        <span style={{fontSize:11,color:"var(--text3)"}}>🧠 Brain Online</span>
        <button className="btn btn-ghost btn-sm">🔔</button>
        <button className="btn btn-brain btn-sm" onClick={()=>onNavigate("agents")}>+ Deploy Agent</button>
        <div style={{width:28,height:28,borderRadius:"50%",background:"linear-gradient(135deg,var(--accent),var(--brain))",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,color:"#fff",cursor:"pointer"}}>J</div>
      </div>
    </div>
  );
}
