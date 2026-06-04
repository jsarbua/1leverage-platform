import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardPage from "./pages/DashboardPage";
import BrainPage from "./pages/BrainPage";
import MetaPage from "./pages/MetaPage";
import CandidatesPage from "./pages/CandidatesPage";
import OnboardingPage from "./pages/OnboardingPage";
import HRChatPage from "./pages/HRChatPage";
import WorkflowsPage from "./pages/WorkflowsPage";
import AgentsPage from "./pages/AgentsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import SettingsPage from "./pages/SettingsPage";
import { designSystemCSS } from "./styles/design-system";

function renderPage(page) {
  switch(page) {
    case "dashboard":    return <DashboardPage />;
    case "brain":        return <BrainPage />;
    case "meta":         return <MetaPage />;
    case "candidates":   return <CandidatesPage />;
    case "onboarding":   return <OnboardingPage />;
    case "hrchat":       return <HRChatPage />;
    case "workflows":    return <WorkflowsPage />;
    case "agents":       return <AgentsPage />;
    case "analytics":    return <AnalyticsPage />;
    case "integrations": return <IntegrationsPage />;
    case "settings":     return <SettingsPage />;
    default:             return <DashboardPage />;
  }
}

export default function App() {
  const [page, setPage] = useState("dashboard");
  return (
    <>
      <style>{designSystemCSS}</style>
      <div className="app">
        <Sidebar currentPage={page} onNavigate={setPage} />
        <div className="main">
          <Topbar currentPage={page} onNavigate={setPage} />
          <div className="content">{renderPage(page)}</div>
        </div>
      </div>
    </>
  );
}
