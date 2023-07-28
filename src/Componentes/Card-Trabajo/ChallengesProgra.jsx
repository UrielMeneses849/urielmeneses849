
export default function ChallengesProgra(props) {
    return(
        <div className="cardActiva-content">
            <i className="uil uil-times services__modal-closed" onClick={()=> props.toggleTab(0)}></i>

        <h3 className="services__modal-title">Retos de programacion</h3>
        <p className="services__modal-description">Llevando la logica de programación al siguiente nivel</p>
        </div>
    )
}