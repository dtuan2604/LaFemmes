import logo from "./logo.png";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="site.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>La Femmes</p>
        </a>
      </header>
    </div>
  );
}
