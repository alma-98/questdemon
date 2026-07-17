import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function PublisherLayout() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#080812",
        color: "#fff"
      }}
    >
      <Sidebar />

      <div style={{ flex: 1, padding: 30 }}>
        <div
          style={{
            background: "#161622",
            padding: 20,
            borderRadius: 12,
            marginBottom: 20
          }}
        >
          <h1 style={{ margin: 0 }}>Quest Demon Publisher CMS</h1>

          <div style={{ marginTop: 10 }}>
            <Link to="/publisher" style={{ color: "#c084fc" }}>
              Dashboard
            </Link>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
