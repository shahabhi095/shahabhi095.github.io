// import logo from './logo.svg';
import './App.css';
import WithSubnavigation from './component/Navbar/navbar';
import About from './component/About Me/About';
import SplitScreen from './component/top/hero.top';
import { selectColor } from './component/styles/styles';
import CaptionCarousel from "./component/Skills/Skills";
import SimpleThreeColumns from './component/Projects/Projects';
function App() {
  return (
    <div className="App" style={{ backgroundColor: selectColor.Theme1 }}>
      <div className="box_shado">
        <WithSubnavigation />
        <SplitScreen />
        <About />
        <CaptionCarousel />
        <SimpleThreeColumns/>
      </div>
    </div>
  );
}

export default App;
