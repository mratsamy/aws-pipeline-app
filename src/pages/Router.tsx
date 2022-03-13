import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@pages/Home/Home";
import About from "@pages/About/About";
import Header from "@components/Header/Header";
import Navbar from "@components/Navbar/Navbar";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
