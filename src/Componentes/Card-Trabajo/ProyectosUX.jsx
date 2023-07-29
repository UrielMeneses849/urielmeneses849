
import "../../Estilos/Trabajo/EstilosCards/Proyectos.css"

export default function ProyectosUX(props) {
    return(
        <div className="cardActiva-content">
            <i className="uil uil-times services__modal-closed" onClick={()=> props.toggleTab(0)}></i>

        <h3 className="services__modal-title">Proyectos de experiencia de usuario</h3>
        <p className="services__modal-description">Design Thinking, investigaciones y KPI's</p>

        <br />
        <br />
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>HoodiesCool</h3>
        <div className="HC" style={{backgroundImage: `url("./images/maquetas/HC.svg")`}}>
        </div>

        <br />
        <br />
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>CineFast</h3>
        <div className="CF" style={{backgroundImage: `url("./images/maquetas/CF.svg")`}}>
            <div className="texto-cf">
        <p className="services__modal-description" style={{fontSize: 22}}>CineFast es el primer proyecto  de mi carrera como diseñador, el cual he decidido no actualizar para contrastar la evolución que he tenido diseñando productos.</p>
        </div>
        </div>

        </div>
    )
}