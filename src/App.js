import './App.css';
import Home from './Components/Pages/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Pages/Shared/Header/Header';
import About from './Components/Pages/About/About';
import Appiontment from './Components/Pages/Appiontment/Appiontment';
import Reviews from './Components/Pages/Reviews/Reviews';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import Login from './Components/Pages/LoginAndReg/Login/Login';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Registration from './Components/Pages/LoginAndReg/Registration/Registration';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appiontment" element={<Appiontment />} />
        <Route path="reviews" element={<Reviews/>} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
      <Footer></Footer>
      
    </div>
  );
} 

export default App;
