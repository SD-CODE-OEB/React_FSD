import "./App.css";
import CatAPI from "./CatAPI";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Register from "./Register";
// import Carousel from "./Carousel";
import Payment from "./Payment";

function App() {
  return (
    <CatAPI />
    // <>
    //   <Register />
    //   <Router>
    //     <Routes>
    //       <Route path="/carousel" element={<Carousel />} />
    //     </Routes>
    //   </Router>
    // </>
  );
}

export default App;
