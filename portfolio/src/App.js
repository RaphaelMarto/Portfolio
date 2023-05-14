import './App.css';
import Portfolio from './components/portfolio/portfolio';
import Navbar from './components/Navbar/navbar';
import Footer from './components/footer/footer';
import About from './components/About/about';
import Home from './components/Home/home';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
      <Footer/>
    </>
  );
}

export default App;
