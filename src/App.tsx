import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MPall from "./pages/MPall";
import HelpServices from "./pages/HelpServices";
import CreateContent from "./pages/CreateContent";
import Footer from "./components/Footer";
import AuthProvider from "./context/AuthProvider";
import EditContent from "./pages/EditContent";
import MPindividual from "./pages/MPindividual";
import CreateComment from "./pages/CreateComment";
import EditComment from "./pages/EditComment";
import NavbarMobile from "./components/NavbarMobile";
import "./styles.css";

function App() {
  return (
    <AuthProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <NavbarMobile />
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
            <Route path="/content" element={<MPall />} />
            <Route path="/content/:id" element={<MPindividual />} />
            <Route path="/help" element={<HelpServices />} />

            <Route path="/createcontent" element={<CreateContent />} />
            <Route path="/content/:id/edit" element={<EditContent />} />
          </Routes>
        </Navbar>
        <Footer />
      </LocalizationProvider>
    </AuthProvider>
  );
}

export default App;
