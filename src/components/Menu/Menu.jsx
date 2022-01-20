import React from 'react'
import './Menu.scss'
const Menu = ({setMenuOpen, menuOpen}) => {
    
    return (
        <div className={`menu ${menuOpen ? "active" : null}`}>
            <ul>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#intro">Intro</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#portfolio">Portafolio</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#works">Competencias</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#testimonials">Tecnologias</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#contact">Contacto</a>
                </li>
            </ul>
            
        </div>
    )
}

export default Menu
