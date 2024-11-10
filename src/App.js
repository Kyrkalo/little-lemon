import './App.css';
import CustomHeader from './components/CustomHeader';
import MainSection from './components/MainSection';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomHeader></CustomHeader>
        <MainSection></MainSection>
      </div>
    </BrowserRouter>
  );
}

export default App;
