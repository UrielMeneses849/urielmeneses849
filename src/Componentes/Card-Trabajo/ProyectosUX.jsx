/* eslint-disable react/prop-types */

import "../../Estilos/Trabajo/EstilosCards/Proyectos.css"

export default function ProyectosUX(props) {
    window.addEventListener("keyup", function(event){
        if (event.keyUp == 27){
            //Cierras tu ventana
            {props.toggleTab(0)}
        }
    });
    return(
        
        <div className="cardActiva-content" style={{backgroundColor: `${props.fondoCard}`, color: `${props.colortexto}` }}>
            <i className="uil uil-times services__modal-closed" onClick={()=> props.toggleTab(0)}></i>

        <h3 className="services__modal-title">Proyectos de experiencia de usuario</h3>
        <p className="services__modal-description">Creación de productos</p>

        <h3 className="services__modal-title2">HoodiesCool</h3>
       <a href="https://xd.adobe.com/view/e9acc4ba-c43f-4f17-b6a0-bfb464907660-bcff/?fullscreen" target="blank">
        <div className="HC" 
       onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}>
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Maquetas%2FHC.svg?alt=media&token=a8f2e70b-2375-4378-b517-951d204ee0ba" alt="" />
        </div> </a>

        <h3 className="services__modal-title2">CineFast</h3>
        <a href="https://www.figma.com/proto/cDMAMVG72eNKxT0Uohbn4x/Prototipo-A.F-Cine?page-id=0%3A1&node-id=1-499&viewport=350%2C70%2C0.14&scaling=scale-down&starting-point-node-id=1%3A2"
        target="blank" className="enlace"><div className="HC CF" 
        onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}>
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Maquetas%2FCF.svg?alt=media&token=f2aeb3d2-dc63-4e4e-b242-57ff723502f3" alt="" />
            <span className="texto-cf">
       CineFast es el primer proyecto  de mi carrera como diseñador, el cual he decidido no actualizar para contrastar la evolución que he tenido diseñando productos.
        </span>
        </div></a>

        </div>
    )
}