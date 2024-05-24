import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Screens/HomePage";
import Breed from "./Screens/Breed";
import ContactUs from "./Screens/ContactUs";
import Gallery from "./Screens/Gallery";
import ParentDogs from "./Screens/ParentDogs";
import Puppies from "./Screens/Puppies";
import Resources from "./Screens/Resources";
import News from "./Screens/News";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/breed" element={<Breed />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/parent-dogs" element={<ParentDogs />} />
          <Route path="/puppies" element={<Puppies />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
