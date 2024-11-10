import './App.css';
import CustomHeader from './components/CustomHeader';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="App">
      <CustomHeader></CustomHeader>
      <MainSection></MainSection>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
