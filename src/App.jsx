// estados
import { useEffect,useState } from "react"
import { motion } from "framer-motion"
// Componentes
import Home from "./Componentes/Home"
import Menu from "./Componentes/Menu"
import Trabajo from "./Componentes/Trabajo"
import About from "./Componentes/About"
import Habilidades from "./Componentes/Habilidades/Habilidades"
import Footer from "./Componentes/Footer"

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
console.log(mousePosition)
 
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

      <Habilidades 
      darkMode = {darkMode}
      colortexto = {colortexto}
      textEnter = {textEnter}
      textLeave = {textLeave}/> 
      
      <Trabajo 
      darkMode = {darkMode}
      colortexto = {colortexto}
      textEnter = {textEnter}
      textLeave = {textLeave}
      textEnterVisitar = {textEnterVisitar}/>

      <About 
      darkMode = {darkMode}
      colortexto = {colortexto}
      textEnter = {textEnter}
      textLeave = {textLeave}
      />

      <Footer 
      darkMode = {darkMode}
      colortexto = {colortexto}
      textEnter = {textEnter}
      textLeave = {textLeave}
      />

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
