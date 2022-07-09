import './App.css';
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Password from './Components/Password';
import About from './Components/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Password />} />
          <Route exact path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
