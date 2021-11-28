import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <Weather defaultCity="New York" />
        </div>
        <footer>
          <a
            className="github"
            href="https://github.com/Serendipity11/weather-react"
            target="blank"
            rel="noopener norefferer"
          >
            Open source code
          </a>{" "}
          by ToriS
        </footer>
      </div>
    </div>
  );
}

export default App;
