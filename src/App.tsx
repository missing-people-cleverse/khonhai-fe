import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MPall from "./pages/MPall";
import HelpServices from "./pages/HelpServices";
import CreateContent from "./pages/CreateContent";
import Footer from "./components/Footer";
import MPindividual from "./pages/MPindividual";

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/content" element={<MPall />} />
          <Route path="/content/:id" element={<MPindividual />} />
          <Route path="/help" element={<HelpServices />} />

          <Route path="/createcontent" element={<CreateContent />} />
        </Routes>
      </Navbar>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
