/* eslint-disable react/prop-types */
import "../Estilos/Home/HomePage.css"
import "../Estilos/Home/Toggle.css"

import { motion } from "framer-motion"

export default function Home(props){
    // Fondo del Home
    const fondo = props.darkMode ? `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/fondoBlanco.svg?alt=media&token=d2caa56e-25c9-4a1a-96e5-b0f376498d85")`: `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/fondo.svg?alt=media&token=e50a76e6-1705-4a57-8134-e05426eedac3")`

    // Icono de la esquina
    let icon = props.darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/logoBlanco.svg?alt=media&token=12752dca-ce65-4a7c-a4ad-c57ef4dfd23c" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/logo.svg?alt=media&token=14170856-340e-4b5c-b014-f087cfce9158"

    // Color de fondo de todo el body
    document.body.style = props.darkMode ? `background-Color: #0b0b0c` : `background-Color: #fafafa`
    
    // Logo de luna
    let luna = props.darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/lunaDark.svg?alt=media&token=e59f9b0d-fc15-4488-9cd0-239bed026949" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/lunaLight.svg?alt=media&token=56f33537-39ac-42ed-b2c8-32a5d1c33927"

    // Logo del sol
    let sol = props.darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/solDark.svg?alt=media&token=f5188a83-abd4-4211-85a5-e467c34dfc23" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/solLight.svg?alt=media&token=54bcc591-dde5-43a0-8674-9813e4997f85"

    // Cursor personalizado
    

    return(
        // Nav que cambia el color del toggle
        <div className="Home" style={
                {backgroundImage: `${fondo}`}}>
            <nav 
            // Ponemos un ternario para cambiar la clase, se pone un color por default con el nav sin clase y una con el nav con clase
            className={props.darkMode ? "dark": ""}
        >

            <img 
            src= {icon}
            alt="logo"
            className="logo"
            data-aos="fade-down" 
        data-aos-offset="100"
        data-aos-delay="30"
        data-aos-duration="900"
        data-aos-easing="ease-in"/>
        {/* Toggle */}
            <div 
                className="toggler" 
                data-aos="fade-down" 
                data-aos-offset="100"
                data-aos-delay="30"
                data-aos-duration="900"
                data-aos-easing="ease-in">
                <p className="toggler--light"><img src={sol}
                alt=""
                className="toggle"/></p> 
                <div 
                    className="toggler--slider"
                    // Llamado de la funcion
                    onClick={props.toggleDarkMode}
                    >
                    <motion.div className="toggler--slider--circle" layout transition={spring}></motion.div>
                </div>
                <p className="toggler--dark"><img src={luna}
                alt=""
                className="toggle"/></p>
            </div>
        </nav>
        {/* Toggle */}

        <div className="Textos-Home">
        <h1 style={{ color: `${props.colortexto}` }} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}
        data-aos="fade-up" 
        data-aos-offset="100"
        data-aos-delay="30"
        data-aos-duration="900"
        data-aos-easing="ease-in">Hola, soy Uriel <br/> Web Developer</h1>
        <ul style={{ color: `${props.colortexto}` }} className="lista-home" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}
        data-aos="fade-up" 
        data-aos-offset="100"
        data-aos-delay="30"
        data-aos-duration="900"
        data-aos-easing="ease-in">
            <li> Diseñador de experiencia de usuario</li>
            <li>Desarrollador Front End</li>
            <li>Ingeniero en computación</li>
        </ul>
        </div>
        </div>
    )
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };