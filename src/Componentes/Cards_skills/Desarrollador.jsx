
export default function Desarrollador(props){

    return(
        <div className="services__modal-content">
        
        <i className="uil uil-times services__modal-close" onClick={()=> props.toggleTab(0)}></i>
                    <h3 className="services__modal-title">Desarrollador Front-End</h3>
                    <p className="services__modal-description">1 año de experiencia con trabajos de calidad</p>
                    <ul className="services__modal-services grid">

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Desarrollo en React <i className="uil uil-react"></i></p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Diseño y desarrollo responsivo <i className="uil uil-mobile-android"></i></p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Creacion de elementos de interaccion <i className="uil uil-user-exclamation"></i></p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Frameworks CSS (Tailwind CSS y Boostrap)</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Frameworks JavaScript (Vite y Next JS) <i className="uil uil-browser"></i></p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Branding <i className="uil uil-brain"></i></p>
                        </li>

                    </ul>
        </div>
    )
}