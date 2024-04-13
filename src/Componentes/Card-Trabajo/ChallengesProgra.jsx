/* eslint-disable react/prop-types */
import "../../Estilos/Trabajo/EstilosCards/Challenges.css"

export default function ChallengesProgra(props) {
    return(
        <div className="cardActiva-content" style={{backgroundColor: `${props.fondoCard}`, color: `${props.colortexto}` }}>
            <i className="uil uil-times services__modal-closed" onClick={()=> props.toggleTab(0)}></i>

        <h3 className="services__modal-title">Retos de programacion</h3>
        <p className="services__modal-description">Llevando la logica de programación al siguiente nivel</p>

        <div className="contenedorC">

        {/* <div className="cont">
        
        <h3 className="services__modal-title2">Alura Geek</h3>
        <a href="https://urielmeneses849.github.io/AluraGeek/" target="blank"><img src="./images/Challenges/C5.png" alt="" className="imgC" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}/></a>
        </div>  */}

        <div className="cont">
        
        <h3 className="services__modal-title2">Generador de memes</h3>
        <a href="https://urielmeneses849.github.io/Generador-de-Memes/" target="blank"><img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Programaci%C3%B3n%2FCH1.svg?alt=media&token=5705cf8e-5ce6-4e36-b210-650ea61fb9a9" alt="" className="imgC" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave} loading="lazy"/></a>
        </div>
        
        <div className="cont">

        <h3 className="services__modal-title2" >TO - DO App</h3>
        <a href="https://urielmeneses849.github.io/To-Do-App-JS/" target="blank"><img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Programaci%C3%B3n%2FCH3.svg?alt=media&token=81ea7b5f-eda2-4019-ba49-c4a832e499b8" alt="" className="imgC" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave} loading="lazy"/></a>
        </div>

        <div className="cont">
 
        <h3 className="services__modal-title2" >Encriptador de palabras</h3>
        <a href="https://urielmeneses849.github.io/Challenge-Oracle-ONE/" target="blank"><img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Programaci%C3%B3n%2FCH2.svg?alt=media&token=95582ff0-e05f-442f-939a-58f46cbc165e" alt="" className="imgC" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave} loading="lazy"/></a>
        </div>

        </div>
        
        </div>
    )
}