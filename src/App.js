import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebarlink from "./Sidebarlink";
import Router from "./components/Router";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainBodyPage">
        <Sidebarlink />
        <div className="kadhaiContents">
          <div className="kadhaiCategories"> </div>
          <div className="kadhaiItemsBody">
            <Router />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
