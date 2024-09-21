import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";

export const Home = () => {
  const navigate = useNavigate();
  const {
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
  } = useContext(ThemeContext);

  const handlesenddocument = () => {
    console.log(firstName);

    navigate("/document");
  };

  return (
    <div className="Home">
      <div className="Form">
        <input
          type="text"
          placeholder="firstname"
          onChange={(e) => setfirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="lastname"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="series"
          onChange={(e) => setSeries(e.target.value)}
        />
        <input
          type="text"
          placeholder="Month"
          onChange={(e) => setMonth(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sum"
          onChange={(e) => setSum(e.target.value)}
        />
        <button type="submit" onClick={handlesenddocument}>
          Tasdiqlash
        </button>
      </div>
    </div>
  );
};
