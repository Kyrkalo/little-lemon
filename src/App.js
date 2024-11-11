import './App.css';
import CustomHeader from './components/CustomHeader';
import MainSection from './components/MainSection';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <CustomHeader></CustomHeader>
          <MainSection></MainSection>
      </BrowserRouter>
    </div>
  );
}

export default App;
