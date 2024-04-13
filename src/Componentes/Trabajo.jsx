/* eslint-disable react/prop-types */
import "../Estilos/Trabajo/Trabajo-cards.css"
import "../Estilos/Trabajo/Titulos-textos.css"
import "../Estilos/Trabajo/CrdsTrabajo.css"

import MaquetasUI from "./Card-Trabajo/MaquetasUI";
import ProyectosUX from "./Card-Trabajo/ProyectosUX"
import DailyDesign from "./Card-Trabajo/DailyDesign"
import ChallengesProgra from "./Card-Trabajo/ChallengesProgra"

import Finvero from "./Finvero/Finvero";
import OpenFinance from "./OpenFinance/OpenFinance";

import { useState } from "react";

export default function Trabajo(props){
    
    const [modal, setModal] = useState(0);

    const toggleTab = (index) => {
        setModal(index);
    }

    const fondoCard = props.darkMode ? `#494949` : `#eeeeee`

    const pdf = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Curriculum%20espa%C3%B1ol.pdf?alt=media&token=d248ec36-4dff-4c4a-9597-e43ae9ab015b";
    console.log(toggleTab)
    return(
        <div className="Trabajo" id="trabajo">

        <h2 className="Titulo_trabajo" style={{ color: `${props.colortexto}` }}>Mi trabajo</h2>

        {/* <h3 className="subtitulo" >Da click y conoce mi trabajo</h3> */}
        {/* Contenedor 1 */}


        <OpenFinance darkMode={props.darkMode} colortexto={props.colortexto}/>
        <Finvero darkMode={props.darkMode} colortexto={props.colortexto}/>
        
    <div className="container-general">

        <div className="container1">

            <div className="maquetas-ui" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave} onClick={() => toggleTab(1)}>
            <h2 className="Titulo-trabajo"> Maquetas UI </h2>
            <h3 className="Sub">Maquetas hechas en figma y programadas con React</h3>
            </div>

            <div className={modal === 1 ? "card-activa active-card" : "services__modal" }>
                <MaquetasUI 
                darkmode = {props.darkMode}
                toggleTab = {toggleTab}
                textEnterVisitar = {props.textEnterVisitar}
                textLeave = {props.textLeave}
                fondoCard = {fondoCard} 
                colortexto= {props.colortexto}/>
            </div>

            <div className="daily-design" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave} onClick={() => toggleTab(3)}>
            <h2 className="Titulo-trabajo"> Daily Design</h2>
            <h3 className="Sub derecha"><b>Explorando la Creatividad Cotidiana </b>Una recopilación que representan mi compromiso y la mejora continua.</h3>
            
            </div>

            <div className={modal === 3 ? "card-activa active-card" : "services__modal" }>
                <DailyDesign toggleTab = {toggleTab}
                fondoCard = {fondoCard} 
                colortexto= {props.colortexto}
                />
            </div>
        
        </div>

        {/* Contenedor 2 */}
        <div className="container2">
            <div className="proyectos-ux" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave} onClick={() => toggleTab(2)}>
            
                <h2 className="Titulo-trabajo center"> Proyectos UX </h2>
                <h3 className="Sub">Creando productos con distintas <b>investigaciones, métodos  de ideación y pruebas de usabilidad.</b></h3>
            </div>
            <div className={modal === 2 ? "card-activa active-card" : "services__modal" }>
                
                <ProyectosUX 
                darkmode = {props.darkMode}
                toggleTab = {toggleTab}
                textEnterVisitar = {props.textEnterVisitar}
                textLeave = {props.textLeave}
                fondoCard = {fondoCard} 
                colortexto= {props.colortexto}/>

            </div>
        </div>


        {/* Contenedor 3 */}
       <div className="container1">

       <a href={pdf} target="blank" className="pdf curriculum"><div onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}>
            <h2 className="Titulo-trabajo"> Curriculum </h2>
            
        </div></a>


        <div className="challenges-programacion" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave} onClick={() => toggleTab(4)}>
            <h2 className="Titulo-trabajo"> Programacion </h2>
            <h3 className="Sub progra">Desafíos de programación para crear sitios con una lógica más compleja </h3>
            </div>

            <div className={modal === 4 ? "card-activa active-card" : "services__modal" }>
                 
            <ChallengesProgra 
            darkmode = {props.darkMode}
            toggleTab = {toggleTab}
            textEnterVisitar = {props.textEnterVisitar}
            textLeave = {props.textLeave}
            fondoCard = {fondoCard} 
            colortexto= {props.colortexto}/>
            </div>

         </div>

        </div>


    <div className="containerMovil">
    <div className="maquetas-ui" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave} onClick={() => toggleTab(1)}>
            <h2 className="Titulo-trabajo"> Maquetas UI </h2>
            <h3 className="Sub">Maquetas hechas en figma y programadas con React</h3>
            
            </div>

            <div className={modal === 1 ? "card-activa active-card" : "services__modal" }>
                <MaquetasUI 
                toggleTab = {toggleTab}
                textEnterVisitar = {props.textEnterVisitar}
                textLeave = {props.textLeave}
                fondoCard = {fondoCard} 
                colortexto= {props.colortexto}/>
            </div>

            <div className="daily-design" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave} onClick={() => toggleTab(3)}>
            <h2 className="Titulo-trabajo"> Daily Design</h2>
            <h3 className="Sub Sub2"><b>Explorando la Creatividad Cotidiana </b>Una recopilación que representan mi compromiso y la mejora continua.</h3>
            
            </div>

            <div className={modal === 3 ? "card-activa active-card" : "services__modal" }>
                <DailyDesign toggleTab = {toggleTab}
                fondoCard = {fondoCard} 
                colortexto= {props.colortexto}/>
            </div>
            
            <div className="proyectos-ux" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave} onClick={() => toggleTab(2)}>
            
                <h2 className="Titulo-trabajo"> Proyectos UX </h2>
                <h3 className="Sub">Creando productos aplicando <b>investigaciones, métodos  de ideación y pruebas de usabilidad </b></h3>
           
            
            </div>
            <div className={modal === 2 ? "card-activa active-card" : "services__modal" }>
                
                <ProyectosUX 
                toggleTab = {toggleTab}
                fondoCard = {fondoCard} 
                colortexto= {props.colortexto}/>

            </div>


            <a href={pdf} target="blank" className="curriculum pdf"><div onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}>
            <h2 className="Titulo-trabajo"> Curriculum </h2>
           
        </div></a>


        <div className="challenges-programacion" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave} onClick={() => toggleTab(4)}>
            <h2 className="Titulo-trabajo"> Programacion </h2>
            <h3 className="Sub Sub2">Desafíos de programación para crear sitios con una lógica más compleja </h3>
            </div>

            <div className={modal === 4 ? "card-activa active-card" : "services__modal" }>
                 
            <ChallengesProgra 
            toggleTab = {toggleTab}
            fondoCard = {fondoCard} 
                colortexto= {props.colortexto}
            
            /> </div>

    </div>
    </div>
    )
}