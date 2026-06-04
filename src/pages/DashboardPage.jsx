import MetricCard from '../components/MetricCard.jsx'
import AgentCard from '../components/AgentCard.jsx'
import { ALL_AGENTS_FLAT, BRAIN_AGENT, CSUITE_AGENTS, DEPT_AGENTS } from '../data/agents.js'

function DashboardPage() {
  return (
    <>
      <h1>1Leverage AI Agent Platform</h1>
      <p className="muted">Autonomous AI agents for every business department.</p>

      <div className="grid">
        <MetricCard title="Agents Loaded" value={ALL_AGENTS_FLAT.length} note="Current active registry count" />
        <MetricCard title="C-Suite Agents" value={CSUITE_AGENTS.length} note="Executive operating layer" />
        <MetricCard title="Department Agents" value={DEPT_AGENTS.length} note="Operational automation layer" />
      </div>

      <h2>Brain Core</h2>
      <AgentCard agent={BRAIN_AGENT} />

      <h2>C-Suite Agents</h2>
      <div className="grid">
        {CSUITE_AGENTS.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>

      <h2>Department Agents</h2>
      <div className="grid">
        {DEPT_AGENTS.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </>
  )
}

export default DashboardPage
