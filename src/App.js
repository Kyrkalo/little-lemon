import './App.css';
import CustomHeader from './components/CustomHeader';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import NotReadyYet from './components/NotReadyYet';
import Booking from './components/Booking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <CustomHeader></CustomHeader>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/menu' element={<NotReadyYet/>}/>
            <Route path='/booking' element={<Booking/>}/>
            <Route path='/orderonline' element={<NotReadyYet/>}/>
            <Route path='/login' element={<NotReadyYet/>}/>
          </Routes>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
