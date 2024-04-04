/* eslint-disable react/prop-types */
import "../../Estilos/Trabajo/EstilosCards/Challenges.css"

export default function ChallengesProgra(props) {
    return(
        <div className="cardActiva-content" style={{backgroundColor: `${props.fondoCard}`, color: `${props.colortexto}` }}>
            <i className="uil uil-times services__modal-closed" onClick={()=> props.toggleTab(0)}></i>

        <h3 className="services__modal-title">Retos de programacion</h3>
        <p className="services__modal-description">Llevando la logica de programación al siguiente nivel</p>

        <div className="contenedorC">

        <div className="cont">
        <br />
        <br />
        <h3 className="services__modal-title2">Alura Geek</h3>
        <a href="https://urielmeneses849.github.io/AluraGeek/" target="blank"><img src="./images/Challenges/C5.png" alt="" className="imgC" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}/></a>
        </div> 

        <div className="cont">
        <br />
        <br />
        <h3 className="services__modal-title2">Generador de memes</h3>
        <a href="https://urielmeneses849.github.io/Generador-de-Memes/" target="blank"><img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Programaci%C3%B3n%2FC1.png?alt=media&token=a1252f39-f280-44d4-96a2-1ee4bd5c6f24" alt="" className="imgC" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}/></a>
        </div>
        
        <div className="cont">
        <br />
        <br />
        <h3 className="services__modal-title2" >TO - DO App</h3>
        <a href="https://urielmeneses849.github.io/To-Do-App-JS/" target="blank"><img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Programaci%C3%B3n%2FC2.png?alt=media&token=37907db4-0c37-4357-ad7e-fb100d44d70e" alt="" className="imgC" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}/></a>
        </div>

        <div className="cont">
        <br />
        <br />
        <h3 className="services__modal-title2" >Encriptador de palabras</h3>
        <a href="https://urielmeneses849.github.io/Challenge-Oracle-ONE/" target="blank"><img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Programaci%C3%B3n%2FC3.png?alt=media&token=c76bd540-e143-4060-85ae-39e5fdffe27b" alt="" className="imgC" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}/></a>
        </div>

        <div className="cont">
        <br />
        <br />
        <h3 className="services__modal-title2">Card de Airbnb</h3>
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Programaci%C3%B3n%2FC4.png?alt=media&token=01421e84-edcc-497f-800b-795ea261c96b" alt="" className="imgC"/>
        </div>

        </div>
        
        </div>
    )
}