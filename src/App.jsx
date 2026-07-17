import { Routes, Route, Link } from "react-router-dom";

const Home = () => <h2>Dashboard Quest Demon</h2>;
const Cards = () => <h2>Master Cards</h2>;
const Generator = () => <h2>Card Generator</h2>;
const Marketplace = () => <h2>Marketplace</h2>;
const Collection = () => <h2>Collection</h2>;

export default function App() {
  return (
    <div style={{display:"flex",minHeight:"100vh",fontFamily:"Arial"}}>
      <aside style={{width:260,background:"#2a1746",padding:20}}>
        <h2 style={{color:"#fff"}}>Quest Demon</h2>

        <nav style={{display:"flex",flexDirection:"column",gap:12}}>
          <Link to="/">Dashboard</Link>
          <Link to="/cards">Master Cards</Link>
          <Link to="/generator">Card Generator</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/collection">Collection</Link>
        </nav>
      </aside>

      <main style={{flex:1,padding:30}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </main>
    </div>
  );
}
