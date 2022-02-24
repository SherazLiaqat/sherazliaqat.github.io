
import './App.css';
import Dropdown from './Components/Dropdown';
import Guidlines from './Components/Guidlines';
import {Route,Routes} from 'react-router-dom';
import MalasiyaGuidline from './Components/MalasiyaGuidline';
import PakistanGuidline from './Components/PakistanGuidline';
import SaudiArabiaGuidline from './Components/SauiArabiaGuidline'

function App() {
  return (
    <div className="App">
     <Dropdown/>
     {/* <Guidlines/> */}
     {/* <Routes>
     <Route path="/malasiyaGuidline" element={<MalasiyaGuidline />}></Route>
     <Route path="/pakistanGuidline" element={<PakistanGuidline />}></Route>
     <Route path="/saudiArabiaGuidline" element={<SaudiArabiaGuidline />}></Route>
        </Routes> */}
    </div>
  );
}

export default App;
