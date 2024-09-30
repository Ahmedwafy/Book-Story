import './App.css';
import NavBar from './Components/Nav-Bar/Nav-Bar';
import Process from './Components/Process/Process';
import OurWork from './Components/Our_Work/Our_Work';
import Pricing from './Components/Pricing/Pricing';
import Home from './Components/Home/Home';
import Request from './Components/Request-Quote/Request';
import About from './Components/About/About';
import NewReleases from './Components/NewReleases/NewReleases';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Request' element={<Request />} />
          <Route path='/TheProcess' element={<Process />} />
          <Route path='/OurWork' element={<OurWork />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/NewReleases' element={<NewReleases />} />
        </Routes>

        
    </BrowserRouter>
  );
}

export default App;
