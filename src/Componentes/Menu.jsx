/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../Estilos/Menu/Menu.css'
import "../Estilos/Home/Toggle.css"
import { useDarkMode } from '../Hooks/useDarkMode';
import LazyLoad from 'react-lazyload';


export default function Menu(props){
    const [menuOpen, setMenuOpen] = useState(false);

    const {darkMode} = useDarkMode();

    const toggleMenu = () => { setMenuOpen(!menuOpen);};

    const pulpo = darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2Fpulpoblanco.svg?alt=media&token=7227427d-9f19-490a-a4c7-350357b1f404" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2Fpulponegro.svg?alt=media&token=ef27da5f-61a3-4bb2-9a52-45704a605336"
    
    const colorMenuMovil = darkMode ? "#202020" : "#fafafa"
    return(
       <>
        <nav id="menu" className="nav_menu" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
        <LazyLoad offset={500} height={500}> 
        <img src={pulpo} alt="" />
        </LazyLoad>

        <div className="menuNav">
        <a href="#habilidades" style={{ color: `${props.colortexto}` }} className='nav_link'>Habilidades</a>
		<a href="#trabajo" style={{ color: `${props.colortexto}` }} className='nav_link'>Mi Trabajo</a>
		<a href="#acerca" style={{ color: `${props.colortexto}` }} className='nav_link'>Acerca de mi</a>
		<a href="#contact" style={{ color: `${props.colortexto}` }} className='nav_link'>Contacto</a>

        <div className="separator"></div>

        <label className="switch" >
        <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
        <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
        <input type="checkbox" className="input" onClick={props.toggleDarkMode}/>
        <span className="slider" ></span>
        </label>
      
        </div>
	</nav>
    
    <nav className="menuMovil">

      <button className="open-button" onClick={toggleMenu} style={{ color: `${props.colortexto}` }}>
        &#9776;
      </button>
      <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleMenu} style={{ color: `${props.colortexto}` }}><i className="uil uil-times-circle"></i></button>
        <div className="menu-content" style={{backgroundColor: `${colorMenuMovil}`}}>
        <div>
          <h2 style={{ color: `${props.colortexto}` }}>Uriel Meneses</h2>
          <ul>
            <li><a href="#habilidades" style={{ color: `${props.colortexto}` }} className='nav_link' onClick={toggleMenu}><i className="uil uil-file-alt nav_icon"></i>Habilidades</a></li>
            <li><a href="#trabajo" style={{ color: `${props.colortexto}` }} className='nav_link' onClick={toggleMenu}><i className="uil uil-brackets-curly nav_icon"></i>Trabajo</a></li>
            <li><a href="#acerca" style={{ color: `${props.colortexto}` }} className='nav_link' onClick={toggleMenu}><i className="uil uil-user nav_icon"></i>Acerca de mi</a></li>
            <li><a href="#contact" style={{ color: `${props.colortexto}` }} className='nav_link' onClick={toggleMenu}><i className="uil uil-message nav_icon"></i>Contacto</a></li>
          </ul>
          </div>
          <div className="pulpoycontact">
          <LazyLoad offset={500} height={500}> 
            <img src={pulpo} alt="" />
          </LazyLoad>
            <h3>@urielmeneses849 | 2022</h3>
        </div>

        </div>

        
    </div>
    
   
   
        <label className="toggle" htmlFor="switch" >
            <input id="switch" className="input" type="checkbox" onClick={props.toggleDarkMode}/>
            <div className="icon icon--moon" >
                <svg height="28" width="28" fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fillRule="evenodd"></path>
                </svg>
            </div>
        
            <div className="icon icon--sun">
                <svg height="28" width="28" fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                </svg>
            </div>
        </label>
    
    </nav>
   


    </>
    )
}

