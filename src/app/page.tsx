
export default function Home() {
  const teams = [
    "Yankees",
    "Red Sox",
    "Orioles",
    "Rays",
    "Blue Jays",
    "Phillies",
    "Braves",
    "Mets",
    "Nationals",
    "Marlins",
    "Cubs",
    "Reds",
    "Brewers",
    "Pirates",
    "Cardinals",
    "Dodgers",
    "Padres",
    "Giants",
    "Diamondbacks",
    "Rockies",
  ];

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        ⚾ Topps Team Checklists
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Browse Topps Baseball card checklists by MLB team.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
          gap: "15px",
        }}
      >
        {teams.map((team) => (
          <div
            key={team}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,.1)",
            }}
          >
            {team}
          </div>
        ))}
      </div>
    </main>
  );
}
