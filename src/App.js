
import Home from './pages_route/home/Home';
import Partner from './pages_route/partner/Partner';
import About from './pages_route/about/About';
import Gyms from './pages_route/gyms/Gyms';
import Plans from './pages_route/plans/Plans';
import Trainers from './pages_route/trainer/Trainers';
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
        <Route path="/partner" element={<Partner/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gyms" element={<Gyms/>}/>
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
