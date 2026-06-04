function MetricCard({ title, value, note }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h2>{value}</h2>
      <p>{note}</p>
    </div>
  )
}

export default MetricCard
