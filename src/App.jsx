import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Trainers from "./pages/trainers/Trainers";
import Pricing from "./pages/pricing/Pricing";
import Contact from "./pages/contact/Contact";

import Navbar from "./components/navbar/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </>
  );
};

export default App
