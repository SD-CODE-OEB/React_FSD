import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Carousel from "./Carousel";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
