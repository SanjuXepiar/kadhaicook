import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebarlink from "./Sidebarlink";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Playlist from "./components/Playlist";
import Watchlater from "./components/Watchlater";
import History from "./components/History";
import Liked from "./components/Liked";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebarlink />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<Watchlater />} />
        <Route path="/history" element={<History />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </div>
  );
}

export default App;
