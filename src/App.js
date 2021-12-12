import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destinations from "./components/Destinations";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
