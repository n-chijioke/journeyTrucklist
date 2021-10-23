import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import DashSideBar from "./components/DashSideBar";
import Header from "./components/Header";



function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__page">
        <DashSideBar />
        <Dashboard />
      </div>
        
    </div>
  );
}

export default App;
