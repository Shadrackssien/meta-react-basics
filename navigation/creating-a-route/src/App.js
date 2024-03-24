import AboutMe from "./AboutMe";
import HomePage from "./HomePage";
import Contact from "./Contact";
import {Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About Me</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       
    </div>
  );
}

export default App;
