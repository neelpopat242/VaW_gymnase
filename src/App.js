
import Home from './pages_route/home/Home';
import Contact from './pages_route/contact/Contact';
import About from './pages_route/about/About';
import Gallery from './pages_route/gallery/Gallery.js';
import Plans from './pages_route/plans/Plans';
import Trainers from './pages_route/trainers/Trainers';
import './index.css'
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/trainers" element={<Trainers/>}/>
      </Routes>
     {/* <Home/>
     <About/>
     <Contact/>
     <Gallery/>
     <Plans/>
      <Trainers/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
