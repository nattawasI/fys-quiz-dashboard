import React from "react";
import { HashRouter } from "react-router-dom";
import "./style/app.scss";
import DashboardProvider from "./contexts/DashboardContext";
import Admin from "./pages/Admin";

function App() {
  return (
    <DashboardProvider>
      <HashRouter>
        <Admin />
      </HashRouter>
    </DashboardProvider>
  );
}

export default App;
