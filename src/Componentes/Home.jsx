/* eslint-disable react/prop-types */
import "../Estilos/Home/HomePage.css"
import "../Estilos/Home/Toggle.css"

import { motion } from "framer-motion"

export default function Home(props){
    // Fondo del Home
    const fondo = props.darkMode ? `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2FFondoBlanco.svg?alt=media&token=62775da3-f4fa-400c-9a92-12bf73af72df")`: `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2FFondoNegro.svg?alt=media&token=6c3c471d-5b05-4138-ba84-43aaa662d115")`

    // Color de fondo de todo el body
    document.body.style = props.darkMode ? `background-Color: #0b0b0c` : `background-Color: #f0f0f0`
    
    // Logo de luna
    let luna = props.darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/lunaDark.svg?alt=media&token=e59f9b0d-fc15-4488-9cd0-239bed026949" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/lunaLight.svg?alt=media&token=56f33537-39ac-42ed-b2c8-32a5d1c33927"

    // Logo del sol
    let sol = props.darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/solDark.svg?alt=media&token=f5188a83-abd4-4211-85a5-e467c34dfc23" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/solLight.svg?alt=media&token=54bcc591-dde5-43a0-8674-9813e4997f85"

    // Cursor personalizado
    

    return(
        // Nav que cambia el color del toggle
        <div className="Home" style={
        {backgroundImage: `${fondo}`}}>

{/*  // Ponemos un ternario para cambiar la clase, se pone un color por default con el nav sin clase y una con el nav con clase */}
            <nav className={props.darkMode ? "dark": ""} >

            
        {/* Toggle */}
            <div 
            className="toggler" 
            data-aos="fade-down" 
            data-aos-offset="100"
            data-aos-delay="30"
            data-aos-duration="900"
            data-aos-easing="ease-in">
            <p className="toggler--light"><img src={sol} alt="" className="toggle"/></p> 

            <div className="toggler--slider" onClick={props.toggleDarkMode} > <motion.div className="toggler--slider--circle" layout transition={spring}> </motion.div> </div>

            <p className="toggler--dark"><img src={luna} alt="" className="toggle"/></p>
            </div>
            </nav>
        {/* Toggle */}

        <div className="Textos-Home">
        <h1 style={{ color: `${props.colortexto}` }} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave} className={props.darkMode ? "SombraDark" : "SombraLight"} >Hola, Soy Uriel <br/> <span>Web Developer</span></h1>



        <div style={{ color: `${props.colortexto}` }} className="lista-home" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}
        data-aos="fade-up" 
        data-aos-offset="100"
        data-aos-delay="30"
        data-aos-duration="900"
        data-aos-easing="ease-in">
            <span><b className="verde"> UX/UI</b> Designer </span>
            <span><b className="guinda"> Ingeniero</b> en computación</span>
            <span><b className="azul"> Front End</b> Developer</span>
            
        </div>
        </div>
        </div>
    )
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };