import "./index.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Create from "./components/Create.js";
import BlogDetails from "./components/BlogDetails.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";

function App() {
  return (

    <Router>
    <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
           
            <Route path="/create" element={<Create />} />

            <Route path="/blogs/:id" element={<BlogDetails />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
