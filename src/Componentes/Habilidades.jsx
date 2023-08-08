/* eslint-disable react/prop-types */
import { useState } from "react"
import "../Estilos/Habilidades/Habilidades-card.css"

// Cards de contenido oculto
import Diseñador from "./Cards_skills/Diseñador"
import Desarrollador from "./Cards_skills/Desarrollador"
import Ingeniero from "./Cards_skills/Ingeniero"

export default function Habilidades(props){
    const fondoCard = props.darkMode ? `#121212` : `#eeeeee`

    const bordeCard = props.darkMode ? `1px solid #f9f9f9` : `1px solid #121212`

    const [modal, setModal] = useState(0);

    const toggleTab = (index) => {
        setModal(index);
    }

    

    return(
    <section className="skills" id="habilidades">
         <h2 className="Titulo_trabajo" style={{ color: `${props.colortexto}` }} data-aos="fade-down" 
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in">Habilidades</h2>

        <h3 className="subtitulo" data-aos="fade" 
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">Mi nivel tecnico</h3>
        
        <div className="services__container container grid" >

            {/* Contenedor 1 */}
        <div className="services__content" style={{backgroundColor: `${fondoCard}`, border: `${bordeCard}`}} onMouseEnter={props.textEnter} 
        onMouseLeave={props.textLeave}
>
                <div>
        {/* Parte visible de la card  */}
                    <i className="uil uil-web-grid services__icon" style={{ color: `${props.colortexto}`}}></i>
                    <h3 className="services__title" style={{ color: `${props.colortexto}` }}>UX <br /> Designer</h3>
                    </div> 
                    <span className="services__button" onClick={() => toggleTab(1)} style={{ color: `${props.colortexto}` }}>Ver más
                    <i className="uil uil-arrow-right services__button-icon"></i></span>

            {/* Contenido oculto de la card */}
            <div className={modal === 1 ? "services__modal active-modal" : "services__modal" }>
                
                    <Diseñador toggleTab = {toggleTab}/>

            </div>
        </div>

            {/* Contenedor 2 */}
        <div className="services__content" style={{backgroundColor: `${fondoCard}`, border: `${bordeCard}`}} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}
        >
                <div>
                    <i className="uil uil-arrow services__icon" style={{ color: `${props.colortexto}`}}></i>
                    <h3 className="services__title" style={{ color: `${props.colortexto}`}}>Web <br /> Developer</h3>
                    </div> 
                    <span className="services__button" onClick={() => toggleTab(2)} style={{ color: `${props.colortexto}`}}>Ver más <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={modal === 2 ? "services__modal active-modal" : "services__modal" }>

                    <Desarrollador toggleTab = {toggleTab}/>
 
            </div>
        </div>

            {/* Contenedor 3 */}
            <div className="services__content" style={{backgroundColor: `${fondoCard}`, border: `${bordeCard}`}} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}
            >
                <div>
                    <i className="uil uil-graduation-cap services__icon" style={{color: `${props.colortexto}`}}></i>
                    <h3 className="services__title" style={{color: `${props.colortexto}`}}>Ingeniero en <br /> Computación</h3>
                    </div> 
                    <span className="services__button" onClick={() => toggleTab(3)} style={{color: `${props.colortexto}`}}>Ver más <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={modal === 3 ? "services__modal active-modal" : "services__modal" }>

                    <Ingeniero toggleTab = {toggleTab}/>
                   
                </div>
            </div>
        </div>
    </section>
    )
}