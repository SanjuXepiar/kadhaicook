import React from "react";
import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Mainbody from "./mainbody/Mainbody";
import Router from "./components/Router";
import Header from "./shared/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="router">
        <Router />
      </div>
    </div>
  );
}

export default App;
