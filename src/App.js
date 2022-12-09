import logo from './logo.svg';
import './App.css';
import Home from './components/home-v1';
import Thankyou from './Thankyou';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    
      <BrowserRouter>
      <Routes>
              <Route path= '/' element={<Home/>} />
              <Route path= '/Thankyou' element={<Thankyou/>} />
            </Routes>
            </BrowserRouter>
    
  );
}

export default App;
