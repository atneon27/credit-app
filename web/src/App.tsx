import { Routes, Route } from "react-router-dom"
import User from "./pages/user/User"
import Verifier from "./pages/verifier/Verifier"  
import Admin from "./pages/admin/Admin"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useNavbar } from "./components/NavbarProvider";
import NotFoundPage from "./components/NotFoundPage";
import UnderConstruction from "./components/UnderConstruction";

const App = () => {
  const navigate = useNavigate();
  const { profile } = useNavbar();

  useEffect(() => {
    if(profile === "user") {
      navigate("/")
    } else {
      navigate(`/${profile}`)
    }
  }, [profile])

  return (
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/verifier" element={<Verifier />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*/under-construction" element={<UnderConstruction />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  )
}

export default App; 
