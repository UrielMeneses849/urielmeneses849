
import "../../Estilos/Trabajo/EstilosCards/Proyectos.css"

export default function ProyectosUX(props) {
    window.addEventListener("keyup", function(event){
        if (event.keyUp == 27){
            //Cierras tu ventana
            {props.toggleTab(0)}
        }
    });
    return(
        
        <div className="cardActiva-content" keyUp={()=> props.toggleTab(0)}>
            <i className="uil uil-times services__modal-closed" onClick={()=> props.toggleTab(0)}></i>

        <h3 className="services__modal-title">Proyectos de experiencia de usuario</h3>
        <p className="services__modal-description">Design Thinking, investigaciones y KPI's</p>

        <br />
        <br />
        <h3 className="services__modal-title2">HoodiesCool</h3>
       <a href="https://xd.adobe.com/view/e9acc4ba-c43f-4f17-b6a0-bfb464907660-bcff/?fullscreen" target="blank">
        <div className="HC" style={{backgroundImage: `url("./images/maquetas/HC.svg")`}}
       onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}>
        </div> </a>

        <br />
        <br />
        <h3 className="services__modal-title2">CineFast</h3>
        <a href="https://www.figma.com/proto/cDMAMVG72eNKxT0Uohbn4x/Prototipo-A.F-Cine?page-id=0%3A1&node-id=1-499&viewport=350%2C70%2C0.14&scaling=scale-down&starting-point-node-id=1%3A2"
        target="blank"><div className="CF" style={{backgroundImage: `url("./images/maquetas/CF.svg")`}}
        onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}>
            <div className="texto-cf">
        <p className="services__modal-description" style={{fontSize: 22}}>CineFast es el primer proyecto  de mi carrera como diseñador, el cual he decidido no actualizar para contrastar la evolución que he tenido diseñando productos.</p>
        </div>
        </div></a>

        </div>
    )
}