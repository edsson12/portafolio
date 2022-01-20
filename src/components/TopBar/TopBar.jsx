import React from "react";
import "./TopBar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

const TopBar = ({setMenuOpen, menuOpen}) => {
    /*const handleHamburguer = ()=>{
        setMenuOpen(!menuOpen)
    }*/
  return (
    <div className={`o-topbar ${menuOpen ? "active":null}`} >
      <div className="wrapper">
        <div className="o-left">
          <a href="#intro" className="logo">
            .Cored
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+57 316 819 4533</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon"/>
            <span>Edsson.cortes@gmail.com</span>
          </div>
        </div>

        <div className="o-right">

            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line1"></span>
                <span className="line1"></span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
