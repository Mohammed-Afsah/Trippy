import './App.css';
import Navbar from '../src/Components/Navbar'
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import Service from './routes/Service';
import Contact from './routes/Contact';
import About from './routes/About';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
