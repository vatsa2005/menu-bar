import './App.css';
import Menu from './dist/Menu';

function App() {
  return (
    <div className="App">
      <Menu size={100} iconColor="green" bgColor="black" color="red">
        <h1>Someone</h1>
      </Menu>
    </div>
  );
}

export default App;
