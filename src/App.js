// import logo from './logo.svg';
import  './App.css';
import {Heads} from './components/Header';
import {Cont} from './components/Content';
import {Foot} from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
    <div>
      <Heads />
      <Cont />
      <Foot />
    </div>
      </header>
    </div>
  );
}

export default App;
