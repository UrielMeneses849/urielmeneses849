
export default function DailyDesign(props) {
    return(
        <div className="cardActiva-content">
            <i className="uil uil-times services__modal-closed" onClick={()=> props.toggleTab(0)}></i>
    
        <h3 className="services__modal-title">Diseños Diarios</h3>
        <p className="services__modal-description">Mejora continua en el diseño de interfaces </p>
        </div>
    )
}