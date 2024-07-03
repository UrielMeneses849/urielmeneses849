/* eslint-disable react/prop-types */
import "../Estilos/Trabajo/Trabajo-cards.css"
import "../Estilos/Trabajo/Titulos-textos.css"
import "../Estilos/Trabajo/CrdsTrabajo.css"

// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';

// import MaquetasUI from "./Card-Trabajo/MaquetasUI";
// import ProyectosUX from "./Card-Trabajo/ProyectosUX"

// import Finvero from "./Finvero/Finvero";
// import OpenFinance from "./OpenFinance/OpenFinance";
import data from "../JSON/data.json"

// import { useState, useEffect } from "react";



export default function Trabajo(props){

    
    
    // const [open4, setOpen4] = useState(false);
    // const handleOpen4 = () => setOpen4(true);
    // const handleClose4 = () => setOpen4(false);

    // const [open5, setOpen5] = useState(false);
    // const handleOpen5 = () => setOpen5(true);
    // const handleClose5 = () => setOpen5(false);

    // const [open6, setOpen6] = useState(false);
    // const handleOpen6 = () => setOpen6(true);
    // const handleClose6 = () => setOpen6(false);

    // const [open7, setOpen7] = useState(false);
    // const handleOpen7 = () => setOpen7(true);
    // const handleClose7 = () => setOpen7(false);

    // const fondoCard = props.darkMode ? `#494949` : `#eeeeee`

    const colorTag = props.darkMode ? `#949494` : `#454545`
    const colorBoton = props.darkMode ? `#fafafa` : `#121212`
    const colortextoBoton = props.darkMode ? `#121212` : `#fafafa`

    // const pdf = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Curriculum%20espa%C3%B1ol.pdf?alt=media&token=d248ec36-4dff-4c4a-9597-e43ae9ab015b";
    
    return(
        <div className="Trabajo" id="trabajo">

        <h2 className="Titulo_trabajo" style={{ color: `${props.colortexto}` }}>Mi trabajo</h2>

        {/* <h3 className="subtitulo" >Da click y conoce mi trabajo</h3> */}
        {/* Contenedor 1 */}

        <div className="Content-Trabajo">

        <span className="DescripcionTrabajo" style={{ color: `${props.colortexto}` }}>Aquí hay una recopilación de <b>mi experiencia profesional</b> que demuestra mi pasión por crear productos y sitios web memorables de alta calidad,<b>un reflejo de mi dedicación.</b> He tenido la oportunidad de participar en diversas iniciativas que han permitido poner en práctica mis <b>habilidades creativas y técnicas. </b>
        <br /> <br />
            Mi trayectoria profesional en el campo del <b>diseño UX/UI y el desarrollo frontend </b>en el <b>sector fintech ha sido una verdadera fuente de aprendizaje y crecimiento</b> en el ámbito financiero y tecnológico.</span>
        
            {data.map(item => (
           
            <div className={item.reverse ? "contenedorTrabajos reverse" : "contenedorTrabajos"} key={item.id}> 
            <img src={item.CardArte} alt="Tarjeta" className="CardTrabajo"/>

            <div className="textosCardTrabajo">

            <div className="tituloTrabajoCard">
            { item.Logo ? <img src={item.Logo} alt="" className={item.LogoSmall ? "LogoimgTsmall" : "LogoimgT"}/> : <h3 className="tituloCardTrabajo" style={{ color: `${props.colortexto}` }}>{item.tituloCard}</h3> }
            
            <div className="tag" >
                {item.tagName === "Diseño UX/UI" ? <i className="uil uil-web-grid nav_icon" style={{ color: "#FCCA3F"}}></i> : <i className="uil uil-brackets-curly nav_icon" style={{ color: "#8A97FF"}}></i>}
                <h4 style={{ color: `${colorTag}` }}>{item.tagName}</h4>
            </div>

            </div>

            <span className="descripcionCardTrabajo" dangerouslySetInnerHTML={{ __html: item.descripcion }} style={{ color: `${props.colortexto}` }}/>

            {/* * Boton */}
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
            {/*  Boton */}
            </div>
            </div>

            ))}
      
        </div>

        {/* <OpenFinance darkMode={props.darkMode} colortexto={props.colortexto}/>
        <Finvero darkMode={props.darkMode} colortexto={props.colortexto}/> */}
    </div>
    )
}