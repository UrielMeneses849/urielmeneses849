// estados
import React, { useEffect,useState, Suspense } from "react"
import { motion } from "framer-motion"
// Componentes
import Home from "./Componentes/Home"
const Habilidades = React.lazy(() => import("./Componentes/Habilidades/Habilidades"))
import Menu from "./Componentes/Menu"
const Trabajo = React.lazy(() => import("./Componentes/Trabajo"))
const About = React.lazy(() => import("./Componentes/About"))
const Footer = React.lazy(() => import("./Componentes/Footer"))



// Variables globales
import './Estilos/VariablesGlobales.css'


function App() {
  // Const de estado para el darkMode
  const [darkMode, setDarkMode] = useState(false)
  // Cambio de estado logico
function toggleDarkMode(){
   setDarkMode(darkMode => !darkMode)
}
let icon = darkMode ? "./images/logoBlanco.svg" : "./images/logo.svg"

let colortexto = darkMode ? "#e0e0e0" : "#0b0b0c"

let colortextoSub =  darkMode ? "#F0f0f0" : "#3f3f3f"

// Cursor

const[mousePosition, setMousePosition] = useState({
  x:0,
  y:0
});

const [cursorVariant, setCursorVariant] = useState("default")
 
useEffect(() => {

const mouseMove = e => {
setMousePosition({
  x: e.clientX,
  y: e.clientY
})
}

window.addEventListener("mousemove", mouseMove);

return () => {
  window.removeEventListener("mousemove", mouseMove);
}
}, []);

const variants = {
  default: {
    x: mousePosition.x - 16,
    y: mousePosition.y - 16,
    backgroundColor: darkMode ? "white" : "black"
  },
  text:{
    height: 100,
    width: 100,
    x: mousePosition.x - 50,
    y: mousePosition.y - 50,
    backgroundColor: "white",
    mixBlendMode: "difference",
    
  },
  link:{
    height: 100,
    width: 100,
    x: mousePosition.x - 50,
    y: mousePosition.y - 50,
    backgroundColor: "#C7C8CC"
  }
}

const[cursorText, setCursorText] = useState("");

function textEnter (){
  setCursorVariant("text");  
}  
function textLeave(){
  setCursorVariant("default")
  setCursorText("")
} 

function textEnterVisitar (){
  setCursorVariant("link");
  setCursorText("Abrir");
}


// Cursor
  return (
    <>
    
    {/* Pasar props textenter y textleave */}
      <Home 
      darkMode = {darkMode}
      toggleDarkMode = {toggleDarkMode}
      colortexto = {colortexto}
      colortextoSub = {colortextoSub}
      textEnter = {textEnter}
      textLeave = {textLeave}
      />
      
      <Menu
      darkMode = {darkMode}
      icon = {icon} 
      colortexto = {colortexto}
      textEnter = {textEnter}
      textLeave = {textLeave}/>

      <Suspense fallback={<div>Loading...</div>}>
      <Habilidades 
      darkMode = {darkMode}
      colortexto = {colortexto}
      textEnter = {textEnter}
      textLeave = {textLeave}/> 
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
      <Trabajo 
      darkMode = {darkMode}
      colortexto = {colortexto}
      textEnter = {textEnter}
      textLeave = {textLeave}
      textEnterVisitar = {textEnterVisitar}/>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
      <About 
      darkMode = {darkMode}
      colortexto = {colortexto}
      textEnter = {textEnter}
      textLeave = {textLeave}
      />
      </Suspense>
     
      <Suspense fallback={<div>Loading...</div>}>
      <Footer 
      darkMode = {darkMode}
      colortexto = {colortexto}
      textEnter = {textEnter}
      textLeave = {textLeave}
      />
      </Suspense>

      <motion.div 
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      >
      <span className="cursorText">{cursorText}</span>
      </motion.div>
    </>
  )
}

export default App
