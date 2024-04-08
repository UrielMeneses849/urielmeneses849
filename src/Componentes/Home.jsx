/* eslint-disable react/prop-types */
import "../Estilos/Home/HomePage.css"
import "../Estilos/Home/Toggle.css"

import Banner from "./Banner"
import { motion } from "framer-motion"


export default function Home(props){
    // Fondo del Home
    const fondo = props.darkMode ? `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2FFondoBlanco.svg?alt=media&token=62775da3-f4fa-400c-9a92-12bf73af72df")`: `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2FFondoNegro.svg?alt=media&token=6c3c471d-5b05-4138-ba84-43aaa662d115")`

    // Color de fondo de todo el body
    document.body.style = props.darkMode ? `background-Color: #15171C` : `background-Color: #f0f0f0`

    // let fondoTag = props.darkMode ? "#494949" : "#fafafa"
    
    // Logo de luna
    let luna = props.darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/lunaDark.svg?alt=media&token=e59f9b0d-fc15-4488-9cd0-239bed026949" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/lunaLight.svg?alt=media&token=56f33537-39ac-42ed-b2c8-32a5d1c33927"

    // Logo del sol
    let sol = props.darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/solDark.svg?alt=media&token=f5188a83-abd4-4211-85a5-e467c34dfc23" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/solLight.svg?alt=media&token=54bcc591-dde5-43a0-8674-9813e4997f85"

    // let logoDiseñador = props.darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2FFigma.svg?alt=media&token=6a8f61ae-99e9-426c-b9e8-33bf5541da5f" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2FFigmaC.svg?alt=media&token=34246561-b120-4389-827d-74c5b4fb25f4"
    
    // let logoInge = props.darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2FInge.svg?alt=media&token=a666cb72-5e18-4ba9-aea5-2391fe4274e7" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2FIngeC.svg?alt=media&token=6cb5a61e-cc8a-4220-9a84-54259baaf5db"

    // let logoDeveloper = props.darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2FReact.svg?alt=media&token=858cebbe-a027-42a7-a4bf-80f048625a71" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2FReactC.svg?alt=media&token=4e357b55-b32c-4bc3-af79-4224a38b3d54"

    return(
        // Nav que cambia el color del toggle
        <div className="Home" style={
        {backgroundImage: `${fondo}`}}>

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
        {/* <div className="Textos-Home" >
        <h1 style={{ color: `${props.colortexto}` }} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave} className={props.darkMode ? "SombraDark" : "SombraLight"} >Hola, <br className="salto"/>Soy Uriel <br/> 
        <span>Web Developer</span></h1>

        <div style={{ color: `${props.colortextoSub}` }} className="lista-home" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
            <div className="contenedorLogoTexto">
            <img src={logoDiseñador} alt="" className="logos"/>
            <div className="LayoutTag" style={{backgroundColor: `${fondoTag}`}}> <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2Fuser.svg?alt=media&token=befb1503-5658-45e5-9a38-6b6d3e3e7ed9" alt="" /> 
            <span>Diseñador <b style={{color: "#3AEC69"}}>UX / UI</b></span></div> </div>

            <div className="contenedorLogoTexto">
            <img src={logoInge} alt="" className="logos" />
            <div className="LayoutTag" style={{backgroundColor: `${fondoTag}`}}> <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2Fcompu.svg?alt=media&token=b3e170b2-de0b-48f8-8f1e-0b021d948b2b" alt="" /> 
            <span> Ingeniero en <b style={{color: "#B60161"}}>Computación </b> </span></div> </div>
            
            <div className="contenedorLogoTexto">
            <img src={logoDeveloper} alt="" className="logos" />
            <div className="LayoutTag" style={{backgroundColor: `${fondoTag}`}}>  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2FDesarrollo.svg?alt=media&token=06216fa9-cb1c-4ce4-89ff-4a605ed1e921" alt="" /> 
            <span> Desarrollador <b style={{color: "#00CAFF"}}>Frontend</b> </span></div> </div>
            
        </div>
        </div> */}
        </div>
    )
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };