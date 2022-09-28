import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./assets/scss/theme.scss";
import { publicRoutes } from "./routes";

function App() {
  return (
    <div className="Rimac">
      <div>
        <Navbar />
          <Routes>
            {publicRoutes.map((route, idx) => (
              <Route
                path={route.path}
                key={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
      </div>
    </div>
  );
}

export default App;
