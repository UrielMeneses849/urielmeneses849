/* eslint-disable react/prop-types */


export default function Data(props){
    return( 
<div className="services__modal-content"> 
          
              
                    <p className="services__modal-description">1 año de experiencia desarrollando para BBVA Seguros.</p>
                    <ul className="services__modal-services grid">

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon" ></i>
                            <p className="services__modal-info" >Desarrollo de casos de uso para distintas areas de negocio en PySpark y Jupyter. </p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon" ></i>
                            <p className="services__modal-info" >Corrección de deuda tecnica de otros desarrolladores (PySpark y Scala)</p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>    
                            <i className="uil uil-check-circle services__modal-icon" ></i>
                            <p className="services__modal-info" >Experiencia en tablas de siniestros, casos de uso de prevención de fraudes y tablas PyME </p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon" ></i>
                            <p className="services__modal-info">Ingestas de información, nuevas tablas, cambios y nuevos campos.</p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info" >Desarrollo de nuevas herramientas con Inteligencia Artificial.</p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon" ></i>
                            <p className="services__modal-info">Analisis y diseño de soluciones para Big Data.</p>
                        </li>

                    </ul>
</div>
)
}