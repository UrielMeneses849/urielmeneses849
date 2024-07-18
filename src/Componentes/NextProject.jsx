/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDarkMode } from "../Hooks/useDarkMode"
import Logo from "../JSON/data.json"
// import LazyLoad from "react-lazyload"
export default function Siguiente(props){

    const {darkMode} = useDarkMode();
    const colorBoton = darkMode ? `#fafafa` : `#121212`
    const colortextoBoton = darkMode ? `#121212` : `#fafafa`
    const trabajo = Logo.find(item => item.id === props.id);

return(
<div className="flex between" style={{margin: "2% 0", borderTop: "2px dotted", padding: "2%"}}> 

    <Link to="/" style={{textDecoration: "none"}}>
    <button className="verMasBoton" style={{ background: `${colorBoton}` }}>
    <span style={{ color: `${colortextoBoton}` }}>Home</span>
    <svg width="34" height="34" viewBox="0 0 74 74" fill={colortextoBoton} xmlns="http://www.w3.org/2000/svg">
    <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
    <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" 
    fill={colorBoton}></path>
    </svg>
    </button>
    </Link>

    {trabajo.path == "" ?  <a href={trabajo.link} target="_blank" rel="noreferrer"> 
    <div className="BotonSiguiente flex center" style={{cursor: "pointer", margin: 0}}>
    <h2 className="siguienteP" > Siguiente proyecto:</h2>
    { darkMode ? ( trabajo.LogoDark ? <img src={trabajo.LogoDark} alt="logo" className="LogoimgT"/>  :   
    ( trabajo.Logo ? <img src={trabajo.Logo} alt="logo" className={ trabajo.LogoSmall ? "LogoimgTsmall" : "LogoimgT2"} /> : <h3 className="tituloCardTrabajo" style={{ color: `${props.colortexto}` }}>{trabajo.tituloCard}</h3> )) : 
    ( trabajo.Logo ? <img src={trabajo.Logo} alt="logo" className={ trabajo.LogoSmall ? "LogoimgTsmall" : "LogoimgT2"} /> : <h3 className="tituloCardTrabajo" style={{ color: `${props.colortexto}` }}>{trabajo.tituloCard}</h3>)} 
    </div>
    </a> 
    :
    <Link to={trabajo.path} style={{textDecoration: "none", color:{colorBoton}}}>
    <div className="BotonSiguiente flex center" style={{cursor: "pointer", margin: 0}}>
    <h2 className="siguienteP" > Siguiente proyecto:</h2>
    { darkMode ? ( trabajo.LogoDark ?  <img src={trabajo.LogoDark} alt="logo" className="LogoimgT"/>  :   
    ( trabajo.Logo ? <img src={trabajo.Logo} alt="logo" className={trabajo.logoSmall ? "LogoimgTsmall" : "LogoimgT2"} /> : <h3 className="tituloCardTrabajo" style={{ color: `${props.colortexto}` }}>{trabajo.tituloCard}</h3> )) : 
    (trabajo.Logo ? <img src={trabajo.Logo} alt="logo" className={trabajo.logoSmall ? "LogoimgTsmall" : "LogoimgT2"} /> : <h3 className="tituloCardTrabajo" style={{ color: `${props.colortexto}` }}>{trabajo.tituloCard}</h3>)}
    </div>
    </Link> }

    

</div>
)}