import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div >
      <Navbar />
      {/* <Home /> */}
      <About />
      <Footer />
    </div>
  );
}

export default App;
