const cards = [
  ["Master Cards", "600"],
  ["Generated", "0"],
  ["Players", "0"],
  ["Orders", "0"],
];

export default function PublisherDashboard() {
  return (
    <>
      <h2>Publisher Dashboard</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 20
        }}
      >
        {cards.map(([title, value]) => (
          <div
            key={title}
            style={{
              background: "#1b1b2b",
              padding: 20,
              borderRadius: 16,
              border: "1px solid #6d28d9"
            }}
          >
            <h3>{title}</h3>
            <h1>{value}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
