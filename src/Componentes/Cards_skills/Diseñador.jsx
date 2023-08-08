/* eslint-disable react/prop-types */


export default function Diseñador(props){
    return( 
<div className="services__modal-content"> 
            <i className="uil uil-times services__modal-close" onClick={()=> props.toggleTab(0)}></i>
                <h3 className="services__modal-title">Diseño UI / UX</h3>
                    <p className="services__modal-description">2 años de experiencia certificado por Google</p>
                    <ul className="services__modal-services grid">

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Metodologia Design Thinking y metodologias Agiles (Kanban y Scrum) </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Desarrollo de interfaces de usuario</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Auditoria competitiva </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Pruebas de usabilidad y KPIs</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Wireframes y prototipos (Baja y Alta fidelidad)</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Metodos de ideación</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Maquetas interactivas</p>
                        </li>

                    </ul>
</div>
)
}