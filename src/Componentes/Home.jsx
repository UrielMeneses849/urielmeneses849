/* eslint-disable react/prop-types */
import "../Estilos/Home/HomePage.css"
import "../Estilos/Home/Toggle.css"

import Banner from "./Banner"
import { motion } from "framer-motion"


export default function Home(props){
   
    // Color de fondo de todo el body
    document.body.style = props.darkMode ? `background-Color: #15171C` : `background-Color: #f0f0f0`

    // Logo de luna
    let luna = props.darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/lunaDark.svg?alt=media&token=e59f9b0d-fc15-4488-9cd0-239bed026949" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/lunaLight.svg?alt=media&token=56f33537-39ac-42ed-b2c8-32a5d1c33927"

    // Logo del sol
    let sol = props.darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/solDark.svg?alt=media&token=f5188a83-abd4-4211-85a5-e467c34dfc23" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/solLight.svg?alt=media&token=54bcc591-dde5-43a0-8674-9813e4997f85"

    return(
        // Nav que cambia el color del toggle
        <div className="Home" >

{/*  // Ponemos un ternario para cambiar la clase, se pone un color por default con el nav sin clase y una con el nav con clase */}
            <nav className={props.darkMode ? "dark": ""} >

            
        {/* Toggle */}
            <div 
            className="toggler" >
            <p className="toggler--light"><img src={sol} alt="" className="toggle"/></p> 

            <div className="toggler--slider" onClick={props.toggleDarkMode} > <motion.div className="toggler--slider--circle" layout transition={spring}> </motion.div> </div>

            <p className="toggler--dark"><img src={luna} alt="" className="toggle"/></p>
            </div>
            </nav>
        {/* Toggle */}

        <Banner darkMode={props.darkMode} />

        </div>
    )
}

const spring = {
    type: "damping",
    stiffness: 400,
    damping: 30
  };