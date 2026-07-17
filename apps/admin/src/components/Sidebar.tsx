import logo from "../assets/logo.png";

export default function Sidebar() {

  const menu = [
    "Dashboard",
    "Master Cards",
    "Card Studio",
    "Card Generator",
    "Marketplace",
    "Collection",
    "Customer Service",
    "Settings"
  ];

  return (
    <aside
      style={{
        width: 250,
        background: "#12061d",
        color: "#fff",
        padding: 20,
        minHeight: "100vh",
        borderRight: "1px solid #2f184d"
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: 30
        }}
      >
        <img
          src={logo}
          alt="Quest Demon"
          style={{
            width: 120,
            height: 120,
            objectFit: "contain",
            marginBottom: 12
          }}
        />

        <h2
          style={{
            margin: 0,
            color: "#f5c542"
          }}
        >
          QUEST DEMON
        </h2>

        <small style={{ color: "#b8a7ff" }}>
          Publisher CMS
        </small>
      </div>

      {menu.map((item) => (
        <button
          key={item}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "10px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            background: "#6d28d9",
            color: "#fff",
            fontWeight: 700
          }}
        >
          {item}
        </button>
      ))}
    </aside>
  );
}
