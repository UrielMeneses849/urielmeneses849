
export default function ProyectosUX(props) {
    return(
        <div className="cardActiva-content">
            <i className="uil uil-times services__modal-closed" onClick={()=> props.toggleTab(0)}></i>

        <h3 className="services__modal-title">Proyectos de experiencia de usuario</h3>
        <p className="services__modal-description">Design Thinking, investigaciones y KPI's</p>

        </div>
    )
}