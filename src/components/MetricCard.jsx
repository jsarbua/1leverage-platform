export default function MetricCard({ ico, label, val, trend }) {
  return (
    <div className="mc">
      <div className="mc-ico">{ico}</div>
      <div className="mc-val">{val}</div>
      <div className="mc-lbl">{label}</div>
      {trend !== null && trend !== undefined && (
        <div className={`mc-trend ${trend > 0 ? "up" : "dn"}`}>
          {trend > 0 ? "▲" : "▼"} {Math.abs(trend)}% MoM
        </div>
      )}
    </div>
  );
}
