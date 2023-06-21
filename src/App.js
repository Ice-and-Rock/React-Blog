import './index.css' 
import Navbar from "./components/Navbar.js"
import Home from "./components/Home.js";
import Create from "./components/Create.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>

            <Route exact path="/" element={<Home />} />
            
            <Route path="/create" element={<Create />} /> 
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;