import About from "./Components/About";
import Certificate from "./Components/Certificate";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import { Nav } from "./Components/Nav";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Nav/>
    <Home/>
    <About/>
    <Skills/>
    <Certificate/>
    <Work/>
    <Contact/>
    </BrowserRouter>
    </div>
  );
}

export default App;
