/* eslint-disable react/prop-types */
import "../Estilos/Trabajo/Titulos-textos.css"
import { Link } from "react-router-dom"
import data from "../JSON/data.json"
import { useDarkMode } from "../Hooks/useDarkMode"
import LazyLoad from "react-lazyload";
import { useState } from "react";
// import LazyLoad from 'react-lazyload';

export default function Trabajo(props){

    const {darkMode} = useDarkMode();
    const colorTag = darkMode ? `#949494` : `#454545`
    const colorBoton = darkMode ? `#fafafa` : `#121212`
    const colortextoBoton = darkMode ? `#121212` : `#fafafa`
    const [trabajos, setTrabajos] = useState(false);

    return(
        <div className="Trabajo" id="trabajo">
   
        <h2 className="Titulo_trabajo" style={{ color: `${props.colortexto}` }}>Mi trabajo</h2>
        <div className="Content-Trabajo">

        <span className="DescripcionTrabajo" style={{ color: `${props.colortexto}` }}>Aquí hay una recopilación de <b>mi experiencia profesional</b> que demuestra mi pasión por crear productos y sitios web memorables de alta calidad,<b> un reflejo de mi dedicación.</b> He tenido la oportunidad de participar en diversas iniciativas que han permitido poner en práctica mis <b>habilidades creativas y técnicas. </b>
        <br /> <br />
            Mi trayectoria profesional en el campo del <b>diseño UX/UI y el desarrollo frontend </b>en el <b>sector fintech ha sido una verdadera fuente de aprendizaje y crecimiento</b> en el ámbito financiero y tecnológico.</span>
        
            {data.slice(0,3).map(item => (
           
            <div className={item.reverse ? "contenedorTrabajos reverse" : "contenedorTrabajos"} key={item.id}> 
            
            <div className={item.reverse ? "loaderTrabajosReverse" : "LoaderTrabajos"}>
            <img src={item.CardArte} alt="Tarjeta" />
            </div>
           
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
            { item.path == "" ?  <a href={item.link} target="_blank" rel="noreferrer" > 
            <button style={{ background: `${colorBoton}` }} className="VerProyectoBoton" >
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
            <button style={{ background: `${colorBoton}` }} className="VerProyectoBoton">
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

            { trabajos ? (
            <>
                {data.slice(3).map(item => (
                <div className={item.reverse ? "contenedorTrabajos reverse" : "contenedorTrabajos"} key={item.id}> 
                    <LazyLoad offset={1000} height={1000} className={item.reverse ? "loaderTrabajosReverse" : "LoaderTrabajos"}>
                    <img src={item.CardArte} alt="Tarjeta" />
                    </LazyLoad>
                    <div className="textosCardTrabajo">
                    <div className="tituloTrabajoCard">
                        <LazyLoad offset={500} height={500}>
                        {darkMode ? (
                            item.LogoDark ? (
                            <img src={item.LogoDark} alt="logo" className="LogoimgT"/>  
                            ) : (
                            item.Logo ? (
                                <img src={item.Logo} alt="logo" className={item.LogoSmall ? "LogoimgTsmall" : "LogoimgT"}/>
                            ) : (
                                <h3 className="tituloCardTrabajo" style={{ color: `${props.colortexto}` }}>{item.tituloCard}</h3>
                            )
                            )
                        ) : (
                            item.Logo ? (
                            <img src={item.Logo} alt="logo" className={item.LogoSmall ? "LogoimgTsmall" : "LogoimgT"}/>
                            ) : (
                            <h3 className="tituloCardTrabajo" style={{ color: `${props.colortexto}` }}>{item.tituloCard}</h3>
                            )
                        )}
                        </LazyLoad>
                        <div className="tag">
                        {item.tagName === "Diseño UX/UI" ? (
                            <i className="uil uil-web-grid nav_icon" style={{ color: "#FCCA3F"}}></i>
                        ) : (
                            <i className="uil uil-brackets-curly nav_icon" style={{ color: "#8A97FF"}}></i>
                        )}
                        <h4 style={{ color: `${colorTag}` }}>{item.tagName}</h4>
                        </div>
                    </div>
                    <span className="descripcionCardTrabajo" dangerouslySetInnerHTML={{ __html: item.descripcion }} style={{ color: `${props.colortexto}` }}/>
                    {item.path === "" ? (
                        <a href={item.link} target="_blank" rel="noreferrer"> 
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
                        </button>
                        </a> 
                    ) : (
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
                        </button>
                        </Link>
                    )}
                    </div>
                </div>
                ))}
            </>
            ) : null}


        <button onClick={() => setTrabajos(!trabajos)} className="verMasBoton" style={{ background: `${colorBoton}` }}>
        {trabajos ? <span style={{ color: `${colortextoBoton}` }}>Ver menos</span> : <span style={{ color: `${colortextoBoton}` }}>Ver más</span>}
            <svg width="34" height="34" viewBox="0 0 74 74" fill={colortextoBoton} xmlns="http://www.w3.org/2000/svg">
                <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" 
                fill={colorBoton}></path>
            </svg>
        </button>
            
           
            
            
        </div>
    </div>
    )
    }