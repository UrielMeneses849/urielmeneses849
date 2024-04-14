/* eslint-disable react/prop-types */


export default function Diseñador(props){
    return( 
<div className="services__modal-content" style={{backgroundColor: `${props.fondoCard}`, color: `${props.colortexto}` }}> 
            <i className="uil uil-times services__modal-close" onClick={props.handleClose}></i>
                <h3 className="services__modal-title">Diseño UI / UX</h3>
                    <p className="services__modal-description">2 años de experiencia certificado por Google</p>
                    <ul className="services__modal-services grid">

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon" ></i>
                            <p className="services__modal-info" >Metodologia Design Thinking y metodologias Agiles (Kanban y Scrum). </p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon" ></i>
                            <p className="services__modal-info" >Desarrollo de interfaces de usuario.</p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>    
                            <i className="uil uil-check-circle services__modal-icon" ></i>
                            <p className="services__modal-info" >Analisis y mejora continua en la interfaz. </p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon" ></i>
                            <p className="services__modal-info">Pruebas de usabilidad y KPI`s.</p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info" >Sistemas de diseño.</p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon" ></i>
                            <p className="services__modal-info">Diseño de componentes responsivos.</p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info" >Diseño con base en metricas.</p>
                        </li>

                    </ul>
</div>
)
}