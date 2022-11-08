import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SecondSection from './components/SecondSection';
import FourthSection from './components/FourthSection';
import SeventhSection from './components/SeventhSection';
import {Routes, Route} from "react-router-dom";
import EightSection from './components/EightSection';











function App() {
  return (
    <>
      <Navbar />

    
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/services" element={<SecondSection />} />
          <Route path='/features' element={<FourthSection />} />
          <Route path="/price" element={<SeventhSection />} />
          <Route path='/faq' element={<EightSection />} />
      </Routes>
  
      

    </>
  );
}

export default App;
