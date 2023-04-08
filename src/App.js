import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import About from './pages/About';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/booking" element={<Booking />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
