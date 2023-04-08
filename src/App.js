import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div >
      <Navbar />
      {/* <Home /> */}
      {/* <About /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
