/* eslint-disable react/prop-types */
import "../Estilos/Trabajo/Trabajo-cards.css"
import "../Estilos/Trabajo/Titulos-textos.css"
import "../Estilos/Trabajo/CrdsTrabajo.css"

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import MaquetasUI from "./Card-Trabajo/MaquetasUI";
import ProyectosUX from "./Card-Trabajo/ProyectosUX"
import DailyDesign from "./Card-Trabajo/DailyDesign"
import ChallengesProgra from "./Card-Trabajo/ChallengesProgra"

import Finvero from "./Finvero/Finvero";
import OpenFinance from "./OpenFinance/OpenFinance";

import { useState } from "react";
import LazyLoad from "react-lazyload";

export default function Trabajo(props){
    
    const [open4, setOpen4] = useState(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);

    const [open5, setOpen5] = useState(false);
    const handleOpen5 = () => setOpen5(true);
    const handleClose5 = () => setOpen5(false);

    const [open6, setOpen6] = useState(false);
    const handleOpen6 = () => setOpen6(true);
    const handleClose6 = () => setOpen6(false);

    const [open7, setOpen7] = useState(false);
    const handleOpen7 = () => setOpen7(true);
    const handleClose7 = () => setOpen7(false);

    const fondoCard = props.darkMode ? `#494949` : `#eeeeee`

    const pdf = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Curriculum%20espa%C3%B1ol.pdf?alt=media&token=d248ec36-4dff-4c4a-9597-e43ae9ab015b";
    
    return(
        <div className="Trabajo" id="trabajo">

        <h2 className="Titulo_trabajo" style={{ color: `${props.colortexto}` }}>Mi trabajo</h2>

        {/* <h3 className="subtitulo" >Da click y conoce mi trabajo</h3> */}
        {/* Contenedor 1 */}

        <OpenFinance darkMode={props.darkMode} colortexto={props.colortexto}/>
        <Finvero darkMode={props.darkMode} colortexto={props.colortexto}/>
        
    <div className="container-general">

        <div className="container1">

        <div height={200} className="maquetas-ui" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave} onClick={handleOpen4}>
        <h2 className="Titulo-trabajo"> Maquetas UI </h2>
        <h3 className="Sub">Maquetas hechas en figma y programadas con React</h3>
        </div>

        <Modal open={open4} onClose={handleClose4}>
        <Box className="modal-contenedor contenedor2">
        <MaquetasUI fondoCard = {fondoCard} colortexto = {props.colortexto} handleClose = {handleClose4}/>
        </Box>
        </Modal>

        <div className="daily-design" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave} onClick={handleOpen5}>
        <h2 className="Titulo-trabajo"> Daily Design</h2>
        <h3 className="Sub derecha"><b>Explorando la Creatividad Cotidiana </b>Una recopilación que representan mi compromiso y la mejora continua.</h3>
        </div>

        <Modal open={open5} onClose={handleClose5}>
        <Box className="modal-contenedor contenedor2">
        <DailyDesign fondoCard = {fondoCard} colortexto = {props.colortexto} handleClose = {handleClose5}/>
        </Box>
        </Modal>

        </div>

        {/* Contenedor 2 */}
        <div className="container2">

        <div className="proyectos-ux" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave} onClick={handleOpen6}>
        <h2 className="Titulo-trabajo center"> Proyectos UX </h2>
        <h3 className="Sub">Creando productos con distintas <b>investigaciones, métodos  de ideación y pruebas de usabilidad.</b></h3>
        </div>
        
        <Modal open={open6} onClose={handleClose6}>
        <Box className="modal-contenedor contenedor2">
        <ProyectosUX fondoCard = {fondoCard} colortexto = {props.colortexto} handleClose = {handleClose6}/>
        </Box>
        </Modal>
            
        </div>


        {/* Contenedor 3 */}
        <div className="container1">
        <a href={pdf} target="blank" className="pdf curriculum"><div onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}>
        <h2 className="Titulo-trabajo"> Curriculum </h2>
        <LazyLoad offset={400} once> <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2Fcv.svg?alt=media&token=abad38cf-b6b5-4c94-ab94-98e38e636be0" alt="" /> </LazyLoad>
        </div></a>

        <div className="challenges-programacion" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave} onClick={handleOpen7}>
        <h2 className="Titulo-trabajo"> Programacion </h2>
        <h3 className="Sub progra">Desafíos de programación para crear sitios con una lógica más compleja </h3>
        </div>
            
        <Modal open={open7} onClose={handleClose7}>
        <Box className="modal-contenedor contenedor2">
        <ChallengesProgra fondoCard = {fondoCard} colortexto = {props.colortexto} handleClose = {handleClose7}/>
        </Box>
        </Modal>
         </div>
        </div>


    <div className="containerMovil">

    <div height={200} className="maquetas-ui" onClick={handleOpen4} >
        <h2 className="Titulo-trabajo"> Maquetas UI </h2>
        <h3 className="Sub">Maquetas hechas en figma y programadas con React</h3>
    
        </div>

        <div className="daily-design"  onClick={handleOpen5}>
        <h2 className="Titulo-trabajo"> Daily Design</h2>
        <h3 className="Sub Sub2"><b>Explorando la Creatividad Cotidiana </b>Una recopilación que representan mi compromiso y la mejora continua.</h3>
        
        </div>
        
        <div className="proyectos-ux"  onClick={handleOpen6}>
        <h2 className="Titulo-trabajo"> Proyectos UX </h2>
        <h3 className="Sub">Creando productos aplicando <b>investigaciones, métodos  de ideación y pruebas de usabilidad </b></h3>
        </div>

        <a href={pdf} target="blank" className="curriculum pdf"><div>
        <h2 className="Titulo-trabajo"> Curriculum </h2>
   
        <LazyLoad offset={400} once style={{display: "flex", justifyContent: "center"}}>
             <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2Fcv.svg?alt=media&token=abad38cf-b6b5-4c94-ab94-98e38e636be0" alt="" /> 
        </LazyLoad>
        </div> </a>
        <div  className="challenges-programacion" onClick={handleOpen7}>
        <h2 className="Titulo-trabajo"> Programacion </h2>
        <h3 className="Sub Sub2">Desafíos de programación para crear sitios con una lógica más compleja </h3>
        </div>

    </div>
    </div>
    )
}