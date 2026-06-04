import { useState } from 'react'
import { askClaude } from '../lib/claude.js'
import { BRAIN_PROMPT } from '../lib/prompts.js'

function BrainConsole() {
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleAsk() {
    if (!question.trim()) return

    setLoading(true)

    const result = await askClaude(
      [{ role: 'user', content: question }],
      BRAIN_PROMPT
    )

    setResponse(result)
    setLoading(false)
  }

  return (
    <div className="card">
      <h2>🧠 Brain Console</h2>

      <textarea
        rows="5"
        style={{width:'100%',padding:'12px'}}
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
        placeholder="Ask Brain Core anything..."
      />

      <br /><br />

      <button onClick={handleAsk}>
        Ask Brain Core
      </button>

      {loading && <p>Thinking...</p>}

      {response && (
        <div className="card">
          <h3>Response</h3>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  )
}

export default BrainConsole
