import React from "react";
import "./styles.css";
import YTCounter from "./components/Youtube/YTCounter";

export default function App() {
  return (
    <div className="App">
      <h2>
        Sab TV has <YTCounter /> subscribers
      </h2>
    </div>
  );
}
