/* eslint-disable react/prop-types */
import "../Estilos/Acerca/Acerca.css"
import LazyLoad from 'react-lazyload';
import { useDarkMode } from "../Hooks/useDarkMode";
export default function About(props){

    const {darkMode} = useDarkMode();
    let foto = darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/PersonaD.png?alt=media&token=de5e09b4-089b-4117-8b47-2651da6f31f8" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/PersonaL.png?alt=media&token=1abc60a5-b469-46c3-8868-7afa2acd9a16"
    return(
        <div className="container-about" id="acerca">

        <h2 className="Titulo_trabajo Acerca_de" style={{ color: `${props.colortexto}`}} >Acerca de mi</h2>
        <LazyLoad height={500} offset={100} className="container-foto-texto">
            <div className="textos-about" style={{ color: `${props.colortexto}`}}> Soy un <b className="TextoGuinda">Ingeniero en computación</b> de la <b className={props.darkMode ? "VerdeDark" : "VerdeLight"}> Escuela Superior de Ingeniería Mecánica y Eléctrica</b> con una sólida formación en diseño de experiencia
            de usuario <b>(UX/UI)</b> por parte de <b className="G">G</b><b className="o">o</b><b className="o2">o</b><b className="G">g</b><b className="l">l</b><b className="o">e</b>, 
            también formado en el programa <b className="Oracle">Oracle Next Education</b> como desarrollador <b>Front-End.</b> <br /> 

           <b> Trabajo en el sector Fintech</b> en la creación de productos de originación de credito y distintos servicios financieros, con un enfoque centrado en el usuario y un ojo atento a los detalles tanto en el <b>diseño</b> como en la <b>programación</b>, me esfuerzo por proporcionar <b>experiencias digitales atractivas. </b>
        </div>
        <>
             <img className="imagen-about" alt="imagen"
            src={foto} />
        </>
        </LazyLoad>
        </div>
    )
}