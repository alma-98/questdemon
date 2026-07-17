import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CardStudio from "./pages/CardStudio";
import PublisherLayout from "./layouts/PublisherLayout";
import PublisherDashboard from "./pages/publisher/Dashboard";

function Home() {
  return (
    <div
      style={{
        background:"#080812",
        color:"#fff",
        minHeight:"100vh",
        padding:30
      }}
    >
      <Dashboard />

      <hr />

      <CardStudio />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/publisher" element={<PublisherLayout />}>
          <Route index element={<PublisherDashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
