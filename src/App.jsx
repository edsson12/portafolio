import { useState } from "react";
import TopBar from "./components/TopBar/TopBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import './App.scss'


function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [abrirModal, setAbrirModal] = useState(false);
  const [data, setData] = useState([]);

  const handleItems = (id) => {

    setAbrirModal(true)
    
  };
  
  
  return (
    <div>
      <TopBar
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      />
      <Menu
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      />
      
     
      <div className="o-sections">
        <Intro/>
        <Portfolio handleItems={handleItems}
        setAbrirModal={setAbrirModal}
        abrirModal={abrirModal}
        data={data}
        setData={setData}
        />
        <Works/>
        <Testimonials/>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
