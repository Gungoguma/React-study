import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link
          className="App-link"
          to="/page1"
        >
          inline style
        </Link>
        <Link
          className="App-link"
          to="/page2"
        >
          javascript object
        </Link>
        <Link
          className="App-link"
          to="/page3"
        >
          CSS Stylesheet, className
        </Link>
      </header>
    </div>
  );
}

export default App;
