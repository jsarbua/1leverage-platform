import { designSystemCSS } from './styles/design-system.js'
import { ALL_AGENTS_FLAT } from './data/agents.js'
import AgentCard from './components/AgentCard.jsx'
import Sidebar from './components/Sidebar.jsx'
import MetricCard from './components/MetricCard.jsx'

function App() {
  return (
    <>
      <style>{designSystemCSS}</style>
      <div className="app">
        <Sidebar />

        <main className="main">
          <h1>1Leverage AI Agent Platform</h1>
          <p className="muted">Autonomous AI agents for every business department.</p>

          <div className="grid">
            <MetricCard title="Agents Loaded" value={ALL_AGENTS_FLAT.length} note="Current active registry count" />
            <MetricCard title="Platform Status" value="Online" note="React/Vite running on VPS" />
            <MetricCard title="Brain Core" value="Active" note="Master orchestrator available" />
          </div>

          <h2>Agent Registry</h2>
          <div className="grid">
            {ALL_AGENTS_FLAT.map(agent => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
