import { designSystemCSS } from './styles/design-system.js'
import Sidebar from './components/Sidebar.jsx'
import DashboardPage from './pages/DashboardPage.jsx'

function App() {
  return (
    <>
      <style>{designSystemCSS}</style>
      <div className="app">
        <Sidebar />
        <main className="main">
          <DashboardPage />
        </main>
      </div>
    </>
  )
}

export default App
