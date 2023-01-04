import logo from './logo.svg';
import './App.css';
import WithSubnavigation from './component/Navbar/navbar';
import About from './component/About Me/About';
import SplitScreen from './component/top/hero.top';
function App() {
  return (
    <div className="App">
     <WithSubnavigation />
    <SplitScreen/>
    <About/>
    </div>
  );
}

export default App;
