/* eslint-disable react/prop-types */
import "../../Estilos/Trabajo/EstilosCards/Challenges.css"

export default function ChallengesProgra(props) {
    return(
        <div className="cardActiva-content">
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
        <a href="https://urielmeneses849.github.io/Generador-de-Memes/" target="blank"><img src="./images/Challenges/C1.png" alt="" className="imgC" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}/></a>
        </div>
        
        <div className="cont">
        <br />
        <br />
        <h3 className="services__modal-title2" >TO - DO App</h3>
        <a href="https://urielmeneses849.github.io/To-Do-App-JS/" target="blank"><img src="./images/Challenges/C2.png" alt="" className="imgC" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}/></a>
        </div>

        <div className="cont">
        <br />
        <br />
        <h3 className="services__modal-title2" >Encriptador de palabras</h3>
        <a href="https://urielmeneses849.github.io/Challenge-Oracle-ONE/" target="blank"><img src="./images/Challenges/C3.png" alt="" className="imgC" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}/></a>
        </div>

        <div className="cont">
        <br />
        <br />
        <h3 className="services__modal-title2">Card de Airbnb</h3>
        <img src="./images/Challenges/C4.png" alt="" className="imgC"/>
        </div>

        </div>
        
        </div>
    )
}