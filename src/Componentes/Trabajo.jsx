/* eslint-disable react/prop-types */
import "../Estilos/Trabajo/Titulos-textos.css"
import { Link } from "react-router-dom"
import data from "../JSON/data.json"
import { useDarkMode } from "../Hooks/useDarkMode"
import LazyLoad from "react-lazyload";
import Skeleton from '@mui/material/Skeleton';
import { useState } from "react";
// import LazyLoad from 'react-lazyload';

export default function Trabajo(props){

    const {darkMode} = useDarkMode();
    const colorTag = darkMode ? `#949494` : `#454545`
    const colorBoton = darkMode ? `#fafafa` : `#121212`
    const colortextoBoton = darkMode ? `#121212` : `#fafafa`
    const [imageLoaded, setImageLoaded] = useState(false);
    
    return(
        <div className="Trabajo" id="trabajo">

        <h2 className="Titulo_trabajo" style={{ color: `${props.colortexto}` }}>Mi trabajo</h2>
        <div className="Content-Trabajo">

        <span className="DescripcionTrabajo" style={{ color: `${props.colortexto}` }}>Aquí hay una recopilación de <b>mi experiencia profesional</b> que demuestra mi pasión por crear productos y sitios web memorables de alta calidad,<b>un reflejo de mi dedicación.</b> He tenido la oportunidad de participar en diversas iniciativas que han permitido poner en práctica mis <b>habilidades creativas y técnicas. </b>
        <br /> <br />
            Mi trayectoria profesional en el campo del <b>diseño UX/UI y el desarrollo frontend </b>en el <b>sector fintech ha sido una verdadera fuente de aprendizaje y crecimiento</b> en el ámbito financiero y tecnológico.</span>
        
            {data.map(item => (
           
            <div className={item.reverse ? "contenedorTrabajos reverse" : "contenedorTrabajos"} key={item.id}> 
            
            {!imageLoaded && (
            <Skeleton variant="rectangular" animation="wave" width={"100%"} height={"100%"}/>
            )}

            <LazyLoad offset={1000} height={1000} className={item.reverse ? "loaderTrabajosReverse" : "LoaderTrabajos"}>
            <img
            src={item.CardArte}
            alt="Tarjeta"
            className="CardTrabajo"
            onLoad={() => setImageLoaded(true)}
            style={imageLoaded ? {} : { display: 'none' }}
            />
            </LazyLoad>
           
            <div className="textosCardTrabajo">

            <div className="tituloTrabajoCard">
            <LazyLoad offset={500} height={500}>
            { darkMode ? ( item.LogoDark ? <img src={item.LogoDark} alt="logo" className="LogoimgT"/>  : 
             
            ( item.Logo ? <img src={item.Logo} alt="logo" className={item.LogoSmall ? "LogoimgTsmall" : "LogoimgT"}/> : <h3 className="tituloCardTrabajo" style={{ color: `${props.colortexto}` }}>{item.tituloCard}</h3> )) : 
            
            (item.Logo ? <img src={item.Logo} alt="logo" className={item.LogoSmall ? "LogoimgTsmall" : "LogoimgT"}/> : <h3 className="tituloCardTrabajo" style={{ color: `${props.colortexto}` }}>{item.tituloCard}</h3>)}
            </LazyLoad>
            <div className="tag" >
                {item.tagName === "Diseño UX/UI" ? <i className="uil uil-web-grid nav_icon" style={{ color: "#FCCA3F"}}></i> : <i className="uil uil-brackets-curly nav_icon" style={{ color: "#8A97FF"}}></i>}
                <h4 style={{ color: `${colorTag}` }}>{item.tagName}</h4>
            </div>
            </div>
            <span className="descripcionCardTrabajo" dangerouslySetInnerHTML={{ __html: item.descripcion }} style={{ color: `${props.colortexto}` }}/>

            {/* * Boton */}
            { item.path == "" ?  <a href={item.link} target="_blank" rel="noreferrer"> 
            <button style={{ background: `${colorBoton}` }}>
            <div className="svg-wrapper-1">
            <div className="svg-wrapper">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24" >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                fill={colortextoBoton}
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
            </svg>
            </div>
            </div>
            <span style={{ color: `${colortextoBoton}` }}>Ver proyecto</span>
            </button> </a> 
            :
            <Link key={item.id} to={`${item.path}`}>
            <button style={{ background: `${colorBoton}` }}>
            <div className="svg-wrapper-1">
            <div className="svg-wrapper">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24" >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                fill={colortextoBoton}
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
            </svg>
            </div>
            </div>
            <span style={{ color: `${colortextoBoton}` }}>Ver proyecto</span>
            </button> </Link>}
            {/*  Boton */}
            </div>
            </div>

            ))}
        </div>
    </div>
    )
    }