import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MPall from "./pages/MPall";
import HelpServices from "./pages/HelpServices";
import CreateContent from "./pages/CreateContent";
import Footer from "./components/Footer";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Navbar>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/all" element={<MPall />} />
          <Route path="/help" element={<HelpServices />} />

          <Route path="/createcontent" element={<CreateContent />} />
        </Routes>
      </Navbar>
      <Footer />
    </AuthProvider>
  );
}

export default App;
