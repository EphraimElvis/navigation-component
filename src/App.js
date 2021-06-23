import "./App.css";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
      </Router>
    </div>
  );
};

export default App;
