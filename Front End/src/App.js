import "./styles.scss";
import "./App.css";
import Root from "./components/Root";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Root />
      </div>
    </BrowserRouter>
  );
}

export default App;
