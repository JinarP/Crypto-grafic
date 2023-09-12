import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function Button () {
  return (
    <button className='btn btn-danger'>sss</button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Button />
        <h1>nanan</h1>
      </header>
      
      
    </div>
  );
}

export default App;
