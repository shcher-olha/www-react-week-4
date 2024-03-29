import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Vaduz" />

        <footer>
          This project is created by {""}
          <a
            href="https://github.com/shcher-olha"
            target="_blank"
            rel="noreferrer"
          >
            Shcherbak Olha
          </a>
          and is {""}
          <a
            href="https://github.com/shcher-olha/www-react-week-4"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}


