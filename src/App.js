import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <Weather defaultCity="New York" />
        </div>
      </div>
      <footer>
        This project is made by ToriS and
        <a
          href="https://github.com/Serendipity11/weather-react"
          target="blank"
          rel="noopener norefferer"
        >
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
