/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../Estilos/Menu/Menu.css'



export default function Menu(props){
    const[toggle, setToggle] = useState(false)

    const menu = props.darkMode ? 'https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FmenuDark.svg?alt=media&token=2222580c-2ffa-422c-aa62-4ff15503cd64' :
     'https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FmenuLight.svg?alt=media&token=18e0ae88-5118-4202-b615-8e1ca978e027'

    return(
       <>
        <nav id="menu" className={toggle ? "nav_menu show-menu" : "nav_menu"} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
        <a href="#habilidades"  onClick={() => setToggle(!toggle)} style={{ color: `${props.colortexto}` }} className='nav_link'><i className="uil uil-file-alt nav_icon"></i>Habilidades</a>
		<a href="#trabajo"  onClick={() => setToggle(!toggle)} style={{ color: `${props.colortexto}` }} className='nav_link'><i className="uil uil-brackets-curly nav_icon"></i> Mi Trabajo</a>
		
        {/* <a href="#" className='logo_icon'><img 
            src= {props.icon}
            alt="logo"
            className="logo-menu"
			style={{width: "45px"}}/></a> */}
		<a href="#acerca"  onClick={() => setToggle(!toggle)} style={{ color: `${props.colortexto}` }} className='nav_link'><i className="uil uil-user nav_icon"></i>Acerca de mi</a>
		<a href="#contacto"  onClick={() => setToggle(!toggle)} style={{ color: `${props.colortexto}` }} className='nav_link'><i className="uil uil-message nav_icon"></i>Contacto</a>
        <i className="uil uil-times nav_close" onClick={() => setToggle(!toggle)} style={{ color: `${props.colortexto}` }}></i>

	</nav>
    <div className="nav_toggle" onClick={() => setToggle(!toggle)} style={{ color: `${props.colortexto}` }}>
    <img 
    src={menu}
    alt=''
    className='menu-movil'/></div>
    </>
    )
}