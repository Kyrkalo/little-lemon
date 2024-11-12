import './App.css';
import CustomHeader from './components/CustomHeader';
import MainSection from './components/MainSection';
import { BrowserRouter } from 'react-router-dom'
import Testimonials from './components/Testimonials';
import IntroSection from './components/IntroSection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <CustomHeader></CustomHeader>
          <MainSection></MainSection>
          <Testimonials></Testimonials>
          <IntroSection></IntroSection>
      </BrowserRouter>
    </div>
  );
}

export default App;
