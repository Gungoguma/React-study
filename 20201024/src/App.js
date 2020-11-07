import logo from './logo.svg';
import './App.css';
import Text from './test';

function App() { //함수 컴포넌트
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text />
      </header>
    </div>
  );
}

export default App;
