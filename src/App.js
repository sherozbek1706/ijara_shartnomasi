import "./app.css";
import { Route, Routes as Router } from "react-router-dom";
import { createContext, useState } from "react";
import { Document } from "./pages/document";
import { Home } from "./pages/home";

export const ThemeContext = createContext(null);

function App() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [series, setSeries] = useState("");
  const [sum, setSum] = useState(0);
  const [month, setMonth] = useState(0);

  return (
    <ThemeContext.Provider
      value={{
        firstName,
        setfirstName,
        lastName,
        setLastName,
        series,
        setSeries,
        sum,
        setSum,
        month,
        setMonth,
      }}
    >
      <div className="container">
        <div className="List">
          <Router>
            <Route path="/document" element={<Document />} />
            <Route exact path="/" element={<Home />} />
          </Router>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
