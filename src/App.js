import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Mainbody from "./mainbody/Mainbody";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainBodyPage">
        <Mainbody />
      </div>
    </div>
  );
}

export default App;
