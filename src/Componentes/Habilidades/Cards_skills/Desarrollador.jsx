/* eslint-disable react/prop-types */
export default function Desarrollador(props){


    
    return(
        <div className="services__modal-content" style={{backgroundColor: `${props.fondoCard}`, color: `${props.colortexto}`}}>
       
                    <p className="services__modal-description">2 años de experiencia con trabajos de calidad</p>
                    <ul className="services__modal-services grid">

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Desarrollo en React <i className="uil uil-react"></i></p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Optimización del performance <i className="uil uil-mobile-android"></i></p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Creacion de elementos de interaccion <i className="uil uil-user-exclamation"></i></p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Frameworks CSS (Chakra UI & PrimeReact)</p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Colaboración con diseñadores UX/UI <i className="uil uil-browser"></i></p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Micro-Animaciones con Framer Motion <i className="uil uil-brain"></i></p>
                        </li>

                    </ul>
        </div>
    )
}