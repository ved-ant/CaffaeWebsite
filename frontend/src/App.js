import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import GuruPage from "./pages/GuruPage/GuruPage";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Nav from "./components/Navbar/Nav";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Homepage />
            </div>
          }
        ></Route>
        <Route path="/guru" element={<GuruPage></GuruPage>}></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
      </Routes>
    </>
  );
}

export default App;
