import "../../Estilos/Trabajo/EstilosCards/Challenges.css"

export default function ChallengesProgra(props) {
    return(
        <div className="cardActiva-content">
            <i className="uil uil-times services__modal-closed" onClick={()=> props.toggleTab(0)}></i>

        <h3 className="services__modal-title">Retos de programacion</h3>
        <p className="services__modal-description">Llevando la logica de programación al siguiente nivel</p>

        <div className="contenedorC">

        <div className="cont">
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>Generador de memes</h3>
        <img src="./images/Challenges/C1.png" alt="" className="imgC"/>
        </div>
        
        <div className="cont">
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>TO - DO App</h3>
        <img src="./images/Challenges/C2.png" alt="" className="imgC"/>
        </div>

        <div className="cont">
        <br />
        <br />
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>Encriptador de palabras</h3>
        <img src="./images/Challenges/C3.png" alt="" className="imgC"/>
        </div>

        <div className="cont">
        <br />
        <br />
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>Card de Airbnb</h3>
        <img src="./images/Challenges/C4.png" alt="" className="imgC"/>
        </div>

        </div>
        
        </div>
    )
}