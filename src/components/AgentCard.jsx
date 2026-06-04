function AgentCard({ agent }) {
  return (
    <div className="card">
      <h2>{agent.emoji} {agent.name}</h2>
      <p><strong>{agent.role}</strong></p>
      <p>{agent.desc}</p>
      <p><strong>Success:</strong> {agent.stats.success}</p>
    </div>
  )
}

export default AgentCard
