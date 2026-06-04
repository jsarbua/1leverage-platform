const NAV = [
  {id:"dashboard",ico:"⬛",label:"Dashboard"},
  {sect:"Intelligence"},
  {id:"brain",ico:"🧠",label:"Brain Console",badge:"LIVE",badgeCls:"nbrain"},
  {id:"meta",ico:"⚗️",label:"Meta-Intelligence",badge:"NEW"},
  {sect:"HR Operations"},
  {id:"candidates",ico:"🎯",label:"Candidates"},
  {id:"onboarding",ico:"🚀",label:"Onboarding"},
  {id:"hrchat",ico:"💬",label:"HR Support Chat",badge:"AI"},
  {sect:"Productivity"},
  {id:"workflows",ico:"⚡",label:"Workflows"},
  {sect:"Platform"},
  {id:"agents",ico:"🤖",label:"All Agents (61)"},
  {id:"analytics",ico:"📊",label:"Analytics"},
  {id:"integrations",ico:"🔌",label:"Integrations"},
  {id:"settings",ico:"⚙️",label:"Settings"},
];
export default function Sidebar({ currentPage, onNavigate }) {
  return (
    <div className="sb">
      <div className="sb-logo">
        <div className="logo-mark">1L</div>
        1Leverage
      </div>
      {NAV.map((item,i)=>{
        if(item.sect) return <div key={i} className="sb-sect">{item.sect}</div>;
        return (
          <div key={i} className={`ni ${currentPage===item.id?"active":""}`} onClick={()=>onNavigate(item.id)}>
            <span className="ico">{item.ico}</span>
            {item.label}
            {item.badge&&<span className={`nbadge ${item.badgeCls||""}`}>{item.badge}</span>}
          </div>
        );
      })}
    </div>
  );
}
