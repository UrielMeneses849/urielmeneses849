/* eslint-disable react/prop-types */
import "../Estilos/Trabajo/Trabajo-cards.css"
import "../Estilos/Trabajo/Titulos-textos.css"
import "../Estilos/Trabajo/CrdsTrabajo.css"

import MaquetasUI from "./Card-Trabajo/MaquetasUI";
import ProyectosUX from "./Card-Trabajo/ProyectosUX"
import DailyDesign from "./Card-Trabajo/DailyDesign"
import ChallengesProgra from "./Card-Trabajo/ChallengesProgra"

import { useState } from "react";

export default function Trabajo(props){
    
    const [modal, setModal] = useState(0);

    const toggleTab = (index) => {
        setModal(index);
    }

    console.log(toggleTab)
    return(
        <div className="Trabajo" id="trabajo">

        <h2 className="Titulo_trabajo" style={{ color: `${props.colortexto}` }} data-aos="fade-down" 
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in">Mi trabajo</h2>

        <h3 className="subtitulo" data-aos="fade" 
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">Da click y conoce mi trabajo</h3>
        {/* Contenedor 1 */}
        <div className="container-maquetas">

        <div className="maquetas-ui" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}
        data-aos="flip-left" 
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        onClick={() => toggleTab(1)}>
            <h2 className="Titulo-trabajo"> Maquetas UI </h2>
            <h3 className="Sub">Maquetas hechas en figma y programadas con React</h3>
            <div className="container-img">
            <img className="UI"
            alt="ui"
            src="./images/Trabajo/UI.svg"
            />
            </div>
            </div>

            <div className={modal === 1 ? "card-activa active-card" : "services__modal" }>
                
                <MaquetasUI 
                toggleTab = {toggleTab}
                textEnterVisitar = {props.textEnterVisitar}
                textLeave = {props.textLeave}/>

            </div>

            <img className="fondo1"
            alt="fondo1"
            src="./images/fondo1.svg" />
        </div>

        {/* Contenedor 2 */}
        <div className="container-ux">
        <img className="fondo2"
            alt="fondo2"
            src="./images/fondo2.svg"/>
            <div className="proyectos-ux" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}
            data-aos="flip-right" 
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            onClick={() => toggleTab(2)}>
            <div className="textos-ux">
                <h2 className="Titulo-ux"> Proyectos UX </h2>
                <h3 className="Sub-ux">Creando productos con la <b>metodología Design Thinking</b> y aplicando distintas <b>investigaciones, métodos  de ideación, pruebas de usabilidad y prototipado </b></h3>
            </div>
            <div className="container-img">
                <img className="UX"
                alt="ux"
                src="./images/Trabajo/UX.svg"
                />
            </div>
            </div>
            <div className={modal === 2 ? "card-activa active-card" : "services__modal" }>
                
                <ProyectosUX 
                toggleTab = {toggleTab}
                textEnterVisitar = {props.textEnterVisitar}
                textLeave = {props.textLeave}/>

            </div>
        </div>

        {/* Contenedor 3 */}
        <div className="container-dd">
            <div className="daily-design" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}
            data-aos="flip-left" 
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            onClick={() => toggleTab(3)}>
            <h2 className="Titulo-trabajo"> Daily Design</h2>
            <h3 className="Sub-dd"><b>Explorando la Creatividad Cotidiana </b>Una recopilación que representan mi compromiso y la mejora continua.</h3>
            <div className="container-img">
            <img className="DD"
            alt="ui"
            src="./images/Trabajo/DD.gif"
            />
            </div>
            </div>
            <div className={modal === 3 ? "card-activa active-card" : "services__modal" }>
                
                <DailyDesign toggleTab = {toggleTab}/>

            </div>
            <img className="fondo3"
            alt="fondo3"
            src="./images/fondo3.svg" />
        </div>

        {/* Container 4 */}
        <div className="container-challenge">
        <img className="fondo4"
            alt="fondo1"
            src="./images/fondo4.svg" />
        <div className="challenges-programacion" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}
        data-aos="flip-right" 
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        onClick={() => toggleTab(4)}>
            <h2 className="Titulo-trabajo"> Challenges Programacion </h2>
            <h3 className="Sub-cp">Desafíos de programación para crear sitios con una lógica más compleja </h3>
            <div className="container-img">
            <img className="progra"
            alt="ui"
            src="./images/Trabajo/CP.svg"
            />
            </div>
            </div>
            <div className={modal === 4 ? "card-activa active-card" : "services__modal" }>
                
            <ChallengesProgra 
            toggleTab = {toggleTab}
            textEnterVisitar = {props.textEnterVisitar}
            textLeave = {props.textLeave}/>

            </div>
        </div>
        
        </div>
    )
}